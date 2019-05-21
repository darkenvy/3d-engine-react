import React from 'react';
import Styles from './styles';
import cube from '../../assets/cube.json';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.width = 212 * 2;
    this.heigth = 120 * 2;
    this.ctx = {};
    this.pixels = {};
    
    this.world = [];

    console.log('cube', cube)
  }

  componentDidMount() {
    // this.pixels = this.ctx.createImageData(this.width, this.heigth);
  }

  render() {
    return (
      <Styles>
        <canvas
          id="game"
          width="424"
          height="240"
          ref={node => {
            this.ctx = node.getContext('2d');
          }}
        />
      </Styles>
    )
  }
}

export default App;
