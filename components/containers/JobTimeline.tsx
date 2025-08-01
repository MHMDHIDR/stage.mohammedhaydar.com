import { motion } from 'framer-motion'
import { RiBriefcaseLine } from 'react-icons/ri'
import { useQuery } from '@tanstack/react-query'
import { childrenAnimation } from '@/lib/motion'
import { TimelineItem } from '@/components/elements'
import { getJobExperience } from '@/sanity/sanity-utils'
import { WorkEducationProps } from '@/types'

const JobTimeline = () => {
  const { data } = useQuery<WorkEducationProps[]>({
    queryKey: ['jobExperience'],
    queryFn: async () => await getJobExperience()
  })

  if (!data) return null

  return (
    <div className='job-experience'>
      <h4>
        <RiBriefcaseLine className='mr-2 inline-block text-primary' />
        Working Experience
      </h4>
      {data?.map((timeline: WorkEducationProps, index: number) => (
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 * index }}
          variants={childrenAnimation}
          className='timeline-wrap'
          key={timeline.id}
        >
          <TimelineItem timeline={timeline} />
        </motion.div>
      ))}
    </div>
  )
}

export default JobTimeline
