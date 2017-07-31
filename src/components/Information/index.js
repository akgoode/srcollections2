import React, { Component } from 'react';
import './Information.css';
import labels from '../../labels/sitecontent.json';

export class Information extends Component {
  render () {
    return (
      <div className="titlebody">
        <div className="infoblock infoleft">
          <p>{labels.collectionInfo}</p>
        </div>
        <div className="infoblock inforight">
          <ul>
            {labels.dealers.map((dealer, index) => {
              return <li key={index}>{dealer.name}</li>
            })}
          </ul>
        </div>
      </div>
    );
  }
}
