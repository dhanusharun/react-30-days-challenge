import React, { useContext } from 'react'
import ThemeContext from "../utils/ThemeContext";

const Page2 = () => {
  // By using the useContext hooks method, this will be achievable only it is nested component
  const theme = useContext(ThemeContext); 
  return (
    <div>
      <h1 className={theme}>Hello from component 2</h1>
    </div>
  )
}

export default Page2
