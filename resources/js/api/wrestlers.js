import client from './client';

export const getWrestlerHistory = (alias, slug) => {
  return client(`/api/promotions/${alias}/${slug}`)
    .then(data => data);
};
