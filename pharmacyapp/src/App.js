// import logo from './logo.svg';
import { Route } from 'react-router';
import Layout from './components/layout/layout';
import Home from './pages/home';
import About from './pages/about';
import './assets/App.css';

function App() {
  return (
    <Layout className="App">
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
    </Layout>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
