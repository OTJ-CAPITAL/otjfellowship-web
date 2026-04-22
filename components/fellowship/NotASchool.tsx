'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeUp, staggerContainer } from '@/lib/animations'

export default function NotASchool() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1, fallbackInView: true })
  return (
    <section ref={ref} style={{ background: '#FAFAFA', padding: '120px 32px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <motion.div variants={staggerContainer} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <motion.h2 variants={fadeUp} style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 'clamp(36px, 4vw, 52px)', color: '#080808', marginBottom: '64px', lineHeight: 1.2 }}>
            Not a school.<br />Not a firm.<br />Both.
          </motion.h2>
          <motion.div variants={staggerContainer} style={{ display: 'grid', gridTemplateColumns: '1fr 1px 1fr', gap: '64px', alignItems: 'start' }}>
            <motion.div variants={fadeUp}>
              <p style={{ fontFamily: 'Inter', fontSize: '18px', color: '#555555', lineHeight: 1.8, marginBottom: '24px' }}>
                The OTJ Fellowship is the human intelligence layer of the OTJ ecosystem. We do not train traders. We do not hire analysts.
              </p>
              <p style={{ fontFamily: 'Inter', fontSize: '18px', color: '#555555', lineHeight: 1.8 }}>
                We groom the rare individuals who can think at the system level — who can see what the machine sees, and make it see further.
              </p>
            </motion.div>
            <div style={{ background: '#E0E0E0', alignSelf: 'stretch' }} />
            <motion.div variants={fadeUp}>
              <p style={{ fontFamily: 'Inter', fontSize: '18px', color: '#555555', lineHeight: 1.8, marginBottom: '24px' }}>
                Fellowship members are embedded in the operation of OTJ Capital. They build the quantitative models. They design the risk frameworks. They interrogate the data.
              </p>
              <p style={{ fontFamily: 'Inter', fontSize: '18px', color: '#555555', lineHeight: 1.8 }}>
                This is not a programme you attend. This is a transformation you undergo.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
