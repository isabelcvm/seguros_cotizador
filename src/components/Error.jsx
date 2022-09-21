import React from 'react'
import useCotizador from '../hooks/useCotizador'


const Error = () => {
    const {error} = useCotizador()

  return (
    <div>
        <p className=' border text-center border-red-400 py-3 bg-red-100 text-red-700 mb-3'> {error}</p>
    </div>
  )
}

export default Error