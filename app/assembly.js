import React from 'react';
import ReactDOM from 'react-dom';
import "./assembly.css";
import batteries from "./Batteries.png";
var btnC = ["homeButton", "scratchButton", "wireButton", "itemHuntButton"];


// buttons navigation on the top screen
class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={this.props.divN}>
        <Button nav={btnC[0]}/>
        <Button nav={btnC[1]} />
        <Button nav={btnC[2]}/>
        <Button nav={btnC[3]}/>
      </div>
    )
  }
}

// navigation buttons
class Button extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <button className={this.props.nav}></button>
    )
  }
}

// draggable images items
class Item extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <img 
    className='draggable'
    draggable ={this.props.draggable}
    className={this.props.imgC}
    src={this.props.item}
    alt={this.props.desc}
    id={this.props.imgId}
    />
  }
}

// draggable item area
class DragElement extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='draggable-elements'>
      </div>
    )
  }
}

// left square that match the Item that is dragged
class ToolElement extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='tool-element'>
      </div>
    )
  }
}

// right square where player drops Items 
class InfoElement extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='info-elements'>
      </div>
    )
  }
}

// holds the classes match and dropElement
class ItemBox extends React.Component {
  render() {
    return (
      <div>
        <ToolElement />
        <InfoElement />
      </div>
    )
  }
}

// holds all the main classes together
class Container extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={this.props.con}>
        <Navigation divN={'navigation'}/>
        <DragElement />
        <ItemBox />
      </div>
    )
  }
}

// renders everything Item Hunt screen
class Assembly extends React.Component {
  render() {
    return (
      <Container con={'container'} />
    )
  }
}

ReactDOM.render(
  <Assembly />, 
  document.getElementById("root"));