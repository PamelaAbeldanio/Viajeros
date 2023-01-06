import React from 'react';

function LastMovieInDb(props){
    let lastDestiny = props.destinys.length > 0 ? props.destinys[props.destinys.length - 1] : {name: "", detail: "", img: ""}
    
    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Ultimo destino cargado</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <h2>{lastDestiny.name}</h2>
                    </div>
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4 " style={{width: 40 +'rem'}} src= {'http://localhost:3001/img/' + lastDestiny.img} alt= {lastDestiny.name}/>
                    </div>
                    <p>{lastDestiny.detail}</p>
                    <a className="btn btn-warning" target="_blank" rel="nofollow" href="/">Ver detalle destino</a>
                </div>
            </div>
        </div>
    )
}

export default LastMovieInDb;
