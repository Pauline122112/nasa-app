import React from 'react'

import Home from './components/Home'
import NasaPhoto from './components/NasaPhoto'
import { BrowserRouter, Route} from 'react-router-dom'

import './App.css';


export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
          <Route component={Home} path="/" exact />
          <Route component={NasaPhoto} path="/nasaphoto" />
      </div>
    </BrowserRouter>
  );
}








// function App() {

//   const [photoData, setPhotoData] = useState(null) 
  
//   return (
  

//     <div className="App">
//       <div className='PhotoDiv'>
//       <NasaPhoto photoData={photoData} setPhotoData={setPhotoData} />
//       <Home homePage={homePage} />

//     </div>
//   </div>
//   )
   
//   }


//     export default App
