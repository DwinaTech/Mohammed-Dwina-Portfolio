import React from 'react';
import './spinner.scss';

function Spinner() {
    return (
      <div className="spinner">
        <div className="circle">
            <label>Loding...</label>
          <div className="circle-child" />
        </div>
      </div>
    );
}

export default Spinner;