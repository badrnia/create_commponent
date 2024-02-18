import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';





// function timm() {

//   createRoot(document.getElementById('root')).render(
    
// <div>
// <h3>slam bar hasan</h3>
// <h4>
//   it is{new Date().toLocaleTimeString()}
// </h4>
// </div>

//   );



// }


// setInterval((

// )=>{timm()},1000)

const time = ()=>{
const elem=(
  <div>
  <h1>dddd</h1>
  <h2>
    it is{new Date().toLocaleTimeString()}
  </h2>
  </div>
)
createRoot(document.getElementById('root')).render(elem);

}
setInterval(()=>{time()},1000)