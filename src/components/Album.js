import React from 'react';

export const Album = (props) => {
  let album = props.album;
  return (
      <div>
	    <img src={album.artworkUrl100} alt="Album Art"/>
		
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
      </div>
    );
}