import client from './client';

export const getWrestlerHistoryForPromotion = (alias, slug) => {
  return client(`/api/promotions/${alias}/${slug}`)
    .then(data => data);
};

export const allWrestlers = () => {
  return client(`/api/wrestlers`)
    .then(data => data);
};

export const getAllWrestlerHistory = (slug) => {
  return client(`/api/wrestlers/slug/${slug}`)
    .then(data => data);
};

export const createWrestlerState = (wrestlerId, body) => {
  return client(`/api/wrestlers-to-states/${wrestlerId}`, { body })
    .then(data => data);
};

export const updateWrestlerState = (wrestlerId, body) => {
  return client(`/api/wrestlers-to-states/${wrestlerId}`, { methods: 'PATCH', body })
    .then(data => data);
};
