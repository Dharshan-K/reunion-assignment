import { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const SignUp = ()=>{
  const [email, setEmail] = useState('')
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [accessLevel, setAccessLevel] = useState('')
  const toHome = useNavigate();


  const SignUpUser = (e)=>{
    e.preventDefault();
    const data = {
    username: username,
      email: email,
      password: password,
      accessLevel: accessLevel

    }
    axios.post("https://reunion-backend-1pw2.onrender.com/api/signup", data).then((response)=>{
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
              id="username"
              value={username}
              placeholder="username"
              className="rounded-lg"
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4 mt-3">
            <input
              type="name"
              id="email"
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
          <label for="country">Sign up as</label>
<select id="country" name="country" onChange={(e)=>{setAccessLevel(e.target.value)}} required>
    <option value="">Select an option</option>
    <option value="us">owner</option>
    <option value="ca">user</option>
    
</select>
        </div>
        <button className="bg-white h-10 w-[10vh] font-bold rounded-lg" onClick={SignUpUser} type="submit">
          SignUp
        </button>
      </form>
    </div>
    )
}