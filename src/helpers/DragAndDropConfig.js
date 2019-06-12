
//Functions for drag n drop dropSource and dropTarget components


//Canvas
export const Source = {
    drop(props, monitor, component) {
      return {
        target: 'Canvas'
      }
    }
  };
  
export const Collect = (connect, monitor) => {
    return {
        connectDropTarget: connect.dropTarget(),
        hovered: monitor.isOver(),
        item: monitor.getItem()
    }
};

//RightPanel
export const rightPanelSource = {
    drop(props, monitor, component) {
      return {
        target: 'RightPanel'
      }
    }
  };
  
  export const rightPanelCollect = (connect, monitor) => {
    return {
      connectDropTarget: connect.dropTarget(),
      hovered: monitor.isOver(),
      item: monitor.getItem()
    }
  };
  
//Widget
export const widgetSource = {
    beginDrag(props){
        return {};
    },
    endDrag(props, monitor, component){
        if ( !monitor.didDrop() ){
        return false;
        }
        const dropTarget = monitor.getDropResult().target;
        const id = props.widgetId;
        const origin = props.caller;
        props.handleDrop(id, origin, dropTarget);
        return;
    }
};

export const widgetCollect = (connect, monitor) => {
    return {
        connectDragSource: connect.dragSource(),
        connectDragPreview: connect.dragPreview(),
        isDragging: monitor.isDragging()
    }
};