import '../../index.css';
import React from 'react';

import Header from '../components/Header';
import Container from '../components/Container';
import Navigate from '../components/Navigate';

class App extends React.Component {
    render() {
        return (
            <>
                <Header />
                <Navigate />
                <body>
                    <Container />
                </body>
            </>
        );
    }
}

export default App;
