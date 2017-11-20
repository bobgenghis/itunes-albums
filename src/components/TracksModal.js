import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';
import {Modal} from 'react-bootstrap';

export class TracksModal extends Component {

  constructor(props) {
    super(props);

    this.closeModal = this.closeModal.bind(this);
  }

  closeModal() {
    this.props.closeModal();
  }
  
  getLargeAlbumArtUrl(artworkUrl100) {
    return artworkUrl100 ?
      artworkUrl100.replace('100x100bb.', '300x300bb.')
      : null;
  }

  render() {
    return (
        <Modal show={this.props.showModal} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.collection.collectionName}</Modal.Title>
          </Modal.Header>
          <Row>
            <Col className="albumArt text-right" sm={6} xsHidden>
              <img src={this.getLargeAlbumArtUrl(this.props.collection.artworkUrl100)} alt="Album Art"/>
            </Col>
            <Col className="albumArt text-right" xs={4} smHidden mdHidden lgHidden>
              <img src={this.props.collection.artworkUrl100} alt="Album Art"/>
            </Col>
            <Col xs={8} sm={6}>
            {
              this.props.tracks.map((track, i) => {
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
    );
  }
}