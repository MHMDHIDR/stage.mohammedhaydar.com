import { SanityClient } from 'sanity'

export type informationProps = {
  firstName: string
  lastName: string
  fullName: string
  thumbImage: string
  largeImage: string
  bio: string
  age: number
  nationality: string
  languages: string[]
  address: string
  freelance: string
  socialAddress: {
    instagram: string
    twitter: string
    github: string
    linkedin: string
  }
  phoneNumbers: string[]
  emailAddress: string[]
  resumeLink: string
}

export type SocialIconsProps = {
  data: informationProps['socialAddress']
  rounded?: boolean
}

export type servicesProps = {
  id?: number
  title: string
  text: string
  icon: string
}

export type SectionHeadingProps = {
  title: string
  watermark: string
  animated: boolean
}

export type CommentProps = {
  _id?: string
  name: string
  email: string
  comment: string
  _createdAt?: string
  approved?: boolean
  _type?: string
}

export type BlogProps = {
  _id: string
  _createdAt: string
  title: string
  slug: string
  category: string[]
  cover: string
  thumb: string
  content: string
  comments: CommentProps[]
}

export type getPreviousAndNextBlogsProps = {
  previous: {
    previousSlug: BlogProps['slug'] | null
    previousTitle: BlogProps['title'] | null
    previousBlogThumb: BlogProps['thumb'] | null
  }
  next: {
    nextSlug: BlogProps['slug'] | null
    nextTitle: BlogProps['title'] | null
    nextBlogThumb: BlogProps['thumb'] | null
  }
}

export type BlogsPagesProps = {
  blogs: BlogProps[]
  hasMore: boolean
  categories: string[]
  recentBlogs: BlogProps[]
}

export type getAllBlogsDataProps = {
  slug: string
  category: string[]
}

export type skillsProps = {
  id: number
  title: string
  skills?: {
    _key?: string
    label: string
    image: string
  }[]
  percentage: number
}

export type WorkEducationProps = {
  id: string
  title: string
  meta: string
  link: string
  text: string
  year: string
}

export type ReviewsProps = {
  review: {
    id?: string
    title: string
    meta: string
    givenreview: number
    image: string
    text: string
  }
}

export type BreadcrumbProps = {
  title: string
  paths?: {
    name: string
    link: string
  }[]
  blurred?: boolean
}

export type HeroSectionProps = {
  blurred?: boolean
  scroll?: boolean
  typed?: boolean
}

export type NavMenuPros = {
  children: React.ReactNode
  isOptions?: boolean
  label?: string
  className?: string
  src?: string
}

export type AppState = {
  blurredBg: boolean
}

export type appContextDispatchProps = {
  type: 'SET_BLURRED'
  payload: boolean
}

export type NotifyProps = {
  type: 'success' | 'info' | 'error'
  msg: string
  reloadIn?: number
  reloadTo?: string
  position?:
    | 'top-right'
    | 'top-center'
    | 'top-left'
    | 'bottom-right'
    | 'bottom-center'
    | 'bottom-left'

  duration?: number
}

export type notificationProps = {
  isOk?: boolean
  children: React.ReactNode
}

export type ContactFormInputsProps = {
  name: string
  email?: string
  subject: string
  message: string
  to?: string
  from?: string
}

export type ContactResponseProps = {
  data: {
    mailSent: number
    message: string
  }
}

export interface MenuItem {
  _type: string
  slug?: string
  title?: string
}

export type User = {
  name: string
  email: string
  image: string
}

export type Project = {
  _id: string
  createdAt: Date
  title: string
  subtitle: string
  coverimage: string
  imagegallery: string[]
  videogallery: string[]
  filter: {
    _ref: string
    _type: string
    _key: string
  }[]
  url: string
  github: string
  content: SanityClient[]
}

export type ProjectFiltersProps = {
  _id: string
  title: string
  value: string
}

export type NoItemsProps = {
  icon?: JSX.Element
  msg?: string
  links?: {
    to: string
    label: string
  }[]
  className?: string
}
