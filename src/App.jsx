import Guru from "./component/guru";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// import Card from "./component/Card/Card";
// import Data from "./FakeData/data.json";
// import { v4 as uuidv4 } from "uuid";
// import { ReactBootstrap } from "./component/ReactBootstrap/ReactBootstrap";
// import State from "./component/State/state";
// import EventHandler from "./component/EventHandler/EventHandler";
// import UpadateState from "./UpdateState/UpadateState";
// import StopPropagation from "./component/stopPropagation/StopPropagation";
// import From_Data_Collect from "./component/FROM/From_Data_Collect";
// import From from "./component/FROM/From";
// import { Passing_data_prent } from "./component/State_Lifting/Passing_data_prent";
// import { Formik } from "./component/Formik/Formik";
// import { Toggle } from "./component/Toggle/Toggle";
// import { FAQS } from "./component/FAQ/FAQS";
// import { UseEffect } from "./component/Fetch_data_useEffect/UseEffect";
// import CUSTOOMHOOK from "./component/CustomHook/CUSTOOMHOOK";
// import Toastity from "./component/NOTIFIY_TOAST/Toastity";
// import Countrys_Main_App from "./component/CountryApp/Countrys_Main_App";
import UseRefHook from './component/HOOKS/useRef_Hooks/UseRefHook';
import UseReducer from "./component/HOOKS/UseReducer";
import UseReducerMain from "./component/HOOKS/UseReducer/UseReducerMain";
import ParentComponet from "./component/HOOKS/useContext/ParentComponet";

function App() {
  // console.log(Data);
  return (
    <div className="app">
      <h1 className="heading">ToDo App</h1>

      
      <ParentComponet></ParentComponet>
      




      {      
      
  /* =================================  
      === DEMO PROJECT ====
      <Toastity></Toastity>
      <Countrys_Main_App></Countrys_Main_App>
      <FAQS></FAQS>
      <Toggle></Toggle>
      <StopPropagation></StopPropagation>
      =============    
        ===   HOOKS ==
        <CUSTOOMHOOK></CUSTOOMHOOK>
        <UseRefHook></UseRefHook>
       <UseReducerMain></UseReducerMain>
        ===============
        === FROM ==
        <From></From>
        <From_Data_Collect></From_Data_Collect>
        <Formik></Formik>
        <Passing_data_prent></Passing_data_prent>
        ==============
        === state ===
        <UseEffect></UseEffect>
        <EventHandler></EventHandler>
        <UpadateState></UpadateState>
        <State></State>
        <UseReducer></UseReducer>
        

        ==============
        === Card ===
          Data.map((items ,index) =>{
            return <Card key={index} cardTitle={items.email} userProfil = {items.profile}>
              </Card>
          } )
        =============
        ==== ReactBootstrap ====
          <div className='d-flex'>
        <ReactBootstrap></ReactBootstrap>
        <ReactBootstrap></ReactBootstrap>
        <ReactBootstrap></ReactBootstrap>
        <ReactBootstrap></ReactBootstrap>
        <ReactBootstrap></ReactBootstrap>
        <ReactBootstrap></ReactBootstrap>
        </div>
        ===============
    ======================================    
*/

}
    </div>
  );
}

export default App;
