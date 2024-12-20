import {  useNavigate } from 'react-router-dom'
import logo from '../../../assets/image/bellas-logo.png'

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div className='border-b py-2'>
      <div className='flex items-center justify-between py-6 px-4 max-w-[1600px] mx-auto '>

        <div className='flex gap-8 items-center'>
          <img src={logo} alt='' />
          <div className='flex list-none items-center gap-8'>
            <a href='/'>
              <li className='py-1 whitespace-nowrap'>Home</li>
            </a>
            <a href="#hiring">
              <li className='py-1 whitespace-nowrap'>About</li>

            </a>
            <a href="/">
              <li className='py-1 whitespace-nowrap'>Explore Service</li>
            </a>
            <a href="/">
              <li className='py-1 whitespace-nowrap'>Contact Us</li>
            </a>


          </div>

        </div>


        <div className='flex items-center gap-8'>
          <button onClick={() => navigate('/bella-login')}>Log i</button>
          <button onClick={() => navigate('/bella-signup')} className='bg-[#5E25CC] text-white p-2 rounded-full w-36'>Sign Up</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar