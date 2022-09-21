import { Fragment } from 'react'
import { MARCAS, YEARS, PLANES } from '../constants/index'
import useCotizador from '../hooks/useCotizador'
import Error from './Error'

const Formulario = () => {

    const {handleChangeDatos, 
          datos, 
          error, 
          setError, 
          cotizarSeguro} =  useCotizador()

    const handleSubmit = e =>{
        e.preventDefault()
        if (Object.values(datos).includes('')) {
            setError('Todos los campos con obligatorios')
            return
        }
        setError('')

        cotizarSeguro()
    }

      return (
        <>
        {error && <Error/> }
            <form onSubmit= {handleSubmit} >
                <div>
                    <label className='block mb-3 font-bold text-gray-400 uppercase'> Marca</label>
                    <select 
                        name="marca" 
                        onClick={ e => handleChangeDatos(e) }
                        className='w-full p-3 bg-white border border-gray-200'
                    >
                        <option value=""> -- Seleccione --</option>
                        {MARCAS.map(marca => (
                            <option
                                value={marca.id}
                                key={marca.id}
                            > {marca.nombre} </option>

                        ))}
                    </select>
                </div>

                <div>
                    <label className='block mb-3 mt-3 font-bold text-gray-400 uppercase'> Anio</label>
                    <select
                        name="year" 
                        className='w-full p-3 bg-white border border-gray-200'
                        onClick={ e => handleChangeDatos(e) }
                    >
                        <option value=""> -- Seleccione el Anio --</option>
                        {YEARS.map(year => (
                            <option
                                value={year}
                                key={year}
                            > {year} </option>

                        ))}
                    </select>
                </div>

                <div>
                    <label className='block mb-3 mt-3 font-bold text-gray-400 uppercase'> Planes</label>
                    <div className='flex gap-3 items-center'>
                        {PLANES.map(planes => (
                            <>
                                <Fragment
                                    key={planes.id}
                                    
                                >
                                    <label>{planes.nombre}</label>
                                    <input
                                        type="radio"
                                        name='plan'
                                        value={planes.id}
                                        onClick={ e => handleChangeDatos(e) }
                                    />
                                </Fragment>
                            </>
                        ))}
                    </div>
                </div>
                <input 
                    type="submit" 
                    value="Cotizar"
                    className='w-full mt-3 bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold' 
                
                />
            </form>
        </>
    )
}

export default Formulario