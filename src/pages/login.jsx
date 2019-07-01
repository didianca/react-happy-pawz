import React from 'react';

class Login extends React.Component{
    render(){
        return(
            <div>
                <div className="wrapper fadeInDown">
                    <div id="formContent">
                        <div className="fadeIn first">
                            <ion-icon name="person"></ion-icon>
                        </div>
                        <form>
                            <input type="text" id="login" className="fadeIn second" name="login" placeholder="email"/>
                            <input type="text" id="password" className="fadeIn third" name="login"
                                   placeholder="password"/>
                            <input type="submit" className="fadeIn fourth" value="Log In"/>
                        </form>
                        <div id="formFooter">
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a className="underlineHover" >Welcome back! 🐾</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Login