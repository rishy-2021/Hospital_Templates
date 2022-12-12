import React from "react";
import styled from "styled-components";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";

const UpdateHere2 = () => {
  return (
    <MainSection>
      <Header>
        <h1>
          Get Every Single <br /> Updates Here.
          <br /> <span> - ----- -</span>
        </h1>
        <button>
          <span>+</span>
          <p>OUR BLOG</p>
        </button>
      </Header>
      <BoxSection>
        <Boxs2>
          <img src={image1} alt="doctor" />
          <h4>
            Medical , <span>Medicine</span>
          </h4>
          <h3>Lorem It is a long established in facts that reader.</h3>
          <p>
            Lorem will rarely distracted news of the a judge that reader will
            rarely distracted content news of the a judged that reader.
          </p>
        </Boxs2>
        <Boxs2>
          <img src={image2} alt="doctor" />
          <h4>
            Medical , <span>Medicine</span>
          </h4>
          <h3>Lorem It is a long established in facts that reader.</h3>
          <p>
            Lorem will rarely distracted news of the a judge that reader will
            rarely distracted content news of the a judged that reader.
          </p>
        </Boxs2>
        <Boxs2 className="krishna">
          <Boxs33>
            <h3>Lorem It is a long established that reader sleep.</h3>
            <div>
              <p>
                23rd Jan 2022 <br /> comments
              </p>
              <p>icon33</p>
            </div>
          </Boxs33>
          <hr />
          <Boxs33>
            <h3>Lorem It is a long established that reader sleep.</h3>
            <div>
              <p>
                23rd Jan 2022 <br /> comments
              </p>
              <p>icon33</p>
            </div>
          </Boxs33>
          <hr />
          <Boxs33>
            <h3>Lorem It is a long established that reader sleep.</h3>
            <div>
              <p>
                23rd Jan 2022 <br /> comments
              </p>
              <p>icon33</p>
            </div>
          </Boxs33>
        </Boxs2>
      </BoxSection>
    </MainSection>
  );
};

export const MainSection = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 5rem 12rem 0 12rem;
`;
export const Header = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 29%;
  margin-bottom: 3rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  h1 {
    font-size: 3.8rem;
  }

  button {
    display: flex;
    justify-content: space-between;
    width: 17.5%;
    height: 35%;
    border-radius: 40px;
    border: none;
    background-color: red;
    margin-top: -6rem;
    padding: 0.7rem 2rem 0.5rem 0.6rem;

    span {
      width: 3rem;
      height: 3rem;
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
export const BoxSection = styled.div`
  height: 69%;
  display: flex;
  .krishna {
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.4);
  }
`;
export const Boxs2 = styled.div`
  flex: 1;
  margin: 1rem;
  margin-bottom: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  img {
    width: 100%;
    height: 53%;
  }
  h4 {
    color: red;
    margin: 1.8rem 0 0.4rem 0;

    span {
      margin-left: 15px;
    }
  }
  p {
    margin-top: 1.2rem;
    font-size: 15px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 600;
    color: gray;
    line-height: 1.3rem;
  }
  hr {
    border: 1px solid lightgray;
    margin: 0 1.8rem;
  }
`;
export const Boxs33 = styled.div`
  padding: 1.8rem;
  div {
    display: flex;
    /* justify-content: space-around; */
    p {
      margin-right: 4rem;
    }
  }
`;

export default UpdateHere2;
