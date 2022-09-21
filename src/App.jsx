import AppSeguro from './components/AppSeguro'
import CotizadorContext, { CotizadorProvider } from './context/CotizadorProvider'


function App() {
  return (
    <CotizadorProvider>
      <AppSeguro />
    </CotizadorProvider>
  )
}

export default App
