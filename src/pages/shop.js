import React, { Component } from "react";
import styled from "styled-components";

import "../script.js";

import { Link } from "react-router-dom";

import StaticNavbar from "../components/layout/StaticNavbar";
import Footer from "../components/layout/Footer";
import Item from "../components/items/Item";
import ItemSkeleton from "../components/items/ItemSkeleton";

import { connect } from "react-redux";
import {
  getAllItems,
  getItem,
  filterItems,
  resetFilterItems,
} from "../redux/actions/dataActions";

const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  height: auto;
  background: #f3f3f3;
  display: flex;

  @media only screen and (max-width: 800px) {
    padding-top: 50px;
  }
  @media only screen and (max-width: 600px) {
    flex-wrap: wrap;
  }
`;
const SideMenu = styled.aside`
  width: 300px;
  min-height: 100vh;
  box-shadow: 0 0 0.2em #ccc;
  background: #fff;
  padding: 2em 3em;

  @media only screen and (max-width: 800px) {
    padding: 2em 1.5em;
  }
`;
const Subtitle = styled.button`
  font-weight: bold;
  text-transform: uppercase;
  margin: 0.75em 0;
  width: 100%;
  text-align: left;
  background: none;
  border: none;
`;
const Expand = styled.span`
  float: right;
  font-size: 0.9em;
`;

const Input = styled.input`
  cursor: pointer;
`;
const Label = styled.label`
  color: #777;
  font-size: 0.9em;
  margin-left: 0.5em;

  &:hover {
    cursor: pointer;
  }
`;
const Form = styled.form`
  transition: height 0.5s ease-in-out;
`;

const Listings = styled.div`
  display: flex;
  flex-wrap: wrap;
  float: left;
  padding: 2em;
  width: 100%;

  @media only screen and (max-width: 800px) {
    justify-content: center;
  }
`;
const ItemWrapper = styled(Link)`
  &:hover {
    text-decoration: none;
  }
`;
const ResetButton = styled.input`
  width: 100%;
  padding: 0.3em 0;
  font-size: 0.8em;
  text-transform: uppercase;
  background: #69614c;
  color: #fff;
  border: none;
  margin-bottom: 1em;

  transition: background 0.2s ease-out;

  &:hover {
    background: #af9e73;
    transition: background 0.2s ease-in;
  }
`;

const MobileSideMenu = styled.div`
  background: #fff;
  width: 100%;
  height: 50px;
  padding-top: 10px;
  text-align: center;
  box-shadow: 0 0 0.2em #ccc;
`;

const FilterButton = styled.h5`
  letter-spacing: 2px;
  font-weight: bold;

  &:hover {
    cursor: pointer;
  }
