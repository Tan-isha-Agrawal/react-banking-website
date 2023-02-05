import './App.css';
import { GiPiggyBank } from "react-icons/gi";
import NavBar from './components/NavBar';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import ChangeATMPIN from './components/ChangeATMPin'
import FixedDeposit from './components/OpenNewFD'
import FundTransfer from './components/FundTransfer'
import CheckBalance from './components/CheckBalance'
import Footer from './components/Footer';
import Neft from './components/Neft';
import Rgst from './components/Rgst';
import Imps from './components/Imps';
import Upi from './components/Upi';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div>
        
            <header className="App-header">
                <GiPiggyBank size={68}  />
                <p style={{ marginLeft: '10px', marginTop:'1.5rem' }}>Bonjour Banque</p>
            </header>
            <Router>
                <NavBar></NavBar> {/* Render NavBar Component*/}
                <Routes> 
                    <Route path='/home' exact element={<Home/>}></Route>
                    <Route path='/login' element={<Login />}></Route>
                    <Route path='/register' element={<Register />}></Route>
                    <Route path='/changeATMPIN' element={<ChangeATMPIN />}></Route>
                    <Route path='/openNewFD' element={<FixedDeposit />}></Route>
                    <Route path='/fundTransfer' element={<FundTransfer />}></Route>
                    <Route path='/checkBalance' element={<CheckBalance />}></Route>
                    <Route path='/NEFT' element={<Neft />}></Route>
                    <Route path='/RGST' element={<Rgst />}></Route>
                    <Route path='/IMPS' element={<Imps />}></Route>
                    <Route path='/UPI' element={<Upi />}></Route>
                </Routes>
            </Router>
            
        

            <footer className='footer' size={70 }>
            <Footer></Footer> {/* Render Footer Component*/}
        </footer>

    </div>
  );
}

export default App;
