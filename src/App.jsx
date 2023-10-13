import React from 'react'
import Demo from './components/Demo'
import Hero from './components/Hero'
import { Context } from './Context'
import Todo from './redux/todoReducer'

import './App.css'
import Login from './components/login'

const App = () => {
    return (
      <Context>
        <main>
          <div className='main'> 
             <div className='gradient'/>
          </div>

          <div className='app mb-12'>
             <Hero/>    
             <Demo/>
           {/*   <Login/> 
            <Todo/> */}
          </div>

        </main>
      </Context>
    )
}

export default App
