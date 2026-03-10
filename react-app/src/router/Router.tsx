import { memo, FC} from "react"
import { Routes, Route} from "react-router-dom"

import { Login } from "../components/pages/Login"
import { homeRoutes } from "./HomeRoutes"
import { Page404 } from "../components/pages/Page404"
//import { Header } from "../components/organisms/layout/Header"
import { HeaderLayout } from '../components/templates/HeaderLayout';

export const Router: FC = memo(()=>{
  return(
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home">
      {homeRoutes.map((route)=>{
        return (
          <Route key={route.path} path={route.path} element={<HeaderLayout/>} >
            <Route index element={route.children} />
          </Route>

        )
        // {<HeaderLayout props=route.children />}/ 
      })
      }    
      </Route>

      <Route path="*" element={<Page404/>} />


    </Routes>
  )
}


)