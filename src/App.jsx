import NavBar from './components/NavBar/NavBar'
import Rutas from './components/Rutas/Rutas'
import UserContextProvider from './context/UserContextProvider'
import CartContextProvider from './context/cartContext/CartContextProvider'



function App() {

  return (
    <>
      <CartContextProvider>
        <UserContextProvider>
          <NavBar />
          <Rutas />
        </UserContextProvider>
      </CartContextProvider>
    </>
  )
}
export default App
