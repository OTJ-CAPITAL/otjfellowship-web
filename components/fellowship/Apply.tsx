'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeUp, staggerContainer } from '@/lib/animations'
import { useState } from 'react'

const requirements = [
  'Strong in mathematics, statistics, or computer science',
  'Some experience with Python or quantitative modelling',
  'Interested in financial markets and how they actually work',
  'Based in Africa or an emerging market, or deeply connected to one',
  'Willing to work on real capital from day one',
]

const roles = [
  'Quant Researcher',
  'AI Engineer',
  'Data Scientist',
  'Risk Manager',
  'Market Analyst',
  'System Governor',
]

const inputStyle: React.CSSProperties = {
  background: '#111',
  color: '#fff',
  border: '1px solid #333',
  borderRadius: 0,
  padding: '12px',
  fontSize: '15px',
  fontFamily: 'var(--font-inter)',
  width: '100%',
  outline: 'none',
  boxSizing: 'border-box',
}

export default function Apply() {
  const { ref, inView } = useInView({ triggerOnce: true, fallbackInView: true })
  const [step, setStep] = useState(1)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('')
  const [why, setWhy] = useState('')
  const [nextHover, setNextHover] = useState(false)

  const totalSteps = 3

  function handleNext() {
    if (step < totalSteps) setStep(step + 1)
    else setStep(4)
  }
  function handleBack() {
    if (step > 1) setStep(step - 1)
  }

  const canProceed =
    step === 1 ? name.trim() !== '' && email.trim() !== '' :
    step === 2 ? role !== '' :
    step === 3 ? why.trim() !== '' :
    true

  return (
    <section id="apply" ref={ref} style={{ padding:'120px 32px', background:'#000', borderBottom:'1px solid #222' }}>
      <div style={{ maxWidth:'800px', margin:'0 auto' }}>
        <motion.div variants={staggerContainer} initial="hidden" animate={inView?'visible':'hidden'}>
          <motion.div variants={fadeUp} style={{ fontFamily:'var(--font-mono)', fontSize:'11px', letterSpacing:'2px', color:'#666', marginBottom:'32px' }}>COHORT ONE — 2026</motion.div>
          <motion.h2 variants={fadeUp} style={{ fontFamily:'var(--font-sg)', fontWeight:800, fontSize:'clamp(36px,5vw,64px)', color:'#fff', letterSpacing:'-1.5px', lineHeight:1.1, marginBottom:'24px' }}>
            Apply. Build<br />the system.
          </motion.h2>
          <motion.p variants={fadeUp} style={{ fontSize:'18px', color:'#888', lineHeight:1.8, marginBottom:'48px' }}>We are selecting the founding cohort now. If you are the kind of person who reads the textbook before being asked to, this is for you.</motion.p>
          <motion.div variants={staggerContainer} style={{ marginBottom:'48px' }}>
            {requirements.map((r,i) => (
              <motion.div key={i} variants={fadeUp} style={{ display:'flex', gap:'16px', alignItems:'flex-start', marginBottom:'16px' }}>
                <span style={{ fontFamily:'var(--font-mono)', fontSize:'12px', color:'#555', marginTop:'2px', flexShrink:0 }}>—</span>
                <span style={{ fontSize:'16px', color:'#AAA', lineHeight:1.6 }}>{r}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp}>
            {step < 4 ? (
              <div style={{ border:'1px solid #222', padding:'40px', background:'#0A0A0A' }}>
                {/* Progress indicator */}
                <div style={{ fontFamily:'var(--font-mono)', fontSize:'12px', color:'#555', marginBottom:'32px', letterSpacing:'1px' }}>
                  Step {step} of {totalSteps}
                </div>

                {/* Step 1: Name + Email */}
                {step === 1 && (
                  <div style={{ display:'flex', flexDirection:'column', gap:'16px' }}>
                    <div>
                      <label style={{ fontFamily:'var(--font-mono)', fontSize:'11px', color:'#666', letterSpacing:'1px', display:'block', marginBottom:'8px' }}>FULL NAME</label>
                      <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Your name"
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label style={{ fontFamily:'var(--font-mono)', fontSize:'11px', color:'#666', letterSpacing:'1px', display:'block', marginBottom:'8px' }}>EMAIL ADDRESS</label>
                      <input
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        style={inputStyle}
                      />
                    </div>
                  </div>
                )}

                {/* Step 2: Role selector */}
                {step === 2 && (
                  <div>
                    <label style={{ fontFamily:'var(--font-mono)', fontSize:'11px', color:'#666', letterSpacing:'1px', display:'block', marginBottom:'16px' }}>ROLE INTEREST — SELECT ONE</label>
                    <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(180px, 1fr))', gap:'8px' }}>
                      {roles.map(r => (
                        <button
                          key={r}
                          onClick={() => setRole(r)}
                          style={{
                            background: role === r ? '#000' : '#111',
                            color: role === r ? '#fff' : '#888',
                            border: role === r ? '1px solid #fff' : '1px solid #333',
                            padding:'12px 16px',
                            fontSize:'14px',
                            fontFamily:'var(--font-inter)',
                            cursor:'pointer',
                            textAlign:'left',
                            transition:'all 0.15s',
                          }}
                        >{r}</button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 3: Why */}
                {step === 3 && (
                  <div>
                    <label style={{ fontFamily:'var(--font-mono)', fontSize:'11px', color:'#666', letterSpacing:'1px', display:'block', marginBottom:'8px' }}>WHY ARE YOU THE RIGHT PERSON FOR THIS?</label>
                    <textarea
                      rows={4}
                      value={why}
                      onChange={e => setWhy(e.target.value)}
                      placeholder="Tell us why you belong here..."
                      style={{ ...inputStyle, resize:'vertical', minHeight:'120px' }}
                    />
                  </div>
                )}

                {/* Controls */}
                <div style={{ display:'flex', alignItems:'center', gap:'24px', marginTop:'32px' }}>
                  <button
                    onClick={handleNext}
                    disabled={!canProceed}
                    onMouseEnter={() => setNextHover(true)}
                    onMouseLeave={() => setNextHover(false)}
                    style={{
                      background: !canProceed ? '#222' : nextHover ? '#E5E5E5' : '#fff',
                      color: !canProceed ? '#555' : '#000',
                      border: 'none',
                      padding:'12px 32px',
                      fontFamily:'var(--font-sg)',
                      fontWeight:700,
                      fontSize:'15px',
                      cursor: canProceed ? 'pointer' : 'not-allowed',
                      transition:'all 0.15s',
                    }}
                  >{step === totalSteps ? 'Submit →' : 'Next →'}</button>
                  {step > 1 && (
                    <button
                      onClick={handleBack}
                      style={{ background:'none', border:'none', color:'#555', fontSize:'14px', fontFamily:'var(--font-inter)', cursor:'pointer', textDecoration:'underline', padding:0 }}
                    >← Back</button>
                  )}
                </div>
              </div>
            ) : (
              /* Step 4: Confirmation */
              <div style={{ border:'1px solid #222', padding:'40px', background:'#0A0A0A', display:'flex', flexDirection:'column', gap:'16px' }}>
                <div style={{ width:'48px', height:'48px', border:'1px solid #333', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center' }}>
                  <span style={{ fontSize:'22px', color:'#fff' }}>✓</span>
                </div>
                <h3 style={{ fontFamily:'var(--font-sg)', fontWeight:700, fontSize:'24px', color:'#fff', margin:0 }}>Application received.</h3>
                <p style={{ fontSize:'16px', color:'#888', margin:0, lineHeight:1.7 }}>We'll be in touch.</p>
                <div style={{ fontFamily:'var(--font-mono)', fontSize:'12px', color:'#555', marginTop:'8px' }}>
                  Submitted as: {name} — {role}
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
