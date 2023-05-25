"use client";

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from "./ui/components/header";
import Footer from "./ui/components/footer";
import Main from "./ui/pages/Main";
import Contacts from "./ui/pages/Contacts";
import About from "./ui/pages/About";
import ErrorBoundary from "./ui/containers/ErrorBoundary";

function App() {
    return (
        <ErrorBoundary>
            <BrowserRouter>
                <Header/>
                {/*{{}}*/}
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/contacts" element={<Contacts/>}/>
                    <Route path="/about" element={<About/>}/>
                </Routes>

                <Footer/>
            </BrowserRouter>
        </ErrorBoundary>
    )
}

export default App;