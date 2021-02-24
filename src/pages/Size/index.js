import React, { useCallback, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, ProductList } from './styles';
import { useOrder } from '../../context/resumeContext';
import { sizeList } from '../../services/api';
import { formatPrice } from '../../util/format';

function Size() {
  const [sizeOptions, setSizeOptions] = useState([]);
  const { order, setOrder } = useOrder();

  console.log(order);

  const history = useHistory();

  const onHandleGetData = useCallback(() => {
    const tamanhos = sizeList();
    setSizeOptions(tamanhos);
  }, []);

  useEffect(() => {
    onHandleGetData();
  }, []);

  const onHandleSize = (size) => {
    setOrder({
      ...order,
      size: {
        name: size.description,
        price: size.price,
      },
    });

    history.push('/finalizar');
  };

  return (
    <Container>
      <h1>Escola o tamanho da sua pizza</h1>
      <ProductList>
        {sizeOptions &&
          sizeOptions.map((size) => (
            <li key={size.id} onClick={() => onHandleSize(size)}>
              <img src={size.image} alt={size.description} />
              <div className="baseDetails">
                <strong>{size.description}</strong>
                <span>{formatPrice(size.price)}</span>
              </div>
            </li>
          ))}
      </ProductList>
    </Container>
  );
}

export default Size;
