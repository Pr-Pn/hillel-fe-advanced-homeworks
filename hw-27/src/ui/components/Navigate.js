import React from 'react';

export default class Navigate extends React.Component {
    render() {
        let url="";
        return (
            <div>
                <a href={url}>Gallery</a>
                <a href={url}>About</a>
                <a href={url}>Contact</a>
            </div>

        )
    }
}