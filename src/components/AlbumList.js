import React from 'react';
import { Album } from './Album.js';

export const AlbumList = (props) => {
    return (
	  <div className="container">
		{ 
		  props.albums.map(i => {
            return <Album key={i.collectionId}
		       album={i}
		    />
          })
		}
	  </div>
    );
}