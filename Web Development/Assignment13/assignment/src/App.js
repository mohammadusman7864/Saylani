import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Header from "./html/Header/Header";
import Body from './html/Body/Body';
import Bottom from './html/Bottom/Bottom';
import Footer from './html/Footer/Footer'

import './html/Header/header.css';
import './html/Body/body.css'
import './html/Bottom/bottom.css'
import './html/Footer/footer.css'


function App() {
  return (
    <div>
    <Header/>
    <Body/>
    <Bottom/>
    <Footer/>
    </div>
  );
}

export default App;
