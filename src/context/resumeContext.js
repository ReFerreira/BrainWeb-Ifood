/* eslint-disable react/prop-types */
import React, { createContext, useContext, useState } from 'react';

const OrderContext = createContext();

export default function OrderProvider({ children }) {
  const [order, setOrder] = useState({
    isRecommended: false,
    dough: {
      name: '',
      price: 0,
    },
    flavour: {
      name: '',
      price: 0,
    },
    size: {
      name: '',
      price: 0,
    },
    points: 0,
  });
  return (
    <OrderContext.Provider
      value={{
        order,
        setOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}

export function useOrder() {
  const context = useContext(OrderContext);
  const { order, setOrder } = context;

  return { order, setOrder };
}
