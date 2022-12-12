import React from "react";
import styled from "styled-components";
import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import icon3 from "../images/icon3.png";
import doctor from "../images/doctor.jpg";

const Trust = () => {
  return (
    <TrustSection>
      <LeftContainer>
        <HeadContainer>
          <h1>Medical Clinic that you can trust</h1>
          <p>
            lorem It is a long established in facts that reader will rarely
            distracted news of the a judge that reader will rarely distracted
            content news of the a judge that reader.
          </p>
        </HeadContainer>
        <BoxContainer>
          <Boxs>
            <Image>
              <img src={icon1} alt="work" />
            </Image>
            <Headings>
              <h2>24 Hour Healthcare Services</h2>
              <p>
                lorem It is a long established in facts that reader will rarely
                distracted readable content news of the a day.
              </p>
            </Headings>
          </Boxs>
          <Boxs>
            <Image>
              <img src={icon2} alt="work" />
            </Image>
            <Headings>
              <h2>International Standards</h2>

              <p>
                lorem It is a long established in facts that reader will rarely
                distracted readable content news of the a day.
              </p>
            </Headings>
          </Boxs>
          <Boxs>
            <Image>
              <img src={icon3} alt="work" />
            </Image>
            <Headings>
              <h2>Center of Excellence</h2>
              <p>
                lorem It is a long established in facts that reader will rarely
                distracted readable content news of the a day.
              </p>
            </Headings>
          </Boxs>
        </BoxContainer>
      </LeftContainer>
      <RightContainer>
        <img src={doctor} alt="person" />
        <DarkColor />
      </RightContainer>
    </TrustSection>
  );
};

export const TrustSection = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  background-color: white;
`;
export const LeftContainer = styled.div`
  flex: 40%;

  margin-left: 8rem;

  padding: 4rem 5rem;
`;

export const HeadContainer = styled.div`
  padding: 0 3rem;

  h1 {
    font-size: 3rem;
    font-weight: 600;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    margin-bottom: 1.5rem;
    line-height: 3.2rem;
  }
  p {
    font-size: 1.1rem;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
`;
export const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Boxs = styled.div`
  flex: 30%;
  margin: 1rem;
  display: flex;
  flex-direction: row;
`;

export const Image = styled.div`
  margin: 2rem;
`;
export const Headings = styled.div`
  margin: 2rem;
  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
  p {
    color: gray;
    margin-top: 0.5rem;
    font-size: 1rem;
    font-weight: 600;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
`;
export const RightContainer = styled.div`
  flex: 40%;
  margin-right: 8rem;
  margin-top: 4rem;
  position: relative;
  img {
    width: 31rem;
    height: 41rem;
    position: absolute;
    top: 1rem;
    left: 0;
    z-index: 9;
    border-radius: 12rem 0 0 0;
  }
  div {
    width: 31rem;
    height: 39rem;
    background-color: blue;
    position: absolute;
    top: 9rem;
    left: 9rem;
    border-radius: 0 0 11rem 0;
  }
`;
export const DarkColor = styled.div``;

export default Trust;
