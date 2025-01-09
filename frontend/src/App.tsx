import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./Components/Page/Home"
import Workout from "./Components/Page/Workout"
import Nutritions from "./Components/Page/Nutritions"
import Meditations from "./Components/Page/Meditations"
import TrackProgress from "./Components/Page/TrackProgress"
const appRouter = createBrowserRouter([
  {
    path : '/',
    element : <Home />
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
])
function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  )
}

export default App
