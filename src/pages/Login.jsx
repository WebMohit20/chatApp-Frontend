import React,{useState} from 'react'
import FormHandler from '../components/Form'



const Login = () => {

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
        signup={false} 
        formData={formData} 
        setFormData={setFormData}
        errors={errors}
        setErrors={setErrors}
       />
    </div>
  )
}

export default Login