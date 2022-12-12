import React from "react";
import styled from "styled-components";
import logo1 from "../images/logo1.png";
import logo2 from "../images/logo2.png";
import logo3 from "../images/logo3.png";
import logo4 from "../images/logo4.png";

const HealthCareServices = () => {
  return (
    <Container>
      <TextPart>
        <p>we Provide the best healthcare services</p>
        <p>
          It is a long established fact that reader will distracted by the
          readable content of the news.
        </p>
      </TextPart>
      <BoxPart>
        <SmallBoxsContanier>
          <Box1>
            <div className="logo">
              <img src={logo1} alt="logo" />
            </div>
            <div className="details">
              <p>Diagnosis Services</p>
              <p>
                It is a long established in facts that reader will rarely
                distracted readable content news of the a judge .
              </p>
            </div>
          </Box1>
          <Box1>
            <div className="logo">
              <img src={logo2} alt="logo" />
            </div>
            <div className="details">
              <p>Diagnosis Services</p>
              <p>
                It is a long established in facts that reader will rarely
                distracted readable content news of the a judge .
              </p>
            </div>
          </Box1>
          <Box1>
            <div className="logo">
              <img src={logo3} alt="logo" />
            </div>
            <div className="details">
              <p>Diagnosis Services</p>
              <p>
                It is a long established in facts that reader will rarely
                distracted readable content news of the a judge .
              </p>
            </div>
          </Box1>
          <Box1>
            <div className="logo">
              <img src={logo4} alt="logo" />
            </div>
            <div className="details">
              <p>Diagnosis Services</p>
              <p>
                It is a long established in facts that reader will rarely
                distracted readable content news of the a judge .
              </p>
            </div>
          </Box1>
        </SmallBoxsContanier>
        <LargeBox>
          <p>Opening Hours</p>
          <p className="para">
            It is a long established in facts that reader will rarely distracted
            readable content news of the a judge that reader will rarely
            distracted.
          </p>
          <div className="Time">
            <div>Mon-Fri</div>
            <div>&#128337; 6am - 8am </div>
          </div>
          <hr />
          <div className="Time">
            <div>Sat-Sun</div>
            <div>&#128337; 8am -10am</div>
          </div>
          <hr />
          <div className="Time">
            <div>Wed-Fri</div>
            <div>&#128337; 12am -8pm</div>
          </div>
          <hr />
          <button> &#128222; Book Appointment </button>
        </LargeBox>
      </BoxPart>
    </Container>
  );
};

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 85vw;
  height: 100vh;
  background-color: white;
  margin: 0 auto;
`;

export const TextPart = styled.div`
  width: 80%;
  height: 14%;
  margin: 4rem 0 5rem 0;

  text-align: center;

  p {
    font-size: 3.1rem;
    font-weight: 600;
    font-family: "Fira Sans", sans-serif;
    text-transform: capitalize;

    &:last-child {
      font-size: 1.2rem;
      font-weight: 500;
      margin-top: 2rem;
      opacity: 0.9;
    }
  }
`;
export const BoxPart = styled.div`
  width: 90%;
  height: 57%;

  display: flex;
  flex-direction: row;
`;
export const SmallBoxsContanier = styled.div`
  flex: 70%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: column;
`;

export const Box1 = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  width: 45%;
  height: 47%;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  transition: 0.5s ease-in-out;

  &:hover {
    transform: scale(1.1);
    transform-origin: center;
    transition: 0.5s ease-in-out;
  }

  .logo {
    flex: 25%;

    img {
      background: white;

      border-radius: 5px;
      margin: 1.4rem 1rem;
      width: 70%;
      height: 36%;
      box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    }
  }
  .details {
    flex: 75%;

    p {
      margin: 1.4rem 0.5rem 0.3rem 0.5rem;
      font-weight: 500;
      font-size: 1.3rem;
      font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
        "Lucida Sans Unicode", Geneva, Verdana, sans-serif;

      &:last-child {
        font-size: 1rem;
        word-spacing: 5px;
        line-height: 24px;
        opacity: 0.8;
        font-weight: normal;
      }
    }
  }
`;
export const LargeBox = styled.div`
  flex: 30%;
  border-radius: 10px;
  padding: 0 1.5rem;
  background: linear-gradient(to top, #2657eb, #de6161);

  p {
    color: #fff;
    font-size: 1.5rem;
    margin: 1.5rem 0;
    font-weight: 600;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  .para {
    font-size: 1.1rem;
    font-weight: 400;
    opacity: 0.9;
    margin-bottom: 2.9rem;
  }
  .Time {
    margin: 0.7rem 0;
    display: flex;
    justify-content: space-between;
    div {
      font-size: 1.1rem;
      font-weight: 500;
      color: #fff;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    }
  }

  button {
    margin-top: 4.5rem;
    font-size: 1.1rem;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    width: 100%;
    font-weight: 700;
    height: 10%;
    border: none;
    background-color: #fff;
    border-radius: 5px;

    &:hover {
      color: #fff;
      background-color: #de6161;
    }
  }
`;

export default HealthCareServices;
