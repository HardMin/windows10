import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Error404, Login } from '../pages/indexPages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login/>,
    errorElement: <Error404/>
  }
])

const Router = ()=>{
  return(
    <RouterProvider router={router}/>
  )

}

export default Router