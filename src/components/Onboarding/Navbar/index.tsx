
import { NavLink, useNavigate } from 'react-router-dom'
import { image } from '@/assets/image/image'
import { useState } from 'react'
import { FaChevronDown, FaUser, FaHandshake, FaSignOutAlt } from "react-icons/fa"


const Navbar = () => {

  const navigate = useNavigate()

  const [showMenu, setShowMenu] = useState(false)

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const isActive = (path: string) => {
    // Check if the current path starts with the given path
    return location.pathname.startsWith(path);
  };


  return (
    <div className=' text-sm py-2 mb-2 border-b  '>
      <div className='bg-white flex items-center justify-between gap-6 py-2 px-2 rounded-full mx-8 lg:mx-6'>
        <div className='flex justify-center items-center gap-6'>
          <img onClick={() => navigate('/home')} className='w-28 cursor-pointer' src={image.signinlogo} />
          <input type="Search" placeholder='search' className='bg-gray-200 outline-none rounded-lg py-2 px-2 hidden lg:block' />
        </div>

        <ul className='hidden xl:flex items-start gap-2  text-lg mr-80'>

          <NavLink
            to="/home"
            className={`px-4 py-2 ${isActive("/home") ? "text-blue-500" : "text-gray-700"}`} // Change the text color based on the active state
          >
            <div className="flex items-center gap-2">
              <svg
                width="15"
                height="16"
                viewBox="0 0 15 16"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor" // Use currentColor to inherit the color from the parent
              >
                <path d="M0.791748 13.0002V6.37516C0.791748 5.98836 0.875081 5.62433 1.04175 5.28308C1.20841 4.94169 1.45147 4.646 1.77091 4.396L6.02092 1.2085C6.47925 0.875163 6.9723 0.708496 7.50008 0.708496C8.02786 0.708496 8.52091 0.875163 8.97925 1.2085L13.2292 4.396C13.5487 4.646 13.7917 4.94169 13.9584 5.28308C14.1251 5.62433 14.2084 5.98836 14.2084 6.37516V13.0002C14.2084 13.7592 13.9468 14.4003 13.4236 14.9235C12.9003 15.4468 12.2591 15.7085 11.5001 15.7085H10.3959C10.0584 15.7085 9.76918 15.588 9.52821 15.347C9.28723 15.1061 9.16675 14.8168 9.16675 14.4793V10.5627C9.16675 10.2252 9.04647 9.93593 8.80591 9.69495C8.56522 9.45398 8.2764 9.3335 7.93946 9.3335H7.068C6.73105 9.3335 6.44105 9.45398 6.198 9.69495C5.95494 9.93593 5.83342 10.2252 5.83342 10.5627V14.4793C5.83342 14.8168 5.71293 15.1061 5.47196 15.347C5.23098 15.588 4.94175 15.7085 4.60425 15.7085H3.50008C2.74105 15.7085 2.09994 15.4468 1.57675 14.9235C1.05341 14.4003 0.791748 13.7592 0.791748 13.0002Z" />
              </svg>
              <li className="py-1 whitespace-nowrap">Home</li>
            </div>
          </NavLink>


          <NavLink to='/courses' className={`px-4 py-2 ${isActive("/courses") ? "text-blue-500" : "text-gray-700"}`} >
            <div className='flex items-center gap-2'>
              <svg width="17" height="18" viewBox="0 0 17 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.791748 13.4585V8.4585C0.791748 7.98183 0.963137 7.58489 1.30591 7.26766C1.64855 6.95044 2.05355 6.81266 2.52091 6.85433C3.63203 7.021 4.68758 7.32308 5.68758 7.76058C6.68758 8.19808 7.62508 8.75016 8.50008 9.41683C9.37508 8.75016 10.3126 8.19808 11.3126 7.76058C12.3126 7.32308 13.3681 7.021 14.4792 6.85433C14.9466 6.81266 15.3516 6.95044 15.6942 7.26766C16.037 7.58489 16.2084 7.98183 16.2084 8.4585V13.4585C16.2084 13.9224 16.0556 14.3266 15.7501 14.671C15.4445 15.0154 15.0626 15.2085 14.6042 15.2502C13.6665 15.3484 12.7827 15.6021 11.953 16.0114C11.1233 16.4206 10.3268 16.9059 9.56362 17.4675C9.41015 17.6004 9.23967 17.6911 9.05217 17.7397C8.86467 17.7884 8.68064 17.8127 8.50008 17.8127C8.31953 17.8127 8.1355 17.7884 7.948 17.7397C7.7605 17.6911 7.59001 17.6004 7.43654 17.4675C6.67335 16.9059 5.87689 16.4206 5.04716 16.0114C4.21744 15.6021 3.33369 15.3484 2.39591 15.2502C1.93758 15.2085 1.55564 15.0154 1.25008 14.671C0.944526 14.3266 0.791748 13.9224 0.791748 13.4585ZM8.50279 7.85433C7.44543 7.85433 6.54522 7.4837 5.80217 6.74245C5.05911 6.00134 4.68758 5.10204 4.68758 4.04454C4.68758 2.98718 5.05821 2.0835 5.79946 1.3335C6.54057 0.583496 7.43987 0.208496 8.49737 0.208496C9.55473 0.208496 10.4549 0.583496 11.198 1.3335C11.9411 2.0835 12.3126 2.98718 12.3126 4.04454C12.3126 5.10204 11.942 6.00134 11.2007 6.74245C10.4596 7.4837 9.56029 7.85433 8.50279 7.85433Z" />
              </svg>

              <li className='py-1 whitespace-nowrap'>Courses</li>
            </div>

          </NavLink>
          <NavLink to='/mylearning' className={`px-4 py-2 ${isActive("/mylearning") ? "text-blue-500" : "text-gray-700"}`}>
            <div className='flex items-center gap-2'>
              <svg width="21" height="20" viewBox="0 0 21 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_189_5575" maskUnits="userSpaceOnUse" x="0" y="0" width="21" height="20">
                  <rect x="0.5" width="20" height="20" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_189_5575)">
                  <path d="M17.9583 13.229V8.604L11.6249 11.7498C11.2609 11.9304 10.8852 12.0241 10.4978 12.0311C10.1103 12.038 9.73603 11.9443 9.37492 11.7498L3.02075 8.58317C2.79853 8.47206 2.62839 8.32046 2.51034 8.12838C2.39228 7.93643 2.33325 7.7281 2.33325 7.50338C2.33325 7.2788 2.39228 7.06928 2.51034 6.87484C2.62839 6.68039 2.79853 6.52762 3.02075 6.4165L9.37492 3.27067C9.54964 3.17345 9.73075 3.10053 9.91825 3.05192C10.1058 3.00331 10.2996 2.979 10.4999 2.979C10.7002 2.979 10.8941 3.00331 11.0816 3.05192C11.2691 3.10053 11.4502 3.17345 11.6249 3.27067L19.4374 7.14567C19.6319 7.25678 19.7916 7.40609 19.9166 7.59359C20.0416 7.78109 20.1041 7.99234 20.1041 8.22734V13.2498C20.1041 13.5457 20.0014 13.7967 19.796 14.003C19.5905 14.2092 19.3405 14.3123 19.046 14.3123C18.7514 14.3123 18.4964 14.2057 18.2812 13.9925C18.0659 13.7794 17.9583 13.5248 17.9583 13.229ZM9.37492 16.729L6.04159 15.104C5.63881 14.8957 5.31589 14.5976 5.07284 14.2098C4.82978 13.8222 4.70825 13.398 4.70825 12.9373V11.4165L9.37492 13.7498C9.73895 13.9304 10.1146 14.0207 10.502 14.0207C10.8895 14.0207 11.2638 13.9304 11.6249 13.7498L16.2916 11.4165V12.9373C16.2916 13.398 16.1701 13.8222 15.927 14.2098C15.6839 14.5976 15.361 14.8957 14.9583 15.104L11.6249 16.729C11.4502 16.8262 11.2691 16.8957 11.0816 16.9373C10.8941 16.979 10.7002 16.9998 10.4999 16.9998C10.2996 16.9998 10.1058 16.979 9.91825 16.9373C9.73075 16.8957 9.54964 16.8262 9.37492 16.729Z" />
                </g>
              </svg>

              <li className='py-1 whitespace-nowrap'>My Learning</li>
            </div>
          </NavLink>




         
        </ul>
        <div className='flex items-center gap-4 relative'>

          <div className="relative flex items-center gap-4">
            <img src={image.notification} alt="Notification Icon"   className="hidden lg:block" />
            <img
              src={image.profile_icon}
              alt="Profile Icon"
              className="hidden lg:flex"
            />
            <div onClick={toggleDropdown} className="cursor-pointer hidden lg:block">
              <FaChevronDown />
            </div>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-52 w-48 bg-white shadow-lg rounded-md p-2">
                <ul className="text-lg">
                  <li onClick={toggleDropdown} className="p-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2">
                    <FaUser className="text-gray-500" />
                    Profile
                  </li>
                  <NavLink onClick={toggleDropdown} to="/affiliaties" className="p-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2">
                    <FaHandshake className="text-gray-500" />
                    Affiliates
                  </NavLink>
                  <NavLink onClick={toggleDropdown} to="/"  className="p-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2 text-red-500">
                    <FaSignOutAlt />
                    Logout
                  </NavLink>
                </ul>
              </div>
            )}
          </div>


          <img onClick={() => setShowMenu(true)} className='w-6 xl:hidden' src={image.menubar} alt='' />
          {/**********Mobile Menu */}
          <div className={` ${showMenu ? 'fixed w-full' : 'h-0 w-0'} xl:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
            <div className='flex items-center justify-between px-5 py-6'>
              <img className='w-24' src={image.ingenium_logo} alt="" />
              <img className='w-7' onClick={() => setShowMenu(false)} src={image.crossbar} alt="" />
            </div>
            <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
              <NavLink onClick={() => setShowMenu(false)} to="/home"><p className='px-4 py-2 rounded-full inline-block'>Home</p></NavLink>
              <NavLink onClick={() => setShowMenu(false)} to='/courses'><p className='px-4 py-2 rounded-full inline-block'>Courses</p></NavLink>
              <NavLink onClick={() => setShowMenu(false)} to='/mylearning'><p className='px-4 py-2 rounded-full inline-block'>My Learning</p></NavLink>
              <NavLink onClick={() => setShowMenu(false)} to="/home"><p className='px-4 py-2 rounded-full inline-block'>Home</p></NavLink>
              <NavLink onClick={() => setShowMenu(false)} to="/affiliaties" className="p-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2">
          
                    Affiliates
                  </NavLink>
              <button className='bg-primary py-2 px-4 rounded-full text-white'>Get Started</button>
            </ul>
          </div>
        </div>

      </div>


    </div>
  )
}

export default Navbar