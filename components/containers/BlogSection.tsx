import { useCallback, useRef, useState, useEffect } from 'react'
import { Blog } from '@/components/elements'
import { Spinner } from '@/components/utils'
import type { BlogProps } from '@/types'
import { getAllBlogs } from '@/sanity/sanity-utils'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperType } from 'swiper'

const BlogSection = () => {
  const pageNumber = parseInt('1')
  const [blogs, setBlogs] = useState<BlogProps[]>()
  const [_total, setBlogsTotal] = useState<number>()
  const sliderRef = useRef<SwiperType | null>(null)

  useEffect(() => {
    async function getBlogs() {
      const { blogs, total } = await getAllBlogs(pageNumber)
      setBlogs(blogs)
      setBlogsTotal(total)
    }
    getBlogs()
  }, [pageNumber])

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return
    sliderRef.current.slidePrev()
  }, [])

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return
    sliderRef.current.slideNext()
  }, [])

  if (!blogs || blogs.length === undefined)
    return (
      <div className='block py-20 text-center'>
        <Spinner />
      </div>
    )

  return (
    <div className='swiper-holder'>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={28}
        slidesPerView={3}
        centerInsufficientSlides={true}
        onSwiper={swiper => (sliderRef.current = swiper)}
        autoplay={{ delay: 2000 }}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
      >
        {blogs.map((post: BlogProps, index: number) => (
          <SwiperSlide key={index}>
            <div className='slider-item'>
              <Blog post={post} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        className='swiper-button-prev'
        aria-label='Swipe to Previous'
        onClick={handlePrev}
      ></button>
      <button
        className='swiper-button-next'
        aria-label='Swipe to Next'
        onClick={handleNext}
      ></button>
    </div>
  )
}

export default BlogSection
