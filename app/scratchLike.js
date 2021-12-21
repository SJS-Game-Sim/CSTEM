import React from 'react';
import ReactDOM from 'react-dom';
import "./scratchLike.css";
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
    draggable={this.props.draggable}
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

// right square where player drops Items 
class DropElement extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='droppable-elements'></div>
    )
  }
}

// top div that goes above navigation
class TopBox extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div className='topBox'>
        <DragElement />
        <DropElement />
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
        <TopBox />
        <Navigation divN={'navigation'}/>
      </div>
    )
  }
}

// renders everything Item Hunt screen
class ScratchLike extends React.Component {
  render() {
    return (
      <Container con={'container'} />
    )
  }
}

ReactDOM.render(
  <ScratchLike />, 
  document.getElementById("root"));