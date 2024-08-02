import { atom } from 'recoil';

const localStorageEffect = key => ({setSelf, onSet}) => {
  const savedValue = localStorage.getItem(key)
  if (savedValue != null) {
    setSelf(JSON.parse(savedValue));
  }

  onSet((newValue, _, isReset) => {
    isReset
      ? localStorage.removeItem(key)
      : localStorage.setItem(key, JSON.stringify(newValue));
  });
};

export const userState = atom({
  key: 'userState',
  default: JSON.parse(localStorage.getItem('userState')) || false,
  effects: [
    localStorageEffect('userState')
  ]
});
export const currentNodeState = atom({
  key: 'currentNodeState',
  default: JSON.parse(localStorage.getItem('currentNodeState')) || "explorer",
  effects: [
    localStorageEffect('currentNodeState')
  ]
});

export const toastState = atom({
  key: 'toastState',
  default: [],
});