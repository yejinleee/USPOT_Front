import React from 'react';
// import ReducerSample from './ReducerSample';
// import { SampleProvider } from './SampleContext';

// const Counter = () => {
//   return (
//     <SampleProvider>
//       <ReducerSample />
//     </SampleProvider>
//   );
// };

// export default Counter;

// import React, { createContext, useMemo, useReducer } from 'react';
//
// export const CODE ={
//   ID = 0,
// }
//
// export const TableContext = createContext({
//   tableData :[],
//   login : false,
//   dispatch : () =>{},
// })
//
// const initialState ={
//   tableData :[],
//   login:false,
//   id:0
// }
//
// export const LOG_IN ="LOG_IN";
// export const LOG_OUT="LOG_OUT";
//
// const reducer =(state:any, action:any) =>{
//   switch (action.type){
//     case LOG_IN:
//       return{
//         ...state,
//         login:true,
//       };
//     case LOG_OUT:{
//       return{
//         ...state,
//         login:false,
//       }
//     }
//     default:
//       return state;
//   }
// };
//
//
// const Counter=()=> {
//   const [state,dispatch]=useReducer(reducer, initialState);
//   const {tableData, login } = state;
//
//   const value = useMemo( () => ({tableData:tableData, login:login}), [tableData,login]);
//
//
//
//   return (
//     <>
//       <TableContext.Provider value={value}>
//
//
//       </TableContext.Provider>
//
//     </>
//
//   );
// }
//
// export default Counter;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// // import React, { useReducer } from 'react';
// //
// // function reducer(state:any, action:any) {
// //   switch (action.type) {
// //     case 'INCREMENT':
// //       return state + 1;
// //     case 'DECREMENT':
// //       return state - 1;
// //     default:
// //       return state;
// //   }
// // }
// //
// // const Counter=()=> {
// //   const [number, dispatch] = useReducer(reducer, 0);
// //
// //   const onIncrease = () => {
// //     dispatch({ type: 'INCREMENT' });
// //   };
// //
// //   const onDecrease = () => {
// //     dispatch({ type: 'DECREMENT' });
// //   };
// //
// //   return (
// //     <div>
// //       <h1>{number}</h1>
// //       <button onClick={onIncrease}>+1</button>
// //       <button onClick={onDecrease}>-1</button>
// //     </div>
// //   );
// // }
// //
// // export default Counter;
