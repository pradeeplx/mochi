import React from 'react';
import Modal from '../Modal';
import ImgAnimation from '../../assets/ANIMATION.gif';

export const MochifyBounce = () =>
  <Modal id="mochify-bounce-modal" backdrop show={false}>
    <img className="img-responsive mochify-bounce" src={`/${ImgAnimation}`} />
      <h2>MOCHIFICATION IN PROGRESS...</h2>
  </Modal>;

export default MochifyBounce;
