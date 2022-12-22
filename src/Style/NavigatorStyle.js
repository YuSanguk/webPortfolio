import styled from "styled-components";
import { Link } from "react-router-dom";

// 네비게이션
export const NavigatorBar = styled.div`
  padding: 30px 0;

  font-weight: 700;

  display: flex;
  justify-content: space-between;

  * {
    font-size: 18px;
    color: black;
    transition: all ease 0.3s;
  }

  &:nth-child(1) {
    cursor: default;
    user-select: none;
  }

  @media only screen and (min-width: 768px) {
    margin: 0 12vw;
  }

  @media only screen and (max-width: 768px) {
    margin: 0 5vw;
  }

  @media only screen and (max-width: 540px) {
    margin: 0 2vw;
  }
`;

export const NavigatorElements = styled.ul`
  display: flex;
  justify-content: center;
  column-gap: 20px;
  width: 200px;

  * {
    &:hover {
      color: #50577a;
    }
  }
`;

const NavigatorLink = ({ text, to, ...props }) => {
  return (
    <Link to={to} {...props}>
      {text}
    </Link>
  );
};

export const NavigatorElement = styled(NavigatorLink)`
  color: ${(props) => (props.isactive === "true" ? "#3e83fb" : "")};
`;

export const LogoBox = styled.div`
  background: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  column-gap: 4px;

  &:hover {
    * {
      border-radius: 50%;
      background: orange;
    }
  }
`;

export const Icon = styled.div`
  height: 16px;
  width: 16px;
  background: green;
`;

export const Txt = styled.div`
  background: none !important;
`;
