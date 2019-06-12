import React from "react";

import Canvas from './MainWidgetScreen';
import RightPanel from './RightPanel';


// This component holds widget state. There are six unique widgets that go back and forth between the right panel and canvas
export default class WidgetContainer extends React.Component {
    constructor(props) {
        super(props)
          this.state = {
              canvasWidgets:[],
              rightPanelWidgets:[
                {
                    widgetId: 1,
                    type: 'Bar',
                    icon: 'fa-chart-bar',
                  },
                  {
                    widgetId: 2,
                    type: 'Pie',
                    icon: 'fa-chart-pie',
                  },
                  {
                    widgetId: 3,
                    type: 'Bar',
                    icon: 'fa-chart-bar',
                  },
                  {
                    widgetId: 4,
                    type: 'Pie',
                    icon: 'fa-chart-pie',
                  },
                  {
                    widgetId: 5,
                    type: 'Bar',
                    icon: 'fa-chart-bar',
                  },
                  {
                    widgetId: 6,
                    type: 'Pie',
                    icon: 'fa-chart-pie',
                  }
              ]
            }
            this.addWidget = this.addWidget.bind(this);
            this.removeWidget = this.removeWidget.bind(this);
            this.handleDropRender = this.handleDropRender.bind(this);
        }

  //removeWidget called by the handleDrop func removes widget with id from origin which is either RightPanel or canvas. 
  removeWidget(id, origin){
      let addOrPanelRemove;
      if (origin === 'Canvas'){
          addOrPanelRemove = this.state.canvasWidgets;
      }
      else {
          addOrPanelRemove = this.state.rightPanelWidgets;
      }
      const newState = addOrPanelRemove.filter( el => el.widgetId !== id );
      return newState;
  };

  //adds widget with id to target, is called by the handleDrop func 
  addWidget(id, target){
    let canvasOrPanelAdd;
    if (target === 'Canvas'){
        canvasOrPanelAdd = this.state.canvasWidgets;
    }
    else {
        canvasOrPanelAdd = this.state.rightPanelWidgets;

    }
    let newWidget;
    if (id % 2 === 1 || id === 1){
      newWidget = {
        widgetId: id,
        type: 'Bar',
        icon: 'fa-chart-bar'
      };
    }
    else {
        newWidget = {
            widgetId: id,
            type: 'Pie',
            icon: 'fa-chart-pie'
        };
    }
      canvasOrPanelAdd.push(newWidget);
      return canvasOrPanelAdd;
  };
  
  //Handle drop passes id, target and origin to remove and add when widghet drops. It logs widget movement before setting the new state of the component
  handleDropRender(id, origin, target){
    if ( origin === target){
      return false;
    }
    let newCanvasWidget;
    let newRightPanelWidget;
    if ( origin === 'Canvas'){
        newCanvasWidget = this.removeWidget(id, origin);
        newRightPanelWidget = this.addWidget(id, target);
    }
    else {
        newCanvasWidget = this.addWidget(id, target);
        newRightPanelWidget = this.removeWidget(id, origin);
    }
    console.log(`Widget ${id} moved from ${origin} to ${target}`);
    this.setState({canvasWidgets: newCanvasWidget, rightPanelWidgets: newRightPanelWidget});
  };


  render() {
    return (
      <div id={`container-${this.props.identifier}`} className="contain">
        <div className="contain-button">
          <span className="name">
            {this.props.canvasName}
          </span>
          <span className="buttons">
            <button>Save</button>
            <button>Save New Version</button>
            <button>Submit For Verification</button>
          </span>
        </div>
        <Canvas handleDrop={this.handleDropRender} widgetData={this.state.canvasWidgets} />
        <RightPanel handleDrop={this.handleDropRender} widgetData={this.state.rightPanelWidgets} />
      </div>
    )
  }
}
