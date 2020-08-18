import React, { useState, useContext, useEffect } from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../img/logo.jpg';
//import AlertaContext from '../../context/alertas/alertaContext';
//import AuthContext from '../../context/autenticacion/authContext';

const Login = (props) => {

    //EXTRAER CONTEXT
    /* const alertaContext = useContext(AlertaContext);
    const {alerta,mostrarAlerta} = alertaContext

     const authContext = useContext(AuthContext); 
    const { iniciarSesion, msg, autenticado } = authContext; */ 

    //STATE INICIO SESION
    const [usuario, setUsuario] = useState({
        email: '',
        password: ''
    });


    const {email,password} = usuario;

    const onChange = (e) => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        });
    }
    const onSubmit = (e) => {
        e.preventDefault();
        
/*         //VALIDAR
        if(email.trim() === '' || password.trim() === ''){
            mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
            return;
        }
        //ACTION 
        iniciarSesion(usuario); */
      
    }
/*     useEffect(() => {
        if(autenticado){
            props.history.push('/dashboard');
        }
        if(msg){
            mostrarAlerta(msg.msg,msg.categoria);
        }
        

    }, [msg, autenticado, props.history]); */

    return ( 
        <div className="form-usuario">
            {//alerta ? (<div className={`alerta ${alerta.categoria}`} >{alerta.msg}</div>) : null
            }
            <div className="contenedor-form sombra-dark">
            <img src={Logo} alt="" width="100%"/>
                <h1>Iniciar Sesion</h1>
                <form
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email"
                            placeholder="Ingresa tu email"
                            value={email}
                            onChange={onChange}
                            />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            id="password"
                            placeholder="Ingresa tu password"
                            value={password}
                            onChange={onChange}
                            />
                    </div>
                    <div className="campo-form">
                        <input 
                            type="submit" 
                            value="Iniciar Sesion"
                            className="btn btn-primario btn-block"
                        />
                    </div>
                </form>
                {/*<Link to={'/nueva-cuenta'} className="enlace-cuenta">
                    Obtener cuenta
                </Link>*/}
            </div>
        </div>
     );
}
 
export default Login;