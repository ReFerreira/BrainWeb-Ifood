import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 600px;
  height: 400px;
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
`;

export const Button = styled.button`
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
`;
export const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  span {
    margin-bottom: 10px;
    color: #191919;
  }
`;
export const SuggestOrder = styled.li`
  list-style: none;
  width: 100%;
  display: flex;
  align-items: center;
  box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
  border: 2px solid rgba(230, 236, 245, 0.4);

  img {
    border-radius: 4px;
    width: 180px;
  }

  .suggestDetails {
    display: flex;
    flex-direction: column;
    height: 100%;
    margin-left: 15px;
    justify-content: space-around;

    strong {
      font-weight: bold;
      font-size: 18px;
    }

    span {
      font-size: 18px;
    }
  }
`;
