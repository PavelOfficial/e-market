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
      return delay(serverLatency)
        .then(() => {
          const queryRegExp = new RegExp(query, 'gi');
          let result = articles.filter((item) => queryRegExp.test(item.name));

          if (isInCart) {
            result = result.filter((item) => !!cart[item.id]);
          }

          result = result.slice((page - 1) * pageSize, page * pageSize);

          return { articles: result };
        });
    }

    return Promise.resolve();
  },
  put(path, { id, count }) {
    if (path === '/cart') {
      return delay(serverLatency)
        .then(() => {
          cart[id] = count;
          return { succeed: true };
        });
    }

    return Promise.resolve();
  },
  delete(path, { id }) {
    if (path === '/cart') {
      return delay(serverLatency)
        .then(() => {
          delete cart[id];

          return { succeed: true };
        });
    }

    return Promise.resolve();
  },
  post(path) {
    if (path === '/purchase') {
      return delay(serverLatency)
        .then(() => ({ succeed: true }));
    }

    return Promise.resolve();
  },
};

export default http;
