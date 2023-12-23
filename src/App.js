import React, { Component } from 'react' ;
import './App.css'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./Header";
import Calculator from "./Calculator";
import NotFound from "./NotFound";
import SoonComponent from "./SoonComponent";
import {Alert} from "react-bootstrap";

// Home page
const Home = () => (
    <div className="App">
        <Header/>

    </div>
);



class App extends Component {
    render(){
        return(
            <Router>
                <Routes>
                    <Route path="/" Component={Home}/>
                    <Route path="/calculator" Component={Calculator}/>
                    <Route path="/soon" Component={SoonComponent}/>



                    <Route path="*" element={<NotFound/>} />
                </Routes>
            </Router>
        )
    }
}



export default App;
