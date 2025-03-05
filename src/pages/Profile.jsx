import React,{useEffect, useState} from 'react'
import {Camera,User,Mail} from "lucide-react"
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Profile = () => {

  const auth = useSelector(state=>state.auth)
  console.log(auth?.user?.data)
  const [img,setImg] = useState(null);
  const navigate = useNavigate()
  useEffect(()=>{
    if(!auth.user){
      navigate("/login");
    }
  },[auth])
  function handleUpload(e){
    const file = e.target.files[0];
    if(!file)return ;
    const imageUrl = URL.createObjectURL(file);
    setImg(imageUrl)
    
  }
  return (
    <div className='h-screen pt-8 overflow-scroll overflow-x-hidden'>
      <div className='max-w-2xl mx-auto p-4 '>
        <div className='bg-base-300 rounded-xl p-6 space-y-8 '>
          <div className='text-center'>
            <h1 className='text-2xl font-semibold'>Profile</h1>
            <p className='mt-2'>Your profile information</p>
          </div>
          
          <div className='flex flex-col items-center gap-4'>
            <div className='relative'>
              <img 
                src={img ||'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png'}
                alt="Profile" 
                className='size-32 rounded-full object-cover border-4  p-[1px]'
              />
              <label 
                htmlFor='avatar-upload'
                className={`
                  absolute bottom-0 right-0 bg-base-content hover:scale-105 p-2 rounded-full cursor-pointer transition-all duration-200
                  
                  `}
                >
                  <Camera className='w-5 h-5 text-base-200'/>
                  <input 
                    type="file"
                    id="avatar-upload"
                    className='hidden'
                    accept='image/*'
                    onChange={handleUpload}
                    disabled = {false}
                  />
                </label>
            </div>
            <p className='text-sm text-zinc-400'>
              {"Click the camer icon to update your photo"}
            </p>
          </div>

          <div className='space-y-4'>

            <div className='space-y-1'>
                <div className='text-sm text-zinc-400 flex items-center gap-2'>
                  <User className='w-4 h-4'/>
                  Full Name
                </div>
                <p className='px-4 py-2.5 bg-base-200 rounded-lg border'>{auth?.user?.data.username}</p>
            </div>

            <div className='space-y-1'>
                <div className='text-sm text-zinc-400 flex items-center gap-2'>
                  <Mail className='w-4 h-4'/>
                  Email Address
                </div>
                <p className='px-4 py-2.5 bg-base-200 rounded-lg border'>{auth?.user?.data.email}</p>
            </div>

          </div>

          <div className='mt-4  bg-base-300 rounded-xl p-4'>
            <h2 className='txt-lg font-medium mb-4'> Account Information </h2>  
            <div className='space-y-3 text-sm'>
                <div className='flex items-center justify-between py-2 border-b border-zinc-700'>
                  <span>Member Since</span>
                  <span >{auth?.user?.data.createdAt?.split("T")[0]}</span>
                </div>

                <div className='flex items-center justify-between py-2 '>
                  <span >Account Status</span>
                  <span className='text-green-500'>Active</span>
                </div>
            </div> 
          </div>

        </div>
      </div>
    </div>
  )
}

export default Profile