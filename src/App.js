import{BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import {Toaster} from 'react-hot-toast'
import Header from './component/header'
import Footer from './component/footer.jsx'
import Home from './component/home.jsx'
import Book from './component/book.jsx'
import About from './component/about.jsx'
import Login from './component/login.jsx'
import User from './component/user.jsx'
import Help from './component/help.jsx'
import Menu from './component/menu.jsx'
import Cart from './component/cart.jsx'
import Services from './component/services.jsx'





import'./style/app.scss'
import './style/header.scss'
import './style/footer.scss'
import './style/home.scss'
import './style/book.scss'
import './style/about.scss'
import './style/login.scss'
import'./style/user.scss'
import'./style/help.scss'
import'./style/menu.scss'
import'./style/services.scss'
import'./style/cart.scss'






function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/book' element={<Book/>}/>
          <Route path='/about' element ={<About/>}/>
          <Route path= '/login' element={<Login/>}/>
          <Route path= '/user' element={<User/>}/>
          <Route path='/help' element={<Help/>}/>
          <Route path='/menu' element={<Menu/>}/>
          <Route path='/Cart' element={<Cart/>}/>
          <Route path='/services' element={<Services/>}/>


        </Routes>
        <Footer/>
        <Toaster/>
      </Router>
      
    </div>
  );
}

export default App;
