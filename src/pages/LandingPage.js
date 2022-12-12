import React from "react";
import styled from "styled-components";
import logo2 from "../images/logo2.png";

const LandingPage = () => {
  return (
    <MainSection>
      <Header>
        <div className="border">
          <p>Bardhman</p>
        </div>
        <div>
          <ul>
            <li>Home+</li>
            <li>Department+</li>
            <li>Patients+</li>
            <li>Blog+</li>
            <li>pages+</li>

            <li>
              srch <span>cart</span>
            </li>
            <li>
              <button>Appointment</button>
            </li>
          </ul>
        </div>
      </Header>
      <Body>
        <LeftSection>
          <span>We are here for you</span>
          <h1>What makes us better, makes you better.</h1>
          <p>
            Lorem will rarely distracted news of a judge the eveready will be
            rarely distracted by a content an news of the news a judged that
            reader by his sideless.
          </p>
          <div>
            <button>Make Appointment</button>
            <button className="nikhil">▶</button>
          </div>
        </LeftSection>
        <RightSection>
          <img src={logo2} alt="doctor" />
          <SocialMedia />
        </RightSection>
      </Body>
      <BottomSection>
        <input
          type="text"
          placeholder="Enter Your Name                       p"
        />
        <input
          type="text"
          placeholder="Enter Your Location                   p"
        />
        <input type="number" placeholder="Enter Your Services" />
        <button>BOOK NOW</button>
      </BottomSection>
    </MainSection>
  );
};

export const MainSection = styled.div`
  height: 110vh;

  padding: 1rem 5rem;
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  .border {
    p {
      font-size: 1.8rem;
      font-weight: 700;
    }
  }

  ul {
    list-style-type: none;
    li {
      display: inline-block;
      padding: 0.5rem 1rem;
      cursor: pointer;
      button {
        padding: 0.85rem 1.9rem;
        border-radius: 2rem;
        border: 2px solid skysblue;
        font-weight: 600;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

        &:hover {
          background-color: skyblue;
          border: 2px solid white;
        }
      }
    }
  }
`;
export const Body = styled.div`
  display: flex;
  margin: 6rem 3rem 0 3rem;
`;
export const LeftSection = styled.div`
  /* flex: 1; */
  flex: 50%;

  padding: 2.6rem 9rem 3.3rem 6rem;
  span {
    font-size: 1.5rem;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
  }
  h1 {
    font-size: 4rem;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    text-transform: capitalize;
    margin: 0.7rem 0 1.4rem 0;
  }
  p {
    font-size: 1.2rem;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: 600;
    color: gray;
    margin-bottom: 2.3rem;
  }
  div {
    margin: 1.5rem 0;
    display: flex;
    button {
      display: flex;
      justify-content: space-between;
      width: 39%;
      color: white;
      background-color: green;
      border-radius: 35px;
      border: none;
      padding: 1rem 1.6rem;
      font-size: 1rem;
      cursor: pointer;

      box-shadow: 0 3px 10px rgb(0 0 0 / 0.4);

      p {
        padding: 0.5rem;
        color: white;
        font-weight: 600;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      }

      &:hover {
        background-color: lightgreen;
        color: black;
      }
    }
    .nikhil {
      margin-left: 1.2rem;
      width: 11%;
      border-radius: 50%;
      padding: 1rem 1.3rem;
      background-color: green;
      color: white;
      &:hover {
        background-color: lightgreen;
        color: black;
      }
    }
  }
`;

export const RightSection = styled.div`
  flex: 50%;
  padding-left: 0rem;

  img {
    width: 77%;
    height: 100%;
  }
`;
export const SocialMedia = styled.div``;

export const BottomSection = styled.div`
  width: 81%;
  height: 15.5%;
  margin: 0 auto 1rem auto;
  background-color: lightgreen;
  border-radius: 0.6rem;
  background-color: lightblue;
  /* padding: 2rem; */

  input {
    padding: 1.2rem;
    width: 22.38%;
    border-radius: 0.4rem;
    border: none;
    margin: 3rem 2rem;
    font-size: 1rem;
  }
  button {
    width: 12%;
    padding: 1.2rem;
    border-radius: 0.4rem;
    border: none;
    background-color: green;
    color: white;
    word-spacing: 2px;
    letter-spacing: 1px;
    margin-left: 2rem;
  }
`;
// export const  = styled.div``;

export default LandingPage;
