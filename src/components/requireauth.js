import { redirect } from "react-router-dom";
async function fakeauth(){
    const islogin = true;
    if(!islogin){
        return redirect("/login")
    }
return null;
}
export {fakeauth}