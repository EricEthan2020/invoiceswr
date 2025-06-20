import React from 'react'
import Container from '../component/Container'
import ModuleBtn from '../component/ModuleBtn'
import { HiCircleStack, HiComputerDesktop, HiOutlineSwatch } from 'react-icons/hi2'

const Dashboard = () => {
  return (
    <section>
      <Container>
        <div className='lg:grid lg:grid-cols-3 lg:gap-5 md:grid md:grid-cols-2 md:gap-5 grid grid-cols-1 gap-5 p-4 mt-5'>
          <div className=' col-span-1'>
            <ModuleBtn name={"ကုန်ပစ္စည်း"} url={"products"} icon={<HiCircleStack />} />
          </div>
          <div className=' col-span-1'>
            <ModuleBtn name={"အရောင်း"} url={"sales"} icon={<HiComputerDesktop />
            } />
          </div>
          <div className=' col-span-1'>
            <ModuleBtn name={"ဘောက်ချာ"} url={"voucher"} icon={<HiOutlineSwatch />} />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Dashboard