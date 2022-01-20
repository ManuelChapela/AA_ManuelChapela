import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <div className='register__container'>
            <h1>ESTÁS REGISTRADO</h1>
            <h2>¿Quieres volver a la página inicial? Haz clic <Link to='/signin'>aquí</Link></h2>
        </div>
    )
}

export default HomePage
