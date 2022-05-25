
const API = 'https://learn-co-curriculum.github.io/cat-api/cats.json'


export function catActions() {
  return (dispatch) => {
    dispatch({ type: 'loadCats' }) // should indicate that the data is loading
    // does the data loading
    fetch(API).then(resp => resp.json()).then(data => dispatch({ type: "addcats", images: data.images }))
  }


}




