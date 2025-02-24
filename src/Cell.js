import React from 'react'

export default class Cell extends React.Component{
    constructor(props) {
      super(props)
      this.state = { color: this.props.value }
    }
    changeColor = () => {
      const red = "#333"
      this.setState({
        color: red
      })
    }
    render(){
      return (
        <div className="cell" style={{backgroundColor: this.state.color} onClick={this.changeColor}}></div>
      )
    }
    
}
