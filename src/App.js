import React, { Component } from 'react';
import './App.css';
import BigBox from "./components/bigBox";
import ukpol from "./ukpol.jpg";
import china from "./china.jpg";
import uk from "./uk.jpg";
import golf from "./golf.jpg";
import boxing from "./boxing.jpeg";
import football from "./football.jpg";


class App extends Component {

  state = {
    boxes: [
      {sectionHeader:"News headlines", imageSrc1: ukpol, imageSrc2:china, imageSrc3:uk, headline1:"Example of a news story", category1: "UK POLITICS", headline2: "A different news story", category2:"CHINA", headline3: "And another one", category3:"UK"},
      {sectionHeader:"Sport headlines", imageSrc1:golf, imageSrc2:boxing, imageSrc3: football, headline1:"A big sports story", category1: "GOLF", headline2: "Something that happened", category2:"BOXING", headline3: "This happened as well", category3:"FOOTBALL"}
    ]
  }

  render() {
    const bothBoxes = this.state.boxes.map((boxes, index)=>{
      return <BigBox sectionHeader = {boxes.sectionHeader} imageSrc1 = {boxes.imageSrc1} imageSrc2 = {boxes.imageSrc2} imageSrc3 = {boxes.imageSrc3} headline1 = {boxes.headline1} headline2 = {boxes.headline2} headline3 = {boxes.headline3} category1 = {boxes.category1} category2 = {boxes.category2} category3 = {boxes.category3} key = {index} />
    })
    return (
      <div className="App">
      <div className = "wholeSection">
        {bothBoxes}
      </div>

      </div>
    );
  }
}
export default App;
