import React from 'react'
import Container from '../component/Container'
import BreadCrumb from '../component/BreadCrumb'
import ProductEditcard from '../component/ProductEditcard'

const ProductEditPage = () => {
  return (
    <section>
        <Container>
            <BreadCrumb currentPageTitle={"Edit Product"} links={[{title:"Product Module",path:"/products"}]}/>
            <ProductEditcard/>
        </Container>
    </section>
  )
}

export default ProductEditPage