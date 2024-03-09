import { useState } from "react"


function App() {
  let [text, settext] = useState({
    email: "",
    password: "",
  })
  let [erortext, seterortext] = useState("")
  let [passtext, setpasstext] = useState("")

  let handleChange = (e) => {
    let {name,value} = e.target
    settext({...text,[name]:value})
    console.log(text);
  }
  let handleClick = () => {
    if(!text.email){
      seterortext("Enter Your Email Or Phone Number");
    }else if(!text.password){
      setpasstext("Enter Your Password")
    }else{
      console.log(text);
      setpasstext("")
      console.log(text)
      seterortext("")
    }
  }

  return (
    <>
      <section id="main">
        <div className="container">
          <div className="fb_main">
            <div className="fb_right">
              <h1>facebook</h1>
              <p>Connect With friends and the World Around You On facebook</p>
            </div>
            <div className="fb_left">
              <div className="from_main">
                <input onChange={handleChange} name="email" className="emailbox" type="text" placeholder="Email Or Phone Number"/>
                <p>{erortext}</p>
                <input onChange={handleChange} name="password" className="passwordbox" type="password" placeholder="Password"/>
                <p>{passtext}</p>
                <button onClick={handleClick} className="submit_btn">Log In</button>
                <a href="#" className="forget_btn">Forget Password?</a>

                <a href="#" className="new_acc">Create New Account</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
