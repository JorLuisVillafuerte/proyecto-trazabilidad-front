import React, { useContext, useEffect, useState } from 'react';  
import Sidebar from './Sidebar';
import Barra from './Barra';
import AuthContext from '../../context/autenticacion/authContext';
import MainRoutes from '../../routes/MainRoutes';
import { Redirect, Route, Switch } from 'react-router-dom';

const Dashboard = (props) => {
    
    const [width, setWidth] = useState(window.innerWidth);
    props.history.listen((location, action) => {
        if (
            window.innerWidth < 767 &&
            document
                .getElementById('main-wrapper')
                .className.indexOf('show-sidebar') !== -1
        ) {
            document
                .getElementById('main-wrapper')
                .classList.toggle('show-sidebar');
        }
    });
    /*useEffect(() => {
        usuarioAutenticado();
    }, []); */
    const authContext = useContext(AuthContext); 
    //const { usuarioAutenticado } = authContext;

    useEffect(() => {
        const updateDimensions = () => {
            let element = document.getElementById('main-wrapper');
            setWidth(window.innerWidth)
            if (width < 1170) {
                element.setAttribute("data-sidebartype", "mini-sidebar");
                element.classList.add("mini-sidebar");
            } else {
                element.setAttribute("data-sidebartype", "full");
                element.classList.remove("mini-sidebar");
            }
        }
        window.addEventListener("load", updateDimensions.bind(null));
        window.addEventListener("resize", updateDimensions.bind(null));
        return () => {
            window.removeEventListener("load", updateDimensions.bind(null));
            window.removeEventListener("resize", updateDimensions.bind(null));
        };
    }, [width]);

    return ( 
        <div 
            className="contenedor-app"
            id="main-wrapper"
            data-theme="light"
            data-layout="vertical"
            data-sidebartype="full"
            data-sidebar-position="fixed"
            data-header-position="fixed"
            data-boxed-layout="full"
        >
            <Sidebar {...props} MainRoutes={MainRoutes} />
            <div className="seccion-principal">
                <Barra 
                />
                <div className="page-wrapper d-block">
                    <Switch>
                        {MainRoutes.map((prop, key) => {
                            if (prop.redirect) {
                                return (
                                    <Redirect from={prop.path} to={prop.pathTo} key={key} />
                                );
                            } else {
                                return (
                                    <Route
                                        path={prop.path}
                                        component={prop.component}
                                        key={key}
                                    />
                                );
                            }
                        })}
                    </Switch>
                </div>
            </div>
            
        </div>
     );
}
 
export default Dashboard;