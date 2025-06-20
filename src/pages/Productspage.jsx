import React from 'react'
import Container from '../component/Container'
import BreadCrumb from '../component/BreadCrumb'
import ProductList from '../component/ProductList'
const Productspage = () => {
  return (
    <section>
      <Container>
        <BreadCrumb currentPageTitle={"ပစ္စည်းစာရင်း"} links={[]} />
        <ProductList />
      </Container>
    </section>
  )
}

export default Productspage