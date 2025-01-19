import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import Home from "./Components/Page/Home"
import Workout from "./Components/Page/Workout"
import Nutritions from "./Components/Page/Nutritions"
import Meditations from "./Components/Page/Meditations"
import TrackProgress from "./Components/Page/TrackProgress"
import Register from "./Components/Page/Register"
import Navbar from "./Components/Shared/Navbar"
import './App.css'
import "react-datepicker/dist/react-datepicker.css";

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Navbar />
        <Outlet />
      </>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path : '/routines',
        element : <Workout />
      },
      {
        path : '/nutrition',
        element : <Nutritions />
      },
      {
        path : '/meditation',
        element : <Meditations />
      },
      {
        path : '/trackerstats',
        element : <TrackProgress />
      },
      
      {
        path : '/trackerstats',
        element : <TrackProgress />
      },
    ],
  },
]);


function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  )
}

export default App
