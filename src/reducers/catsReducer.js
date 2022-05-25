

export default function catReducer(state = { cats: [], requesting: false} , action){
    switch (action.type) {
      case 'loadCats':
        console.log('loading data....')
        return {
          ...state, cats: [...state.cats],
          requesting: true,
        };

      case 'addcats':
        console.log("action", action.images);
        return {
          ...state, cats: [...action.images],
          requesting: false,
        }

      default:
        return state;
    }

}