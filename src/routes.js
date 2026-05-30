import React from "react"
import { BrowserRouter, Routes,  Route } from 'react-router-dom'
import Home from './containers/Home'
import Users from './containers/Users'


function AppRoutes() {
    return (
        <BrowserRouter>

            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="/users" element={<Users />}></Route>
            </Routes>



        </BrowserRouter>
    )
}

export default AppRoutes