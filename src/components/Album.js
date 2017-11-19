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
          Artist Name: <span>
            {album.artistName}
          </span><br />

          Album Name: <span>
            {album.collectionName}
          </span><br />

          Tracks: <span>
            {album.trackCount}
          </span><br />
        
          Year Released: <span>
            {new Date(album.releaseDate).getFullYear(album.year)}
          </span>
        </Col>
      </Row>
    );
}