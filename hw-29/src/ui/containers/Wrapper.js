import React from "react";
import '../../index.css';

export default class Wrapper extends React.Component {
    render() {
        return (
            <div className="container">
                {this.props.children}
            </div>
        )
    }
}