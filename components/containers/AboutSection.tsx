import Image from 'next/image'
import { imageLoader, shimmer, toBase64 } from '@/lib/utils'
import { motion } from 'framer-motion'
import { childrenAnimation } from '@/lib/motion'
import { useQuery } from '@tanstack/react-query'
import { informationProps } from '@/types'
import { getInformation } from '@/sanity/sanity-utils'

const AboutSection = () => {
  const { data } = useQuery<informationProps>({
    queryKey: ['information'],
    queryFn: async () => await getInformation()
  })

  if (!data) return null

  return (
    <div className='grid grid-cols-2 items-center gap-7'>
      <div className='col-span-2 lg:col-span-1'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          variants={childrenAnimation}
          className='about-image overflow-hidden rounded-lg'
        >
          <div className='about-image-inner fiximage relative border-10 border-primary border-opacity-20'>
            <span className='absolute -top-2.5 left-0 z-10 h-2.5 w-10 animate-ledgerleftright rounded-full bg-gradient-to-r from-transparent to-primary'></span>
            <span className='absolute -bottom-2.5 left-auto top-auto z-10 h-2.5 w-10 animate-ledgerrightleft rounded-full bg-gradient-to-r from-primary to-transparent'></span>
            <span className='absolute -left-2.5 top-auto z-10 h-10 w-2.5 animate-ledgerbottomtop rounded-full bg-gradient-to-t from-transparent to-primary'></span>
            <span className='absolute -right-2.5 left-auto z-10 h-10 w-2.5 animate-ledgertopbottom rounded-full bg-gradient-to-b from-transparent to-primary'></span>
            <Image
              loader={imageLoader}
              unoptimized={true}
              src={data.largeImage}
              height={422}
              width={660}
              alt={data.fullName}
              className='w-auto h-auto'
              placeholder='blur'
              blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(660, 422))}`}
            />
          </div>
        </motion.div>
      </div>
      <div className='col-span-2 lg:col-span-1'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          variants={childrenAnimation}
          className='about-content'
        >
          <h3>
            Hi, I am <span className='text-primary'>{data.fullName}</span>
          </h3>
          <ul className='styledlist'>
            {data.bio && (
              <li className='text-lg'>
                <p className='leading-10'>{data.bio}</p>
              </li>
            )}
            {data.freelance && (
              <li className='text-lg text-green-400'>
                <strong className='inline-block min-w-[120px] font-medium'>
                  Freelance
                </strong>
                {data.freelance}
              </li>
            )}
          </ul>
          <a href={data.resumeLink} className='btn mt-3 text-white hover:text-blue-900'>
            <span>View Resume</span>
          </a>
        </motion.div>
      </div>
    </div>
  )
}

export default AboutSection
