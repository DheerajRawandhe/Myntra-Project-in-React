// import '../App.css'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { HomeItem } from "../components/HomeItem"
import {Outlet} from "react-router-dom"
import { FetchItems } from '../components/FetchItems'
import { useSelector } from 'react-redux'
import Loading from '../components/Loading'


function App() {

  const fetchStatus = useSelector(store=> store.fetchStatus);

  return (
    <>
    <Header/>
    <FetchItems/>+
    {fetchStatus.currFetching ? <Loading/> :   <Outlet/> }
  
    <Footer/>
    
    </>
  )
};

export default App
