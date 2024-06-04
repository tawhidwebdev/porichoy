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
import Error from "./pages/error/Error";
import Message from "./pages/message/Message";
import Notification from "./pages/notification/Notification";
import Settings from "./pages/settings/Settings";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<Rootlayout/>}>          
          <Route path="/home" element={<Home/>} />
          <Route path="/message" element={<Message/>}/>
          <Route path="/notification" element={<Notification/>}/> 
          <Route path="/settings" element={<Settings/>}/>   
        </Route>
          <Route path="/registration" element={<Registration/>} />
          <Route path="/" element={<Login/>} />
          <Route path="*" element={<Error/>}/>
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
