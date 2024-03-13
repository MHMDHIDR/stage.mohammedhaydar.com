import { motion } from 'framer-motion'
import Link from 'next/link'
import { RiMailLine, RiMapPinLine, RiPhoneLine } from 'react-icons/ri'
import { useQuery } from '@tanstack/react-query'
import { childrenAnimation } from '@/lib/motion'
import ContactForm from './ContactForm'
import { informationProps } from '@/types'
import { getInformation } from '@/sanity/sanity-utils'

const ContactSection = () => {
  const { data } = useQuery<informationProps>({
    queryKey: ['information'],
    queryFn: async () => await getInformation()
  })

  if (!data) return null

  return (
    <div className='grid grid-cols-9 gap-7'>
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
        variants={childrenAnimation}
        className='col-span-9 lg:col-span-4'
      >
        <div className='contact-information'>
          <h4>Contact Information</h4>
          <p>
            Transform Your Web Presence: Empower Your Business with Cutting-Edge
            Development. Let&apos;s Collaborate to Create Stunning Websites That Captivate
            and Convert. Connect with Me Today!
          </p>
          <span className='inline-block h-1 w-20 rounded-full bg-primary bg-opacity-20'></span>
          <div className='mt-5 space-y-5'>
            <div className='card flex items-center p-4 md:p-5'>
              <span className='icon mr-4 inline-flex h-16 w-16 shrink-0 grow-0 basis-16 items-center justify-center rounded-full bg-primary bg-opacity-10 text-3xl text-primary'>
                <RiPhoneLine />
              </span>
              <div className='content'>
                <h5 className='mb-2'>Contact via phone</h5>
                {data.phoneNumbers?.map((number: string, index: number) => (
                  <p className='mb-0' key={index}>
                    {number.startsWith('0') ? (
                      <Link
                        href={`tel:${number.split('-').join('')}`}
                        className='no-underline'
                      >
                        {number}
                      </Link>
                    ) : (
                      number
                    )}
                  </p>
                ))}
              </div>
            </div>
            <div className='card flex items-center p-4 md:p-5'>
              <span className='icon mr-4 inline-flex h-16 w-16 shrink-0 grow-0 basis-16 items-center justify-center rounded-full bg-primary bg-opacity-10 text-3xl text-primary'>
                <RiMailLine />
              </span>
              <div className='content'>
                <h5 className='mb-2'>Contact by email</h5>
                {data.emailAddress?.map((email: string, index: number) => (
                  <p className='mb-0' key={index}>
                    <Link href={`mailto:${email}`} className='no-underline'>
                      {email}
                    </Link>
                  </p>
                ))}
              </div>
            </div>
            <div className='card flex items-center p-4 md:p-5'>
              <span className='icon mr-4 inline-flex h-16 w-16 shrink-0 grow-0 basis-16 items-center justify-center rounded-full bg-primary bg-opacity-10 text-3xl text-primary'>
                <RiMapPinLine />
              </span>
              <div className='content'>
                <h5 className='mb-2'>Current Location</h5>
                <p className='mb-0'>{data.address}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.4 }}
        variants={childrenAnimation}
        className='col-span-9 lg:col-span-5'
      >
        <ContactForm />
      </motion.div>
    </div>
  )
}

export default ContactSection
