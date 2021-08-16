import React from 'react'
import Loader from 'react-loader-spinner'
export default () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <Loader type='Puff' color='#9ae6b4' height={100} width={100} />
    </div>
  )
}
