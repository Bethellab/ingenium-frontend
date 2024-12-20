import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import SignupForm from '../../components/SignIn/SignUpForm';
import LoginForm from '../../components/SignIn/LoginForm';
import ForgotPasswordForm from '../../components/SignIn/ForgotPassword';
import { image } from '@/assets/image/image';


type UserType = 'individual' | 'business';

const MainForm = () => {
    const { userType } = useParams<{ userType: UserType }>();
    const validUserType = userType || 'individual'; // Fallback to 'individual' if userType is undefined
    
    const [formType, setFormType] = useState<'signup' | 'login' | 'forgotPassword' >('signup');
    const navigate = useNavigate()


    return (
        <div >
            <div className='flex items-center justify-center border-b'>
                <img src={image.signinlogo} className='w-36 m-4' onClick={() =>navigate('/')} />
            </div>
            <div className='flex justify-center items-center'>
                {formType === 'signup' && <SignupForm setFormType={setFormType} userType={validUserType} />}
                {formType === 'login' && <LoginForm setFormType={setFormType} />}
                {formType === 'forgotPassword' && <ForgotPasswordForm setFormType={setFormType} />}
              
            </div>

            
           
        </div>
    );
};

export default MainForm;
