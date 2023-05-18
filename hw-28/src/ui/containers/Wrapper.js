import React from 'react';
import '../../index.css';

class Wrapper extends React.Component {
    render() {
        return (
            <main className="container">
                {this.props.children}
            </main>
        );
    }
}

export default Wrapper;