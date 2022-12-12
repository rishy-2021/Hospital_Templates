import React from "react";
import styled from "styled-components";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
const WhatWeDo = () => {
  return (
    <Container>
      <Question>WHAT WE DO</Question>
      <Answer>
        <p>Providing Medical Care For The</p>
        <p>Sickest In Our Community.</p>
      </Answer>
      <SubContainer>
        <Item1>
          <ImageContainer>
            <img src={image1} alt="hospital" />
          </ImageContainer>
          <TextContainer>
            <h2>Cosmic Density</h2>
            <p>
              It is a long established fact that reader will distracted by the
              readable content.
            </p>
            <button>Read More &#10143;</button>
          </TextContainer>
        </Item1>
        <Item1>
          <ImageContainer>
            <img src={image2} alt="hospital" />
          </ImageContainer>
          <TextContainer>
            <h2>Cosmic Density</h2>
            <p>
              It is a long established fact that reader will distracted by the
              readable content.
            </p>
            <button>Read More &#10143;</button>
          </TextContainer>
        </Item1>
        <Item1>
          <ImageContainer>
            <img src={image3} alt="hospital" />
          </ImageContainer>
          <TextContainer>
            <h2>Cosmic Density</h2>
            <p>
              It is a long established fact that reader will distracted by the
              readable content.
            </p>
            <button>Read More &#10143;</button>
          </TextContainer>
        </Item1>
      </SubContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 80vw;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Question = styled.div`
  margin: 1.4rem 0;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  letter-spacing: 2px;
  font-size: 1rem;
  font-weight: 600;
  color: #1c6dd0;
`;
const Answer = styled.div`
  width: 45vw;
  color: gray;
  margin-top: 0.7rem;
  text-align: center;

  p {
    font-size: 2.8rem;
    font-family: "Fira Sans", sans-serif;

    &:last-child {
      margin-top: 7px;
    }
  }
`;
const SubContainer = styled.div`
  display: flex;
  text-align: center;
  width: 100%;
  height: 57%;
  /* background: wheat; */
  margin: 4rem;
`;
const Item1 = styled.div`
  flex: 1;
  margin: 0 1rem;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 54%;
  position: relative;
  z-index: -1;
  margin-bottom: -30px;

  img {
    width: 100%;
    height: 100%;
    z-index: -1;
    border-radius: 10px;
  }
`;
const TextContainer = styled.div`
  margin: 0px auto 0 auto;
  /* position: absolute; */
  width: 85%;
  height: 56%;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  padding: 1rem;

  h2 {
    font-size: 1.7rem;
    margin: 1rem 0 0.5rem -4.5rem;
    font-family: "Fira Sans", sans-serif;
  }
  p {
    margin: 1rem 0.5rem 1rem 0.5rem;
    font-size: 1.3rem;
    opacity: 0.9;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  button {
    font-size: 1.2rem;
    border-radius: 5px;
    opacity: 0.85;
    font-weight: 700;
    width: 90%;
    height: auto;
    padding: 0.8rem 0;
    background-color: transparent;
    border: 1px solid aquamarine;
    cursor: pointer;

    &:hover {
      border: none;
      background-color: aquamarine;
      opacity: 1;
    }
  }
`;

export default WhatWeDo;
