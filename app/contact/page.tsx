import Head from 'next/head'
import { ContactSection } from '@/components/containers'
import { Layout2 } from '@/components/layout'
import { SectionHeading } from '@/components/utils'

const contact = () => {
  return (
    <Layout2>
      <Head>
        <title>Contact | Mohammed Haydar</title>
      </Head>

      {/* Start Contact Section */}
      <section id='section-contact' className='pt-24 contact-section lg:pt-28 xl:pt-32'>
        <div className='container mx-auto'>
          <SectionHeading title='Contact me' watermark='Contact' animated={false} />
          <ContactSection />
        </div>
      </section>
      {/* End Contact Section */}

      <span className='block pb-24 lg:pb-28 xl:pb-32'></span>
    </Layout2>
  )
}

export default contact
