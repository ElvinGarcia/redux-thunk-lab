import  React, { Component } from "react";



class CatList extends Component{
  render() {
    const catPics = this.props.catPics.map(cat => (<li key={cat.id}><img src={cat.url} alt='cat' /></li> ))
    return (
      <ul>
        {catPics}
      </ul>
    )
  }
}








export default  CatList;

