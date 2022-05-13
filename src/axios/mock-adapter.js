import MockAdapter from 'axios-mock-adapter';

import { articles } from './__mock__/articles';
import { cart } from './__mock__/cart';

import { axios } from './axios';

const mock = new MockAdapter(axios, {
  delayResponse: 300,
});

const pageSize = 10;

mock.onGet('/articles').reply(({ data }) => {
  const { page, query, isInCart } = JSON.parse(data);
  const queryRegExp = new RegExp(query, 'gi');

  let result = articles.filter((item) => queryRegExp.test(item.name));

  if (isInCart) {
    result = result.filter((item) => !!cart[item.id]);
  }

  const pageResult = result.slice((page - 1) * pageSize, page * pageSize);
  const isLastPage = (pageResult.length === 0 && result.length === 0) ||
    pageResult[pageResult.length - 1] === result[result.length - 1];

  return [
    200,
    {
      articles: pageResult,
      isLastPage,
    },
  ];
});

mock.onPut('/cart').reply(({ data }) => {
  const { id, value } = JSON.parse(data);

  cart[id] = value;

  return [
    200,
    { succeed: true },
  ];
});

mock.onDelete('/cart').reply(({ data }) => {
  const { id } = JSON.parse(data);

  delete cart[id];

  return [
    200,
    { succeed: true },
  ];
});

mock.onPost('/purchase/cancel').reply(() => {
  return [
    200,
    { succeed: true },
  ];
});

mock.onPost('/purchase/my-check').reply(() => {
  return [
    200,
    { succeed: true },
  ];
});

mock.onPost('/purchase/create').reply(() => {
  Object.keys(cart).forEach((id) => {
    delete cart[id];
  });

  return [
    200,
    {
      succeed: true,
      order: Math.round(Math.random() * 100000, 10),
    },
  ];
});
