import { redirect } from "react-router-dom";
async function fakeauth(request){
    const pathname = new URL(request.url).pathname;
console.log(pathname)
    const islogin = JSON.parse(localStorage.getItem("isloggin"));
    if(!islogin){
        return redirect(`/login?redirectTo=${pathname}`)
    }
return null;
}
export {fakeauth}