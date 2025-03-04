import React,{ useState,useEffect } from 'react'
import {useDispatch,useSelector} from "react-redux"
import { signupUser } from '../store/features/authSlice'
import { useNavigate } from "react-router-dom";
import FormHandler from '../components/Form';


const Signup = () => {

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



  return (
    <div>
      <FormHandler 
        signup={true}
        formData={formData} 
        setFormData={setFormData}
        errors={errors}
        setErrors={setErrors}
       />
    </div>
  )
}

export default Signup
