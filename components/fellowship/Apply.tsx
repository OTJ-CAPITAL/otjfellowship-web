'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeUp, staggerContainer } from '@/lib/animations'

const requirements = [
  'Strong foundation in mathematics, statistics, or CS',
  'Passion for financial markets and emerging economies',
  'Experience with Python, R, or quantitative modelling',
  'Genuine belief that AI is reshaping global capital',
  'Based in or connected to Africa or an emerging market',
]

export default function Apply() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="apply" ref={ref} className="apply-section">
      <style>{`
        .apply-section {
          background: #080808;
          padding: 100px 24px;
          color: #FFFFFF;
        }
        .apply-cta-btn {
          font-family: 'Inter', sans-serif;
          font-weight: 500;
          font-size: 15px;
          color: #080808;
          background: #C9A84C;
          padding: 16px 32px;
          text-decoration: none;
          letter-spacing: 0.3px;
          transition: background 0.2s;
          display: inline-block;
        }
        .apply-cta-btn:hover { background: #E8C96A; }
        .apply-email-link {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          color: #C9A84C;
          text-decoration: none;
          transition: color 0.2s;
          letter-spacing: 0.3px;
        }
        .apply-email-link:hover { color: #E8C96A; }
        @media (max-width: 768px) {
          .apply-section { padding: 72px 24px; }
        }
      `}</style>

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{ maxWidth: '680px' }}
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
              marginBottom: '24px',
            }}
          >
            Cohort One. 2026.
          </motion.span>

          {/* Headline */}
          <motion.h2
            variants={fadeUp}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(36px, 5vw, 52px)',
              lineHeight: '1.1',
              color: '#FFFFFF',
              marginBottom: '28px',
              letterSpacing: '-1px',
            }}
          >
            Apply to build
            <br />
            the future.
          </motion.h2>

          {/* Body */}
          <motion.p
            variants={fadeUp}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '18px',
              lineHeight: '1.7',
              color: '#888888',
              marginBottom: '48px',
            }}
          >
            We are building our first cohort. If you are a quantitative thinker, an AI engineer, a
            data scientist, or a market analyst who believes the future of finance is being built in
            the emerging world — this is for you.
          </motion.p>

          {/* Requirements */}
          <motion.ul
            variants={fadeUp}
            style={{
              listStyle: 'none',
              padding: 0,
              marginBottom: '48px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            {requirements.map((req, i) => (
              <li
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '14px',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '16px',
                  lineHeight: '1.6',
                  color: '#CCCCCC',
                }}
              >
                <span
                  style={{
                    color: '#C9A84C',
                    fontWeight: 700,
                    fontSize: '16px',
                    flexShrink: 0,
                    marginTop: '1px',
                  }}
                >
                  ✓
                </span>
                {req}
              </li>
            ))}
          </motion.ul>

          {/* CTA */}
          <motion.div
            variants={fadeUp}
            style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start' }}
          >
            <a href="mailto:fellowship@otjfellowship.com" className="apply-cta-btn">
              Apply Now →
            </a>
            <a href="mailto:fellowship@otjfellowship.com" className="apply-email-link">
              fellowship@otjfellowship.com
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
