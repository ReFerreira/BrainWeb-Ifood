import React, { useState, useCallback, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Container, ProductList } from './styles';
import { doughList } from '../../services/api';
import { formatPrice } from '../../util/format';
import { useOrder } from '../../context/resumeContext';

function Base() {
  const [doughOptions, setDoughOptions] = useState([]);

  const { order, setOrder } = useOrder();

  const history = useHistory();

  const onHandleGetData = useCallback(() => {
    const massas = doughList();
    setDoughOptions(massas);
  }, []);

  useEffect(() => {
    onHandleGetData();
  }, []);

  const onHandleDough = (dough) => {
    setOrder({
      ...order,
      dough: {
        name: dough.name,
        price: dough.price,
      },
    });
    history.push('/sabor');
  };
  return (
    <Container>
      <h1>Escola sua massa</h1>
      <ProductList>
        {doughOptions.map((dough) => (
          <li key={dough.id} onClick={() => onHandleDough(dough)}>
            <img src={dough.image} alt={dough.name} />
            <div className="baseDetails">
              <strong>{dough.name}</strong>
              <span>{formatPrice(dough.price)}</span>
            </div>
          </li>
        ))}
      </ProductList>
    </Container>
  );
}

export default Base;
