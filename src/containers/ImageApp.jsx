import React, { Component, PropTypes } from 'react';

// components
import ImageList from '../components/LazyLoadImg/ImageList';

export default class ImageApp extends Component {
  render() {
    return (
      <div>
        <ImageList />
      </div>
    )
  }
}