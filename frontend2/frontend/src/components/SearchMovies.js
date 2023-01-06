import React, { useState, useRef } from 'react';

function SearchMovies(props){

	const [keyword, setKeyword] = useState('');
	const busqueda = useRef(null)

	const handleSubmit = (e) => {
		e.preventDefault()

		const inputValue = busqueda.current.value;

		setKeyword(inputValue);
	}

	return (
		<div className="container-fluid">
			{
				<>
					<div className="row my-4">
						<div className="col-12 col-md-6">
							{/* Buscador */}
							<form method="GET" onSubmit={handleSubmit}>
							</form>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<h2>Destinos {keyword}</h2>
						</div>
						{/* Listado de destinos */}
						{
							props.destinys.length > 0 && props.destinys.map((destiny, i) => {
								return (
									<div className="col-sm-6 col-md-4 mb-4 " key={i}>
										<div className="card shadow h-100">
											<div className="card-header">
												<h5 className="m-0 font-weight-bold text-gray-800">{destiny.name}</h5>
											</div>
											<div className="card-body ">
												<div className="text-center">
													<img 
														className="img-overlay w-100" 
														src={'http://localhost:3001/img/' + destiny.img} alt="" 
													/>
												</div>
												<p>{destiny.price}</p>
											</div>
										</div>
									</div>
								)
							})
						}
					</div>
					{ props.destinys.length === 0 && <div className="alert alert-warning text-center">No se encontraron destinos</div>}
				</>
			}
		</div>
	)
}

export default SearchMovies;
