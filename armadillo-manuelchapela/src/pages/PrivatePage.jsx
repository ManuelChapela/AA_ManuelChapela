import { useEffect, useState } from "react";
import { getUsers } from "../services/authuser";

import moment from 'moment'

const PrivatePage = () => {

    const [btnOption, setBtnOption] = useState('')
    const [datos, setDatos] = useState([])
    
    const [valoresNombre, setValoresNombre] = useState()
    const [valoresNacimiento, setValoresNacimiento] = useState()
    const [valoresEdad, setValoresEdad] = useState()

    const [mayor, setMayor] = useState()
    // const [mayoresEdad, setMayoresEdad] = useState([])
    // const [menoresEdad, setMenoresEdad] = useState([])
    
    useEffect(() => {
        async function loadData() {
            const data = await getUsers()
            if(data){
                data.status === 200 ? setDatos(data.data) : console.log('Error al cargar los datos');
            }
        }
        loadData();
    }, [])

    const valuesNombre = e => {setValoresNombre(e.target.value)}
    const valuesNacimiento = e => {setValoresNacimiento(e.target.value)}

    // --------------------- Calcular la edad en números redondos
    // function calcularEdad(fecha) {
    //     let hoy = new Date();
    //     let nacimiento = new Date(fecha);
    //     let edad = hoy.getFullYear() - nacimiento.getFullYear();
    //     let m = hoy.getMonth() - nacimiento.getMonth();
    
    //     if (m < 0 || (m === 0 && hoy.getDate() < nacimiento.getDate())) {
    //         edad--;
    //     }
    //     setMayoresEdad(edad)
    // }


    return (
        <div className='private__container'>
            <div className='botones__container'>
                <button onClick={() => setBtnOption('todos')}>Todos los usuarios</button>
                <button onClick={() => setBtnOption('nombre')}>Usuarios por nombre</button>
                <button onClick={() => setBtnOption('mayormenor')}>Usuarios según edad</button>
                <button onClick={() => setBtnOption('nacimiento')}>Usuarios según nacimiento</button>
            </div>

            {
                ( btnOption === 'todos') && 
                <>
                    <div className='titles'>
                        <p>Nombre</p>
                        <p>Apellidos</p>
                        <p>Fecha de nacimiento</p>
                    </div>

                    <div className='table__container'>

                        { datos.map(({ username, surname, dateOfBirth }) => (
                            <div className='table'>
                                    <div className='nombre'>
                                        <p>{username}</p>
                                    </div>
                                    <div className='apellido'>
                                        <p>{surname}</p>
                                    </div>
                                    <div className='nacimiento'>
                                        <p>{moment(dateOfBirth).format("DD/MM/YYYY")}</p>
                                    </div>
                                </div>

                        ))}
                    </div>
                    </>
            }

            {
                ( btnOption === 'nombre') && (
                    <>
                        <input type="text" onChange={valuesNombre} placeholder='Escribe el nombre del usuario'/>
                       

                        <div className='titles'>
                            <p>Nombre</p>
                            <p>Apellidos</p>
                            <p>Fecha de nacimiento</p>
                        </div>

                        <div className='table__container'>

                            {datos.map(({ username, surname, dateOfBirth }) => (
                                valoresNombre === username &&
                                    <div className='table'>
                                            <div className='nombre'>
                                                <p>{username}</p>
                                            </div>
                                            <div className='apellido'>
                                                <p>{surname}</p>
                                            </div>
                                            <div className='nacimiento'>
                                                <p>{moment(dateOfBirth).format("DD/MM/YYYY").replace('T00:00:00.000+00:00', '')}</p>
                                            </div>
                                        </div>
                                ))}
                        </div>
                    </>
                )
            }
             {
                // ----------------------------------  PARTE EN PROCESO (pintar user mayores y menores de edad)
            //     ( btnOption === 'mayormenor') && (
            //         <>
            //         <div className='btn2'>
            //                 <button onClick={() => setMayor(true)}>Mayor de edad</button>
            //                 <button onClick={() => setMayor(false)}>Menor de edad</button>
            //         </div>
            //         {mayor && 
            //             datos.map(({ username, surname, dateOfBirth  }) => 
            //             <div>
            //                     {/* <button onClick={() => calcularEdad(dateOfBirth)}>aaaaaa</button> */}
            //                     <p>{username}</p>
            //                 </div>
            //             )
            //             }
            //         </>
            //     )
            }

            {
                ( btnOption === 'nacimiento') && (
                    <>
                        <input type="date" onChange={valuesNacimiento} placeholder='Escribe un año de nacimiento'/>
                       
                        <div className='titles'>
                            <p>Nombre</p>
                            <p>Apellidos</p>
                            <p>Fecha de nacimiento</p>
                        </div>

                        <div className='table__container'>

                            {datos.map(({ username, surname, dateOfBirth }) => (
                                valoresNacimiento === dateOfBirth &&
                                    <div className='table'>
                                            <div className='nombre'>
                                                <p>{username}</p>
                                            </div>
                                            <div className='apellido'>
                                                <p>{surname}</p>
                                            </div>
                                            <div className='nacimiento'>
                                                <p>{moment(dateOfBirth).format("DD/MM/YYYY")}</p>
                                            </div>
                                        </div>
                                ))}
                        </div>
                    </>
                )
            }

        </div>
    )
}

export default PrivatePage
