import React from "react";
import '../../index.css';

import logo from '../img/831e0213fccc0160f97a440bf5fd3251.svg';

export default class EditItemButton extends React.Component {

    render() {
        const { onEditBtnClick } = this.props;
        return (
            <img className="change_btn" src={logo} onClick={onEditBtnClick} alt=""/>
        )
    }
}