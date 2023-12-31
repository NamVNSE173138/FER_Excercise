// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//           Hello ReactJS 
//           {/* npm start */}
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


// Ex8

// import './App.css';
// import Navigation from './components/Navigation'
// import Player from './Players';
// import Footer from './Footer';
// function App() {
//   return (
//    <div className='App'>
//     <Navigation/>
//     <Player/>
//     <Footer/>
//    </div>
//   );
// }

// export default App;

// Ex 9

import './App.css';
import Footer from './components/Footer';
import Main from './components/Main';
import Navigation from './components/Navigation';
function App() {
  return (
    <div className='App'>
      <Navigation/>
      <Main/>
      <Footer/> 
    </div>
  );
}
export default App;
