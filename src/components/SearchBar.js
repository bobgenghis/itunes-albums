import React, { Component } from 'react';
import axios from 'axios';

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
		  <label>
			Enter an artist name here:
			<input type="text" name="name" onChange={this.handleChange}/>
		  </label>
		  <input type="submit" value="Submit" />
		</form>
    );
  }
}