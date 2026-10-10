import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home"
import Navbar from "./components/navbar/Navbar"
import QuemSomos from "./pages/quemSomos/QuemSomos"
import Footer from "./components/footer/Footer"
import Cursos from "./pages/cursos/Cursos"
import DistribuicaoDeQuentinhas from "./pages/distribuicaodequentinhas/DistribuicaoDeQuentinhas"
import DistribuicaoDeCestasBasicas from "./pages/distribuicaodecestasbasicas/DistribuicaoDeCestasBasicas"
import Contato from "./pages/contato/Contato"
import Doacoes from "./pages/doacoes/Doacoes"
import Futebol from "./pages/futebol/Futebol"
import Portfolio from "./pages/portfolio/Portfolio"
import ComoAjudar from "./pages/comoajudar/ComoAjudar"


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/quemsomos' element={<QuemSomos/>}/>
        <Route path='/cursos' element={<Cursos/>}/>
        <Route path='/distribuicaodequentinhas' element={<DistribuicaoDeQuentinhas/>}/>
        <Route path='/distribuicaodecestasbasicas' element={<DistribuicaoDeCestasBasicas/>}/>
        <Route path='/contato' element={<Contato/>}/>
        <Route path='/comoajudar' element={<ComoAjudar/>}/>
        <Route path='/doacoes' element={<Doacoes/>}/>
        <Route path='/futebol' element={<Futebol/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
      </Routes> 
      <Footer/>
    </BrowserRouter>
    )
}

export default App
