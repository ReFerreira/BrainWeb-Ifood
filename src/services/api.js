function loadLists() {
  return [
    {
      id: '1',
      name: 'Pizza Bauru',
      price: 10.0,
      image: 'https://bit.ly/3aPbkdP',
    },
    {
      id: '2',
      name: 'Pizza Mussarela',
      price: 10.0,
      image: 'https://bit.ly/2NzvmjK',
    },
    {
      id: '3',
      name: 'Pizza Portuguesa',
      price: 12.0,
      image: 'https://bit.ly/3pToZ89',
    },
    {
      id: '4',
      name: 'Pizza Frango c/ catupiry',
      price: 12.0,
      image: 'https://bit.ly/3aRGQIw',
    },
    {
      id: '5',
      name: 'Pizza Marguerita',
      price: 10.0,
      image: 'https://bit.ly/3pRnxmD',
    },
  ];
}

function doughList() {
  return [
    {
      id: '1',
      name: 'Massa Napolitana',
      price: 8.0,
      image: 'https://bit.ly/3urPFjP',
    },
    {
      id: '2',
      name: 'Massa Nova-iorquina',
      price: 9.0,
      image: 'https://bit.ly/3aQy9OD',
    },
    {
      id: '3',
      name: 'Massa Ceciliana',
      price: 10.0,
      image: 'https://bit.ly/37MCKz8',
    },
  ];
}

function sizeList() {
  return [
    {
      id: '1',
      description: 'Pizza Pequena - 4 Pedaços',
      price: 8.0,
      image: 'https://bit.ly/2NAXEdO',
    },
    {
      id: '2',
      description: 'Pizza Média - 8 Pedaços',
      price: 10.0,
      image: 'https://bit.ly/2O1RMtN',
    },
    {
      id: '3',
      description: 'Pizza Grande - 12 Pedaços',
      price: 14.0,
      image: 'https://bit.ly/3ssVwU3',
    },
  ];
}

export { doughList, loadLists, sizeList };
