import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Landing from '../Landing'
import PrivacyPolicy from '../components/PrivacyPolicy'
import Terms from '../components/Terms'
import Contact from '../components/Contact'


const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children: [
      {
        path: "",
        element: <Landing/>
      },
      {
        path: "/privacypolicy",
        element: <PrivacyPolicy/>
      },
      {
        path: "/terms",
        element: <Terms/>
      },
      {
        path: "/contact",
        element: <Contact/>
      }
    ]
  }
])

export default router 