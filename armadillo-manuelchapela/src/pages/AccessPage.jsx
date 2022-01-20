import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'

import InputForm from '../components/InputForm';
import { login } from '../services/authuser';

const AccessPage = () => {

    const navigate = useNavigate();
   
    const [email, setEmail] = useState({ campo: '', valido: null })
    const [password, setPassword] = useState({ campo: '', valido: null })
    
    const datos = {
        email: email.campo,
        password: password.campo,
    }

    const handleSubmit = async e => {
        e.preventDefault();
            const response = await login(datos)
            if(response){
                response.status === 200 ? navigate("/home") : window.alert('No se ha podido crear el usuario, vuelva a intentarlo')
            }
    }

    return (
        <div className='access__container'>
            <div className='top'>
                <h1>LOGIN</h1>
                <h2>Introduce tus datos para entrar en tu cuenta</h2>
            </div>

            <form className="form" onSubmit={handleSubmit}>
                
                    <InputForm
                        typeOf="input"
                        estado={email}
                        cambiarEstado={setEmail}
                        label="Email"
                        title="Email"
                        tipo="text"
                        name="surname"
                        leyendaError="Necesitamos que introduzcas un e-mail valido"
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
                  
                <button type="submit">ACCEDER</button>
            </form>

           <h3>¿No tienes cuenta? Haz clic aquí para <Link to='/signin'>registrarte</Link></h3>
        </div>
    )
}

export default AccessPage
