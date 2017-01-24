import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state = {term: ''};
  }
  onInputChange(ev){
    this.setState({
      term: ev.target.value
    })
    console.log(this.state.term)
  }
  onFormSubmit(ev){
    ev.preventDefault()
    this.props.fetchWeather(this.state.term);
    this.setState({term:''});
  }
// 07e3d9d6cb5b870483f9119e27f4d23a
  render(){
    return(
      <form className="input-group" onSubmit={this.onFormSubmit.bind(this)}>
       <input onChange={this.onInputChange.bind(this)} placeholder="Get a five day forcast"
        className="form-control" value={this.state.term}/>
       <span className="input-group-btn">
        <button type="submit" className="btn btn-secondary">Submit</button>
       </span>
      </form>
    );
  }

}



function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
