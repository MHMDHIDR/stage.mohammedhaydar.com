'use client'
import { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { RiArrowRightLine } from 'react-icons/ri'
import FullscreenMenu from './FullscreenMenu'
import MobileFullmenu from './MobileFullmenu'
import Sidemenu from './Sidemenu'
import { SessionProvider } from 'next-auth/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { AppProvider } from '@/context/appContext'
import { ToastContainer } from 'react-toastify'

const Layout2 = ({
  children,
  blurred,
  whiteTiles
}: {
  children: React.ReactNode
  blurred?: boolean
  whiteTiles?: boolean
}): JSX.Element => {
  const [fullMenu, setFullMenu] = useState(false)
  const [fullMobileMenu, setFullMobileMenu] = useState(false)

  const queryClientRef = useRef<QueryClient | undefined>()

  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient()
  }

  return (
    <SessionProvider>
      <QueryClientProvider client={queryClientRef.current}>
        <AppProvider>
          <div
            className={`wrapper relative min-h-screen w-full bg-grey${
              blurred ? ' blurredBg' : ''
            }${whiteTiles ? ' whiteTiles' : ''}`}
          >
            <button
              className='mobilemenu-trigger fixed left-0 top-[50vh] z-[60] block h-10 min-h-0 w-8 rounded-bl-none rounded-tl-none border-0 bg-primary bg-opacity-20 p-0 text-3xl text-primary lg:hidden'
              onClick={() => setFullMobileMenu(true)}
            >
              <RiArrowRightLine />
            </button>

            <Sidemenu
              fullMenu={fullMenu}
              fullMenuHandler={setFullMenu}
              fullMobileMenu={fullMobileMenu}
              fullMobileMenuHandler={setFullMobileMenu}
            />

            <AnimatePresence>
              {fullMenu && (
                <motion.div
                  initial={{ y: '100vh' }}
                  animate={{ y: '0px' }}
                  exit={{ y: '-100vh' }}
                  transition={{
                    duration: 0.5
                  }}
                  className='fixed top-0 z-40 hidden min-h-screen fullscreen-menu left-20 bg-grey lg:block'
                >
                  <FullscreenMenu fullMenuHandler={setFullMenu} />
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {fullMobileMenu && (
                <motion.div
                  initial={{ translateY: '100vh' }}
                  animate={{ translateY: '0px' }}
                  exit={{ translateY: '-100vh' }}
                  transition={{
                    duration: 0.5
                  }}
                  className='fixed left-0 top-0 z-[70] block h-screen w-screen bg-grey-darken lg:hidden'
                >
                  <MobileFullmenu fullMenuHandler={setFullMobileMenu} />
                </motion.div>
              )}
            </AnimatePresence>

            <main
              className={`page-content relative ml-0 bg-grey bg-opacity-95 lg:ml-20 ${
                blurred ? 'backdrop-blur-lg backdrop-filter' : ''
              }`}
            >
              <div className='fixed top-0 right-0 left-auto z-20 flex justify-around w-full h-screen bglines'>
                <span className='border-r border-white border-opacity-5'></span>
                <span className='border-r border-white border-opacity-5'></span>
                <span className='border-r border-white border-opacity-5'></span>
                <span className='border-r border-white border-opacity-5'></span>
                <span className='border-r border-white border-opacity-5'></span>
              </div>
              <div className='relative z-30 flex items-center justify-center min-h-screen sitedata'>
                <div className='w-full'>{children}</div>
              </div>
            </main>
          </div>
        </AppProvider>
        <ToastContainer />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </SessionProvider>
  )
}

export default Layout2
