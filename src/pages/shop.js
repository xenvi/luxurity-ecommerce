import React, { Component } from "react";
import styled from "styled-components";

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
`;
const SideMenu = styled.div`
  width: 300px;
  height: 100%;
  box-shadow: 0 0 0.2em #ccc;
  background: #fff;
  padding: 1em 4em;
`;
const Subtitle = styled.p`
  font-weight: bold;
  text-transform: uppercase;
  margin-top: 1em;
`;
const Expand = styled.span`
  float: right;
  cursor: pointer;
  font-size: 0.9em;
`;

const Input = styled.input`
  cursor: pointer;
`;
const Label = styled.label`
  color: #777;
  font-size: 0.9em;
  margin-left: 0.5em;
`;
const Form = styled.form`
  transition: height 0.5s ease-in-out;
`;

const Listings = styled.div`
  float: left;
  padding: 2em;
`;
const ItemWrapper = styled(Link)`
  &:hover {
    text-decoration: none;
  }
`;

/*function expand() {
  const currentElem = this;
  const closestForm = currentElem.closest("form");
  closestForm.classList.toggle("reveal");
}*/

class shop extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.getAllItems();

    var accItem = document.getElementsByClassName("accordionItem");
    var accHD = document.getElementsByClassName("accordionItemHeading");
  }

  render() {
    const { items, loading } = this.props.data;
    let itemsMarkup = !loading ? (
      items.map(item => (
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
            <Subtitle>
              Style{" "}
              <Expand className="accordionItem">
                <i className="fas fa-plus"></i>
              </Expand>
            </Subtitle>

            <Form>
              <Input
                type="radio"
                id="casual"
                name="style"
                value="casual"
              ></Input>
              <Label for="casual">Casual</Label>
              <br />
              <Input type="radio" id="sexy" name="style" value="sexy"></Input>
              <Label for="sexy">Sexy</Label>
              <br />
              <Input
                type="radio"
                id="wedding"
                name="style"
                value="wedding"
              ></Input>
              <Label for="wedding">Wedding</Label>
              <br />
              <Input
                type="radio"
                id="elegant"
                name="style"
                value="elegant"
              ></Input>
              <Label for="elegant">Elegant</Label>
              <br />
              <Input type="radio" id="cute" name="style" value="cute"></Input>
              <Label for="cute">Cute</Label>
            </Form>
            <Subtitle>
              Color{" "}
              <Expand className="accordionItem">
                <i className="fas fa-plus"></i>
              </Expand>
            </Subtitle>
            <Form>
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
            <Subtitle>
              Size{" "}
              <Expand className="accordionItem">
                <i className="fas fa-plus"></i>
              </Expand>
            </Subtitle>
            <Form>
              <Input type="checkbox" id="xs" name="size" value="xs"></Input>
              <Label for="xs">XS</Label>
              <br />
              <Input type="checkbox" id="s" name="size" value="s"></Input>
              <Label for="s">S</Label>
              <br />
              <Input type="checkbox" id="m" name="size" value="m"></Input>
              <Label for="m">M</Label>
              <br />
              <Input type="checkbox" id="l" name="size" value="l"></Input>
              <Label for="l">L</Label>
              <br />
              <Input type="checkbox" id="xl" name="size" value="xl"></Input>
              <Label for="xl">XL</Label>
              <br />
              <Input type="checkbox" id="xxl" name="size" value="xxl"></Input>
              <Label for="xxl">XXL</Label>
              <br />
            </Form>
            <Subtitle>
              Neckline{" "}
              <Expand className="accordionItem">
                <i className="fas fa-plus"></i>
              </Expand>
            </Subtitle>
            <Form>
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

const mapStateToProps = state => ({
  data: state.data
});

export default connect(mapStateToProps, { getAllItems, getItem })(shop);
