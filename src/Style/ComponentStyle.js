import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

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

export const LandingImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 600px !important;
  background: url(${(props) => props.url});
  transition: 1.5s ease;
`;

export const Lines = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

export const Line = styled.div``;

const Bouncing = keyframes`
    0% {
      transform: scaleX(100%) scaleY(100%);
    }
  
    25% {
      transform: scaleX(140%) scaleY(85%);
    }
  
    40% {
      transform: scaleX(100%) scaleY(100%);
    }
  
    50% {
      transform: scaleX(90%) scaleY(115%);
    }
  
    60% {
      transform: scaleX(105%) scaleY(94%);
    }
  
    70% {
      transform: scaleX(96%) scaleY(106%);
    }
  
    80% {
      transform: scaleX(103%) scaleY(98%);
    }
  
    90% {
      transform: scaleX(101%) scaleY(99%);
    }
  
    92% {
      transform: scaleX(100%) scaleY(100%);
    }
  
    94% {
      transform: scaleX(101%) scaleY(99%);
    }
  
    96% {
      transform: scaleX(100%) scaleY(100%);
    }
  
    98% {
      transform: scaleX(101%) scaleY(99%);
    }
  
    100% {
      transform: scaleX(100%) scaleY(100%);
    }
  `;

export const Txt = styled.span`
  font-weight: 800;
  color: white;
  font-size: 100px;
  transition: all 0.4s ease;
  &:hover {
    color: #4b56d2;
    transition: all 0.4s ease;
  }

  @media only screen and (min-width: 768px) {
    ${(props) =>
      props.isactive === "true"
        ? "animation: ${Bouncing} 2s ease !important;"
        : ""}
  }
`;
