import React from 'react'
import { useState } from 'react'

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

    function usernameChangeHandler(event) {
        const username = event.target.value
        credentials.username = username
        setuserCredentials(userCredentials)
        console.log(credentials);
    }

    function passwordChangeHandler(event) {
        const password = event.target.value
        credentials.password = password
        setuserCredentials(userCredentials)
        console.log(credentials);

    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
            <form className="grid grid-rows-3 gap-4 bg-green-300 rounded-md" onSubmit={submitHandler}>

                <div className='grid w-50'>
                    <label className="mr-3 font-semibold text-black-50" htmlFor="username">User Name</label>
                    <input className="w-4/5 form-control" placeholder='User Name' type="text" name="username" id="username" onChange={usernameChangeHandler} />
                </div>

                <div>
                    <label className="mr-3 font-semibold text-black-50" htmlFor="password">Password</label>
                    <input className="w-4/5 form-control" placeholder='password' type="password" name="password" id="password" onChange={passwordChangeHandler} />
                </div>

                <button className="grid grid-rows-1 m-2 font-semibold bg-green-600 rounded-md form-control" type="submit">SIGN IN</button>

            </form>
            </div>
        </div>


    )
}
