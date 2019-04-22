import React from 'react';
import TopNav from '../topNavigation/topNav'
import './login.css'


function Login(){
    return(
        <div>
            <TopNav />
            <div className="form-style-10">
                
                <form>
                    <div className="section"><span>1</span>Login</div>
                    <div className="inner-wrap">
                        <label>Email <input type="text" name="email" /></label>
                        <label>Password <textarea name="password"></textarea></label>
                    </div>
                    <input style={{marginLeft:'35%' ,}}type="submit" name="login" value='Login'/><br/>
                    <p style={{marginLeft:'12%' ,}}>I don't have account <a href="/signup">create account</a></p>
                </form> 
            </div>
        </div>  
    
    )
}
export default Login