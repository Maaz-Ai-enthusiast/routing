// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
export default function Github() {


const data=useLoaderData();



    // const [data,setData]=useState([]);
    // useEffect(() => {
     
    //     fetch("https://api.github.com/users/Maaz-Ai-enthusiast")
    //       .then((response) => response.json())
    //       .then((data) => {
    //         setData(data);
    //         console.log(data);
            
    //       })
         
    //   }, []);
    return (
        <div className="text-center m-4 bg-gray-500 text-white p-4 text-3xl flex flex-col">
           <span>Github Followers : {data.followers}</span>
           <img src={data.avatar_url} alt="pic" width={300} className="rounded-lg" />
        </div>
    )

}

export const githubInfoLoader=async ()=>{
    const res=await fetch(`https://api.github.com/users/Maaz-Ai-enthusiast`);
    // console.log(res);
    // const data=await res.json();
    // console.log(data);
    
    return res.json();
}