/* eslint-disable comma-dangle */
import React from 'react';
import { useHistory } from 'react-router-dom';
import { formatPrice } from '../../util/format';
import { useOrder } from '../../context/resumeContext';

import { Container, ProductList, TotalContainer } from './styles';

function Resume() {
  const { order } = useOrder();

  const history = useHistory();

  // history.push('/sabor');
  return (
    <Container>
      <h1>Resumo do seu pedido</h1>
      <ProductList>
        <span>{order.dough.name || '---'}</span>
        <strong>{formatPrice(order.dough.price)}</strong>
        <span>{order.flavour.name || '---'}</span>
        <strong>{formatPrice(order.flavour.price)}</strong>
        <span>{order.size.name || '---'}</span>
        <strong>{formatPrice(order.size.price)}</strong>
      </ProductList>
      <TotalContainer>
        <span>Total</span>
        <strong>
          {formatPrice(
            order.size.price + order.flavour.price + order.dough.price
          )}
        </strong>
      </TotalContainer>
      <button type="button" onClick={() => history.push('/checkout')}>
        Finalizar Pedido
      </button>
    </Container>
  );
}

export default Resume;
