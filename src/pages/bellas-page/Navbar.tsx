import { useNavigate } from 'react-router-dom'
import logo from '../../assets/image/bellas-logo.png'

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div className='border-b py-2'>
        <div className='flex items-center justify-between mx-24'>
            <img src={logo} alt='' />

            <div className='flex items-center gap-8'>
                <button onClick={() => navigate('/bella-login')}>Log in</button>
                <button  onClick={() => navigate('/bella-signup')} className='bg-[#5E25CC] text-white p-2 rounded-full w-36'>Sign Up</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar