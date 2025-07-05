
import { HealthAndSafety } from '@mui/icons-material';
import './App.css'
import Welcome from './components/Welcome';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header/>
      <Welcome name = {"홍길동"} isMember = {true}/>
      <Welcome name = {"이정환"} isMember = {false}/>
      <Welcome name = {"에일리"} isMember = {true}/>
      <Footer/>
    </>
  )
}

export default App
