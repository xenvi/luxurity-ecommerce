import React, { Component } from "react";
import Navbar from "../components/layout/Navbar";
import LandingPage from "../components/layout/LandingPage";
import Footer from "../components/layout/Footer";
import { Link } from "react-router-dom";

import styled from "styled-components";

// images
import featured_white from "../images/featured-white.jpg";
import featured_peach from "../images/featured-peach.jpg";
import featured_purple from "../images/featured-purple.jpg";
import subscribe_img from "../images/subscribe-pic.jpg";
import info_left from "../images/golddress.jpg";
import info_right from "../images/header.jpg";

const About = styled.section`
  margin-top: 5vh;
  width: 100%;
  height: 350px;
  background: #333;
  color: #fff;
  align-content: center;
`;
const VerticalLine = styled.div`
  height: 80%;
  width: 0.2em;
  background: #444;
`;
const HorizontalLine = styled.div`
  display: none;
  height: 0.2em;
  width: 80%;
  background: #444;
`;

const Featured = styled.section`
  margin: 5vh 0;
  width: 100%;
  flex-wrap: wrap;
`;
const Image = styled.img`
  width: 23em;
  height: 35em;
  margin: 0.5em 0.5em;
`;
const Title = styled.p`
  width: 100%;
  text-align: center;
  font-size: 6em;
  color: #af9e73;
  line-height: 100%;
`;
const Info = styled.section`
  margin-top: 10vh;
  width: 100%;
  flex-wrap: wrap;
  background: #f3f3f3;
`;
const Subscribe = styled.section`
  width: 100%;
  height: 600px;
  background-image: url("${subscribe_img}");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  `;
const Container = styled.div`
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  align-content: center;
  padding: 0 1em;
`;
const Form = styled.form`
  width: 450px;
  height: auto;
  margin: 4em 0 0 0;
  flex-wrap: wrap;
`;
const Subtitle = styled.h5`
  width: 100%;
  color: #fff;
  text-align: center;
  text-shadow: 0 0 0.2em #000;
`;
const Input = styled.input`
  width: 100%;
  padding: 1em;
  background: none;
  color: #fff;
  border: none;
  border-bottom: 2px solid #fff;
  text-align: center;
`;

const Button = styled(Link)`
  padding: 0.6em 1.2em;
  font-weight: bold;
  margin: 2em 0 0 0;
  background: #af9e73;
  color: #fff;
  border: none;
  box-shadow: 0 0.1em 0.7em #af9e73;
  transition: all 0.2s ease-in-out;

  &:hover {
    text-decoration: none;
    box-shadow: 0 0 0.7em #af9e73;
    background: #333;
    color: #af9e73 !important;
    transition: all 0.2s ease-in-out;
  }
`;

const ImageBox = styled.div`
  width: 50%;
  max-height: 550px;
  overflow: hidden;
  display: flex;
  align-items: center;
`;
const ImageInBox = styled.img`
  height: auto;
  width: 100%;
  user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`;
const TextBox = styled.div`
  width: 50%;
  max-height: 550px;
  background: none;
  font-size: 1.4em;
  padding-bottom: 1em;
`;

class home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <Navbar />
        <LandingPage />
        <About className="flex flex-wrap about_section">
          <p
            className="company-name"
            style={{ fontSize: "2em", color: "#af9e73" }}
          >
            LUXURITY CO.
          </p>
          <VerticalLine className="vertical-line"></VerticalLine>
          <HorizontalLine className="horizontal-line"></HorizontalLine>
          <p style={{ maxWidth: "35em" }}>
            We are re-introducing the beauty of regality in fashion. Using only
            the finest materials, our dresses will bring you comfort and
            confidence for any occasion.
          </p>
        </About>
        <Featured className="flex">
          <Title
            className="fancytext"
            style={{ fontSize: "7em", height: "110px" }}
          >
            Featured
          </Title>
          <p style={{ fontSize: "1.3em", color: "#777" }}>
            Shop the latest trends and styles today.
          </p>
          <div
            style={{
              width: "100%",
              textAlign: "center",
              marginTop: "25px",
            }}
          >
            <Image src={featured_white} alt="Featured white dress"></Image>
            <Image src={featured_purple} alt="Featured purple dress"></Image>
            <Image src={featured_peach} alt="Featured peach dress"></Image>
          </div>
          <Button to="/shop">View More ></Button>
        </Featured>
        <Info className="flex flex-wrap">
          <ImageBox className="image-box" alt="Info image left">
            <ImageInBox src={info_left} />
          </ImageBox>
          <TextBox className="flex text-box">
            <div style={{ width: "60%", color: "#555" }}>
              <p
                style={{
                  color: "#af9e73",
                  fontSize: "4em",
                  height: "1.2em",
                }}
                className="fancytext text-title"
              >
                Comfort
              </p>
              We prioritize the comfort of our dresses so you can enter every
              season confidently and beautifully.
            </div>
          </TextBox>
          <TextBox className="flex text-box">
            <div style={{ width: "60%", color: "#555", textAlign: "right" }}>
              <p
                style={{
                  color: "#af9e73",
                  fontSize: "4em",

                  height: "1.2em",
                }}
                className="fancytext text-title"
              >
                Quality
              </p>
              From the softest silk to the most luxurious velvet, only the
              finest materials are used to create dresses perfect for you.
            </div>
          </TextBox>
          <ImageBox className="image-box" alt="Info image right">
            <ImageInBox src={info_right} />
          </ImageBox>
        </Info>
        <Subscribe>
          <Container className="flex">
            <Title
              className="fancytext subscribe-title"
              style={{ color: "#ebd398", textShadow: "0 0 0.2em #000" }}
            >
              Subscribe To Our Newsletter
            </Title>
            <Subtitle className="subscribe-text">
              Stay updated on our newest products and sales !
            </Subtitle>
            <Form className="flex subscribe-form">
              <Input type="text" placeholder="Enter your email ..."></Input>
              <Button>SUBSCRIBE</Button>
            </Form>
          </Container>
        </Subscribe>
        <Footer />
      </div>
    );
  }
}

export default home;
