import React,{use, useEffect, useState} from 'react'
import FormHandler from '../components/Form'
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../store/features/authSlice';

const Login = () => {
  const { isAuthenticated, error, isLoading } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(isAuthenticated)
  const [formData, setFormData] = useState({

    email: '',
    password: '',

  });
  const [errors, setErrors] = useState({

    email: '',
    password: '',

  });
  const [isFormValid, setIsFormValid] = useState(false);
  useEffect(()=>{
    if(isAuthenticated){
      navigate("/profile")
    }
  },[isAuthenticated,dispatch,navigate])

  function handleSubmit(e,setIsSubmitting){
    
      e.preventDefault();
      if (isFormValid) {
        setIsSubmitting(true);
  
        setTimeout(() => {
          console.log('Form submitted successfully', formData);
          setIsSubmitting(false);
          dispatch(loginUser({
            email: formData.email,
            password: formData.password
          }))
          setFormData({
            email: '',
            password: '',           
          });
        }, 1000);
      }
    }


  
  return (
    <div>
      <FormHandler
        signup={false} 
        formData={formData} 
        setFormData={setFormData}
        errors={errors}
        setErrors={setErrors}
        isFormValid={isFormValid}
        setIsFormValid={setIsFormValid}
        handleSubmit={handleSubmit}
       />
    </div>
  )
}

export default Login