import './App.css'
import NavBar from './components/NavBar/NavBar'
import Card from './components/Card'
import ItemListContainer from './components/ItemListCointainer/ItemListContainer'


function App() {

  return (
    <div className='container'>
      <NavBar />
      <ItemListContainer greeting="Bienvenidos" />
      <div className="row">
        <div className="col-3">
          <Card
            title="MacBook Air"
            description="Procesador A1, 8 GB de RAM"
            img="https://www.apple.com/v/macbook-air/q/images/overview/compare/compare_mba_m1__dsgh2hoxlkae_large_2x.png"
          />
        </div>
      </div>
    </div>
  )
}

export default App
