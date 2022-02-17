import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Header from "./html/Header/Header";
import Body from './html/Body/Body';

import './html/Header/header.css';
import './html/Body/body.css'


function App() {
  return (
    <div>
    <Header/>
    <Body/>
    </div>
  );
}

export default App;
