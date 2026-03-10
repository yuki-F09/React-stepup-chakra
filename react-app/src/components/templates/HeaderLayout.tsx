
import { memo , FC } from "react"
import { Header } from "../organisms/layout/Header"
import { Outlet } from "react-router-dom";


export const HeaderLayout: FC = memo(()=>{

  return(
    <>
    <Header />
      <Outlet/>
    </>

  )
})

/*
outletを使わない方法でやれたかもしれない名残り
type Props = {
  children: ReactNode;// タグで囲まれたもの
}
*/