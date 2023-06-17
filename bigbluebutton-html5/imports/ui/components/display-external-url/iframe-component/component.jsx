import React from 'react';
import PropTypes from 'prop-types';
import { IframeContainer } from './styles';

const IframeComponent = ({ url }) => (
  <IframeContainer>
    <iframe src={url} title="External URL" />
  </IframeContainer>
);

IframeComponent.propTypes = {
  url: PropTypes.string.isRequired,
};

export default IframeComponent;
