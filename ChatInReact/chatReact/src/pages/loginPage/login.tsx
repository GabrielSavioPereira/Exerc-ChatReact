import { useNavigate } from "react-router-dom";


function Login() {
 let navigate = useNavigate();
 function handleClick() {
 navigate("/chat");
 }
 return (
    <div className="flex justify-center items-center">
 <button  type="button" onClick={handleClick}>
 Ir pro Chat, ba
 </button>
 </div>
 );
} export default Login