`;

class shop extends Component {
  constructor() {
    super();
    this.state = {
      styles: [],
      color: [],
      neckline: [],
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.getAllItems();

    var acc = document.getElementsByClassName("accordionItem");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.height) {
          panel.style.height = null;
        } else {
          panel.style.height = panel.scrollHeight + "px";
        }

        var expand = this.children[0];
        if (this.classList.contains("active")) {
          var newEl = expand;
          expand.innerHTML = "<i class='fas fa-minus'></i>";
          expand.parentNode.replaceChild(expand, newEl);
        } else {
          expand.innerHTML = "<i class='fas fa-plus'></i>";
        }
      });
    }
  }

  handleFilter = (e, filterName) => {
    const value = e.target.value;

    this.setState(
      (prevState) => ({
        ...prevState,
        [filterName]: [value],
      }),
      function () {
        this.multiPropsFilter(this.props.data.items, this.state);
      }
    );
  };

  multiPropsFilter = (items, filters) => {
    const getValue = (value) =>
      typeof value === "string" ? value.toUpperCase() : value;
    const filterKeys = Object.keys(filters);

    const filteredItems = items.filter((item) => {
      return filterKeys.every((key) => {
        if (!filters[key].length) return true;

        return filters[key].find(
          (filter) => getValue(filter) === getValue(item[key])
        );
      });
    });

    this.props.filterItems(filteredItems);
  };

  resetFilters = (items) => {
    var radioButton = document.getElementsByTagName("input");
    for (let i = 0; i < radioButton.length; i++) {
      if (radioButton[i].type === "radio") {
        radioButton[i].checked = false;
      }
    }
    this.props.resetFilterItems(items);
  };

  openFilter = () => {
    var filter = document.querySelector(".sidebar");
    filter.classList.toggle("slidein");
  };

  render() {
    const { items, loading, filteredItems } = this.props.data;
    let filteredItemsMarkup = !loading ? (
      filteredItems.map((item) => (
        <ItemWrapper to={`/items/${item.itemId}`}>
          <Item key={item.itemId} item={item} />
        </ItemWrapper>
      ))
    ) : (
      <ItemSkeleton />
    );

    return (
      <div>
        <StaticNavbar />
        <Container>
          <MobileSideMenu className="mobile_sidebar">
            <FilterButton onClick={() => this.openFilter()}>
              FILTER
            </FilterButton>
          </MobileSideMenu>
          <SideMenu className="sidebar">
            <FilterButton>FILTER</FilterButton>{" "}
            <ResetButton
              type="reset"
              value="Reset All"
              onClick={() => this.resetFilters(items)}
            />
            <Subtitle className="accordionItem">
              Style{" "}
              <Expand>
                <i className="fas fa-plus"></i>
              </Expand>
            </Subtitle>
            <Form className="panel">
              <Input
                type="radio"
                id="casual"
                name="styles"
                value="casual"
                onChange={(e) => this.handleFilter(e, "styles")}
              ></Input>
              <Label for="casual">Casual</Label>
              <br />
              <Input
                type="radio"
                id="sexy"
                name="styles"
                value="sexy"
                onChange={(e) => this.handleFilter(e, "styles")}
              ></Input>
              <Label for="sexy">Sexy</Label>
              <br />
              <Input
                type="radio"
                id="wedding"
                name="styles"
                value="wedding"
                onChange={(e) => this.handleFilter(e, "styles")}
              ></Input>
              <Label for="wedding">Wedding</Label>
              <br />
              <Input
                type="radio"
                id="elegant"
                name="styles"
                value="elegant"
                onChange={(e) => this.handleFilter(e, "styles")}
              ></Input>
              <Label for="elegant">Elegant</Label>
              <br />
              <Input
                type="radio"
                id="cute"
                name="styles"
                value="cute"
                onChange={(e) => this.handleFilter(e, "styles")}
              ></Input>
              <Label for="cute">Cute</Label>
            </Form>
            <Subtitle className="accordionItem">
              Color{" "}
              <Expand>
                <i className="fas fa-plus"></i>
              </Expand>
            </Subtitle>
            <Form className="panel">
              <Input
                type="radio"
                id="white"
                name="color"
                value="white"
                onChange={(e) => this.handleFilter(e, "color")}
              ></Input>
              <Label for="white">White</Label>
              <br />
              <Input
                type="radio"
                id="black"
                name="color"
                value="black"
                onChange={(e) => this.handleFilter(e, "color")}
              ></Input>
              <Label for="black">Black</Label>
              <br />
              <Input
                type="radio"
                id="multicolor"
                name="color"
                value="multicolor"
                onChange={(e) => this.handleFilter(e, "color")}
              ></Input>
              <Label for="multicolor">Multicolor</Label>
              <br />
              <Input
                type="radio"
                id="red"
                name="color"
                value="red"
                onChange={(e) => this.handleFilter(e, "color")}
              ></Input>
              <Label for="red">Red</Label>
              <br />
              <Input
                type="radio"
                id="yellow"
                name="color"
                value="yellow"
                onChange={(e) => this.handleFilter(e, "color")}
              ></Input>
              <Label for="yellow">Yellow</Label>
              <br />
              <Input
                type="radio"
                id="green"
                name="color"
                value="green"
                onChange={(e) => this.handleFilter(e, "color")}
              ></Input>
              <Label for="green">Green</Label>
              <br />
              <Input
                type="radio"
                id="blue"
                name="color"
                value="blue"
                onChange={(e) => this.handleFilter(e, "color")}
              ></Input>
              <Label for="blue">Blue</Label>
              <br />
              <Input
                type="radio"
                id="purple"
                name="color"
                value="purple"
                onChange={(e) => this.handleFilter(e, "color")}
              ></Input>
              <Label for="purple">Purple</Label>
              <br />
              <Input
                type="radio"
                id="pink"
                name="color"
                value="pink"
                onChange={(e) => this.handleFilter(e, "color")}
              ></Input>
              <Label for="pink">Pink</Label>
              <br />
              <Input
                type="radio"
                id="brown"
                name="color"
                value="brown"
                onChange={(e) => this.handleFilter(e, "color")}
              ></Input>
              <Label for="brown">Brown</Label>
              <br />
              <Input
                type="radio"
                id="beige"
                name="color"
                value="beige"
                onChange={(e) => this.handleFilter(e, "color")}
              ></Input>
              <Label for="beige">Beige</Label>
            </Form>
            <Subtitle className="accordionItem">
              Neckline{" "}
              <Expand>
                <i className="fas fa-plus"></i>
              </Expand>
            </Subtitle>
            <Form className="panel">
              <Input
                type="radio"
                id="round"
                name="neckline"
                value="round"
                onChange={(e) => this.handleFilter(e, "neckline")}
              ></Input>
              <Label for="round">Round Neck</Label>
              <br />
              <Input
                type="radio"
                id="spaghetti"
                name="neckline"
                value="spaghetti"
                onChange={(e) => this.handleFilter(e, "neckline")}
              ></Input>
              <Label for="spaghetti">Spaghetti Strap</Label>
              <br />
              <Input
                type="radio"
                id="one"
                name="neckline"
                value="one"
                onChange={(e) => this.handleFilter(e, "neckline")}
              ></Input>
              <Label for="one">One Shoulder</Label>
              <br />
              <Input
                type="radio"
                id="vneck"
                name="neckline"
                value="vneck"
                onChange={(e) => this.handleFilter(e, "neckline")}
              ></Input>
              <Label for="vneck">V Neck</Label>
              <br />
              <Input
                type="radio"
                id="sweetheart"
                name="neckline"
                value="sweetheart"
                onChange={(e) => this.handleFilter(e, "neckline")}
              ></Input>
              <Label for="sweetheart">Sweetheart</Label>
              <br />
              <Input
                type="radio"
                id="offshoulder"
                name="neckline"
                value="offshoulder"
                onChange={(e) => this.handleFilter(e, "neckline")}
              ></Input>
              <Label for="offshoulder">Off-shoulder</Label>
              <br />{" "}
              <Input
                type="radio"
                id="bateau"
                name="neckline"
                value="bateau"
                onChange={(e) => this.handleFilter(e, "neckline")}
              ></Input>
              <Label for="bateau">Bateau</Label>
              <br />
            </Form>
          </SideMenu>
          <Listings>
            {filteredItems.length === 0
              ? "No matches found."
              : filteredItemsMarkup}
          </Listings>
        </Container>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.data,
});

const mapActionsToProps = {
  getAllItems,
  getItem,
  filterItems,
  resetFilterItems,
};

export default connect(mapStateToProps, mapActionsToProps)(shop);
