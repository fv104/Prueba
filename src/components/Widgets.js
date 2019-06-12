import React from "react";
import { DragSource } from 'react-dnd';


import { widgetSource,  widgetCollect } from '../helpers/DragAndDropConfig';


class Widget extends React.Component {
      
  render() {

    const { isDragging, connectDragSource, item } = this.props;

    return connectDragSource (
      <div id={`widget-${this.props.widgetId}`} className="widget">
        <div className="chart-icon">
          <i className={`fas ${this.props.icon}`}></i>
        </div>
        <div className="graph-type">{this.props.type}</div>
        <div className="widget-bottom">
          <i class="fas fa-bookmark"></i>
          <i class="fas fa-share"></i>
        </div>
      </div>
    );
  }
};


export default DragSource('drag', widgetSource, widgetCollect )(Widget);
