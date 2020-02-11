import React, { useState, Component } from 'react';
import { Input } from './Input'
import './App.css';
import Label from './Label';

//This code has been kept for reference
// function App() {
//   let [inputContent, setInputContent] = useState('Zied');

//   const getText = function (input) {
//     setInputContent(input.value);
//     input.value = '';
//   }

//   return (
//     <div>
//       <Input onButtonClick={getText} />
//       <Label text={inputContent} />
//     </div>
//   );
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputContent: props.intitalText
    };

    this.getText = this.getText.bind(this);
  }

  getText(input) {
    this.setState({
      inputContent: input.value
    });

    input.value = '';
  }

  render() {
    return (
      <div>
        <Input onButtonClick={this.getText} />
        <Label text={this.state.inputContent} />
      </div>
    );
  }
}

export default App;
