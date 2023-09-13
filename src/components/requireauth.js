import { redirect } from "react-router-dom";
async function fakeauth(){

    const islogin = JSON.parse(localStorage.getItem("isloggin"));
    if(!islogin){
        return redirect("/login?message=you must log in first")
    }
return null;
}
export {fakeauth}