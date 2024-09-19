import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './index.css'
import Layout from './Layout'
import Home from './components/home/Home'
import User from './components/user/User'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Github,{githubInfoLoader} from './components/github/Github'

// const router=createBrowserRouter([

//   {
 
//     path: '/',
//    element: <Layout/>,
//    children:[
//     {
//       path: '',
//       element: <Home/>
//     },
//     {
//       path:"about",
//       element: <About/>
//     },
//     {
//       path:"contact",
//       element: <Contact/>
//     }
//    ]
//   }

// ])
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:id" element={<User/>} />
      <Route
      loader={githubInfoLoader}
       path="github" 
       element={<Github/>}
        />
    </Route>
  )
);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider
    router={router}
    ></RouterProvider>
  </StrictMode>,
)