import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import FurnitureGallery from '../../features/FurnitureGallery/FurnitureGalleryContainer';
import Promotion from '../../features/Promotion/Promotion';

const Homepage = () => (
  <div className={styles.root}>
    <FeatureBoxes />
    <Promotion />
    <NewFurniture />
    <FurnitureGallery />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
