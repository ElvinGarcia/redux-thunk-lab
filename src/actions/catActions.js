
const API = 'https://learn-co-curriculum.github.io/cat-api/cats.json'


export function fetchCats() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_CATS' }) // should indicate that the data is loading
    // does the data loading
    fetch(API).then(resp => resp.json()).then(data => dispatch({ type: "ADD_CATS", cats: data.images }))
  }


}




