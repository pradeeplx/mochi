import React from 'react';
import Modal from '../Modal';
import ImgAnimation from '../../assets/ANIMATION.gif';

export const MochifyBounce = () =>
  <Modal id="mochify-bounce-modal" backdrop show={false}>
    <img className="img-responsive mochify-bounce" src={`/${ImgAnimation}`} />
  </Modal>;

export default MochifyBounce;
