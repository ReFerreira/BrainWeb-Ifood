import React, { useCallback, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Container, ProductList } from './styles';
import { loadLists } from '../../services/api';
import { formatPrice } from '../../util/format';
import { useOrder } from '../../context/resumeContext';

function Flavour() {
  const [pizzaList, setPizzaList] = useState([]);

  const { order, setOrder } = useOrder();

  const history = useHistory();

  const getData = useCallback(() => {
    const data = loadLists();
    setPizzaList(data);
  }, []);

  useEffect(() => {
    getData();
  }, []);

  const onHandleFlavour = (pizza) => {
    setOrder({
      ...order,
      flavour: {
        name: pizza.name,
        price: pizza.price,
      },
    });
    history.push('/tamanho');
  };

  return (
    <Container>
      <h1>Escola o sabor</h1>
      <ProductList>
        {pizzaList.map((pizza) => (
          <li key={pizza.id} onClick={() => onHandleFlavour(pizza)}>
            <img src={pizza.image} alt={pizza.name} />
            <div className="baseDetails">
              <strong>{pizza.name}</strong>
              <span>{formatPrice(pizza.price)}</span>
            </div>
          </li>
        ))}
      </ProductList>
    </Container>
  );
}

export default Flavour;
