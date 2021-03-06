import React, { Component } from 'react';
import './MemoryCard.css';

class MemoryCard extends Component {
    render() {
        const memoryCardInnerClass = this.props.isFlipped
            ? 'MemoryCardInner flipped'
            : 'MemoryCardInner';

        return (
            <div>
                <div className='MemoryCard' onClick={this.props.pickCard}>
                    <div className={memoryCardInnerClass}>
                        <div className='MemoryCardBack'>
                            <img
                                src='https://www.digitalcrafts.com/img/digitalcrafts-logo-white-y.png'
                                alt='digital-crafts-logo'
                            />
                        </div>
                        <div className='MemoryCardFront'>
                            {this.props.symbol}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MemoryCard;
