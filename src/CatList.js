import  React, { Component } from "react";



class CatList extends Component{
  render() {
    const catPics = this.props.catPics.map((cat, i) => (<li key={i}><img src={cat.url} /></li> ))
    return (
      <ul>
        {catPics}
      </ul>
    )
  }
}








export default  CatList;

