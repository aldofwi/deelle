import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Playlist from './pages/Playlist';
import Photos from './pages/Photos';
import About from './pages/About';
import Contact from './pages/Contact';


function App() {
  return (
    <>
    <Router>

      <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/photos' component={Photos} />
          <Route path='/playlist' component={Playlist} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
        </Switch>

    </Router>

      <body></body>

    </>
  );
}

export default App;
