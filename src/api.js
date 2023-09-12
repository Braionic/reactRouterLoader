import { mydata } from "./Mydata";

async function fetchdata(){
    const res = await mydata;
    if(!res){
        throw new console.error("failed to fetch");
    }
    return res[0].name;
}
export {fetchdata}