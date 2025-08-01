import Head from 'next/head'
import { AboutSection, ServicesSection } from '@/components/containers'
import { Layout2 } from '@/components/layout'
import { SectionHeading } from '@/components/utils'

const about = () => {
  return (
    <Layout2>
      <Head>
        <title>About | Mohammed Haydar</title>
      </Head>

      {/* Start About Section */}
      <section className='pt-24 about-section lg:pt-28 xl:pt-32'>
        <div className='container mx-auto'>
          <SectionHeading title='About Me' watermark='About' animated={false} />
          <AboutSection />
        </div>
      </section>
      {/* End About Section */}

      {/* Start Service Section */}
      <section id='section-service' className='pt-24 services-section lg:pt-28 xl:pt-32'>
        <div className='container mx-auto'>
          <SectionHeading title='My Services' watermark='Services' animated={false} />
          <ServicesSection />
        </div>
      </section>
      {/* End Service Section */}

      <span className='block pb-24 lg:pb-28 xl:pb-32'></span>
    </Layout2>
  )
}

export default about
