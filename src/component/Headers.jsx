import React from 'react'
import Container from './Container'

const Headers = () => {
  return (
    <div className=''>
      <header>
         <Container>
           <h1 className=' text-3xl font-bold'>
            Invoice App
        </h1>
        <p className=' text-stone-300'>
            Eric App Solution
        </p>
         </Container>
        </header>
    </div>
  )
}

export default Headers