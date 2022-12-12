import React from "react";
import styled from "styled-components";
import doctor4 from "../images/doctor4.png";

const Advise = () => {
  return (
    <MainSection>
      <LeftSection>
        <img src={doctor4} alt="doctor" />
        <div></div>
        <div className="sky"></div>
      </LeftSection>
      <RightSection>
        <h1>
          Find the right <br /> Medication for you
        </h1>
        <p>
          lorem It is a long established in facts that reader will rarely
          distracted readable content news of readable content news the a day.
        </p>
        <Container>
          <p>
            <span>➤</span> We Have The Medical Specialists
          </p>
          <hr />
          <p>
            <span>➤</span>Quality and Safety at Medical Clinic
          </p>
          <hr />
          <p>
            <span>➤</span> Diseases and Conditions
          </p>
          <hr />
        </Container>
        <button>▶</button> <span>Watch the video</span>
      </RightSection>
    </MainSection>
  );
};

export const MainSection = styled.div`
  height: 100vh;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  padding: 6rem 10rem;
`;
export const LeftSection = styled.div`
  flex: 50%;

  position: relative;

  img {
    width: 75%;
    height: 80%;
    border-radius: 25% 2% 25% 2%;
    position: absolute;
    top: 0;
    left: 7.5rem;
    z-index: 9;
  }
  div {
    width: 75%;
    height: 80%;
    border-radius: 2% 2% 2% 25%;
    background-color: blueviolet;
    position: absolute;
    top: 4.5rem;
    left: 3rem;
  }
  .sky {
    width: 20%;
    height: 22%;
    border-radius: 0 0 100% 0;
    background-color: skyblue;
    position: absolute;
    top: 19rem;
    left: 3rem;
    z-index: 10;
  }
`;
export const RightSection = styled.div`
  flex: 50%;
  margin-left: 5rem;
  padding: 1rem 0rem;
  /* padding: 3rem 17rem 3rem 3rem; */

  h1 {
    font-size: 3rem;
    margin-bottom: 1.5rem;
    font-weight: 600;
    letter-spacing: -0.5px;
    word-spacing: 2px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
  p {
    margin: 0 9rem 3rem 0;
    line-height: 1.4rem;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    span {
      color: gray;
    }
  }
  button {
    margin: 3rem 0 0 1rem;
    padding: 1.2rem;
    border-radius: 50%;
    border: none;
    background-color: blue;
    cursor: pointer;
    color: white;
  }
  span {
    margin: 1rem;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: 600;
    color: blueviolet;
    cursor: pointer;
  }
`;
export const Container = styled.div`
  margin: 1rem 0 1rem 1.3rem;
  p {
    margin: 0 9rem 1.3rem 0;
    line-height: 1.4rem;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
  hr {
    margin: 0 8rem 1.3rem 0;
    color: gray;
  }
`;

export default Advise;
