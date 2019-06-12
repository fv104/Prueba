import React from "react";
import Widget from './Widgets';


import { DropTarget } from 'react-dnd';


import { Source,  Collect } from '../helpers/DragAndDropConfig';

//Renders widgets on main canvas, blank on initial state
class MainWidgetScreen extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
          callingComponent: 'MainWidgetScreen',
        }
      }
 
  render() {
    const {connectDropTarget, hovered, item } = this.props;
    const backgroundColor = hovered ? '#b5ffcd' : 'white';
    return connectDropTarget(
          <div className="target" style={{background: backgroundColor}}>
          {
            this.props.widgetData.map((el) => {
                  return <Widget type={el.type}
                   icon={el.icon}
                   widgetId={el.widgetId}
                   caller={this.state.callingComponent} handleDrop={this.props.handleDrop} />
              })
          }
        </div>
      )
  }
}


export default DropTarget('drag', Source , Collect)(MainWidgetScreen);
