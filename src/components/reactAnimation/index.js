import React from 'react';
import { bounce } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
 
const styles = {
  bounce: {
    animation: 'x 1s',
    animationName: Radium.keyframes(bounce, 'bounce')
  }
}
 
class Test extends React.Component {
  render() {
      return (
        <StyleRoot>
            <div className="test" style={styles.bounce}>
              React-animations
            </div>
        </StyleRoot>
      )

  }
}

export default Test;