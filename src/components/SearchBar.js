import React, { Component } from 'react';
import axios from 'axios';
import './SearchBar.css';

export class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    this.setState({searchText: event.target.value});
  }
  
  handleSubmit(event) {
    event.preventDefault();
    this.getAlbums();
  }
  
  getAlbums() {
    var self = this;
    const artist = this.state.searchText;
    const albumsUrl = 'https://itunes.apple.com/search?media=music&entity=album&attribute=artistTerm&term=' + artist;
    axios.get(albumsUrl, {
      transformResponse: axios.defaults.transformResponse.concat(function (data, headers) {
        return data.results;
      })
    })
    .then(function (response) {
      self.props.onSubmit(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  
  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <div className="container">
            <div className="inner-addon right-addon">
              <i className="glyphicon glyphicon-search"/>
              <input type="text" className="form-control"
                name="name"
                placeholder="Enter an artist name here"
                onChange={this.handleChange} />
            </div>
          </div>
        </form>
    );
  }
}