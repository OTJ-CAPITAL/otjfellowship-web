'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const questions = [
  {
    text: 'What describes you best?',
    options: [
      { key: 'A', label: 'I love building mathematical models and testing hypotheses' },
      { key: 'B', label: 'I want to train neural networks and deploy ML systems' },
      { key: 'C', label: "I'm obsessed with clean data pipelines and data quality" },
      { key: 'D', label: 'I think in terms of risk, limits, and rules' },
      { key: 'E', label: 'I understand markets deeply — the humans behind the prices' },
      { key: 'F', label: 'I want to monitor, audit, and govern complex systems' },
    ],
  },
  {
    text: 'When something breaks, you:',
    options: [
      { key: 'A', label: 'Rewrite the formula from scratch' },
      { key: 'B', label: 'Retrain the model on fresh data' },
      { key: 'C', label: 'Check the data source first' },
      { key: 'D', label: "Ask: what was the worst-case we didn't plan for?" },
      { key: 'E', label: 'Read the news about that market' },
      { key: 'F', label: 'Check the logs for drift patterns' },
    ],
  },
  {
    text: 'Your ideal output is:',
    options: [
      { key: 'A', label: 'A backtested strategy with a Sharpe > 1.5' },
      { key: 'B', label: 'A model with < 50ms inference time' },
      { key: 'C', label: 'A clean dataset feeding 40+ instruments' },
      { key: 'D', label: 'A risk policy the AI follows without exception' },
      { key: 'E', label: 'A brief that explains why a market is inefficient' },
      { key: 'F', label: 'An audit report showing the AI behaved as expected' },
    ],
  },
]

const roleMap: Record<string, { title: string; description: string }> = {
  A: {
    title: 'Quant Researcher',
    description: 'You build and validate mathematical strategies that drive fund performance through rigorous hypothesis testing.',
  },
  B: {
    title: 'AI Engineer',
    description: 'You design, train, and deploy machine learning systems that run at production speed inside a live trading environment.',
  },
  C: {
    title: 'Data Scientist',
    description: 'You engineer the data infrastructure that keeps models accurate, feeding dozens of instruments with clean, reliable signals.',
  },
  D: {
    title: 'Risk Manager',
    description: 'You define the boundaries the fund never crosses, building the policies and frameworks that govern capital exposure.',
  },
  E: {
    title: 'Market Analyst',
    description: 'You translate human behaviour into investable ideas, identifying structural inefficiencies that quantitative models can exploit.',
  },
  F: {
    title: 'System Governor',
    description: 'You audit, monitor, and govern AI systems to ensure they behave as intended at every stage of deployment.',
  },
}

function computeResult(answers: string[]): string {
  const counts: Record<string, number> = {}
  for (const a of answers) {
    counts[a] = (counts[a] || 0) + 1
  }
  return Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0]
}

export default function Quiz() {
  const [step, setStep] = useState(0) // 0-2 = questions, 3 = result
  const [answers, setAnswers] = useState<string[]>([])
  const [selected, setSelected] = useState<string | null>(null)
  const [result, setResult] = useState<string | null>(null)

  const { ref, inView } = useInView({ triggerOnce: true, fallbackInView: true })

  function handleNext() {
    if (!selected) return
    const newAnswers = [...answers, selected]
    if (step < 2) {
      setAnswers(newAnswers)
      setSelected(null)
      setStep(step + 1)
    } else {
      const r = computeResult(newAnswers)
      setResult(r)
      setStep(3)
    }
  }

  function handleBack() {
    if (step === 0) return
    const newAnswers = answers.slice(0, -1)
    setAnswers(newAnswers)
    setSelected(null)
    setStep(step - 1)
  }

  function handleRetake() {
    setStep(0)
    setAnswers([])
    setSelected(null)
    setResult(null)
  }

  const role = result ? roleMap[result] : null

  return (
    <section
      ref={ref}
      style={{
        padding: '120px 32px',
        background: '#fff',
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
            Find Your Role
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
            Which discipline fits you?
          </h2>
        </motion.div>

        <AnimatePresence mode="wait">
          {step < 3 ? (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -32 }}
              transition={{ duration: 0.3 }}
            >
              <p
                style={{
                  fontSize: '12px',
                  color: '#999',
                  marginBottom: '24px',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                }}
              >
                Question {step + 1} of 3
              </p>
              <p
                style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  color: '#000',
                  marginBottom: '32px',
                  lineHeight: 1.4,
                }}
              >
                {questions[step].text}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
                {questions[step].options.map((opt) => (
                  <div
                    key={opt.key}
                    onClick={() => setSelected(opt.key)}
                    style={{
                      border: '1px solid',
                      borderColor: selected === opt.key ? '#000' : '#E5E5E5',
                      padding: '16px 20px',
                      cursor: 'pointer',
                      background: selected === opt.key ? '#000' : '#fff',
                      color: selected === opt.key ? '#fff' : '#333',
                      fontSize: '15px',
                      lineHeight: 1.5,
                      transition: 'all 0.15s ease',
                    }}
                  >
                    <span style={{ fontWeight: 700, marginRight: '12px', opacity: 0.5 }}>
                      {opt.key}
                    </span>
                    {opt.label}
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
                <button
                  onClick={handleNext}
                  disabled={!selected}
                  style={{
                    background: selected ? '#000' : '#E5E5E5',
                    color: selected ? '#fff' : '#999',
                    border: 'none',
                    padding: '14px 32px',
                    fontSize: '14px',
                    fontWeight: 700,
                    letterSpacing: '1px',
                    cursor: selected ? 'pointer' : 'not-allowed',
                    transition: 'all 0.15s ease',
                  }}
                >
                  {step < 2 ? 'Next →' : 'See Result →'}
                </button>
                {step > 0 && (
                  <button
                    onClick={handleBack}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#666',
                      fontSize: '14px',
                      cursor: 'pointer',
                      padding: 0,
                    }}
                  >
                    ← Back
                  </button>
                )}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              style={{
                background: '#F5F5F5',
                border: '1px solid #000',
                padding: '40px',
              }}
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
                Your Role
              </p>
              <h3
                style={{
                  fontFamily: 'var(--font-sg)',
                  fontWeight: 800,
                  fontSize: 'clamp(32px,5vw,56px)',
                  color: '#000',
                  letterSpacing: '-1.5px',
                  lineHeight: 1.1,
                  marginBottom: '24px',
                }}
              >
                {role?.title}
              </h3>
              <p
                style={{
                  fontSize: '17px',
                  color: '#444',
                  lineHeight: 1.8,
                  marginBottom: '40px',
                  maxWidth: '560px',
                }}
              >
                {role?.description}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '32px', flexWrap: 'wrap' }}>
                <a
                  href="#apply"
                  style={{
                    display: 'inline-block',
                    background: '#000',
                    color: '#fff',
                    padding: '14px 32px',
                    fontSize: '14px',
                    fontWeight: 700,
                    letterSpacing: '1px',
                    textDecoration: 'none',
                    transition: 'opacity 0.15s ease',
                  }}
                >
                  Apply as {role?.title} →
                </a>
                <button
                  onClick={handleRetake}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#666',
                    fontSize: '14px',
                    cursor: 'pointer',
                    padding: 0,
                    textDecoration: 'underline',
                  }}
                >
                  Retake quiz
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
