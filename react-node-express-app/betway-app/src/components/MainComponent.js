import './MainComponent.css';
import { useState, useEffect } from 'react';


function MainComponent() {


const first_url = "http://hp-api.herokuapp.com/api/characters";
const second_url = "/api";

//testing external api: http://hp-api.herokuapp.com/api/characters

const[mydata, setmyData] = useState([]);

useEffect(() => {
    fetch(second_url)
    .then(res => res.json())
    .then(data => setmyData(data))
    .catch(err => console.log(err))

},[])

console.log(mydata)





mydata.map(item => {
   console.log( item.name )
})

    
  return (
    <div className="main_body">
    <div className="nav">

        
     <ul className="menu_list">
         
         <li>sports</li>
         <li>live&real</li>
         <li>casino</li>
         <li>esports</li>
         <li>vegas</li>
     </ul>
    </div>
    
    <div className="bottom_banner">
        <p>JSON NAME</p>
        <h2>JSON NAME</h2>
        <button className="button_bottom">JOIN NOW</button>
    </div>
    </div>
  );
}

export default MainComponent;