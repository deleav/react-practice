import React, { Component, PropTypes } from "react";

export default class ImageItem extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      showImage: false
    }
  }

  componentDidUpdate = () => {
    if ( !this.state.showImage ) {  
      let el = this.refs.img;
      const elTop = el.offsetTop;
      const elHeight = el.offsetHeight;
      const viewTop = this.props.viewport.top;
      const viewHeight = this.props.viewport.height;
      if ( ( elTop + elHeight ) >= viewTop && ( elTop + elHeight ) <= ( viewTop + viewHeight )  )
        this.setState({
          showImage: true
        })
    }

    return ;
  }

  render() {
    let img = this.state.showImage ? this.props.image : '';
    return (
      <div>
        <img ref="img" src={ img } alt={ this.props.title } height="300" width="300" />
      </div>
    )
  }
}

ImageItem.propTypes = {
  viewport: PropTypes.shape({
    top: PropTypes.number.isRequired, 
    height: PropTypes.number.isRequired
  })
}