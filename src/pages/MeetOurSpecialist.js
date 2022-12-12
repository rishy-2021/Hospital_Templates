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
const MeetOurSpecialist = () => {
  return (
    <MainSection>
      <HeadingSection>
        <Headings>
          <p> our doctors</p>
          <h1>Meet Our Spacialist</h1>
        </Headings>
        <Button>
          <button> View More</button>
        </Button>
      </HeadingSection>
      <BoxContainer>
        <Boxs>
          <img src={doctor1} alt="doctor-image" />
          <h2>Alexender Daddirio</h2>
          <h3>Sergen</h3>
          <p>
            lorem It is a long established in facts that reader will rarely that
            content news of the a judge that reader.
          </p>
          <h4>Read More </h4>
          <SocialMedia>
            <BsFacebook />
            <BsInstagram />
            <AiFillTwitterCircle />
            <SiYoutubemusic />
            <BsWhatsapp />
          </SocialMedia>
        </Boxs>
        <Boxs>
          <img src={doctor2} alt="doctor-image" />
          <h2>Alexender Daddirio</h2>
          <h3>Sergen</h3>
          <p>
            lorem It is a long established in facts that reader will rarely that
            content news of the a judge that reader.
          </p>
          <h4>Read More </h4>
          <SocialMedia>
            <BsFacebook />
            <BsInstagram />
            <AiFillTwitterCircle />
            <SiYoutubemusic />
            <BsWhatsapp />
          </SocialMedia>
        </Boxs>
        <Boxs>
          <img src={doctor3} alt="doctor-image" />
          <h2>Alexender Daddirio</h2>
          <h3>Sergen</h3>
          <p>
            lorem It is a long established in facts that reader will rarely that
            content news of the a judge that reader.
          </p>
          <h4>Read More </h4>
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
          <p>
            lorem It is a long established in facts that reader will rarely that
            content news of the a judge that reader.
          </p>
          <h4>Read More </h4>
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
          <p>
            lorem It is a long established in facts that reader will rarely that
            content news of the a judge that reader.
          </p>
          <h4>Read More </h4>
          <SocialMedia>
            <BsFacebook />
            <BsInstagram />
            <AiFillTwitterCircle />
            <SiYoutubemusic />
            <BsWhatsapp />
          </SocialMedia>
        </Boxs>
        <Boxs>
          <img src={doctor2} alt="doctor-image" />
          <h2>Alexender Daddirio</h2>
          <h3>Sergen</h3>
          <p>
            lorem It is a long established in facts that reader will rarely that
            content news of the a judge that reader.
          </p>
          <h4>Read More </h4>
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
  padding: 0 12rem;
  background-image: linear-gradient(
    to right top,
    #2b40b5,
    #2b60c2,
    #447ec8,
    #6999cb,
    #94b2cc
  );
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
  margin-left: 2.3rem;

  p {
    font-size: 1rem;
    font-weight: 600;
    color: black;
    text-transform: uppercase;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  h1 {
    font-size: 2.7rem;
    font-weight: 600;

    text-transform: capitalize;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
`;
export const Button = styled.div`
  button {
    font-size: 1.3rem;
    width: 10rem;
    height: 3rem;
    background-color: white;
    margin-right: 2.4rem;
  }
`;

export const BoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;
export const Boxs = styled.div`
  flex: 28%;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  background-color: #cedce8;
  margin: 2rem 2rem 3rem 2rem;
  border-radius: 2rem 0 2rem 0;
  position: relative;

  img {
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    position: absolute;
    top: -3rem;
    left: 38%;
    border: 4px solid white;
  }
  h2 {
    margin-top: 3.2rem;
    font-size: 1.4rem;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: 600;
  }
  h3 {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
    color: gray;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: 600;
  }
  p {
    margin: 0 3rem;
    font-size: 1rem;
    font-weight: 600;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
  h4 {
    font-size: 1.1rem;
    margin: 1rem 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  /* .NandPate {
    margin-top: 3rem;
    border: 1px solid red;
    position: relative;

    img {
      width: 3rem;
      height: 3rem;
      position: absolute;
    }
  } */
`;

export const SocialMedia = styled.div`
  display: flex;
  justify-content: space-between;
  width: 10rem;
  height: 2.4rem;
  padding: 7px;
  text-align: center;
`;

export default MeetOurSpecialist;
