import BlogForm from '@/components/elements/BlogForm'
import Divider from '@/components/layout/Divider'
import { capitalizeText, removeSlug } from '@/lib'
import { abstractText, limitWords } from '@/lib/abstractText'
import { calculateReadTime } from '@/lib/readTime'
import { shimmer, toBase64 } from '@/lib/utils'
import { getBlogBySlug, getPreviousAndNextBlogs } from '@/sanity/sanity-utils'
import type { BlogProps } from '@/types'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'
import { Marked } from 'marked'
import { markedHighlight } from 'marked-highlight'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'
import { RiArrowLeftSLine, RiArrowRightSLine, RiArticleLine } from 'react-icons/ri'

export async function generateMetadata({
  params: { slug }
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const { thumb, cover }: { thumb: BlogProps['thumb']; cover: BlogProps['cover'] } =
    (await getBlogBySlug(slug)) ?? {
      thumb: '/images/logo.png',
      cover: '/images/logo.png'
    }

  return {
    title: `${capitalizeText(removeSlug(slug))} | Mohammed Haydar`,
    openGraph: { images: [thumb, cover] }
  }
}

const Blog = async ({ params }: { params: { slug: string } }) => {
  const blog: BlogProps | null = await getBlogBySlug(params.slug)
  const {
    previous: { previousSlug, previousTitle, previousBlogThumb },
    next: { nextSlug, nextTitle, nextBlogThumb }
  } = await getPreviousAndNextBlogs(params.slug)

  if (!blog) return null

  const { _id, _createdAt, title, category, cover, content, comments } = blog

  const marked = new Marked(
    markedHighlight({
      langPrefix: 'language-',
      highlight(code, lang) {
        const language = hljs.getLanguage(lang) ? lang : 'plaintext'
        return hljs.highlight(code, { language }).value
      }
    })
  )

  return (
    <div className='single-post py-24 lg:py-28 xl:py-32'>
      <div className='container mx-auto'>
        <div className='post-header mb-8'>
          <div className='fiximage mb-5 overflow-hidden rounded border border-white border-opacity-20'>
            <Image
              src={cover!}
              height={650}
              width={1350}
              alt={title}
              className='w-full h-auto object-cover'
              placeholder='blur'
              blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(1350, 650))}`}
            />
          </div>
          <div className='flex flex-wrap justify-between gap-x-4'>
            <div className='mb-0 flex gap-2 text-heading'>
              Category :{' '}
              <div className='inline-flex list-none gap-1.5'>
                {category.map((cat, i) => (
                  <span
                    key={i}
                    className="text-body underline-hover after:content-[','] last:after:hidden"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </div>
            <p className='mb-0 text-heading flex justify-center items-center gap-2'>
              <RiArticleLine />
              <span className='text-body leading-3'>
                {calculateReadTime(content)} min read
              </span>
            </p>
            <p className='mb-0 text-heading'>
              Published on :
              <span className='ml-1.5 text-body'>
                {`${new Date(_createdAt).toLocaleDateString('en-us', {
                  month: 'short'
                })} ${new Date(_createdAt).toLocaleDateString('en-us', {
                  day: '2-digit'
                })}, ${new Date(_createdAt).getFullYear()}`}
              </span>
            </p>
          </div>
        </div>
        <div
          className='post-body mt-4'
          dangerouslySetInnerHTML={{ __html: await marked.parse(content) }}
        />

        <Divider className='my-16 sm:my-24' />

        <BlogForm id={_id} />

        {/* if comments is defined and there is at least one is approved */}
        {comments && comments.some(comment => comment.approved) && (
          <section className='mt-10'>
            <h3 className='text-xl font-bold'>Comments:</h3>
            {comments
              .filter(comment => comment.approved)
              .map(comment => (
                <div
                  key={comment._id}
                  className='mb-4 border-b border-b-blue-700 bg-gray-700'
                >
                  <p className='text-body text-lg p-4 whitespace-pre'>
                    {comment.comment.split('\n').map((line, index) => (
                      <Fragment key={index}>
                        {abstractText(limitWords(line, 100), 1000)}
                        <br />
                      </Fragment>
                    ))}
                  </p>
                  <div
                    className='flex items-center gap-x-3 bg-gray-800 px-4 py-1.5'
                    title={`Comment of ${comment.name}`}
                  >
                    <p className='mb-0 text-sm text-gray-400'>
                      {`${new Date(comment._createdAt!).toLocaleDateString('en-us', {
                        month: 'short'
                      })} ${new Date(comment._createdAt!).toLocaleDateString('en-us', {
                        day: '2-digit'
                      })}, ${new Date(comment._createdAt!).getFullYear()}`}
                    </p>
                    -
                    <p className='text-sm text-blue-400'>
                      {abstractText(limitWords(comment.name, 2), 50)}
                    </p>
                  </div>
                </div>
              ))}
          </section>
        )}

        {/* Previous and Next blog links */}
        <div className='flex flex-wrap flex-col md:flex-row gap-3 justify-center xs:justify-between items-center mt-10'>
          {previousSlug && previousTitle && (
            <Link
              href={`/blog/${previousSlug}`}
              className='flex flex-col md:flex-row gap-y-2 items-center justify-center group max-w-md'
            >
              <RiArrowLeftSLine className='hidden sm:block transition-transform text-5xl duration-300 group-hover:-translate-x-1' />
              <Image
                src={previousBlogThumb!}
                height={160}
                width={160}
                alt={title}
                className='w-full mx-10 inline-block h-auto max-w-40 max-h-40 object-cover rounded-md'
                placeholder='blur'
                blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(160, 160))}`}
              />
              <span className='text-blue-400 md:text-white md:underline-hover'>
                {capitalizeText(removeSlug(previousTitle))}
              </span>
            </Link>
          )}

          {nextSlug && nextTitle && (
            <Link
              href={`/blog/${nextSlug}`}
              className='flex flex-col md:flex-row gap-y-2 items-center justify-center group max-w-md'
            >
              <Image
                src={nextBlogThumb!}
                height={160}
                width={160}
                alt={title}
                className='w-full mx-10 inline-block h-auto max-w-40 max-h-40 object-cover rounded-md'
                placeholder='blur'
                blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(160, 160))}`}
              />
              <span className='text-blue-400 md:text-white md:underline-hover'>
                {capitalizeText(removeSlug(nextTitle))}
              </span>
              <RiArrowRightSLine className='hidden sm:block transition-transform text-5xl duration-300 group-hover:-translate-x-1' />
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export const revalidate = 10

export default Blog
