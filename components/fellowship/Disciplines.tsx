'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeUp, staggerContainer } from '@/lib/animations'

const disciplines = [
  {
    number: '01',
    title: 'Quant Researchers',
    body: "Build and refine the mathematical models powering OTJ Capital's decisions. Precision thinkers. Model architects.",
  },
  {
    number: '02',
    title: 'AI Engineers',
    body: "Design, train, and deploy the ML systems at the core of OTJ's trading engine. The builders behind the intelligence.",
  },
  {
    number: '03',
    title: 'Data Scientists',
    body: 'Source, clean, and structure the market data that feeds the AI. Data quality determines decision quality.',
  },
  {
    number: '04',
    title: 'Risk Managers',
    body: 'Define the boundaries within which the AI operates. Protect the fund. Govern the machine.',
  },
  {
    number: '05',
    title: 'Market Analysts',
    body: 'Deep expertise in emerging market dynamics. The contextual intelligence the AI cannot derive from data alone.',
  },
  {
    number: '06',
    title: 'System Governors',
    body: 'The oversight layer. Ensure the AI performs, evolves, and operates within ethical and regulatory boundaries.',
  },
]

export default function Disciplines() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="disciplines" ref={ref} className="disciplines-section">
      <style>{`
        .disciplines-section {
          background: #F0F0F0;
          padding: 100px 24px;
        }
        .disciplines-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: #E0E0E0;
        }
        .discipline-card {
          background: #FFFFFF;
          padding: 32px 28px;
          transition: border-color 0.2s, transform 0.2s;
          border: 1px solid transparent;
          cursor: default;
        }
        .discipline-card:hover {
          border-color: #C9A84C;
          transform: translateY(-2px);
        }
        @media (max-width: 1024px) {
          .disciplines-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .disciplines-grid { grid-template-columns: 1fr !important; }
          .disciplines-section { padding: 72px 24px; }
        }
      `}</style>

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
            Who We Groom
          </motion.span>

          {/* Headline */}
          <motion.h2
            variants={fadeUp}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(32px, 4vw, 44px)',
              color: '#080808',
              marginBottom: '56px',
              letterSpacing: '-0.8px',
            }}
          >
            Six disciplines. One mission.
          </motion.h2>

          {/* Grid */}
          <motion.div variants={staggerContainer} className="disciplines-grid">
            {disciplines.map((d, i) => (
              <motion.div key={d.number} variants={fadeUp} custom={i} className="discipline-card">
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', 'Courier New', monospace",
                    fontSize: '12px',
                    fontWeight: 700,
                    color: '#C9A84C',
                    letterSpacing: '2px',
                    marginBottom: '16px',
                  }}
                >
                  {d.number}
                </div>
                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 600,
                    fontSize: '18px',
                    color: '#080808',
                    marginBottom: '12px',
                    lineHeight: '1.3',
                  }}
                >
                  {d.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '14px',
                    lineHeight: '1.7',
                    color: '#555555',
                  }}
                >
                  {d.body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
