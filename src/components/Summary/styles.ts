import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -7rem;

  div {
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);
    -webkit-box-shadow: 0px 7px 17px -6px rgba(0, 0, 0, 0.53);
    -moz-box-shadow: 0px 7px 17px -6px rgba(0, 0, 0, 0.53);
    box-shadow: 0px 7px 17px -6px rgba(0, 0, 0, 0.53);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }

    &.highlight-background {
      background: var(--green);
      color: #fff;
    }
  }
`;
