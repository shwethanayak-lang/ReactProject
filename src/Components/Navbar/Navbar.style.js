import styled from "styled-components";

export const NavbarContainer = styled.div`
  width: auto;
  color: #c0c0c0;
  background-color: #000;
  height: 75px;
  margin-top: 10px;
  padding-top: 10px;
  font-size: 18px;
  align-items: center;
  justify-content: space-around;

  @media only screen and (min-width: 320px) and (max-width: 480px) {
    max-width: auto;
  }
  @media only screen and (min-width: 480px) and (max-width: 768px) {
    width: auto;
  }
`;

export const AppFooter = styled.div`
  background-color: #000;
  color: #fff;
  height: auto;
  margin-top: 600px;

  @media only screen and (min-width: 320px) and (max-width: 480px) {
    margin-top: 175em;
    width: 500px;
    height: 300px;
  }

  @media only screen and (min-width: 480px) and (max-width: 768px) {
    margin-top: 65em;
    width: auto;
    height: auto;
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    margin-top: 59em;
    width: auto;
    height: auto;
  }
`;
