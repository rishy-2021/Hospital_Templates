import React from "react";
import styled from "styled-components";
import doctor from "../images/doctor4.png";
import logo1 from "../images/logo1.png";
import logo2 from "../images/logo2.png";
import logo3 from "../images/logo3.png";
import logo4 from "../images/logo4.png";

const WhatWeDo2 = () => {
  return (
    <MainSection>
      <BackgroundSection>
        <HeaderSection>
          <h3>WHAT WE DO</h3>
          <h1>What You Can Do with Carenow</h1>
          <p>
            lorem It is a long established in facts that reader will rarely
            distracted readable the a day.
          </p>
        </HeaderSection>
        <ImageSection>
          <img src={logo3} alt="doctor" />
        </ImageSection>
      </BackgroundSection>
      <SimpleSection>
        <BoxContainer>
          <Boxs>
            <ImageContainer>
              <img src={logo1} alt="logo" />
            </ImageContainer>
            <h3>Dentist Surgery</h3>
            <p>
              lorem It is a long established in facts that reader will rarely
              distracted readable the a day.
            </p>
          </Boxs>
          <hr />
          <Boxs>
            <ImageContainer>
              <img src={logo2} alt="logo" />
            </ImageContainer>
            <h3>Dentist Surgery</h3>
            <p>
              lorem It is a long established in facts that reader will rarely
              distracted readable the a day.
            </p>
          </Boxs>{" "}
          <hr />
          <Boxs>
            <ImageContainer>
              <img src={logo3} alt="logo" />
            </ImageContainer>
            <h3>Dentist Surgery</h3>
            <p>
              lorem It is a long established in facts that reader will rarely
              distracted readable the a day.
            </p>
          </Boxs>{" "}
          <hr />
          <Boxs>
            <ImageContainer>
              <img src={logo4} alt="logo" />
            </ImageContainer>
            <h3>Dentist Surgery</h3>
            <p>
              lorem It is a long established in facts that reader will rarely
              distracted readable the a day.
            </p>
          </Boxs>
          <hr />
        </BoxContainer>
      </SimpleSection>
    </MainSection>
  );
};

export const MainSection = styled.div`
  height: 100vh;
`;
export const BackgroundSection = styled.div`
  padding: 6rem 22rem 3rem 10rem;
  height: 72%;
  background-color: blue;
  display: flex;
  justify-content: space-between;
`;
export const HeaderSection = styled.div`
  margin: 3rem 0 0 3.5rem;

  width: 35%;
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  h3 {
    font-weight: 600;
    letter-spacing: 1px;
    word-spacing: 2px;
  }
  h1 {
    font-weight: 600;

    font-size: 2.8rem;
    word-spacing: 5px;
    letter-spacing: 2px;
    line-height: 3.4rem;
    margin: 1rem 0 1.5rem 0;
  }
  p {
    font-size: 1.1rem;

    letter-spacing: 1px;
  }
`;

export const ImageSection = styled.div`
  margin-bottom: 6rem;
  img {
    width: 100%;
    height: 100%;
  }
`;
export const SimpleSection = styled.div`
  background-color: #fff;
  width: 75%;
  margin: -9rem auto 0 auto;
  border-radius: 1rem;
`;
export const BoxContainer = styled.div`
  display: flex;
  padding: 3rem 0;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  border-radius: 1rem;
`;
export const Boxs = styled.div`
  padding: 0 3rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  h3 {
    font-size: 1.2rem;
    word-spacing: 3px;
    letter-spacing: 1px;
    margin: 2rem 0 1.4rem 0;
  }
  P {
    font-size: 0.95rem;
    font-weight: 600;
    word-spacing: 1.2px;
    letter-spacing: 0.8px;
    line-height: 1.45rem;
  }
`;
export const ImageContainer = styled.div`
  width: 6rem;
  height: 6rem;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);

  padding: 8px;
  img {
    width: 5rem;
    height: 5rem;
    background-color: transparent;
  }
`;

export default WhatWeDo2;
