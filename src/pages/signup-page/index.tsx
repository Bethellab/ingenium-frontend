import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import SignupForm from '../../components/SignIn/SignUpForm';

import { image } from '@/assets/image/image';


type UserType = 'individual' | 'business';

const MainForm = () => {
    const { userType } = useParams<{ userType: UserType }>();
    const validUserType = userType || 'individual'; // Fallback to 'individual' if userType is undefined
    
    const [formType ] = useState<'signup' | 'login' | 'forgotPassword' >('signup');
    const navigate = useNavigate()


    return (
        <div >
            <div className='flex items-center justify-center border-b'>
                <img src={image.signinlogo} className='w-36 m-4' onClick={() =>navigate('/')} />
            </div>
            <div className='flex justify-center items-center'>
                {formType === 'signup' && <SignupForm userType={validUserType} />}
                
                
              
            </div>

            
           
        </div>
    );
};

export default MainForm;
