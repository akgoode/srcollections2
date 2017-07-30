import React, { Component } from 'react';
import './Information.css';
import labels from '../../labels/sitecontent.json';

export class Information extends Component {
  render () {
    const dealers = labels.dealers;
    const dealerList = dealers.map((dealer, index) => {
      return <li key={index}>{dealer.name}</li>
    });
    return (
      <div className="titlebody">
        <div className="infoblock infoleft">
          <p>{labels.collectionInfo}</p>
        </div>
        <div className="infoblock inforight">
          <ul>
            {dealerList}
          </ul>
        </div>
      </div>
    );
  }
}
