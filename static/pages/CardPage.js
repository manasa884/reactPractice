import React from 'react';
import Card from '../components/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from '../components/Button/FlatButton';


export default class CardPage extends React.Component {
  render() {
    return(
      <div align="center">
      <MuiThemeProvider>
        <Card style={{maxWidth:345}}>
          <Card.Header title="Card Title"/>
          <Card.Media overlay={<Card.Title title="Overlay title" subtitle="Overlay subtitle" />}>
          <img src="http://www.liveanimalslist.com/reptiles/images/lizard-eye-view.jpg" alt=""/>
          </Card.Media>
          <Card.Text>
            This is some sample text. It could be a description
            or attributes or whatever you want to put in here.
          </Card.Text>
          <Card.Actions>
            <FlatButton label="Button 1"/>
            <FlatButton label="Button 2" primary={true}/>
          </Card.Actions>
        </Card>
        </MuiThemeProvider>
      </div>

    );
  }
}
