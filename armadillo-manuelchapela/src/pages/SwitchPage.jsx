import React from 'react'
import { Link } from 'react-router-dom'


const SwitchPage = () => {
    return (
        <div className='switch__container'>
            <h1>¡Hola! Quizás seas nuevo aquí.</h1>
            <div>
                <button><Link to='/signin'>Registrarte</Link></button>
                <button><Link to='/acceder'>Acceder</Link></button>
            </div>

            <h3>¿Eres administrador? Haz clic <Link to='/private'>aquí</Link></h3>
            
        </div>
    )
}

export default SwitchPage
