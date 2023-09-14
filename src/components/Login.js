import React from 'react'
import { Form, redirect, useActionData, useNavigation, useSearchParams } from 'react-router-dom'

function sleep(ms){
  return new Promise((resolve)=> setTimeout(resolve, ms))
}

async function fakelogin(obj){
  await  sleep(1000);
  
if(obj.email === "samantha.reversal@gmail.com" && obj.password === "1234"){
  const successMessage = {
    message: "congrats",
    token: 1234
  }
  const pathname = new URL(obj.request.url).searchParams.get("redirectTo")
  localStorage.setItem("isloggin", "true")
  return redirect(`${pathname? pathname: "/host"}`)
}
return "Failed to Login"
}
export async function action({request}){
  console.log(request)
  const formData = await request.formData()
  const email = formData.get('email');
  const password = formData.get('password');
 return fakelogin({email, password, request})
 
}
export default function Login() {
    const [searchparams, setSearchparams] = useSearchParams()
    const message = searchparams.get("message")
    const formState = useNavigation()
    const formact = useActionData()
    console.log(formState.state)
  return (
    <>
    
    <div className='formContainer'>
    <div>Login</div>
    <h2>{message}</h2>
    <h3>{formact}</h3>
      <Form method='post'>
        <input type='email' name='email' placeholder='enter email' />
        <input type='password' name='password' placeholder='enter password' />
        <button disabled={formState.state === "submitting"}>{formState.state === "submitting"? "Submitting": "Login"}</button>
      </Form>
    </div>
    </>
  )
}
