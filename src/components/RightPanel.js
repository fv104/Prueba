import React from "react";
import Widget from './Widgets';

import { DropTarget } from 'react-dnd';


import { rightPanelSource,  rightPanelCollect } from '../helpers/DragAndDropConfig';


class RightPanel extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
          callingComponent: 'RightPanel',
      }
    }

  render() {
    const {connectDropTarget, hovered, item } = this.props;
    const backgroundColor = hovered ? '#b5ffcd' : 'white';
    return connectDropTarget(
      <div className="right-panel" style={{background: backgroundColor}}>
      <div className="above-widget">
        <span className="widget-header">Widgets</span>
        <input placeholder="search" type="text" />
      </div>
          {
            this.props.widgetData.map((el) => {
              return <Widget type={el.type} icon={el.icon} widgetId={el.widgetId} caller={this.state.callingComponent} handleDrop={this.props.handleDrop} />
            })
          }
      </div>
    )
  }
}

//React dnd wraps component in context
export default DropTarget('drag', rightPanelSource , rightPanelCollect)(RightPanel);

