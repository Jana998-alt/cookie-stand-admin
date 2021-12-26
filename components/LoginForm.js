import React from 'react'
import {useState} from 'react'

export default function LoginForm(props) {

    const credentials = {
        username: "",
        password: "",
    }

    const [userCredentials, setuserCredentials] = useState(credentials)


    function submitHandler(event) {

        event.preventDefault()
        props.getToken(userCredentials)
        console.log("login");

    }

    function usernameChangeHandler(event){
        username = event.target.value
        credentials.username = username 
        setuserCredentials(userCredentials)
        console.log(credentials);
    }

    function passwordChangeHandler(event){
        password = event.target.value
        credentials.password = password 
        setuserCredentials(userCredentials)
        console.log(credentials);

    }

    return (
        <form  onSubmit={submitHandler}>

            <div >
                <label  htmlFor="username">User Name</label>
                <input  type="text" name="username" id="username" onChange={usernameChangeHandler} />
            </div>

            <div>
                <label  htmlFor="password">Password</label>
                <input type="password" name="password" id="password" onChange={passwordChangeHandler} />
            </div>

            <button  type="submit">Sign In</button>

        </form>
    )
}
