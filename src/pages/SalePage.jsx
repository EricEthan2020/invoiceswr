import React from 'react'
import BreadCrumb from '../component/BreadCrumb'
import Container from '../component/Container'

const SalePage = () => {
  return (
    <section>
      <Container>
          <BreadCrumb links={[]} currentPageTitle={"အရောင်း"} />
      </Container>
    </section>
  )
}

export default SalePage