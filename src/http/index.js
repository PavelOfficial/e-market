// It's a mock you know.

import { articles } from './data/articles';
import { cart } from './data/cart';

const serverLatency = 650;
const pageSize = 10;

const delay = (timeout) => {
  const result = new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, timeout);
  });

  return result;
};

export const http = {
  get(path, { page, query, isInCart }) {
    if (path === '/articles') {
      const queryRegExp = new RegExp(query, 'gi');
      let result = articles.filter((item) => queryRegExp.test(item.name));

      if (isInCart) {
        result = result.filter((item) => !!cart[item.id]);
      }

      const pageResult = result.slice((page - 1) * pageSize, page * pageSize);
      const isLastPage = (pageResult.length === 0 && result.length === 0) ||
        pageResult[pageResult.length - 1] === result[result.length - 1];

      return delay(serverLatency)
        .then(() => ({
          articles: pageResult,
          isLastPage,
        }));
    }

    return Promise.resolve();
  },
  put(path, { id, value }) {
    if (path === '/cart') {
      if (value) {
        cart[id] = value;
      } else {
        delete cart[id];
      }

      return delay(serverLatency)
        .then(() => ({ succeed: true }));
    }

    return Promise.resolve();
  },
  post(path) {
    if (path === '/buying/create') {
      Object.keys(cart).forEach((id) => {
        delete cart[id];
      });

      return delay(serverLatency)
        .then(() => ({
          succeed: true,
          order: parseInt(Math.random() * 100000, 10),
        }));
    }

    if (path === '/buying/cancel') {
      return delay(serverLatency)
        .then(() => ({ succeed: true }));
    }

    return Promise.resolve();
  },
};

export default http;
