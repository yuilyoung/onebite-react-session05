
import { HealthAndSafety } from '@mui/icons-material';
import './App.css'
import Button from './components/Welcome';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header/>
      <Button name = {"홍길동"} isMember = {true}/>
      <Button name = {"이정환"} isMember = {false}/>
      <Footer/>
    </>
  )
}

export default App
