import Image from 'next/image'
import Link from 'next/link'
import { RiCloseLine, RiMenuLine } from 'react-icons/ri'
import { useQuery } from '@tanstack/react-query'
import { imageLoader } from '@/lib/utils'
import { informationProps } from '@/types'
import { getInformation } from '@/sanity/sanity-utils'

type SidemenuProps = {
  fullMenu: boolean
  fullMenuHandler: (isFull: boolean) => void
  fullMobileMenu: boolean
  fullMobileMenuHandler: (isFull: boolean) => void
}

const Sidemenu = ({ fullMenu, fullMenuHandler }: SidemenuProps) => {
  const { data } = useQuery<informationProps>({
    queryKey: ['information'],
    queryFn: async () => await getInformation()
  })

  if (!data) return null

  return (
    <div className='sidemenu fixed left-0 top-0 z-40 hidden h-screen w-20 flex-wrap justify-between overflow-hidden border-r border-white border-opacity-10 bg-grey-darken py-8 text-center lg:flex'>
      <div className='h-[40%] w-full'>
        <Link
          href='/'
          className='herosection-image fiximage relative z-20 inline-block h-[60px] w-[60px] overflow-hidden rounded-full border-2 border-primary align-middle'
        >
          <Image
            loader={imageLoader}
            unoptimized={true}
            src={data.thumbImage}
            alt={data.fullName}
            height={60}
            width={60}
            className='w-full h-auto'
            priority={true}
          />
        </Link>
      </div>
      <div className='flex h-20 w-full basis-[80px] items-center justify-center'>
        <button
          className='inline-block w-auto border-0 p-0 text-center align-middle text-4xl leading-none'
          onClick={() => fullMenuHandler(!fullMenu)}
        >
          {fullMenu ? <RiCloseLine /> : <RiMenuLine />}
        </button>
      </div>
      <div className='flex h-[40%] w-full items-end justify-center self-end'>
        <p className='copyrightvertical rotate-180 text-left'>
          <span className='whitespace-nowrap'>&copy; {new Date().getFullYear()} </span>
          <Link
            href='/'
            className='block font-medium text-heading no-underline hover:text-primary lg:inline'
          >
            Mohammed Haydar
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Sidemenu
