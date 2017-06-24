import React, { Component, PropTypes } from "react";

// components
import ImageItem from './ImageItem';

export default class ImageList extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      viewport: {
        top: 0,
        height: 0
      }
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.updateViewport, false);
    window.addEventListener('resize', this.updateViewport, false);
    this.updateViewport();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.updateViewport);
    window.removeEventListener('resize', this.updateViewport);
  }

  updateViewport = () => {
    this.setState({
      viewport: {
        top: window.pageYOffset,
        height: window.innerHeight
      }
    });
  }

  render() {
    return (
      <div>
        { items.map(( item, index ) =>
          <ImageItem 
            { ...item }
            key = { index }
            viewport = { this.state.viewport }
          />
        )}
      </div>
    )
  }
}

var items = [
  { title: 'Kitten 1', image: 'http://placekitten.com/311/313' },
  { title: 'Kitten 2', image: 'http://placekitten.com/302/302' },
  { title: 'Kitten 3', image: 'http://placekitten.com/303/303' },
  { title: 'Kitten 4', image: 'http://placekitten.com/304/304' },
  { title: 'Kitten 5', image: 'http://placekitten.com/305/305' },
  { title: 'Kitten 6', image: 'http://placekitten.com/306/306' },
  { title: 'Kitten 7', image: 'http://placekitten.com/307/307' },
  { title: 'Kitten 8', image: 'http://placekitten.com/308/308' },
  { title: 'Kitten 9', image: 'http://placekitten.com/310/310' },
  { title: 'Kitten 10', image: 'http://placekitten.com/311/311' }
];