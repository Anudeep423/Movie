import React from 'react'

function Signup() {
    return (
        <div>
            <h1> Sign up page</h1>
            <input placeholder= "Name" name = "name" />
            <br></br>
            <input placeholder= "Password" name = "password" />
            <br></br>
            <input placeholder= "Email"  name  = "email"/>
            <br></br>
            <input placeholder= "Phond No" name = "phone" />
            <br></br>
         <span>Choose Profession : </span>
            <br></br>
<select name="cars" id="cars">
  <option value="Developer">Developer</option>
  <option value="Student">Student</option>
  <option value="Others">Others</option>
</select>
<br></br>
            <button>Submit</button>
            
        </div>
    )
}

export default Signup
