import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 4.688rem;
  padding: 1rem;
  border-radius: 1.25rem 1.25rem 0 0;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  background-color: #ffffff;
  opacity: 0.8;

  input {
    width: 100%;
    height: 3rem;
    border: none;
    background-color: #ffffff;
    font-weight: bold;
    font-size: 1.5rem;
    text-align: right;
    color: #525283;
  }

  textarea:focus,
  input:focus {
    outline: none;
  }
`;
