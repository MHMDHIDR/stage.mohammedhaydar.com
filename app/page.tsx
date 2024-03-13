'use client'
import type { NextPage } from 'next'
import { Element as Section } from 'react-scroll'
import {
  AboutSection,
  ContactSection,
  HeroSection,
  PortfoliosSection,
  ResumeSection,
  ServicesSection,
  SkillsSection
} from '@/components/containers'
import { Layout } from '@/components/layout'
import { SectionHeading } from '@/components/utils'
import BlogSection from '@/components/containers/BlogSection'
import { getInformation } from '@/sanity/sanity-utils'
import { useEffect, useState } from 'react'

const Home: NextPage = () => {
  const [resumeLink, setResumeLink] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getInformation()
        setResumeLink(data.resumeLink)
      } catch (error) {
        console.error('Error fetching Resume Link:', error)
      }
    }
    fetchData()
  }, [])

  if (!resumeLink) return null

  return (
    <Layout blurred>
      {/* Start Hero Section */}
      <Section name='section-home'>
        <HeroSection blurred />
      </Section>
      {/* End Hero Section */}

      {/* Start About Section */}
      <Section name='section-about' className='pt-24 about-section lg:pt-28 xl:pt-32'>
        <div className='container mx-auto'>
          <SectionHeading animated={false} title='About Me' watermark='About' />
          <AboutSection />
        </div>
      </Section>
      {/* End About Section */}

      {/* Start Skills Section */}
      <Section name='section-skills' className='pt-24 skills-section lg:pt-28 xl:pt-32'>
        <div className='container mx-auto'>
          <SectionHeading animated={false} title='My Skills' watermark='Skills' />
          <SkillsSection />
        </div>
      </Section>
      {/* End Skills Section */}

      {/* Start Service Section */}
      <Section
        name='section-service'
        className='pt-24 services-section lg:pt-28 xl:pt-32'
      >
        <div className='container mx-auto'>
          <SectionHeading animated={false} title='My Services' watermark='Services' />
          <ServicesSection />
        </div>
      </Section>
      {/* End Service Section */}

      {/* Start Resume Section */}
      <Section name='section-resume' className='pt-24 resume-section lg:pt-28 xl:pt-32'>
        <div className='container mx-auto'>
          <SectionHeading animated={false} title='My Resume' watermark='Resume' />
          <a
            href={resumeLink}
            target='_blank'
            className='flex w-fit mx-auto mb-16 btn text-white hover:text-blue-900'
          >
            <span>View Resume</span>
          </a>
          <ResumeSection />
        </div>
      </Section>
      {/* End Resume Section */}

      {/* Start Portfolios Section */}
      <Section
        name='section-portfolios'
        className='pt-24 portfolios-section lg:pt-28 xl:pt-32'
      >
        <div className='container mx-auto'>
          <SectionHeading animated={false} title='My Projects' watermark='Projects' />
          <PortfoliosSection />
        </div>
      </Section>
      {/* End Portfolios Section */}

      {/* Start Blog Section */}
      <Section name='section-blog' className='news-section pt-24 lg:pt-28 xl:pt-32'>
        <div className='container mx-auto'>
          <SectionHeading animated={false} title='Latest Blogs' watermark='Blogs' />
          <BlogSection />
        </div>
      </Section>
      {/* End Blog Section */}

      {/* Start Contact Section */}
      <Section name='section-contact' className='pt-24 contact-section lg:pt-28 xl:pt-32'>
        <div className='container mx-auto'>
          <SectionHeading animated={false} title='Contact me' watermark='Contact' />
          <ContactSection />
        </div>
      </Section>
      {/* End Contact Section */}

      <span className='block pb-24 lg:pb-28 xl:pb-32'></span>
    </Layout>
  )
}

export default Home
