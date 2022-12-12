import React from "react";
import styled from "styled-components";
import doctor1 from "../images/doctor1.png";
import doctor2 from "../images/doctor2.png";
import doctor3 from "../images/doctor3.png";
import doctor4 from "../images/doctor4.png";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { SiYoutubemusic } from "react-icons/si";
const MeetOurDoctors = () => {
  return (
    <MainSection>
      <HeadingSection>
        <Headings>
          <p> meet our team</p>
          <h1>Meet Our Doctors</h1>
        </Headings>
        <Button>
          <div> X</div>
          <div> Y</div>
        </Button>
      </HeadingSection>
      <BoxContainer>
        <Boxs>
          <img src={doctor3} alt="doctor-image" />
          <h2>Alexender Daddirio</h2>
          <h3>Sergen</h3>

          <SocialMedia>
            <BsFacebook className="ram" />
            <BsInstagram />
            <AiFillTwitterCircle fa-lg />
            <SiYoutubemusic />
            <BsWhatsapp />
          </SocialMedia>
        </Boxs>
        <Boxs>
          <img src={doctor4} alt="doctor-image" />
          <h2>Alexender Daddirio</h2>
          <h3>Sergen</h3>

          <SocialMedia>
            <BsFacebook />
            <BsInstagram />
            <AiFillTwitterCircle />
            <SiYoutubemusic />
            <BsWhatsapp />
          </SocialMedia>
        </Boxs>
        <Boxs>
          <img src={doctor1} alt="doctor-image" />
          <h2>Alexender Daddirio</h2>
          <h3>Sergen</h3>

          <SocialMedia>
            <BsFacebook />
            <BsInstagram />
            <AiFillTwitterCircle />
            <SiYoutubemusic />
            <BsWhatsapp />
          </SocialMedia>
        </Boxs>
      </BoxContainer>
    </MainSection>
  );
};

export const MainSection = styled.div`
  height: 100vh;
  padding: 3rem 10rem;
  /* background-image: linear-gradient(
    to right top,
    #2b40b5,
    #2b60c2,
    #447ec8,
    #6999cb,
    #94b2cc
  ); */
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const HeadingSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: 1rem 0 4.5rem 0;
`;

export const Headings = styled.div`
  p {
    font-size: 1.5rem;
    font-weight: 600;
    color: gray;
    text-transform: uppercase;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  h1 {
    font-size: 3.5rem;
    font-weight: 600;
    margin: 1rem 0;
    text-transform: capitalize;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
  }
`;
export const Button = styled.div`
  width: 14%;
  margin-right: 3.4rem;
  height: 55%;
  display: flex;

  div {
    border: 3px solid lightgray;
    margin: 0 0.67rem;
    width: 35%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Boxs = styled.div`
  flex: 28%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: white;
  margin: 0.6rem 2.5rem 0 0;
  position: relative;

  img {
    width: 100%;
    height: 60%;
    border-radius: 5px;
  }
  h2 {
    margin: 1.6rem 0 0.8rem 0;
    font-size: 1.4rem;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: 600;
  }
  h3 {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
    color: gray;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: 600;
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  justify-content: space-between;
  width: 15rem;
  height: 3.2rem;
  padding: 16px 35px;
  border-radius: 28px;

  text-align: center;
  border: 2px solid lightgray;
`;

export default MeetOurDoctors;
