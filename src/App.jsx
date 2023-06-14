import Guru from './component/guru';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Card from './component/Card/Card'
import Data from './FakeData/data.json'
import {v4 as uuidv4} from 'uuid'
import { ReactBootstrap } from './component/ReactBootstrap/ReactBootstrap';
import State from './component/State/state';
import EventHandler from './component/EventHandler/EventHandler';


function App() {
  // console.log(Data);
  return (
    <div className='app'>
       <h1 className='heading'>ToDo App</h1>
       <EventHandler></EventHandler>








        {
          // Data.map((items ,index) =>{
          //   return <Card key={index} cardTitle={items.email} userProfil = {items.profile}>
              
          //   </Card>
          // } )
        //   <div className='d-flex'>
        // <ReactBootstrap></ReactBootstrap>
        // <ReactBootstrap></ReactBootstrap>
        // <ReactBootstrap></ReactBootstrap>
        // <ReactBootstrap></ReactBootstrap>
        // <ReactBootstrap></ReactBootstrap>
        // <ReactBootstrap></ReactBootstrap>
        // </div>
        //<State></State>
        }

        
    </div>
  )
}

export default App
