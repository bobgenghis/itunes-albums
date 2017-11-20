import React from 'react';
import ReactDOM from 'react-dom';
import ItunesAlbums from './ItunesAlbums';

describe('<ItunesAlbums />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ItunesAlbums />, div);
  });
});