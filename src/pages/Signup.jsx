import React,{ useState,useEffect } from 'react'
import {useDispatch,useSelector} from "react-redux"
import { signupUser } from '../store/features/authSlice'
import { useNavigate } from "react-router-dom";
import FormHandler from '../components/Form';


const Signup = () => {

  const { isAuthenticated, error, isLoading } = useSelector(state => state.auth);
  console.log(isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/home');
    }
  },[isAuthenticated, navigate, dispatch])

  function handleSubmit(e,setIsSubmitting){
    e.preventDefault();
    if (isFormValid) {
      setIsSubmitting(true);

      setTimeout(() => {
        console.log('Form submitted successfully', formData);
        setIsSubmitting(false);
        dispatch(signupUser({
          username: formData.name,
          email: formData.email,
          password: formData.password
        }))
        setFormData({
          name: '',
          email: '',
          password: '',
          confirmPassword: ''
        });
      }, 1000);
    }
  }

  return (
    <div>
      <FormHandler 
        signup={true}
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

export default Signup
