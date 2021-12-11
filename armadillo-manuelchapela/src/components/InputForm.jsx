//Fortawesome
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InputForm = ({ estado, cambiarEstado, tipo, placeholder, name, leyendaError, expresionRegular, comparacion, label, typeOf, title }) => {

    const onChange = (e) => {
        cambiarEstado({ ...estado, campo: e.target.value });
    };

    const validacion = () => {
        if(comparacion){
            if(estado.campo === comparacion){
                cambiarEstado({ ...estado, valido: true })
            } else {
                cambiarEstado({ ...estado, valido: false })
            }
        }
        if (expresionRegular) {
            if (expresionRegular.test(estado.campo)) {
                cambiarEstado({ ...estado, valido: true })
            } else {
                cambiarEstado({ ...estado, valido: false })
            }
        }
    };

    return (
        <div className="formularioComponent">
            <div className="campo">
                {typeOf === 'input' ?
                    (
                        <>
                            {label && <label>{label}</label>}
                            <input
                                type={tipo}
                                placeholder={placeholder}
                                id={name}
                                value={estado.campo}
                                onChange={onChange}
                                onKeyUp={validacion}
                                onBlur={validacion}
                                valido={estado.valido}
                            />
                        </>
                    )
                    :
                    (
                        <>
                            {label && <label>{label}</label>}
                            <textarea
                                type={tipo}
                                id={name}
                                value={estado.campo}
                                onChange={onChange}
                                onKeyUp={validacion}
                                onBlur={validacion}
                                title={title}
                                rows={3}
                            />
                        </>
                    )
                }

                { estado.valido === true && <FontAwesomeIcon icon={faCheckCircle} className="svgSuccess" /> }
                { estado.valido === false && <FontAwesomeIcon icon={faExclamationCircle} className="svgError"/> }
                
            </div>

            {estado.valido === false && <p className="validation">{leyendaError}</p>}
        </div>
    );
}

export default InputForm;
