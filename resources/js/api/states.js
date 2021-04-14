import client from './client';

export const getAllStates = () => {
  return client(`/api/states`)
    .then(data => data);
};
