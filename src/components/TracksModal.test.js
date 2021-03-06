import React from 'react';
import ReactDOM from 'react-dom';
import {TracksModal} from './TracksModal';

describe('<TracksModal />', () => {
  const collection = {
    "wrapperType": "collection",
    "collectionType": "Album",
    "artistId": 3996865,
    "collectionId": 1145498274,
    "amgArtistId": 4906,
    "artistName": "Metallica",
    "collectionName": "Hardwired…To Self-Destruct (Deluxe)",
    "collectionCensoredName": "Hardwired…To Self-Destruct (Deluxe)",
    "artistViewUrl": "https://itunes.apple.com/us/artist/metallica/3996865?uo=4",
    "collectionViewUrl": "https://itunes.apple.com/us/album/hardwired-to-self-destruct-deluxe/1145498274?uo=4",
    "artworkUrl60": "http://is1.mzstatic.com/image/thumb/Music22/v4/74/14/2c/74142c23-9686-3cf2-a34b-8017f5873694/source/60x60bb.jpg",
    "artworkUrl100": "http://is1.mzstatic.com/image/thumb/Music22/v4/74/14/2c/74142c23-9686-3cf2-a34b-8017f5873694/source/100x100bb.jpg",
    "collectionPrice": 14.99,
    "collectionExplicitness": "explicit",
    "contentAdvisoryRating": "Explicit",
    "trackCount": 26,
    "copyright": "℗ 2016 Blackened Recordings",
    "country": "USA",
    "currency": "USD",
    "releaseDate": "2016-11-18T08:00:00Z",
    "primaryGenreName": "Metal"
  };
  
  const tracks = [{
    "wrapperType": "track",
    "kind": "song",
    "artistId": 3996865,
    "collectionId": 1145498274,
    "trackId": 1145498517,
    "artistName": "Metallica",
    "collectionName": "Hardwired…To Self-Destruct (Deluxe)",
    "trackName": "Hardwired",
    "collectionCensoredName": "Hardwired…To Self-Destruct (Deluxe)",
    "trackCensoredName": "Hardwired",
    "artistViewUrl": "https://itunes.apple.com/us/artist/metallica/3996865?uo=4",
    "collectionViewUrl": "https://itunes.apple.com/us/album/hardwired/1145498274?i=1145498517&uo=4",
    "trackViewUrl": "https://itunes.apple.com/us/album/hardwired/1145498274?i=1145498517&uo=4",
    "previewUrl": "https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview71/v4/58/9c/5b/589c5b9b-2cd3-1b60-b621-a7227b1ef036/mzaf_9032912039850285597.plus.aac.p.m4a",
    "artworkUrl30": "http://is1.mzstatic.com/image/thumb/Music22/v4/74/14/2c/74142c23-9686-3cf2-a34b-8017f5873694/source/30x30bb.jpg",
    "artworkUrl60": "http://is1.mzstatic.com/image/thumb/Music22/v4/74/14/2c/74142c23-9686-3cf2-a34b-8017f5873694/source/60x60bb.jpg",
    "artworkUrl100": "http://is1.mzstatic.com/image/thumb/Music22/v4/74/14/2c/74142c23-9686-3cf2-a34b-8017f5873694/source/100x100bb.jpg",
    "collectionPrice": 14.99,
    "trackPrice": 1.29,
    "releaseDate": "2016-08-18T07:00:00Z",
    "collectionExplicitness": "explicit",
    "trackExplicitness": "explicit",
    "discCount": 3,
    "discNumber": 1,
    "trackCount": 6,
    "trackNumber": 1,
    "trackTimeMillis": 191320,
    "country": "USA",
    "currency": "USD",
    "primaryGenreName": "Metal",
    "contentAdvisoryRating": "Explicit",
    "isStreamable": true
  },
  {
    "wrapperType": "track",
    "kind": "song",
    "artistId": 3996865,
    "collectionId": 1145498274,
    "trackId": 1145498648,
    "artistName": "Metallica",
    "collectionName": "Hardwired…To Self-Destruct (Deluxe)",
    "trackName": "Atlas, Rise!",
    "collectionCensoredName": "Hardwired…To Self-Destruct (Deluxe)",
    "trackCensoredName": "Atlas, Rise!",
    "artistViewUrl": "https://itunes.apple.com/us/artist/metallica/3996865?uo=4",
    "collectionViewUrl": "https://itunes.apple.com/us/album/atlas-rise/1145498274?i=1145498648&uo=4",
    "trackViewUrl": "https://itunes.apple.com/us/album/atlas-rise/1145498274?i=1145498648&uo=4",
    "previewUrl": "https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview71/v4/63/ef/04/63ef0433-706c-20db-d53e-918f65919cf6/mzaf_2934237534645319748.plus.aac.p.m4a",
    "artworkUrl30": "http://is1.mzstatic.com/image/thumb/Music22/v4/74/14/2c/74142c23-9686-3cf2-a34b-8017f5873694/source/30x30bb.jpg",
    "artworkUrl60": "http://is1.mzstatic.com/image/thumb/Music22/v4/74/14/2c/74142c23-9686-3cf2-a34b-8017f5873694/source/60x60bb.jpg",
    "artworkUrl100": "http://is1.mzstatic.com/image/thumb/Music22/v4/74/14/2c/74142c23-9686-3cf2-a34b-8017f5873694/source/100x100bb.jpg",
    "collectionPrice": 14.99,
    "trackPrice": 1.29,
    "releaseDate": "2016-10-31T07:00:00Z",
    "collectionExplicitness": "explicit",
    "trackExplicitness": "notExplicit",
    "discCount": 3,
    "discNumber": 1,
    "trackCount": 6,
    "trackNumber": 2,
    "trackTimeMillis": 388625,
    "country": "USA",
    "currency": "USD",
    "primaryGenreName": "Metal",
    "isStreamable": true
  }];

  it('renders without crashing', () => {
	const div = document.createElement('div');
    ReactDOM.render(<TracksModal collection={collection} tracks={tracks} />, div);
  });
});
