import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ItunesAlbums from './ItunesAlbums';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ItunesAlbums />, document.getElementById('root'));
registerServiceWorker();
