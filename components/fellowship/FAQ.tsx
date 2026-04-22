'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const faqs = [
  {
    q: 'Do I need a finance degree?',
    a: 'No. We care about how you think, not what you studied. We have selected engineers, mathematicians, physicists, and self-taught programmers. What matters is quantitative reasoning.',
  },
  {
    q: 'Is this paid?',
    a: 'Fellows working on live capital receive a stipend. The exact amount depends on contribution level and fund performance. This is not a paid internship — it is closer to a founding role.',
  },
  {
    q: 'Where is it based?',
    a: 'The fellowship is remote-first. You work with the team digitally. There will be in-person intensives — likely Lagos or Johannesburg — at key stages.',
  },
  {
    q: 'How long is the programme?',
    a: 'The foundation phase is 12 weeks. Deployment is ongoing — it ends when you integrate or decide to leave. There is no fixed end date for high performers.',
  },
  {
    q: 'What if I fail the selection?',
    a: 'We tell you why. We give specific feedback. We encourage you to reapply the next cohort if the gaps are addressable. We are not looking to reject people — we are looking for the right fit.',
  },
  {
    q: 'Can I apply if I\'m outside Africa?',
    a: 'The fellowship is specifically for people from Africa or deeply connected to African markets. If you grew up there, studied there, or have family there, you qualify.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  const { ref, inView } = useInView({ triggerOnce: true, fallbackInView: true })

  function toggle(i: number) {
    setOpen(open === i ? null : i)
  }

  return (
    <section
      ref={ref}
      style={{
        padding: '120px 32px',
        background: '#F5F5F5',
        borderBottom: '1px solid #E5E5E5',
      }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6 }}
        >
          <p
            style={{
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '2px',
              color: '#888',
              textTransform: 'uppercase',
              marginBottom: '16px',
            }}
          >
            Fellowship FAQ
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-sg)',
              fontWeight: 800,
              fontSize: 'clamp(28px,4vw,48px)',
              color: '#000',
              letterSpacing: '-1.5px',
              lineHeight: 1.1,
              marginBottom: '64px',
            }}
          >
            Questions people ask.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{
                borderTop: '1px solid #E5E5E5',
                ...(i === faqs.length - 1 ? { borderBottom: '1px solid #E5E5E5' } : {}),
              }}
            >
              <button
                onClick={() => toggle(i)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '24px 0',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  gap: '16px',
                }}
              >
                <span
                  style={{
                    fontSize: '16px',
                    fontWeight: 700,
                    color: '#000',
                    lineHeight: 1.4,
                  }}
                >
                  {faq.q}
                </span>
                <span
                  style={{
                    fontSize: '20px',
                    fontWeight: 300,
                    color: '#000',
                    flexShrink: 0,
                    lineHeight: 1,
                    transition: 'transform 0.2s ease',
                  }}
                >
                  {open === i ? '×' : '+'}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    style={{ overflow: 'hidden' }}
                  >
                    <p
                      style={{
                        fontSize: '15px',
                        color: '#555',
                        lineHeight: 1.8,
                        paddingBottom: '24px',
                        paddingRight: '48px',
                      }}
                    >
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
