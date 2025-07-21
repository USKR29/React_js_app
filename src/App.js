import Home from './home';
import Header from './Header';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import BlogPage from './page/BlogPage';
import Blogdetail from './Blogdetail';
import Create from './Create';
import Notfound from './Notfound';
import About from './page/About';

function App() {
  return (
    <Router>
    <div className="bg-slate-100 w-screen h-lvh px-5">
     <div>
      <Header/>
      <div id='browser_content'>
        <Routes>
          <Route path='/' Component={Home}/>
          <Route exact path='/blogs' Component={BlogPage}/>
          <Route path = '/blogs/:id' Component={Blogdetail}/>
          <Route exact path = '/create' Component={Create}/>
          <Route exact path = '/test' Component={About}/>
          <Route path='*' Component={Notfound}/>
        </Routes>
        </div>
     </div>
    </div>
    </Router>
  );
}

export default App;
