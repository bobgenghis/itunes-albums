import React, { Component } from 'react';
import { Album } from './Album.js';
import { TracksModal } from './TracksModal.js';
import axios from 'axios';

export class AlbumList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      selectedCollectionId: 0,
      collection: {},
      tracks: []
    };

    this.clickAlbum = this.clickAlbum.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal() {
    this.setState({showModal: false});
  }

  clickAlbum(collectionId) {
    var self = this;
    const tracksUrl = 'https://itunes.apple.com/lookup?entity=song&id=' + collectionId;
    axios.get(tracksUrl, {
      transformResponse: axios.defaults.transformResponse.concat(function (data, headers) {
        return data.results;
      })
    })
    .then(function (response) {
      const wrappedTracks = response.data;

      if (wrappedTracks && wrappedTracks.length > 0) {
        var collection = wrappedTracks.filter(wrapper => {
          return wrapper.wrapperType === 'collection';
        })[0];

        var tracks = wrappedTracks.filter(wrapper => {
          return wrapper.wrapperType === 'track';
        })
        .sort(self.compareTracks);

        self.setState({
          collection: collection,
          tracks: tracks,
          showModal: true,
          selectedCollectionId: collectionId
        });
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  compareTracks(a, b) {
    if (a.discNumber !== b.discNumber){
      return (a.discNumber-b.discNumber);
    } else {
      return (a.trackNumber-b.trackNumber)
    }
  }

  render() {
    return (
      <div className="container">
        {
          this.props.albums.map(i => {
            return <Album key={i.collectionId}
               clickAlbum={this.clickAlbum}
               album={i}
            />
          })
        }
        <TracksModal showModal={this.state.showModal}
		  closeModal={this.closeModal}
		  collection={this.state.collection}
		  tracks={this.state.tracks} />
      </div>
    );
  }
}