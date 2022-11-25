import React from "react";
import {useRouter} from "next/router";
import MainContainer from "../../Components/MainContainer";
export default function user({user}){
    const {query} = useRouter()
    return(
        <MainContainer>
            <span>{user.name}</span>
        </MainContainer>
    )
}

export async function getServerSideProps({params}){
    const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await resp.json()
    return{
        props:{user}
    }

}