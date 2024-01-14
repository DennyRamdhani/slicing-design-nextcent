import React from 'react'
import Navbar from './assets/Components/Navbar/Navbar'
import HeroSection from './assets/Components/Hero/HeroSection'
import OurClients from './assets/Components/OurClients/OurClients'
import InfoSection from './assets/Components/InfoSection/InfoSection'
import CardInfo from './assets/Components/CardInfo/CardInfo'
import Achievements from './assets/Components/Achievements/Achievements'
import Footer from './assets/Components/Footer/Footer'


function App() {
 
  return (
    <>
      <Navbar></Navbar>
      <HeroSection MyImg='/src/assets/Icon/Hero-Section.svg' MyContent='Where to grow your business as a photographer: site or social media?' VariantTitle='text-7xl font-semibold text-neutral-dark-grey' VariantContent='text-neutral-grey mt-4 mb-8 text-xl' TextButton='Register'>Lessons and insights <br></br> <span className='text-primary'>from 8 years</span></HeroSection>
      <OurClients></OurClients>
      <InfoSection></InfoSection>
      <div className='flex justify-between mx-[144px]'>
        <CardInfo MyImg='src/assets/Icon/CardSatu.svg' desc='Our membership management software provides full automation of membership renewals and payments' title='Membership Organisations'></CardInfo>
        <CardInfo MyImg='src/assets/Icon/CardDua.svg' desc='Our membership management software provides full automation of membership renewals and payments' title='National Associations Group'></CardInfo>
        <CardInfo MyImg='src/assets/Icon/CardTiga.svg' desc='Our membership management software provides full automation of membership renewals and payments' title='Clubs And Groups Center'></CardInfo>
      </div>
      <HeroSection direction='flex-row-reverse' MyImg='/src/assets/Icon/Hero-Section2.svg' MyContent='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.' VariantTitle='text-4xl font-semibold text-neutral-dark-grey' VariantContent='text-neutral-grey mt-4 mb-8 text-sm'  TextButton='Learn More'>The unseen of spending three <br />years at Pixelgrade</HeroSection>
      <Achievements></Achievements>
      <HeroSection direction='flex-row' MyImg='/src/assets/Icon/Hero-Section3.svg' MyContent='Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.' VariantTitle='text-4xl font-semibold text-neutral-dark-grey' VariantContent='text-neutral-grey mt-4 mb-8 text-sm'  TextButton='Learn More'>How to design your site footer like <br />we did</HeroSection>
      <Footer></Footer>
    </>
  )
}

export default App
