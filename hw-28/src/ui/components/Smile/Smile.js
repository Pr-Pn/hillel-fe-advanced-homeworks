import React from 'react';
import './Smile.module.css';


export default class Smile extends React.Component {

    render() {
        const {id, count, handleClick, logo} = this.props;
        return (
            <span>
                <img className="smile" onClick={() => handleClick(id)} src={logo} alt="Logo"/>
                <p>{count}</p>
            </span>
        );
    }
}

