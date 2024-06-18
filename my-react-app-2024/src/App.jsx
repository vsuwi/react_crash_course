
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'

import homePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path = '/' element = {<MainLayout/>}>
        <Route index element = {<HomePage/>} />
      </Route>
    )
  )


const App = () => {

  return <RouterProvider router = {router}/>

  // return (
  //   <>
  //     <Navbar/>
  //     <Hero />
  //     <HomeCards />
  //     <JobListings />
  //     <ViewAllJobs/>
  //   </>
  // )
}

export default App