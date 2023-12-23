import React from 'react';
import './App.css';
import './404.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";


function NotFound() {

    return (

        <div className="row justify-content-center">
            <Header/>
            <div className="col-md-12 col-sm-12">
                <div className="card shadow-lg border-0 rounded-lg mt-5 mx-auto" >
                    <h3 className="card-header display-1 text-muted text-center">
                        404
                    </h3>

                    <span className="card-subtitle mb-2 text-muted text-center">
                Diese Seite wurde nicht gefunden
            </span>

                    <div className="card-body mx-auto">
                        <a type="button" href="/"
                           className="btn btn-sm btn-info text-white"> Nach Hause </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NotFound;