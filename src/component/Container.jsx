import React from 'react'

export const Container = ({children, className}) => {
  return (
    <div className={`w-full sm:w-[600px] md:w-[720px] mt-5 lg:w[1000px] mx-auto ${className}`}>
      {children}
    </div>
  )
}

export default Container