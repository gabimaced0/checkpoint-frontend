import Header from './Componentes/Header/header'
import Banner from './Componentes/Banner/banner'
import Footer from './Componentes/Footer/footer'
import Enredo from './Componentes/Enredo/enredo'
import Avaliacao from './Componentes/Avaliacao/avaliacao'
import './App.css'
import Destaque1 from './Componentes/Destaque1/destaque1'
import Destaque2 from './Componentes/Destaque2/destaque2'


function App(){
  return (
    <>
      <Header />
      <Banner />
      <Enredo />
      <Avaliacao/>
      <Destaque1/>
      <Destaque2/>
      <Footer/>
      
    </>
    
  )
}

export default App
