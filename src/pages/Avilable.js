import React from "react";
import styled from "styled-components";

const Avilable = () => {
  return (
    <MainSection>
      <LeftSection>
        <Headings>
          <p>We are avilable 24/7</p>
          <h1>We always ready for a challenge. </h1>
        </Headings>
        <Button>
          <button>
            <span>+</span>
            <p>Make Appointment</p>
          </button>
        </Button>
      </LeftSection>
      <RightSection>
        <Boxs>
          <div className="roma">
            <span>1M+</span>
          </div>
          <div>
            <h3>Satisfied Patients</h3>
            <p>
              facts that readable the a day reader will rarely distracted lorem
              It is a long in facts that day.
            </p>
          </div>
        </Boxs>
        <Boxs>
          <div className="roma">
            <span>1M+</span>
          </div>
          <div>
            <h3>Satisfied Patients</h3>
            <p>
              facts that readable the a day reader will rarely distracted lorem
              It is a long in facts that day.
            </p>
          </div>
        </Boxs>
      </RightSection>
    </MainSection>
  );
};

export const MainSection = styled.div`
  height: 83vh;
  background-color: slategray;
  display: flex;
  justify-content: space-between;
  margin: 4rem 0;
  padding: 6rem 8rem 3rem 9rem;
`;
export const LeftSection = styled.div`
  width: 60%;
  padding: 2rem;
`;

export const Headings = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  p {
    font-weight: 600;
    font-size: 1.5rem;
    color: whitesmoke;
  }
  h1 {
    font-size: 4.5rem;
    text-transform: capitalize;
    line-height: 5.4rem;
    margin: 2rem 0 5rem 0;
    color: white;
  }
`;

export const Button = styled.div`
  button {
    display: flex;
    justify-content: space-between;
    width: 37%;
    background-color: orangered;
    border-radius: 35px;
    border: none;
    padding: 0.7rem 2rem 0.7rem 0.6rem;
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
      font-size: 1.06rem;
      color: white;
      font-weight: 600;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    }
    &:hover {
      background-color: #ad8b45;
    }
  }
`;

export const RightSection = styled.div`
  width: 40%;
  margin-left: 11rem;
  padding: 3rem 0;
`;
export const Boxs = styled.div`
  display: flex;

  margin: 2rem 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  .roma {
    width: 35%;
    margin-top: 1.8rem;

    span {
      font-size: 3.8rem;
      font-weight: 600;
      color: greenyellow;
    }
  }
  div {
    width: 65%;
    padding: 0 1.3rem;
    margin-top: 0rem;

    h3 {
      margin: 0.4rem 0;
      font-size: 2rem;
      color: white;
    }
    p {
      font-size: 1rem;
      font-weight: 600;
      letter-spacing: 0.5px;
      word-spacing: 1px;
      line-height: 1.25rem;
      color: whitesmoke;
      opacity: 0.9;
    }
  }
`;

export default Avilable;
