import React from "react";
import './styles/global.css';
import {withLayout} from "./layout/Layout";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import UserPage from "./pages/UserPage"
import UserProfilePage from "./pages/UserProfilePage";

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path='/' element={<UserPage/>} />
                    <Route path='/:id' element={<UserProfilePage/>} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default withLayout(App);
