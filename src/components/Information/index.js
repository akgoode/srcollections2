import React, { Component } from 'react';
import './Information.css';
import labels from '../../labels/sitecontent.json';

export class Information extends Component {
  render () {
    return (
      <div className="infocontainer">
        <div className="infoblock infoleft">
          <p>{labels.collectionInfo}</p>
        </div>
        <div className="infoblock inforight">
          <div className="infoimgcontainer">
            <img src={require('../../images/sallybanner.jpg')} alt='sallybanner'/>
          </div>
          <div>
            <h3>Pieces by: </h3>
            <ul>
              {labels.dealers.map((dealer, index) => {
                return (
                  <div key={labels.dealers.indexOf(dealer) + 1} className="columnfix">
                    <li key={index}>{dealer.name}</li>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
