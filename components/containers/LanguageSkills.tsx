import { motion } from 'framer-motion'
import { useQuery } from '@tanstack/react-query'
import { getLanguageskills } from '@/fetchers'
import { childrenAnimation } from '@/lib/motion'
import { ProgressBar } from '@/components/elements'
import type { skillsProps } from '@/types'

const LanguageSkills = () => {
  const { data } = useQuery<skillsProps[]>({
    queryKey: ['language-skills'],
    queryFn: async () => await getLanguageskills()
  })

  if (!data) return null

  return (
    <div className='grid grid-cols-2 gap-7'>
      {data?.map((skill: skillsProps, index: number) => (
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 * index }}
          variants={childrenAnimation}
          className='col-span-2 md:col-span-1'
          key={skill.id}
        >
          <ProgressBar skill={skill} />
        </motion.div>
      ))}
    </div>
  )
}

export default LanguageSkills
