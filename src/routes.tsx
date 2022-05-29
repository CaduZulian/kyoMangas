import { BrowserRouter, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Manga }  from "./pages/Mangas"

export default function Router(){
  return (
    <BrowserRouter>
      <Route path='/' exact component={Home}/>
      <Route path='/mangas' component={Manga}/>
    </BrowserRouter>
  )
}