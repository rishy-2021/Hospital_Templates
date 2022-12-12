import React from "react";
import styled from "styled-components";
import photo1 from "../images/doctor2.png";
import photo2 from "../images/doctor3.png";
import photo3 from "../images/doctor4.png";

const Testimonial = () => {
  return (
    <TestmonialSection>
      <MainSection>
        <br />
        <Heading>
          <p> ---Testimonial</p>

          <h1>What Our Clients Say</h1>
          <br />
        </Heading>
        <CardContainer>
          <Cards>
            <img src={photo3} alt="people" />
            <div>
              <p> January 15 , 2022</p>
              <p className="para1"> * * * * * </p>
              <p className="para">
                It is a long established in facts that reader will rarely news
                of the a judge, rarely distracted readable content news of the a
                rarely distracted.
              </p>
              <p className="name">
                Ritesh Purwar <br /> <span> Developer</span>
              </p>
            </div>
          </Cards>
          <Cards>
            <img src={photo2} alt="people" />
            <div>
              <p> January 15 , 2022</p>
              <p className="para1"> * * * * * </p>
              <p className="para">
                It is a long established in facts that reader will rarely news
                of the a judge, rarely distracted readable content news of the a
                rarely distracted.
              </p>
              <p className="name">
                Ritesh Purwar <br /> <span> Developer</span>
              </p>
            </div>
          </Cards>
          <Cards>
            <img src={photo1} alt="people" />
            <div>
              <p> January 15 , 2022</p>
              <p className="para1"> * * * * * </p>
              <p className="para">
                It is a long established in facts that reader will rarely of the
                a judge, rarely distracted readable content news of the a rarely
                distracted.
              </p>
              <p className="name">
                Ritesh Purwar <br /> <span> Developer</span>
              </p>
            </div>
          </Cards>
        </CardContainer>
      </MainSection>
    </TestmonialSection>
  );
};

export const TestmonialSection = styled.div`
  height: 100vh;
  background-color: #effffd;
`;
export const MainSection = styled.div`
  height: 90%;

  margin: 0 6rem;
`;
export const Heading = styled.div`
  margin: 4rem;

  p {
    font-size: 1rem;
    font-weight: 600;

    margin-bottom: -0.3rem;
  }
  h1 {
    font-size: 3.5rem;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
`;
export const CardContainer = styled.div`
  height: 55%;

  display: flex;
  flex-direction: row;
`;
export const Cards = styled.div`
  flex: 30%;
  cursor: pointer;
  margin: 2rem 3rem;
  position: relative;
  transition: 0.6s ease-in-out;

  img {
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 0 20px 0 20px;
    width: 7rem;
    height: 6.4rem;
    z-index: 9;
    /* box-shadow: 0 3px 10px rgb(0 0 0 / 0.2); */
  }
  div {
    background-color: white;
    position: absolute;
    bottom: 0;
    border-radius: 12px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);

    p {
      margin: 2rem;
      margin-bottom: 1.2rem;

      font-size: 1.1rem;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    }
    .para1 {
      font-size: 1.8rem;
      color: black;
      font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    }
    .para {
      font-size: 1.18rem;
      margin-top: -1.2rem;
      margin-bottom: 2rem;
    }
    .name {
      font-size: 1.4rem;

      font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
        "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
      span {
        font-size: 1rem;
        color: gray;
      }
    }
  }

  &:hover {
    transform: scale(1.15);
    transform-origin: center;
    transition: 0.6s ease-in-out;
  }
`;

export default Testimonial;
