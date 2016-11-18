import React, { Component, PropTypes } from 'react'

class Main extends Component {
  constructor(props){
    super(props)
    this.state = {
      greeting: this.props.greeting
    }
  }

  render(){
    return(
      <div className="Main">
        <h1>{this.state.greeting}</h1>
      </div>
    )
  }
}

Main.defaultProps = {
  greeting: "Main component rendered successfully."
}

Main.propTypes = {
  greeting: PropTypes.string
}

export default Main
