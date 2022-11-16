import styled from "styled-components";
import { device } from "./breakpoints";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #D9D9F6;
`;

export const Content = styled.div`
    width: 80%;
    min-height: 25rem;
    border-radius: 1.25rem;
    background-color: #E8E8FC;
    opacity: 0.8;
    box-shadow: rgba(149, 157, 165, 0.2) 0rem 0.5rem 1.5rem;

    @media ${device.mobileS} { 
      width: 90%;
    }

    @media ${device.mobileM} { 
      width: 80%;
    }

    @media ${device.mobileL} { 
      width: 70%;
    }

    @media ${device.tablet} { 
      width: 40%;
    }

    @media ${device.laptop} { 
      width: 30%;
    }

    @media ${device.laptopL} { 
      width: 20%;
    }

    @media ${device.desktop} { 
      width: 15%;
    }
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;