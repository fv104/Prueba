import 'babel-polyfill';
import React from "react";
import ReactDOM from "react-dom";

//React dnd 
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

//css entry
import './styles/main.scss';

//components
import Navbar from './components/Navbar';
import WidgetContainer from './components/WidgetContainer';
import LeftButton from './components/LeftButton';

//Helpers
import {newIdentifier} from './helpers/FindNewIdentifier';


//Main component
class App extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        notifications: 4,
        emails: 2,
        canvas: [{
          identifier: 1,
          canvasName: "Screen",
        }]
      }
      this.addCanvas = this.addCanvas.bind(this);
    }

  //Method that shows and hides main canvas area depending on button clicked
  toggleVisibility(caller) {
      let elements = document.getElementsByClassName('canvas-contain')
      for (var i = 0; i < elements.length; i++){
          elements[i].style.display = 'none';
      }
      if (caller)
      {
        document.getElementById(`canvas-${caller}`).style.display = 'block';
      }
  }

  //adds new canvas to dom. Calls identifier helper to add unique id to canvas. Pushes canvas to state and calls visibility toggel
  addCanvas() {
    if (this.state.canvas.length === 7){
      return false;
    }
    let newCanvasName = document.getElementById('canvas-name').value;
    if ( newCanvasName === ""){
      newCanvasName = "Screen";
    }
    const newIdentifierNumber = newIdentifier(this.state.canvas);

    const newCanvas = {
      identifier: newIdentifierNumber,
      canvasName: newCanvasName,
    }

    this.setState({ canvas: [...this.state.canvas, newCanvas] });
    this.toggleVisibility();
  }

  render() {
    return (
        <div className="content">
            <Navbar emails={this.state.emails} notifications={this.state.notifications} />
            <div className="left-panel">
              <div class="add-canvas">
                  <button onClick={this.addCanvas} >+Add</button>
                  <input placeholder="Enter Name" id="canvas-name" type="text" />
              </div>
              {
                this.state.canvas.map((el, i) => {
                  return (
                        <LeftButton key={i} clickEvent={this.toggleVisibility} identifier={el.identifier} canvasName={el.canvasName} />                    
                  )
                })
              }
            </div>
              {
                this.state.canvas.map((el, i) => {
                  return (
                        <WidgetContainer key={i} identifier={el.identifier} canvasName={el.canvasName} />
                  )
                })
              }
        </div>
    )
  }
}

// Adds main component to drag n drop context and mounts the new class
const AppDnd = DragDropContext(HTML5Backend)(App);
const mountNode = document.getElementById("app");
ReactDOM.render(<AppDnd />, mountNode);

