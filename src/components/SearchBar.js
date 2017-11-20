import React, { Component } from 'react';
import axios from 'axios';
import {AsyncTypeahead} from 'react-bootstrap-typeahead';
import './SearchBar.css';

const searchArtistBaseUrl = 'https://itunes.apple.com/search?media=music&attribute=artistTerm';

export class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      isLoading: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.onMenuHide = this.onMenuHide.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  onMenuHide(event) {
    if (this.state.searchText && this.state.searchText.length > 1) {
      this.getAlbums();
    }
  }
  
  handleInputChange(searchText) {
    this.setState({searchText: searchText});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.getAlbums();
  }
  
  getAlbums() {
    var self = this;
    const artist = this.state.searchText;
    const albumsUrl = searchArtistBaseUrl + '&entity=album&term=' + artist;
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
  
  getArtistsPromise() {
    const artist = this.state.searchText;
    const artistsUrl = searchArtistBaseUrl + '&entity=musicArtist&term=' + artist;
    return axios.get(artistsUrl, {
      transformResponse: axios.defaults.transformResponse.concat(function (data, headers) {
        return data.results;
      })
    })
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <div className="container">
            <div className="inner-addon right-addon">
              <AsyncTypeahead
                isLoading={this.state.isLoading}
                placeholder="Enter an artist name here"
                onInputChange={this.handleInputChange}
                onMenuHide={this.onMenuHide}
                submitFormOnEnter={true}
                onSearch={searchTerm => {
                  var self = this;
                  this.getArtistsPromise()
                    .then(function (response) {
                      self.setState({
                        isLoading: false,
                        options: response.data.map(r => r.artistName)
                      })
                    })
                }}
                options={this.state.options}
              />
              <i className="glyphicon glyphicon-search"/>
              <input type="submit" id="submit-form" className="hidden" />
            </div>
          </div>
        </form>
    );
  }
}