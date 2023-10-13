import React from 'react'
import { update } from '../redux/userSlice';
import { useDispatch } from 'react-redux'
import { ThemeContext } from '../Context';

const Login = () => {

    const [name, setName] = React.useState()
    const [email, setEmail] = React.useState()
    const [darkMode, setDarkMode] = React.useContext(ThemeContext)
    const dispatch = useDispatch();

    ///// Handle the input of name and email
    const handleUpdate = async (e) => {
        e.preventDefault();
        dispatch(update({name, email}))
        setDarkMode (prevMode => !prevMode)
    }


    return (
    <section className='w-full mt-6'>
        <form className='w-full flex fex-row bg-white p-3 mt-10 justify-between items-center'
         onSubmit={handleUpdate}>

             <div className='flex flex-col items-center justify-between w-full px-[5%] py-8'>
              
               <input
                 type='text'
                 className='bg-lime-100 p-4 w-full'
                 placeholder='John Doe'
                 value={name}
                 onChange={(e)=> setName(e.target.value)}
               />
                
               <input
                 type='email'
                 className='bg-lime-100 my-8 p-4 w-full'
                 placeholder='JohnDoe@gmail.com'
                 value={email}
                 onChange={(e)=> setEmail(e.target.value)}
               />
            
               <button className='black_btn'>
                 submit
               </button>
           
             </div>
            
           
        </form>       
     </section>
  )
}

export default Login