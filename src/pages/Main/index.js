import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, SuggestOrder, Button, Details } from './styles';
import { loadLists, doughList } from '../../services/api';
import { formatPrice } from '../../util/format';
import { useOrder } from '../../context/resumeContext';

function Main() {
  const [pizzaSuggest, setPizzaSuggest] = useState([]);
  const [massaSuggest, setMassaSuggest] = useState([]);
  const { setOrder } = useOrder();
  const index = Math.floor(Math.random() * 5);

  const history = useHistory();

  const onHandleGetData = useCallback(() => {
    const pizzas = loadLists();
    const massas = doughList();
    setMassaSuggest(massas);
    setPizzaSuggest(pizzas);
  }, []);

  useEffect(() => {
    onHandleGetData();
  }, []);

  const onHandleSetNewOrder = () => {
    setOrder({
      isRecommended: false,
    });
    history.push('/base');
  };

  const onHandleRecommended = () => {
    setOrder({
      isRecommended: true,
      dough: {
        name: massaSuggest[index]?.name,
        price: massaSuggest[index]?.price,
      },
      flavour: {
        name: pizzaSuggest[index]?.name,
        price: pizzaSuggest[index]?.price,
      },
      points: pizzaSuggest[index]?.price * 10,
    });
    history.push('/tamanho');
  };

  return (
    <Container>
      <h1>Bem Vindo(a) ao Tasty Pizzaria</h1>
      <Button onClick={onHandleSetNewOrder}>Monte sua pizza</Button>
      <Details>
        <span>ou</span>
        <span>
          Escolha a recomendação do dia e ganhe{' '}
          {pizzaSuggest[index]?.price * 10} pontos!
        </span>
      </Details>
      <SuggestOrder onClick={onHandleRecommended}>
        {pizzaSuggest[index] && (
          <>
            <img src={pizzaSuggest[index]?.image} alt="" />

            <div className="suggestDetails">
              <strong>
                {pizzaSuggest[index]?.name} + {massaSuggest[index]?.name}
              </strong>
              <span>
                {formatPrice(
                  pizzaSuggest[index]?.price + massaSuggest[index]?.price
                )}
              </span>
            </div>
          </>
        )}
      </SuggestOrder>
    </Container>
  );
}

export default Main;
