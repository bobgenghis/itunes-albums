import React, { Component } from 'react';
import { Album } from './Album.js';
import { TracksModal } from './TracksModal.js';
import {Row, Col} from 'react-bootstrap';
import {Modal} from 'react-bootstrap';
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

  clickAlbum(collectionId) {
    this.getTracks(collectionId);
    this.setState({
        showModal: true,
        selectedCollectionId: collectionId
    });
  }

  closeModal() {
    this.setState({showModal: false});
  }

  getTracks(collectionId) {
    var self = this;
    const artist = this.state.searchText;
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
          tracks: tracks
        });
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  compareTracks(a, b) {
    if (a.discNumber != b.discNumber){
      return (a.discNumber-b.discNumber);
    } else {
      return (a.trackNumber-b.trackNumber)
    }
  }

  getLargeAlbumArtUrl(artworkUrl100) {
    return artworkUrl100 ?
      artworkUrl100.replace('100x100bb.', '300x300bb.')
      : null;
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
        <Modal show={this.state.showModal} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.collection.collectionName}</Modal.Title>
          </Modal.Header>
          <Row>
            <Col className="albumArt text-right" sm={6} xsHidden>
              <img src={this.getLargeAlbumArtUrl(this.state.collection.artworkUrl100)} alt="Album Art"/>
            </Col>
            <Col className="albumArt text-right" xs={4} smHidden mdHidden lgHidden>
              <img src={this.state.collection.artworkUrl100} alt="Album Art"/>
            </Col>
            <Col xs={8} sm={6}>
            {
              this.state.tracks.map((track, i) => {
                return (<Row key={track.trackId}>
                  <Col className="albumContent text-left" xs={8} sm={9} md={10}>
                    <Row>
                      <Col xs={2} className="text-right no-padding">{i+1}:</Col>
                      <Col xs={10}>{track.trackName}</Col>
                    </Row>
                  </Col>
                </Row>)
              })
            }
            </Col>
          </Row>)
        </Modal>
      </div>
    );
  }
}