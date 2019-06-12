import React from "react";



export default class LeftButton extends React.Component {

  render() {
    return (
            <button onClick={()=>
            {this.props.clickEvent(this.props.identifier)}}
                    id={`button-${this.props.identifier}`}
                    className="left-button">Screen Name: {this.props.canvasName}</button>
    )
  }
}
