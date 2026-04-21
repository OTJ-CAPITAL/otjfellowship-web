'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeUp, staggerContainer } from '@/lib/animations'

const stages = [
  {
    number: '01',
    title: 'Selection',
    body: 'A rigorous process designed to identify exceptional thinkers across Africa and emerging markets. We look for intellectual depth, systems thinking, and the will to build.',
  },
  {
    number: '02',
    title: 'Foundation',
    body: 'Intensive grounding in quantitative finance, machine learning, and AI-driven trading systems. Theory and practice from day one.',
  },
  {
    number: '03',
    title: 'Deployment',
    body: 'Fellows embedded directly into OTJ Capital operations. Real responsibilities. Real stakes. Real decisions that affect real capital.',
  },
  {
    number: '04',
    title: 'Evolution',
    body: 'The best Fellows become permanent architects of the OTJ system. They do not graduate and leave. They stay and build.',
  },
]

export default function Stages() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section
      id="programme"
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
          {/* Label */}
          <motion.span
            variants={fadeUp}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: '11px',
              letterSpacing: '4px',
              color: '#C9A84C',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '20px',
            }}
          >
            The Programme
          </motion.span>

          {/* Headline */}
          <motion.h2
            variants={fadeUp}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(32px, 4vw, 44px)',
              color: '#080808',
              marginBottom: '72px',
              letterSpacing: '-0.8px',
            }}
          >
            Four stages. Real stakes.
          </motion.h2>

          {/* Desktop horizontal timeline */}
          <motion.div variants={fadeUp}>
            {/* Desktop layout */}
            <div className="stages-desktop">
              {/* Connecting gold line */}
              <div
                style={{
                  position: 'relative',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: '0',
                }}
              >
                {/* Gold connecting line */}
                <div
                  style={{
                    position: 'absolute',
                    top: '28px',
                    left: '40px',
                    right: '40px',
                    height: '1px',
                    background: '#C9A84C',
                    zIndex: 0,
                  }}
                />

                {stages.map((stage, i) => (
                  <div
                    key={stage.number}
                    style={{
                      position: 'relative',
                      zIndex: 1,
                      padding: '0 24px',
                      paddingLeft: i === 0 ? '0' : '24px',
                      paddingRight: i === stages.length - 1 ? '0' : '24px',
                    }}
                  >
                    {/* Number bubble */}
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '56px',
                        height: '56px',
                        background: '#FAFAFA',
                        border: '2px solid #C9A84C',
                        marginBottom: '24px',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "'JetBrains Mono', 'Courier New', monospace",
                          fontSize: '14px',
                          fontWeight: 700,
                          color: '#C9A84C',
                          letterSpacing: '1px',
                        }}
                      >
                        {stage.number}
                      </span>
                    </div>

                    <h3
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 600,
                        fontSize: '18px',
                        color: '#080808',
                        marginBottom: '12px',
                      }}
                    >
                      {stage.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '14px',
                        lineHeight: '1.7',
                        color: '#555555',
                      }}
                    >
                      {stage.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile vertical timeline */}
            <div className="stages-mobile" style={{ display: 'none' }}>
              {stages.map((stage, i) => (
                <div
                  key={stage.number}
                  style={{
                    display: 'flex',
                    gap: '24px',
                    marginBottom: i < stages.length - 1 ? '0' : '0',
                  }}
                >
                  {/* Left: number + line */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        border: '2px solid #C9A84C',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        background: '#FAFAFA',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "'JetBrains Mono', 'Courier New', monospace",
                          fontSize: '12px',
                          fontWeight: 700,
                          color: '#C9A84C',
                        }}
                      >
                        {stage.number}
                      </span>
                    </div>
                    {i < stages.length - 1 && (
                      <div
                        style={{
                          width: '1px',
                          flex: '1',
                          minHeight: '40px',
                          background: '#C9A84C',
                          marginTop: '8px',
                        }}
                      />
                    )}
                  </div>

                  {/* Right: content */}
                  <div style={{ paddingBottom: i < stages.length - 1 ? '40px' : '0' }}>
                    <h3
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 600,
                        fontSize: '18px',
                        color: '#080808',
                        marginBottom: '10px',
                        marginTop: '12px',
                      }}
                    >
                      {stage.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '14px',
                        lineHeight: '1.7',
                        color: '#555555',
                      }}
                    >
                      {stage.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .stages-desktop { display: none !important; }
          .stages-mobile { display: flex !important; flex-direction: column; }
        }
      `}</style>
    </section>
  )
}
