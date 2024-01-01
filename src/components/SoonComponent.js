import React from 'react';
import './css/App.css';
import './css/404.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";


function SoonComponent() {

    return (
        <div className="row justify-content-center">
            <Header/>
            <div className="col-md-12 col-sm-12">
                <div className="card shadow-lg border-0 rounded-lg mt-5 mx-auto" >
                    <h3 className="card-header display-1 text-muted text-center">
                        Soon...
                    </h3>

                    <span className="card-subtitle mb-2 text-muted text-center">
                Diese Seite ist in Entwicklung
            </span>

                    <div className="card-body mx-auto">
                        <a type="button" href="/public"
                           className="btn btn-sm btn-info text-white"> Nach Hause </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SoonComponent;