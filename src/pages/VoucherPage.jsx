import React from 'react'
import Container from '../component/Container'
import BreadCrumb from '../component/BreadCrumb'
import VoucherList from '../component/VoucherList'

const VoucherPage = () => {
  return (
    <section>
      <Container>
      <BreadCrumb currentPageTitle={"ဘောက်ချာ"} links={[]} />
          <VoucherList/>
      </Container>
    </section>
  )
}

export default VoucherPage