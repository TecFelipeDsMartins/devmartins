import Head from 'next/head'
import useAuth from './../hooks/useAuth';

export default function Home() {
 
  const { user, signin } = useAuth();

  console.log('user',user)

  return (
    <div>
     <h2>Jesus é o Senhor</h2>
     <button onClick={()=>{signin()}}>Entrar com github</button>
    </div>
  )
}
