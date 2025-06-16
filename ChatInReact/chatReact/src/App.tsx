import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Chat from './pages/chatPage/chat.tsx'
import Login from "./pages/loginPage/login.tsx";
const router = createBrowserRouter([
 {
 path: '/',
 element: <Login />,
 },
 {
  path:'/chat',
  element: <Chat/>
 }
]);
export default function App() {
 return <RouterProvider router={router} />;
}