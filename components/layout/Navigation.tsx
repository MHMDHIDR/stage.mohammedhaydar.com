'use client'
import { Link as ScrollLink } from 'react-scroll'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navigation = () => {
  const pathname = usePathname()
  const checkroute = pathname !== '/' && pathname !== '/blogs/1'

  return (
    <nav className='flex-grow px-5 text-center'>
      <ul className='inline-flex pl-0 mb-0 list-none gap-7'>
        <li className='inline-block align-middle'>
          {checkroute ? (
            <Link
              href='/'
              className='relative inline-block py-6 text-sm font-medium tracking-wider uppercase cursor-pointer group text-heading before:text-primary'
            >
              Home
              <span className='absolute left-0 top-auto inline-block w-full h-px align-middle transition-transform duration-500 origin-top-right scale-0 bottom-5 bg-primary group-hover:origin-top-left group-hover:scale-100'></span>
            </Link>
          ) : (
            <ScrollLink
              activeClass='!text-primary'
              href='/'
              to='section-home'
              spy={true}
              smooth='easeInQuad'
              offset={-74}
              duration={1000}
              className='relative inline-block py-6 text-sm font-medium tracking-wider uppercase cursor-pointer group text-heading before:text-primary'
            >
              Home
              <span className='absolute left-0 top-auto inline-block w-full h-px align-middle transition-transform duration-500 origin-top-right scale-0 bottom-5 bg-primary group-hover:origin-top-left group-hover:scale-100'></span>
            </ScrollLink>
          )}
        </li>
        <li className='inline-block align-middle'>
          {checkroute ? (
            <Link
              href='/about'
              className='relative inline-block py-6 text-sm font-medium tracking-wider uppercase cursor-pointer group text-heading before:text-primary'
            >
              About
              <span className='absolute left-0 top-auto inline-block w-full h-px align-middle transition-transform duration-500 origin-top-right scale-0 bottom-5 bg-primary group-hover:origin-top-left group-hover:scale-100'></span>
            </Link>
          ) : (
            <Link
              href='/about'
              className='relative inline-block py-6 text-sm font-medium tracking-wider uppercase cursor-pointer group text-heading before:text-primary'
            >
              About
              <span className='absolute left-0 top-auto inline-block w-full h-px align-middle transition-transform duration-500 origin-top-right scale-0 bottom-5 bg-primary group-hover:origin-top-left group-hover:scale-100'></span>
            </Link>
            // <ScrollLink
            //   activeClass='!text-primary'
            //   href='/'
            //   to='section-about'
            //   spy={true}
            //   smooth='easeInQuad'
            //   offset={-74}
            //   duration={1000}
            //   className='relative inline-block py-6 text-sm font-medium tracking-wider uppercase cursor-pointer group text-heading before:text-primary'
            // >
            //   About
            //   <span className='absolute left-0 top-auto inline-block w-full h-px align-middle transition-transform duration-500 origin-top-right scale-0 bottom-5 bg-primary group-hover:origin-top-left group-hover:scale-100'></span>
            // </ScrollLink>
          )}
        </li>
        <li className='inline-block align-middle'>
          {checkroute ? (
            <Link
              href='/resume'
              className='relative inline-block py-6 text-sm font-medium tracking-wider uppercase cursor-pointer group text-heading before:text-primary'
            >
              Resume
              <span className='absolute left-0 top-auto inline-block w-full h-px align-middle transition-transform duration-500 origin-top-right scale-0 bottom-5 bg-primary group-hover:origin-top-left group-hover:scale-100'></span>
            </Link>
          ) : (
            <Link
              href='/resume'
              className='relative inline-block py-6 text-sm font-medium tracking-wider uppercase cursor-pointer group text-heading before:text-primary'
            >
              Resume
              <span className='absolute left-0 top-auto inline-block w-full h-px align-middle transition-transform duration-500 origin-top-right scale-0 bottom-5 bg-primary group-hover:origin-top-left group-hover:scale-100'></span>
            </Link>
            // <ScrollLink
            //   activeClass='!text-primary'
            //   href='/'
            //   to='section-resume'
            //   spy={true}
            //   smooth='easeInQuad'
            //   offset={-74}
            //   duration={1000}
            //   className='relative inline-block py-6 text-sm font-medium tracking-wider uppercase cursor-pointer group text-heading before:text-primary'
            // >
            //   Resume
            //   <span className='absolute left-0 top-auto inline-block w-full h-px align-middle transition-transform duration-500 origin-top-right scale-0 bottom-5 bg-primary group-hover:origin-top-left group-hover:scale-100'></span>
            // </ScrollLink>
          )}
        </li>
        <li className='inline-block align-middle'>
          {checkroute ? (
            <Link
              href='/works'
              className='relative inline-block py-6 text-sm font-medium tracking-wider uppercase cursor-pointer group text-heading before:text-primary'
            >
              Projects
              <span className='absolute left-0 top-auto inline-block w-full h-px align-middle transition-transform duration-500 origin-top-right scale-0 bottom-5 bg-primary group-hover:origin-top-left group-hover:scale-100'></span>
            </Link>
          ) : (
            <Link
              href='/works'
              className='relative inline-block py-6 text-sm font-medium tracking-wider uppercase cursor-pointer group text-heading before:text-primary'
            >
              Projects
              <span className='absolute left-0 top-auto inline-block w-full h-px align-middle transition-transform duration-500 origin-top-right scale-0 bottom-5 bg-primary group-hover:origin-top-left group-hover:scale-100'></span>
            </Link>
            // <ScrollLink
            //   activeClass='!text-primary'
            //   href='/'
            //   to='section-portfolios'
            //   spy={true}
            //   smooth='easeInQuad'
            //   offset={-74}
            //   duration={1000}
            //   className='relative inline-block py-6 text-sm font-medium tracking-wider uppercase cursor-pointer group text-heading before:text-primary'
            // >
            //   Projects
            //   <span className='absolute left-0 top-auto inline-block w-full h-px align-middle transition-transform duration-500 origin-top-right scale-0 bottom-5 bg-primary group-hover:origin-top-left group-hover:scale-100'></span>
            // </ScrollLink>
          )}
        </li>
        <li className='inline-block align-middle'>
          <Link
            href='/blogs/1'
            className='group relative inline-block cursor-pointer py-6 text-sm font-medium uppercase tracking-wider text-heading before:text-primary'
          >
            Blog
            <span className='absolute bottom-5 left-0 top-auto inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100'></span>
          </Link>
        </li>
        <li className='inline-block align-middle'>
          {checkroute ? (
            <Link
              href='/contact'
              className='relative inline-block py-6 text-sm font-medium tracking-wider uppercase cursor-pointer group text-heading before:text-primary'
            >
              Contact
              <span className='absolute left-0 top-auto inline-block w-full h-px align-middle transition-transform duration-500 origin-top-right scale-0 bottom-5 bg-primary group-hover:origin-top-left group-hover:scale-100'></span>
            </Link>
          ) : (
            <Link
              href='/contact'
              className='relative inline-block py-6 text-sm font-medium tracking-wider uppercase cursor-pointer group text-heading before:text-primary'
            >
              Contact
              <span className='absolute left-0 top-auto inline-block w-full h-px align-middle transition-transform duration-500 origin-top-right scale-0 bottom-5 bg-primary group-hover:origin-top-left group-hover:scale-100'></span>
            </Link>
            // <ScrollLink
            //   activeClass='!text-primary'
            //   href='/'
            //   to='section-contact'
            //   spy={true}
            //   smooth='easeInQuad'
            //   offset={-74}
            //   duration={1000}
            //   className='relative inline-block py-6 text-sm font-medium tracking-wider uppercase cursor-pointer group text-heading before:text-primary'
            // >
            //   Contact
            //   <span className='absolute left-0 top-auto inline-block w-full h-px align-middle transition-transform duration-500 origin-top-right scale-0 bottom-5 bg-primary group-hover:origin-top-left group-hover:scale-100'></span>
            // </ScrollLink>
          )}
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
