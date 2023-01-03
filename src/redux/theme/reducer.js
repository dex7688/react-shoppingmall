import { DARK_MODE } from './types';

const initialState = {
  dark: JSON.parse(localStorage.getItem('theme')) ? JSON.parse(localStorage.getItem('theme')) : false,
};

export default function changeDarkModeReducer(state = initialState, action) {
  switch (action.type) {
    case DARK_MODE:
      return {
        dark: !state.dark,
      };
    default:
      return state;
  }
}
