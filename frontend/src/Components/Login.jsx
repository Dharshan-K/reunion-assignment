import { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Login = ()=>{
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const toHome = useNavigate();

  const loginUser = async(e)=>{
    e.preventDefault()
    console.log("loggin in ")
    const data = {
      email: email,
      password: password
    }
    await axios.post("https://reunion-backend-1pw2.onrender.com/api/login", data).then((response)=>{
      console.log(response);
      localStorage.setItem('username', response.data.username)
      localStorage.setItem('email', response.data.email)
      localStorage.setItem('accessLevel', response.data.userType)
      localStorage.setItem('token', response.data.authToken)
    })
    toHome("/", { replace: true });
  }

    return(
        <div className="text-center bg-blue-300 mx-[50vh] my-56 w-1/2 h-[50vh] rounded-lg">
      <form className="py-20">
        <h2 className="text-2xl">Login</h2>
        <div className="">
          <div className="mb-4 mt-3">
            <input
              type="name"
              id="name"
              value={email}
              placeholder="Email"
              className="rounded-lg"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4 h-10">
            <input
              type="password"
              id="password"
              value={password}
              placeholder="Password"
              className="rounded-lg"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>
        <button className="bg-white h-10 w-[10vh] font-bold rounded-lg" onClick={loginUser} type="submit">
          Login
        </button>
      </form>
    </div>
    )
}