import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 600px;
  border-radius: 4px;
  background: #f4f4f4;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  flex-direction: column;

  h1 {
    color: #feb850;
  }

  button {
    border: 0;
    width: 385px;
    height: 41px;
    margin: 0 0 9px 32px;
    border-radius: 124px;
    background-color: #d03438;
    text-align: center;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #fff;

    &:hover {
      background: ${darken(0.03, '#d03438')};
    }
  }
`;

export const ProductList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  width: 100%;
  padding: 20px;

  strong {
    text-align: end;
  }
`;

export const TotalContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  width: 100%;
  padding: 20px;
  border-top: 1px solid #999;

  strong {
    text-align: end;
  }
`;
