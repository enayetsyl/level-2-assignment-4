import React, { useState } from 'react'
import Button from './Button'
import toast from 'react-hot-toast'

type Props = {}

const Newsletter = (props: Props) => {
  const [email, setEmail] = useState('')
  const handleClick = () => {
    toast.success("You have successfully subscribe for newsletter.")
  
    setEmail('')
  }
  

  return (
    <div className='w-full bg-silver py-20 flex justify-center items-center mb-20'>
      <div className='w-[80%] bg-white p-5 md:p-10 flex flex-col justify-center items-center'>
        <h1 className='font-bold text-center text-3xl md:text-5xl lg:text-7xl text-medium-gold tracking-[10px]'>NEWSLETTER</h1>
        <p className='text-dark-gray text-base text-center pt-2 pb-5'>Keep up our latest news and events. Subscribe our newsletter</p>

        <div className='flex justify-center items-center gap-3 w-full lg:w-2/3 2xl:w-1/3 '>
          <div className='w-[65%]'>
          <input type='email' name='email' placeholder='Email Address...'
          value={email} 
          onChange={(e)=> setEmail(e.target.value)}
          className='p-2 bg-dark-gray w-full'/>
          </div>
          <div className='w-[30%]'>
            <Button
            type='submit'
            variant='primary'
            size='medium'
            onClick={handleClick}
            className='py-2.5 uppercase text-white w-full'
            >subscribe</Button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Newsletter