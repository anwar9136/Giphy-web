
//homepage
//categories
//search
//single gif

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AppLayout from "./layouts/app-layout"
import Home from "./pages/Home.jsx"
import Search from "./pages/Search"
import GifPage from "./pages/GifPage.jsx"
import Favourites from "./pages/Favourites"
import GifProvider from "./context/gif-context"
import Category from "./pages/Category.jsx"


//favourites
const router = createBrowserRouter([
  {
    element:<AppLayout/>,

    children:[
      {
        path: '/',
        element:<Home/>
      },
      {
        path: '/:category',
        element:<Category/>
      },
      {
        path: '/search/:query',
        element:<Search/>
      },
      {
        path: '/:type/:slug',
        element:<GifPage/>
      },
      {
        path: '/favourites',
        element:<Favourites/>
      },
    ]
  },
])
function App() {


  return (
    <GifProvider>
      <RouterProvider router={router}/>
    </GifProvider>

  )
}

export default App
