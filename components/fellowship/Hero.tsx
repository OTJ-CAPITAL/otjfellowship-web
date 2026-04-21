'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/animations'

export default function Hero() {
  return (
    <section className="hero-section">
      <style>{`
        .hero-section {
          background: #FAFAFA;
          padding: 120px 24px 100px;
          min-height: 100vh;
          display: flex;
          align-items: center;
        }
        .hero-cta-primary {
          font-family: 'Inter', sans-serif;
          font-weight: 500;
          font-size: 15px;
          color: #FFFFFF;
          background: #080808;
          padding: 14px 28px;
          text-decoration: none;
          letter-spacing: 0.3px;
          transition: background 0.2s;
          display: inline-block;
        }
        .hero-cta-primary:hover { background: #C9A84C; }
        .hero-cta-ghost {
          font-family: 'Inter', sans-serif;
          font-weight: 500;
          font-size: 15px;
          color: #080808;
          background: transparent;
          padding: 14px 28px;
          text-decoration: none;
          letter-spacing: 0.3px;
          border: 1px solid #080808;
          transition: background 0.2s, color 0.2s;
          display: inline-block;
        }
        .hero-cta-ghost:hover { background: #080808; color: #FFFFFF; }
        .hero-stat-item {
          padding-right: 40px;
        }
        .hero-stat-item + .hero-stat-item {
          padding-left: 40px;
          border-left: 1px solid #E0E0E0;
        }
        @media (max-width: 768px) {
          .hero-section { padding: 80px 24px 60px; min-height: auto; }
          .hero-cta-row { flex-direction: column; }
          .hero-stat-row { flex-direction: column; }
          .hero-stat-item { padding-left: 0 !important; border-left: none !important; padding-right: 0; margin-bottom: 20px; }
        }
      `}</style>

      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          style={{ maxWidth: '740px' }}
        >
          {/* Label */}
          <motion.div variants={fadeUp}>
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: '11px',
                letterSpacing: '4px',
                color: '#C9A84C',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '32px',
              }}
            >
              The Human Intelligence Layer
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(48px, 7vw, 80px)',
              lineHeight: '1.05',
              color: '#080808',
              marginBottom: '32px',
              letterSpacing: '-1.5px',
            }}
          >
            Where talent
            <br />
            becomes system.
          </motion.h1>

          {/* Gold rule */}
          <motion.div
            variants={fadeUp}
            style={{
              width: '60px',
              height: '2px',
              background: '#C9A84C',
              marginBottom: '32px',
            }}
          />

          {/* Subheadline */}
          <motion.p
            variants={fadeUp}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: '20px',
              lineHeight: '1.6',
              color: '#666666',
              maxWidth: '500px',
              marginBottom: '48px',
            }}
          >
            The Fellowship identifies, grooms, and deploys the world&apos;s sharpest minds to build,
            govern, and evolve the AI systems that run OTJ Capital.
          </motion.p>

          {/* CTA row */}
          <motion.div
            variants={fadeUp}
            className="hero-cta-row"
            style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '72px' }}
          >
            <a href="#apply" className="hero-cta-primary">Apply to Cohort One →</a>
            <a href="#programme" className="hero-cta-ghost">The Programme</a>
          </motion.div>

          {/* Stat row */}
          <motion.div
            variants={fadeUp}
            className="hero-stat-row"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              borderTop: '1px solid #E0E0E0',
              paddingTop: '32px',
            }}
          >
            {[
              { stat: '6 disciplines', label: 'One mission' },
              { stat: 'Africa', label: 'Primary talent pool' },
              { stat: 'Real work', label: 'Real stakes' },
              { stat: 'Cohort One', label: '2026' },
            ].map((item, i) => (
              <div key={i} className="hero-stat-item">
                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: '15px',
                    color: '#080808',
                    marginBottom: '4px',
                  }}
                >
                  {item.stat}
                </div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '13px',
                    color: '#888888',
                  }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
