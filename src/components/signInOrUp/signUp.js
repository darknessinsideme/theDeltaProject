import React from 'react';
import './login.css'


function SignUp(){
    return(
        <div className="form-style-10">
            <form>
                <div className="section"><span>1</span>Sign Up</div>
                <div className="inner-wrap">
                    <label>Your name <input type="text" name="name" /></label>
                    <label>Email <textarea name="email"></textarea></label>
                    <label>Password <input type="text" name="password" /></label>
                    <label>Confirm Password <textarea name="Cpassword"></textarea></label>
                </div>
                <input type="submit" name="Sign Up" value='Sign Up'/>
            </form> 
        </div>   
    
    )
}
export default SignUp