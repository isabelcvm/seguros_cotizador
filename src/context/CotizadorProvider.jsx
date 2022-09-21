import { useState, createContext } from 'react'
import { obtenerDiferenciaYear, calcularMarca, calcularPlan, formatearDinero }  from '../helpers/index'

const CotizadorContext = createContext()

const CotizadorProvider = ({children}) => {

    const [datos, setDatos] = useState({
        marca: '',
        year: '',
        plan:''
    })
    const [error, setError] = useState('')
    const [resultado, setResultado] = useState(0)
    const [cargando, setCargando] = useState(false)

    const handleChangeDatos = e =>{
    
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    const cotizarSeguro = () =>{
        console.log('Cotizando...')
        //Una base
        let resultado = 2000

        //Obtener diferencia de anos
        const diferencia = obtenerDiferenciaYear(datos.year)
        //Hay que restar el 3% por cada ano
        resultado -= ((diferencia * 3) * resultado) / 100
        //Europe 30%
        //Americano 15%
        //Asiático 5%
        resultado *= calcularMarca(datos.marca)
        console.log(resultado);

        //Básico 20%
        //Completo 50%
        resultado *= calcularPlan(datos.plan)
        console.log(resultado);

        //Formatear Dinero
        resultado = formatearDinero(resultado)
        setCargando(true)

        setTimeout(() => {
            setResultado(resultado);
            setCargando(false)
        }, 3000);
    }

    return (
    <CotizadorContext.Provider
        value={{
            cargando,
            resultado,
            cotizarSeguro,
            error,
            setError,
            handleChangeDatos,
            datos
        }}
    >
        {children}
    </CotizadorContext.Provider>
  )
}

export {
    CotizadorProvider
}

export default CotizadorContext