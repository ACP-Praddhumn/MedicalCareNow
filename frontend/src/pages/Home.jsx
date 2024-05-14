import React from 'react'
import Hero from '../components/Hero'
import Biography from '../components/Biography'
import Department from '../components/Departments'
import MessageForm from '../components/MessageForm'

const Home = () => {
  return (
   <>
   <Hero title={"Welcome CareCraft Medical Institute | Your Trusted Healthcare provider"} imageUrl={"/hero.png"}/>
   <Biography imageUrl = {"/about.png"}/>
   <Department/>
   <MessageForm/>
   </>
  )
}

export default Home
