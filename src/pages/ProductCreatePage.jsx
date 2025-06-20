import React from 'react'
import Container from '../component/Container'
import BreadCrumb from '../component/BreadCrumb'
import ProductCreateCard from '../component/ProductCreateCard'



const ProductCreatePage = () => {
  return (
   <Container>
    <BreadCrumb currentPageTitle={"Create Product"} links={[{title:"ပစ္စည်းစာရင်း",path:"/products"}]}/>
    <ProductCreateCard/>
   </Container>
  )
}

export default ProductCreatePage