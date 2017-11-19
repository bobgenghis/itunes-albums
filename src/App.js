import React, { Component } from 'react';
import { AlbumList } from './components/AlbumList.js';
import { SearchBar } from './components/SearchBar.js';
import './App.css';

class App extends Component {
	
  constructor(props) {
    super(props);

    this.state = { artist: '', albums: []};
    
	this.updateAlbums = this.updateAlbums.bind(this);
  }
  
  updateAlbums(newAlbums) {
    this.setState({
      albums: newAlbums
    });
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar onSubmit={this.updateAlbums} />
        </header>

		<AlbumList albums={this.state.albums}/>
      </div>
    );
  }
}

export default App;
