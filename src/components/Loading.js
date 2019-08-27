import React from 'react';
import './styles.css';

const Loading = () => {
  return (
    <div className="container" style={{ paddingTop: '4rem' }}>
      <div className="spinner">
        <div className="bounce1" />
        <div className="bounce2" />
        <div className="bounce3" />
      </div>
    </div>
  );
};

export default Loading;
