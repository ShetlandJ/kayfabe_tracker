export const stateMap = {
  'face': { bg: '#93c47d', text: '#f0f7ed' },
  'heel': { bg: '#e06666', text: '#fbeaea' },
  'tweener': { bg: '#ffe599', text: '#fff9e6' },
  'unclear': { bg: '#b4a7d6', text: '#f0eef7' },
  'inactive': { bg: '#b7b7b7', text: '#f2f2f2' }
};

export const textMap = {};

export const getBackgroundColour = (wrestlerState) => {
  const name = wrestlerState.name.toLowerCase();
  return stateMap[name].bg;
};

export const getTextColour = (wrestlerState) => {
  const name = wrestlerState.name.toLowerCase();
  return stateMap[name].text;
};
