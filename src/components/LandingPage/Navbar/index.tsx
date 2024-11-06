import { NavLink, useNavigate } from 'react-router-dom'
import { image } from '@/assets/image/image'
import { useState } from 'react'


const Navbar = () => {

    const navigate = useNavigate()

    const [showMenu, setShowMenu] = useState(false)

    return (
        <div className=' text-sm py-3 mb-5 '>
            <div className='bg-white flex items-center justify-between py-3 px-2 rounded-full'>
                <img onClick={() => navigate('/')} className='w-28 cursor-pointer' src={image.ingenium_logo} />
                <ul className='hidden lg:flex items-start gap-10 font-medium'>
                   
                    <NavLink to='/'>
                        <li className='py-1 whitespace-nowrap'>Explore</li>    
                    </NavLink>
                    <NavLink to='/'>
                        <li className='py-1 whitespace-nowrap'>Find Your Next Talent</li>
                       
                    </NavLink>
                    <NavLink to='/'>
                        <li className='py-1 whitespace-nowrap'>Advance Your Career</li>   
                    </NavLink>
                    <NavLink to='/'>
                        <li className='py-1 whitespace-nowrap'>Blog</li>   
                    </NavLink>
                </ul>
                <div className='flex items-center gap-4'>
                    
                        <button className='border rounded-full px-2 py-2 whitespace-nowrap'>Sign in</button>
                        <button className='bg-primary py-2 px-4 rounded-full text-white hidden md:block whitespace-nowrap'>Get Started</button>
                  

                    <img onClick={() => setShowMenu(true)} className='w-6 lg:hidden' src={image.menubar} alt='' />
                    {/**********Mobile Menu */}
                    <div className={` ${showMenu ? 'fixed w-full' : 'h-0 w-0'} lg:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
                        <div className='flex items-center justify-between px-5 py-6'>
                            <img className='w-24' src={image.ingenium_logo} alt="" />
                            <img className='w-7' onClick={() => setShowMenu(false)} src={image.crossbar} alt="" />
                        </div>
                        <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                            <NavLink onClick={() => setShowMenu(false)} to="/"><p className='px-4 py-2 rounded-full inline-block'>Explore</p></NavLink>
                            <NavLink onClick={() => setShowMenu(false)} to="/"><p className='px-4 py-2 rounded-full inline-block'>Find Your Next Talent</p></NavLink>
                            <NavLink onClick={() => setShowMenu(false)} to="/"><p className='px-4 py-2 rounded-full inline-block'>Advnace Your Career</p></NavLink>
                            <NavLink onClick={() => setShowMenu(false)} to="/"><p className='px-4 py-2 rounded-full inline-block'>Blog</p></NavLink>
                            <button className='bg-primary py-2 px-4 rounded-full text-white'>Get Started</button>
                        </ul>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Navbar