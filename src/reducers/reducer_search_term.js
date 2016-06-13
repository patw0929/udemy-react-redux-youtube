import { DEFAULT_TERM } from '../config/config';

export default function(state = DEFAULT_TERM, action) {
  switch (action.type) {
    case 'SEARCH_TERM':
      return action.payload;
  }

  return state;
}
