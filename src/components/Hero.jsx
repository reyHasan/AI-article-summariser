import React from 'react'
import logo from '../assets/logo.svg'
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux'
import { remove } from '../redux/userSlice';
import {ThemeContext} from '../Context'

const Hero = () => {

   
    const [darkMode, setDarkMode] = React.useContext (ThemeContext)
    const dispatch = useDispatch();
    const name = useSelector(state=> state.user.name)

    const handleLogout = async (e) => {
      e.preventDefault();
      dispatch(remove())
    }

    return (
        <header className= {`w-full flex flex-col justify-center items-center p-4 ${darkMode ? 'bg-lime-200' : ''}`}>
            <nav className='w-full flex flex-row justify-between items-center mb-10 pt-3'>
                <img src={logo} alt='logo' className='w-28 object-contain'/>
                
                <div className='flex flex-col'>
                   <h3> {name && `${name} logged in`} </h3> 
                   {name && <button className='black_btn' onClick={handleLogout}>
                     Logout
                   </button>}
                </div>
                
                <button className='black_btn' onClick={()=> setDarkMode(prevMode => !prevMode)}>
                    <a href='https://github.com/reyHasan/'>Github</a>
                </button>
            </nav>

            <h1 className='head_text'>
                Summarize Articles with 
                <br className='max-md:hidden'/> 
                <span className='orange_gradient'>  OpenAI GPT-4 </span>
            </h1>

            <h2 className='desc'> 
                Simplify your reading with Summo, an open-source article summarizer. Developed using ReduxTK, RapidApi, Tailwindcss, and Context Api. Summo is the #1 OpenAI article summarizer.
            </h2>

        </header>
    )
}

export default Hero
