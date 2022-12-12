import React from "react";
import styled from "styled-components";
import doctor from "../images/doctor3.png";
import image from "../images/grop.jpg";

const UpdatesHere = () => {
  return (
    <MainSection>
      <HeaderSection>
        <h1>Get Every Single</h1>
        <h1> Updates Here</h1>
        <div> - ---- - </div>
      </HeaderSection>
      <BoxSection>
        <Boxs>
          <h4>Medical , Medicine</h4>
          <h2>Hospital Website for Pateience and Relatives</h2>
          <p>
            lorem It is a long established in facts that reader will rarely
            distracted readable content news the a day.
          </p>
          <br />
          <hr />
          <DobSection>
            <div>
              <img src={doctor} alt="doctor" />
              <span>Berlin Lei</span>
            </div>
            <p> 14 Jan 2022</p>
          </DobSection>
          <button>
            <span>+</span>
            <p>Read More</p>
          </button>
        </Boxs>
        <Boxs>
          <div className="Photo"></div>
          <h4>Medical , Medicine</h4>
          <h2>Hospital Website for Pateience and Relatives</h2>
          <p>
            lorem It is a long established in facts that reader will rarely
            distracted readable content news the a day.
          </p>
          <br />
          <hr />
          <DobSection>
            <div>
              <img src={doctor} alt="doctor" />
              <span>Berlin Lei</span>
            </div>
            <p> 14 Jan 2022</p>
          </DobSection>
          <button>
            <span>+</span>
            <p>Read More</p>
          </button>
        </Boxs>
        <Boxs>
          <h4>Medical , Medicine</h4>
          <h2>Hospital Website for Pateience and Relatives</h2>
          <p>
            lorem It is a long established in facts that reader will rarely
            distracted readable content news the a day.
          </p>
          <br />
          <hr />
          <DobSection>
            <div>
              <img src={doctor} alt="doctor" />
              <span>Berlin Lei</span>
            </div>

            <p> 14 Jan 2022</p>
          </DobSection>
          <button>
            <span>+</span>
            <p>Read More</p>
          </button>
        </Boxs>
      </BoxSection>
    </MainSection>
  );
};

export const MainSection = styled.div`
  height: 100vh;
  padding: 0 10rem;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  background-color: #eeeeee;
`;
export const HeaderSection = styled.div`
  margin: 1rem 0 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 3.9rem;
    font-weight: 630;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
  div {
    font-size: 4rem;
    line-height: 2.8rem;
    margin-left: 4.4rem;
  }
`;
export const BoxSection = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Boxs = styled.div`
  flex: 1;
  background-color: white;
  margin: 1.1rem;
  padding: 3rem 2rem;
  z-index: 9;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);

  h4 {
    font-size: 1.1rem;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: 600;
    color: gray;
  }
  h2 {
    margin: 0.6rem 0;
    font-size: 1.5rem;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: 600;
  }
  p {
    margin-bottom: 0.9rem;
    line-height: 1.55rem;
    font-size: 1rem;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: 500;
    color: gray;
  }
  button {
    margin-top: 2.4rem;
    display: flex;
    justify-content: space-between;
    width: 60%;
    height: 15%;
    border-radius: 28px;
    border: none;
    padding: 0.5rem 2rem 0.5rem 0.6rem;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.4);

    span {
      width: 2.8rem;
      height: 2.8rem;
      font-size: 1.2rem;
      padding: 0.65rem;
      font-weight: 600;
      background-color: white;
      border-radius: 50%;
    }
    p {
      padding: 0.5rem;

      color: black;
      font-weight: 600;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    }
    &:hover {
      background-color: #ad8b45;
    }
  }

  &:hover {
    background-image: radial-gradient(
      circle,
      #a5bdc6,
      #b2c6d0,
      #bfced9,
      #cbd7e2,
      #d8e0ea,
      #d8e0e9,
      #d8e1e9,
      #d8e1e8,
      #cdd8de,
      #c3d0d3,
      #b9c7c8,
      #b0bebd
    );
  }
`;
export const DobSection = styled.div`
  display: flex;
  margin: 1rem 0.3rem;
  align-items: center;
  justify-content: space-between;
  div {
    display: flex;
    align-items: center;

    img {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
    }
    span {
      font-size: 1rem;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      font-weight: 700;
      padding: 0.6rem;
    }
  }
  p {
    padding-top: 1rem;
  }
`;
// export const MainSection =styled.div``;

export default UpdatesHere;
