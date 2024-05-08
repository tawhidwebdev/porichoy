import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Registration from "./pages/auth/Registration";
import Login from "./pages/auth/Login";
import Rootlayout from "./components/layout/Rootlayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      
      <Route element={<Rootlayout/>}>
         <Route path="/registration" element={<Registration/>} />
         <Route path="/home" element={<Home/>} />
         <Route path="/" element={<Login/>} />
      </Route>
    )
  );

  return (
    <RouterProvider
    router={router}
  />
  )
}

export default App
