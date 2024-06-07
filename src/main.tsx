import React from 'react'
import ReactDOM from 'react-dom/client'
import './app/layout/styles.css'
import { RouterProvider } from 'react-router-dom'
// import { Provider } from 'react-redux'
// import { store } from './app/store/store'
import { router } from './app/router/Routes.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  {/* <Provider store= {store}>  */}
   {/* <ToastContainer position='bottom-right' hideProgressBar theme='colored'/> */}
   <RouterProvider  router={router}/>
  {/* </Provider> */}
 </React.StrictMode>
) 
