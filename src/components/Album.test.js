import React from 'react';
import ReactDOM from 'react-dom';
import {Album} from './Album';

describe('<AlbumList />', () => {
  const testAlbum = {
    "wrapperType": "collection",
    "collectionType": "Album",
    "artistId": 488289,
    "collectionId": 1143266675,
    "amgArtistId": 4885,
    "artistName": "Megadeth",
    "collectionName": "The World Needs a Hero",
    "collectionCensoredName": "The World Needs a Hero",
    "artistViewUrl": "https://itunes.apple.com/us/artist/megadeth/488289?uo=4",
    "collectionViewUrl": "https://itunes.apple.com/us/album/the-world-needs-a-hero/1143266675?uo=4",
    "artworkUrl60": "http://is2.mzstatic.com/image/thumb/Music71/v4/02/1e/4b/021e4bee-5b94-d571-1144-a7786d1e27d6/source/60x60bb.jpg",
    "artworkUrl100": "http://is2.mzstatic.com/image/thumb/Music71/v4/02/1e/4b/021e4bee-5b94-d571-1144-a7786d1e27d6/source/100x100bb.jpg",
    "collectionPrice": 7.99,
    "collectionExplicitness": "notExplicit",
    "trackCount": 12,
    "copyright": "℗ 2001 Sanctuary Records Group Ltd., a BMG Company",
    "country": "USA",
    "currency": "USD",
    "releaseDate": "2001-05-14T07:00:00Z",
    "primaryGenreName": "Metal"
  };

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Album album={testAlbum} />, div);
  });
});