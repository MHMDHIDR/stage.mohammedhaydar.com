import {
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiTwitterXLine
} from 'react-icons/ri'

import type { SocialIconsProps } from '@/types'

const SocialIcons = ({ data, rounded }: SocialIconsProps) => {
  if (!data) return null

  return (
    <ul className='mb-0 inline-flex list-none flex-wrap gap-3 pl-0 sm:gap-4'>
      {data.instagram && (
        <li className='inline-block align-middle'>
          <a
            href={data.instagram}
            aria-label='Visit My instagram Page'
            target='_blank'
            rel='noopener noreferrer'
            className={`group relative inline-block h-10 w-10 overflow-hidden border border-white border-opacity-10 text-center align-middle text-lg leading-none text-body ${
              rounded ? 'rounded-full' : 'rounded'
            }`}
          >
            <span className='front relative left-0 top-0 flex h-full w-full translate-y-0 transform items-center justify-center rounded bg-grey transition-all duration-500 group-hover:-translate-y-full'>
              <RiInstagramFill className='inline-block' />
            </span>
            <span className='back absolute left-0 top-0 flex h-full w-full translate-y-full items-center justify-center rounded bg-primary text-grey transition-all duration-500 group-hover:translate-y-0'>
              <RiInstagramFill className='inline-block' />
            </span>
          </a>
        </li>
      )}
      {data.twitter && (
        <li className='inline-block align-middle'>
          <a
            href={data.twitter}
            aria-label='Visit My twitter Page'
            target='_blank'
            rel='noopener noreferrer'
            className={`group relative inline-block h-10 w-10 overflow-hidden border border-white border-opacity-10 text-center align-middle text-lg leading-none text-body ${
              rounded ? 'rounded-full' : 'rounded'
            }`}
          >
            <span className='front relative left-0 top-0 flex h-full w-full translate-y-0 transform items-center justify-center rounded bg-grey transition-all duration-500 group-hover:-translate-y-full'>
              <RiTwitterXLine className='inline-block' />
            </span>
            <span className='back absolute left-0 top-0 flex h-full w-full translate-y-full items-center justify-center rounded bg-primary text-grey transition-all duration-500 group-hover:translate-y-0'>
              <RiTwitterXLine className='inline-block' />
            </span>
          </a>
        </li>
      )}
      {data.github && (
        <li className='inline-block align-middle'>
          <a
            href={data.github}
            aria-label='Visit My github Page'
            target='_blank'
            rel='noopener noreferrer'
            className={`group relative inline-block h-10 w-10 overflow-hidden border border-white border-opacity-10 text-center align-middle text-lg leading-none text-body ${
              rounded ? 'rounded-full' : 'rounded'
            }`}
          >
            <span className='front relative left-0 top-0 flex h-full w-full translate-y-0 transform items-center justify-center rounded bg-grey transition-all duration-500 group-hover:-translate-y-full'>
              <RiGithubFill className='inline-block' />
            </span>
            <span className='back absolute left-0 top-0 flex h-full w-full translate-y-full items-center justify-center rounded bg-primary text-grey transition-all duration-500 group-hover:translate-y-0'>
              <RiGithubFill className='inline-block' />
            </span>
          </a>
        </li>
      )}
      {data.linkedin && (
        <li className='inline-block align-middle'>
          <a
            href={data.linkedin}
            aria-label='Visit My linkedin Page'
            target='_blank'
            rel='noopener noreferrer'
            className={`group relative inline-block h-10 w-10 overflow-hidden border border-white border-opacity-10 text-center align-middle text-lg leading-none text-body ${
              rounded ? 'rounded-full' : 'rounded'
            }`}
          >
            <span className='front relative left-0 top-0 flex h-full w-full translate-y-0 transform items-center justify-center rounded bg-grey transition-all duration-500 group-hover:-translate-y-full'>
              <RiLinkedinBoxFill className='inline-block' />
            </span>
            <span className='back absolute left-0 top-0 flex h-full w-full translate-y-full items-center justify-center rounded bg-primary text-grey transition-all duration-500 group-hover:translate-y-0'>
              <RiLinkedinBoxFill className='inline-block' />
            </span>
          </a>
        </li>
      )}
    </ul>
  )
}

export default SocialIcons
