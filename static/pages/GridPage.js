import React from 'react';
import GridList from '../components/Grid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const tilesData = [
  {
    img: 'http://www.liveanimalslist.com/reptiles/images/lizard-eye-view.jpg',
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img: 'http://www.liveanimalslist.com/reptiles/images/lizard-eye-view.jpg',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: 'http://www.liveanimalslist.com/reptiles/images/lizard-eye-view.jpg',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: 'http://www.liveanimalslist.com/reptiles/images/lizard-eye-view.jpg',
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    img: 'http://www.liveanimalslist.com/reptiles/images/lizard-eye-view.jpg',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: 'http://www.liveanimalslist.com/reptiles/images/lizard-eye-view.jpg',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: 'http://www.liveanimalslist.com/reptiles/images/lizard-eye-view.jpg',
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: 'http://www.liveanimalslist.com/reptiles/images/lizard-eye-view.jpg',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];

export default class GridPage extends React.Component {
  render() {
    return(
      <div align="center">
      <h1> Grid Page </h1>
      <MuiThemeProvider>
        <GridList cellHeight={180} style={{width:700, height:700, overflowY:"auto"}}>
          {tilesData.map((tile) => (
              <GridList.Tile
                  key={tile.img}
                  title={tile.title}
                  subtitle={<span>by <b>{tile.author}</b></span>}
              >
                <img src={tile.img}/>
              </GridList.Tile>
          ))}
        </GridList>
      </MuiThemeProvider>
      </div>
    );
  }
}
