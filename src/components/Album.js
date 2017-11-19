import React from 'react';
import {Row, Col} from 'react-bootstrap';
import './Album.css';

export const Album = (props) => {
  let album = props.album;
  return (
      <Row className="album">
        <Col className="albumArt text-right" xs={4} sm={3} md={2}>
          <img src={album.artworkUrl100} alt="Album Art"/>
        </Col>

        <Col className="albumContent text-left" xs={8} sm={9} md={10}>
		  <Row>
		    <Col xs={6} sm={3} md={2} className="text-right no-padding">Artist Name:</Col>
		    <Col xs={6} sm={9} md={10}>{album.artistName}</Col>
		  </Row>

		  <Row>
		    <Col xs={6} sm={3} md={2} className="text-right no-padding">Album Name:</Col>
		    <Col xs={6} sm={9} md={10}>{album.collectionName}</Col>
		  </Row>

		  <Row>
		    <Col xs={6} sm={3} md={2} className="text-right no-padding">Tracks:</Col>
		    <Col xs={6} sm={9} md={10}>{album.trackCount}</Col>
		  </Row>

		  <Row>
		    <Col xs={6} sm={3} md={2} className="text-right no-padding">Year Released:</Col>
		    <Col xs={6} sm={9} md={10}>{new Date(album.releaseDate).getFullYear(album.year)}</Col>
		  </Row>
        </Col>
      </Row>
    );
}