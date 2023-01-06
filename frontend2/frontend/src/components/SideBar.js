import React, { useEffect, useState } from 'react';
import image from '../assets/images/logoViajeros.png';
import ContentWrapper from './ContentWrapper';
import GenresInDb from './GenresInDb';
import LastMovieInDb from './LastMovieInDb';
import SearchMovies from './SearchMovies';
import NotFound from './NotFound';
import { Link, Route, Switch } from 'react-router-dom';
import Chart from './Chart';

function SideBar() {
    const [destinys, setDesnitys] = useState([]);
    const [categorys, setCategorys] = useState({});
    const [total, setTotal]=useState([]); 

    useEffect(() => {
        fetch(`http://localhost:3001/api/products`)
            .then(response => response.json())
            .then(data => {

                const total = data.countByCategory
                setTotal(total)
                

                const destinys = data.data
                setDesnitys(destinys)

                destinys.forEach(destiny => {
                    let categorysState = categorys;

                    if (categorysState[destiny.categorys.categoria]) {
                        categorysState[destiny.categorys.categoria] += 1;
                    } else {
                        categorysState[destiny.categorys.categoria] = 1;
                    }
                    setCategorys(categorysState)

                
                })
            })
    },[])
    
    return (
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-25" src={image} alt="Digital House" />
                    </div>
                </a>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0" />

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Turismo de bienestar</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider" />

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Actions</div>

                {/*<!-- Nav Item - Search -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/destinys">
                        <i className="fas fa-fw fa-search"></i>
                        <span>Lista de Destinos</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/GenresInDb">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Pages</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/LastMovieInDb">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Charts</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block" />
            </ul>
            {/*<!-- End of Sidebar -->*/}

            <Switch>
                <Route exact path="/">
                    <ContentWrapper
                        destinys={destinys}
                        categorys={categorys}
                        total={total}
                    />
                </Route>
                <Route path="/destinys">
                    <SearchMovies
                        destinys={destinys}
                        categorys={categorys}
                    />
                </Route>
                <Route path="/GenresInDb">
                    <GenresInDb 
                     destinys={destinys}
                     categorys={categorys}
                     total={total}/>
                </Route>
                <Route path="/LastMovieInDb">
                    <LastMovieInDb
                        destinys={destinys}
                    />
                </Route>
                <Route path="/chart">
                    <Chart />
                </Route>
                <Route component={NotFound} />
            </Switch>
            
        </React.Fragment>
    )
}
export default SideBar;