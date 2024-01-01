import React, {Component} from 'react' ;
import './components/css/App.css'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Calculator from "./components/Calculator";
import NotFound from "./components/NotFound";
import SoonComponent from "./components/SoonComponent";

// Home page
const Home = () => (
    <div className="App">
        <Header/>

    </div>
);



class App extends Component {
    render() {



        return (
            <Router>
                <Routes>
                    <Route path="/" Component={Home}/>
                    <Route path="/calculator" Component={Calculator}/>
                    <Route path="/soon" Component={SoonComponent}/>


                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </Router>
        )
    }
}


export default App;
