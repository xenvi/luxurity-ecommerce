import React, { Component } from "react";
import styled from "styled-components";

import "../script.js";

import { Link } from "react-router-dom";

import StaticNavbar from "../components/layout/StaticNavbar";
import Footer from "../components/layout/Footer";
import Item from "../components/items/Item";
import ItemSkeleton from "../components/items/ItemSkeleton";

import { connect } from "react-redux";
import { getAllItems, getItem } from "../redux/actions/dataActions";

const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  height: auto;
  background: #f3f3f3;
  display: flex;

  @media only screen and (max-width: 800px) {
    padding-top: 50px;
  }
`;
const SideMenu = styled.aside`
  width: 300px;
  min-height: 100vh;
  box-shadow: 0 0 0.2em #ccc;
  background: #fff;
  padding: 2em 3em;
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
`;
const ItemWrapper = styled(Link)`
  &:hover {
    text-decoration: none;
  }
`;

class shop extends Component {
  constructor() {
    super();
    this.state = {
      filteredItems: [],
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

  render() {
    const { items, loading } = this.props.data;
    let itemsMarkup = !loading ? (
      items.map((item) => (
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
          <SideMenu>
            <h5 style={{ letterSpacing: "2px" }}>FILTER ITEMS</h5>
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
              ></Input>
              <Label for="casual">Casual</Label>
              <br />
              <Input type="radio" id="sexy" name="styles" value="sexy"></Input>
              <Label for="sexy">Sexy</Label>
              <br />
              <Input
                type="radio"
                id="wedding"
                name="styles"
                value="wedding"
              ></Input>
              <Label for="wedding">Wedding</Label>
              <br />
              <Input
                type="radio"
                id="elegant"
                name="styles"
                value="elegant"
              ></Input>
              <Label for="elegant">Elegant</Label>
              <br />
              <Input type="radio" id="cute" name="styles" value="cute"></Input>
              <Label for="cute">Cute</Label>
            </Form>

            <Subtitle className="accordionItem">
              Color{" "}
              <Expand>
                <i className="fas fa-plus"></i>
              </Expand>
            </Subtitle>
            <Form className="panel">
              <Input type="radio" id="white" name="color" value="white"></Input>
              <Label for="white">White</Label>
              <br />
              <Input type="radio" id="black" name="color" value="black"></Input>
              <Label for="black">Black</Label>
              <br />
              <Input
                type="radio"
                id="multicolor"
                name="color"
                value="multicolor"
              ></Input>
              <Label for="multicolor">Multicolor</Label>
              <br />
              <Input type="radio" id="red" name="color" value="red"></Input>
              <Label for="red">Red</Label>
              <br />
              <Input
                type="radio"
                id="yellow"
                name="color"
                value="yellow"
              ></Input>
              <Label for="yellow">Yellow</Label>
              <br />
              <Input type="radio" id="green" name="color" value="green"></Input>
              <Label for="green">Green</Label>
              <br />
              <Input type="radio" id="blue" name="color" value="blue"></Input>
              <Label for="blue">Blue</Label>
              <br />
              <Input
                type="radio"
                id="purple"
                name="color"
                value="purple"
              ></Input>
              <Label for="purple">Purple</Label>
              <br />
              <Input type="radio" id="pink" name="color" value="pink"></Input>
              <Label for="pink">Pink</Label>
              <br />
              <Input type="radio" id="brown" name="color" value="brown"></Input>
              <Label for="brown">Brown</Label>
              <br />
              <Input type="radio" id="beige" name="color" value="beige"></Input>
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
              ></Input>
              <Label for="round">Round Neck</Label>
              <br />
              <Input
                type="radio"
                id="spaghetti"
                name="neckline"
                value="spaghetti"
              ></Input>
              <Label for="spaghetti">Spaghetti Strap</Label>
              <br />
              <Input type="radio" id="one" name="neckline" value="one"></Input>
              <Label for="one">One Shoulder</Label>
              <br />
              <Input
                type="radio"
                id="vneck"
                name="neckline"
                value="vneck"
              ></Input>
              <Label for="vneck">V Neck</Label>
              <br />
              <Input
                type="radio"
                id="sweetheart"
                name="neckline"
                value="sweetheart"
              ></Input>
              <Label for="sweetheart">Sweetheart</Label>
              <br />
              <Input
                type="radio"
                id="offshoulder"
                name="neckline"
                value="offshoulder"
              ></Input>
              <Label for="offshoulder">Off-shoulder</Label>
              <br />{" "}
              <Input
                type="radio"
                id="bateau"
                name="neckline"
                value="bateau"
              ></Input>
              <Label for="bateau">Bateau</Label>
              <br />
            </Form>
          </SideMenu>
          <Listings>{itemsMarkup}</Listings>
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
};

export default connect(mapStateToProps, mapActionsToProps)(shop);
