import './App.css';
import Sidenav  from './components/sidenav';


function App() {
  return <>
<Sidenav/>

  </>
}

export default App;

// import React from 'react';
// import { BrowserRouter as Route, NavLink, Routes } from 'react-router-dom';
// import sidenav from './components/sidenav';
// import MultiStepForm1 from './components/MultiStepForm1';
// import Interview from './components/Interview';
// import './App.css';

// const App = () => {
//     return (
//         <Routes>
//             <div className="app">
//                 <sidenav />
//                 <div className="content">
//                     <NavLink>
//                         <Route path="/" exact component={MultiStepForm1} />
//                         <Route path="/interview" component={Interview} />
//                         <Route path="/sidenav" component={sidenav} />
//                     </NavLink>
//                 </div>
//             </div>
//         </Routes>
//     );
// };

// export default App;

