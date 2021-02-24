import styled from 'styled-components';

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
`;

export const ProductList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  width: 100%;
  padding: 20px;

  li {
    display: flex;
    list-style: none;
    cursor: pointer;
    border-radius: 8px;
    box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
    border: 2px solid rgba(230, 236, 245, 0.4);

    img {
      border-radius: 4px;
      width: 180px;
    }

    .baseDetails {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      margin-left: 15px;
    }
  }
`;
