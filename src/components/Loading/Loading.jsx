import React from 'react';
import './Loading.css';

const Loading = ({ message }) => {
  return (
    <div className="loading-container">
      <div className="cube-loader">
        <div className="cube-top" />
        <div className="cube-wrapper">
          <span style={{ "--i": 0 }} className="cube-span" />
          <span style={{ "--i": 1 }} className="cube-span" />
          <span style={{ "--i": 2 }} className="cube-span" />
          <span style={{ "--i": 3 }} className="cube-span" />
        </div>
      </div>

      {message && <p className="loading-message">{message}</p>}

    </div>


  );
}


export default Loading;
