
import './App.css';
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import MainContent from './MainContent.jsx';

// function App() {
//   return (
//     <div className="App">
//       <img src={logo} alt="" width="60px"  />
//      <h1>Fun facts about React </h1>
// <ol>
//   <li>Was first released in 2013</li>
//   <li>Was originally created by Jordan Walke</li>
//   <li>Has well over 100k stars on Github</li>
//   <li>Is maintained by Facebook</li>
//   <li>Powers thousands of enterprise apps, including mobile apps</li>
// </ol>
//     </div>
//   );
// }

// export default App;
function App() {
return (
  <div> 
   <Header/>
   <MainContent/>
   <Footer/>
  </div>
)
}

export default App;