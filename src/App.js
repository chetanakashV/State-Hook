import './App.css';
import HookCounter from './Components/HookCounter';
import HookCounterthree from './Components/HookCounter3';
import HookCounterfour from './Components/HookCounter4';
import HookMouse from './Components/HookMouse';
import FetchingData from './Components/FetchingData';
import FetchOneData from './Components/FetchOneData';
import ClassIntervalCounter from './Components/ClassIntervalCounter';
import CounterOne from './Components/CounterOne.js';
import CounterTwo from './Components/CounterTwo';
import React,{useReducer,useContext} from 'react';
import ComponentA from './Components/ComponentA';
import ComponentB from './Components/ComponentB';
import ParentComponent from './Components/ParentComponent';
import CandyDispenser from './Components/CandyDispencer';

// export const CountContext = React.createContext();

// const initialState = 0;
// const reducer = (state,action) => {
//   switch(action){
//        case 'increment':
//           return state+1
//        case 'decrement':
//          return state-1
//        case 'reset':
//           return initialState
//         default:
//            return state
//     }
//   }
 function App() {
        
  // const [count,dispatch] = useReducer(reducer,initialState)
  return (
    // <CountContext.Provider value = {{countState: count, countDispatch: dispatch}}>
    <div className="App">
      {/* <h2>Count: {count}</h2> */}

     {/* <HookCounter/> */}
     {/* <HookMouse/> */}
     {/* <ClassIntervalCounter/> */}
     {/* <FetchingData/> */}
     {/* <FetchOneData/> */}
     {/* <CounterOne/> */}
     {/* <CounterTwo/> */}
     {/* <ComponentA/>
     <ComponentB/> */}
     {/* <ParentComponent/> */}
     <CandyDispenser/>
    </div>
    //  </CountContext.Provider>
  );
}

export default App;
