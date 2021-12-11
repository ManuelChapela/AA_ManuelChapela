import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'

import InputForm from '../components/InputForm';

import { register } from '../services/authuser';

const WelcomePage = () => {
    
    const navigate = useNavigate();

    const [email, setEmail] = useState({ campo: '', valido: null })
    const [password, setPassword] = useState({ campo: '', valido: null })
    const [username, setUserName] = useState({ campo: '', valido: null })
    const [surname, setSurname] = useState({ campo: '', valido: null })
    const [dateOfBirth, setDateOfBirth] = useState({ campo: '', valido: null })

    
    //Expresiones validadores
    // const expresiones = {
    //     correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    //     contraseña: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    // }
    
    const datos = {
        username: username.campo,
        surname: surname.campo,
        email: email.campo,
        password: password.campo,
        dateOfBirth: dateOfBirth.campo        
    }

    const handleSubmit = async e => {
        e.preventDefault();
        // if( email.valido, username.valido, surname.valido, password.valido ){
            console.log(datos);
            const response = await register(datos)
            console.log(response);
            if(response){
                response.status === 200 ? navigate("/acceder") : window.alert('No se ha podido crear el usuario, vuelva a intentarlo')
            }
    }
        
        return(
            <div className='welcome__container'>
                <div className='top'>
                    <h1>CREAR NUEVA CUENTA</h1>
                    <h2>Introduce tus datos para crear una cuenta</h2>
                </div>

                <form className="form" onSubmit={handleSubmit}>
                
                    <InputForm
                        typeOf="input"
                        estado={username}
                        cambiarEstado={setUserName}
                        label="Nombre"
                        title="Nombre"
                        tipo="text"
                        name="name"
                        leyendaError="Necesitamos que introduzcas un nombre con mas de 2 caracteres"
                        // expresionRegular={expresiones.names}
                        number={1}
                    />
                    <InputForm
                        typeOf="input"
                        estado={surname}
                        cambiarEstado={setSurname}
                        label="Apellidos"
                        title="Apellidos"
                        tipo="text"
                        name="surname"
                        leyendaError="Necesitamos que introduzcas un nombre con mas de 2 caracteres"
                        // expresionRegular={expresiones.names}
                        number={1}
                        />  

                        <InputForm
                            typeOf="input"
                            estado={email}
                            cambiarEstado={setEmail}
                            label="Email"
                            title="Email"
                            tipo="text"
                            name="surname"
                            leyendaError="Necesitamos que introduzcas un e-mail valido"
                            // expresionRegular={expresiones.correo}
                            number={1}
                            />
                        <InputForm
                            typeOf="input"
                            estado={password}
                            cambiarEstado={setPassword}
                            label="Password"
                            title="Contraseña"
                            tipo="password"
                            name="password"
                            leyendaError="Ha habido un error"
                            number={1}
                            />
                        <InputForm
                            typeOf="input"
                            estado={dateOfBirth}
                            cambiarEstado={setDateOfBirth}
                            label="Date"
                            title="Fecha de nacimiento"
                            tipo="date"
                            name="dateOfBirth"
                            // leyendaError="Necesitamos que introduzcas un nombre con mas de 2 caracteres"
                            // expresionRegular={expresiones.names}
                            number={1}
                            />
                        
                    <button type="submit">ENVIAR</button>
                </form>

                <h3>¿Ya tienes una cuenta? Haz clic aquí para <Link to='/acceder'>acceder</Link></h3>
             </div>
    )
}

export default WelcomePage;
