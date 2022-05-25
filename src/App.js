import React, { Component } from 'react';
import CatList from './CatList'
import { connect } from "react-redux";
import {fetchCats} from "./actions/catActions";


class App extends Component {

  componentDidMount() {
    this.props.getCats();
  }

  render() {
    const {cats} = this.props

    return (
      <div>
        <h1>CatBook</h1>
        <CatList catPics={cats} />
      </div>
    );
  }
}


export default connect( state => ({cats: state.cats}), dispatch=>({getCats: ()=>dispatch(fetchCats())}) ) (App)

