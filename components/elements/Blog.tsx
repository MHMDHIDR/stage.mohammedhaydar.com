import Image from 'next/image'
import Link from 'next/link'
import { imageLoader, shimmer, toBase64 } from '@/lib/utils'
import type { BlogProps } from '@/types'

const Blog = ({
  post: { title, _createdAt, thumb, category, slug }
}: {
  post: BlogProps
}) => {
  return (
    <article className='blog card p-4 md:p-5'>
      <div className='blog-top relative mb-4'>
        <Link href={`/blog/${slug}`} className='fiximage hover-scale block' title={title}>
          <Image
            loader={imageLoader}
            unoptimized={true}
            src={thumb}
            height={240}
            width={400}
            alt={`Image of ${title} Blog`}
            className='object-cover min-h-[10rem] max-h-40 w-full'
            placeholder='blur'
            blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(400, 240))}`}
          />
        </Link>
        <div className='blog-date absolute left-auto right-5 top-5 inline-block min-h-[60px] min-w-[60px] rounded bg-primary p-2 text-center text-grey'>
          <span className='month block text-sm uppercase leading-none'>
            {new Date(_createdAt).toLocaleDateString('en-us', {
              month: 'short'
            })}
          </span>
          <span className='date block text-2xl leading-none'>
            {new Date(_createdAt).toLocaleDateString('en-us', {
              day: '2-digit'
            })}
          </span>
          <span className='year block text-sm leading-none'>
            {new Date(_createdAt).getFullYear()}
          </span>
        </div>
      </div>
      <h5 className='mb-0'>
        <Link
          href={`/blog/${slug}`}
          className=' block overflow-hidden overflow-ellipsis whitespace-nowrap transition-colors duration-500 hover:text-primary'
          title={title}
        >
          {title}
        </Link>
      </h5>
      <div className='flex list-none gap-1.5 text-sm'>
        {category.map((cat: string, i: number) => (
          <span key={i} className="after:content-[','] last:after:hidden">
            {cat}
          </span>
        ))}
      </div>
    </article>
  )
}

export default Blog
