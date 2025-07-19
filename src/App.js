import Home from './home';
import Header from './Header';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import BlogPage from './page/BlogPage';
import Blogdetails from './Blogdetails';

function App() {
  return (
    <Router>
    <div className="bg-slate-100 w-screen h-screen px-5">
     <div>
      <Header/>
      <div id='browser_content'>
        <Routes>
          <Route path='/' Component={Home}/>
          <Route exact path='/blogs' Component={BlogPage}/>
          <Route path='/blogs/:id' Component={Blogdetails}/>
        </Routes>
        </div>
     </div>
    </div>
    </Router>
  );
}

export default App;
