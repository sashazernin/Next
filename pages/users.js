import React from "react";
import A from "../Components/A";
import MainContainer from "../Components/MainContainer";

const users = ({users}) => {
    return (
        <MainContainer>
            <h1>Users page</h1>
            <ul>
                {users.map(user =>
                    <li key={user.id}>
                        <A to={`/users/${user.id}`} name={user.name}/>
                    </li>
                )}
            </ul>

        </MainContainer>
    )
}

export default users

export async function getStaticProps(context) {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await resp.json()
    return {
        props: {users}
    }
}