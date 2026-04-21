'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeUp, staggerContainer } from '@/lib/animations'

export default function NotASchool() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section
      ref={ref}
      style={{
        background: '#FAFAFA',
        padding: '100px 24px',
        borderTop: '1px solid #E0E0E0',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Headline */}
          <motion.h2
            variants={fadeUp}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(36px, 5vw, 52px)',
              lineHeight: '1.1',
              color: '#080808',
              marginBottom: '60px',
              letterSpacing: '-1px',
            }}
          >
            Not a school.
            <br />
            Not a firm.
            <br />
            Both.
          </motion.h2>

          {/* Two-column body */}
          <motion.div
            variants={fadeUp}
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '0',
            }}
            className="two-col"
          >
            {/* Left */}
            <div
              style={{
                paddingRight: '60px',
                borderRight: '1px solid #E0E0E0',
              }}
              className="col-left"
            >
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '18px',
                  lineHeight: '1.75',
                  color: '#555555',
                  marginBottom: '24px',
                }}
              >
                The OTJ Fellowship is the human intelligence layer of the OTJ ecosystem. We do not
                train traders. We do not hire analysts.
              </p>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '18px',
                  lineHeight: '1.75',
                  color: '#555555',
                }}
              >
                We groom the rare individuals who can think at the system level — who can see what
                the machine sees, and make it see further.
              </p>
            </div>

            {/* Right */}
            <div
              style={{
                paddingLeft: '60px',
              }}
              className="col-right"
            >
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '18px',
                  lineHeight: '1.75',
                  color: '#555555',
                  marginBottom: '24px',
                }}
              >
                Fellowship members are embedded in the operation of OTJ Capital. They build the
                quantitative models. They design the risk frameworks. They interrogate the data.
              </p>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '18px',
                  lineHeight: '1.75',
                  color: '#555555',
                }}
              >
                This is not a programme you attend. This is a transformation you undergo.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .two-col {
            grid-template-columns: 1fr !important;
          }
          .col-left {
            padding-right: 0 !important;
            border-right: none !important;
            border-bottom: 1px solid #E0E0E0;
            padding-bottom: 40px;
            margin-bottom: 40px;
          }
          .col-right {
            padding-left: 0 !important;
          }
        }
      `}</style>
    </section>
  )
}
