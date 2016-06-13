export default function(state = null, action) {
  switch (action.type) {
    case 'RETRIEVE_VIDEOS':
      return action.payload;
  }

  return state;
}
