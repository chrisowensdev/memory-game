import React, { Component } from 'react';
import './MemoryCard.css';

export class MemoryCard extends Component {
    render() {
        return (
            <div>
                <div className='MemoryCard'>
                    <img
                        src='https://www.digitalcrafts.com/img/digitalcrafts-logo-white-y.png'
                        alt='digital-crafts-logo'
                    />
                </div>
            </div>
        );
    }
}

export default MemoryCard;
