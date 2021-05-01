import useAuth from './../hooks/useAuth';

function Dashboard (){
    const {user} = useAuth();

    return(
        <h1>Dash:{user?.displayName}</h1>
    )

}

export default Dashboard