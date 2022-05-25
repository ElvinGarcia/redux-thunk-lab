import  React, { Component } from "react";
import { connect } from "react-redux";
import {catActions} from "./actions/catActions";

class CatList extends Component{

  componentDidMount() {
    this.props.getCats();
  }

  render() {
    const listOfCats = this.props.cats.map(cat => <li key={cat.url}> <img src={cat.url} alt='cat' /> </li>)
    return (
      <ul>
        {listOfCats}
     </ul>
    );
  }
}




const mapDispatchToProps = dispatch => {
  return {
    getCats: ()=>dispatch(catActions()),
  }
}



export default connect( state => ({cats: state.cats}), mapDispatchToProps) (CatList);

