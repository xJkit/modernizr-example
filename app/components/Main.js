import React, { Component, PropTypes } from 'react'
import MobileDetect from 'mobile-detect'
// Components
import Desktop from 'Desktop'
import Phone from 'Phone'
import Tablet from 'Tablet'


class Main extends Component {

  renderByDevice(ua) {
    const md = new MobileDetect(ua);
    if (md.phone()) {
      return <Phone />
    } else if (md.tablet()) {
      return <Tablet />
    } else {
      return <Desktop />
    }
  }



  render(){
    return(
      <div className="Main">
        {this.renderByDevice(window.navigator.userAgent)}
      </div>
    )
  }
}



Main.propTypes = {
  children: PropTypes.any,
}

export default Main
