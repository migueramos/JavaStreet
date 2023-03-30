import React, {Component} from "react";
import Header from "./home/Header";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import LoginForm from "./login/LoginForm";
import EditorComponent from "./edit/EditorComponent";

class StreetApp extends Component{
    render(){
        return(
            <div className="StreetApp">
                <Router>
                    <>
                        <Header/>
                        <Routes>
                            <Route path='/' exact element={<LoginForm/>}/>
                            <Route path='/edit' exact element={<EditorComponent/>}/>
                        </Routes>
                    </>
                </Router>

            </div>
        )
    }
}

export default StreetApp;