import client from './client';

export const getPromotions = () => {
  return client('/api/promotions')
    .then(data => data);
};
