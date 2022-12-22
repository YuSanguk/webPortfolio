// 랜딩페이지
import styled, { keyframes, css } from "styled-components";

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

export const Line = styled.div`
  margin: calc(-1 * 12px) 0;
`;

const fade = keyframes`
  0% {
    opacity: 0.1;
  }

  100%{
    opacity: 1;
  }
`;

export const Txt = styled.span`
  font-weight: 800;
  color: white;
  font-size: 100px;
  transition: all 0.4s ease-in;
  &:hover {
    color: #4b56d2;
    transition: all 0.4s ease-in;
  }

  @media only screen and (min-width: 768px) {
    animation: ${(props) =>
      props.isactive === "true"
        ? css`
            ${fade} 2s ease
          `
        : ""};
  }
`;
