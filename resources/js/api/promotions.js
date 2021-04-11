import client from './client';

export const getPromotions = () => {
  return client('/api/promotions')
    .then(data => data);
};

export const getPromotionWrestlers = (alias) => {
  return client(`/api/promotions/${alias}/wrestlers`)
    .then(data => data);
};
