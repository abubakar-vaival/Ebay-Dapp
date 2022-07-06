import React from 'react'
import Main from '../components/Main'
import SideBar from '../components/SideBar'
const styles = {
    container : `h-full w-full flex bg-[#fff]`
  }
const Home = () => {
  return (
    <div className={styles.container}>
        <SideBar/>
        <Main/>
    </div>
  )
}

export default Home