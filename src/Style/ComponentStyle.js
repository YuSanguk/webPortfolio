import styled from "styled-components";

export const NavigatorBar = styled.ul`
  width: 100vw;
  padding: 30px 0;

  font-weight: 700;

  display: flex;
  * {
    text-decoration: none;
    font-size: 30px;
    color: black;
    transition: all ease 0.3s;

    &:hover {
      color: #50577a;
    }
  }

  @media only screen and (min-width: 768px) {
  }

  @media only screen and (max-width: 768) {
  }
`;
