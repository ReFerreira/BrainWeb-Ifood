import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';
import { useOrder } from '../../context/resumeContext';

function Checkout() {
  const { order } = useOrder();
  const history = useHistory();
  return (
    <Container>
      <h1>Pedido finalizado</h1>
      <strong>Já estamos preparando o seu pedido!</strong>

      {order.isRecommended && (
        <span>
          Por ter esolhido a sugestão, você recebeu {order.points} pontos
        </span>
      )}

      <button type="button" onClick={() => history.push('/')}>
        Faça um novo pedido
      </button>
    </Container>
  );
}

export default Checkout;
