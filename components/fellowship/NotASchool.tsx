'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeUp, staggerContainer } from '@/lib/animations'

const tableRows = [
  { feature: 'Real capital used',    otj: '✓',        boot: '✗',         uni: '✗'       },
  { feature: 'Live trading exposure',otj: '✓',        boot: '✗',         uni: '✗'       },
  { feature: 'Stipend',              otj: '✓',        boot: 'Partial',   uni: '✗'       },
  { feature: 'Duration',             otj: 'Ongoing',  boot: '12 wks',    uni: '3–4 yrs' },
  { feature: 'Outcome',              otj: 'Fund role',boot: 'Certificate',uni: 'Degree'  },
  { feature: 'Africa-specific',      otj: '✓',        boot: '✗',         uni: '✗'       },
]

function CellValue({ value }: { value: string }) {
  if (value === '✓') return <span style={{ color: '#22c55e', fontWeight: 700 }}>✓</span>
  if (value === '✗') return <span style={{ color: '#CCC', fontWeight: 700 }}>✗</span>
  return <>{value}</>
}

export default function NotASchool() {
  const { ref, inView } = useInView({ triggerOnce: true, fallbackInView: true })
  const [hoveredRow, setHoveredRow] = useState<number | null>(null)

  return (
    <section ref={ref} style={{ padding:'120px 32px', background:'#F5F5F5', borderBottom:'1px solid #E5E5E5' }}>
      <div style={{ maxWidth:'1280px', margin:'0 auto' }}>
        <motion.div variants={staggerContainer} initial="hidden" animate={inView?'visible':'hidden'}>
          <motion.h2 variants={fadeUp} style={{ fontFamily:'var(--font-sg)', fontWeight:800, fontSize:'clamp(28px,4vw,56px)', color:'#000', letterSpacing:'-1.5px', lineHeight:1.1, marginBottom:'64px' }}>
            Not a school.<br />Not a consultancy.<br />The actual fund.
          </motion.h2>
          <motion.div variants={staggerContainer} style={{ display:'grid', gridTemplateColumns:'1fr 1px 1fr', gap:'64px' }}>
            <motion.div variants={fadeUp}>
              <p style={{ fontSize:'17px', color:'#444', lineHeight:1.8, marginBottom:'24px' }}>Most programmes teach you about finance. We put you inside one. Fellows work directly on the quantitative models that execute trades on real capital every day.</p>
              <p style={{ fontSize:'17px', color:'#444', lineHeight:1.8 }}>If the model you build performs, it runs. If it does not, you fix it. That is the only feedback loop that matters.</p>
            </motion.div>
            <div style={{ background:'#D0D0D0' }} />
            <motion.div variants={fadeUp}>
              <p style={{ fontSize:'17px', color:'#444', lineHeight:1.8, marginBottom:'24px' }}>We do not train traders. We do not hire analysts. We groom system architects — people who understand quantitative finance, machine learning, and risk management at the same time.</p>
              <p style={{ fontSize:'17px', color:'#444', lineHeight:1.8 }}>The best Fellows do not graduate and leave. They become permanent builders inside OTJ.</p>
            </motion.div>
          </motion.div>

          {/* Comparison table */}
          <motion.div variants={fadeUp} style={{ marginTop: '80px', overflowX: 'auto' }}>
            <table style={{ border: '1px solid #E5E5E5', width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: '#F5F5F5' }}>
                  {['Feature', 'OTJ Fellowship', 'Bootcamp', 'University'].map((col, ci) => (
                    <th
                      key={col}
                      style={{
                        padding: '14px 20px',
                        borderBottom: '1px solid #E5E5E5',
                        fontSize: '14px',
                        fontWeight: 700,
                        textAlign: 'left',
                        background: ci === 1 ? '#000' : '#F5F5F5',
                        color: ci === 1 ? '#fff' : '#000',
                        letterSpacing: ci === 1 ? '0.5px' : undefined,
                      }}
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row, ri) => (
                  <tr
                    key={ri}
                    onMouseEnter={() => setHoveredRow(ri)}
                    onMouseLeave={() => setHoveredRow(null)}
                    style={{ background: hoveredRow === ri ? '#F5F5F5' : '#fff', transition: 'background 0.15s ease' }}
                  >
                    <td style={{ padding: '14px 20px', borderBottom: '1px solid #E5E5E5', fontSize: '14px', color: '#333', fontWeight: 600 }}>
                      {row.feature}
                    </td>
                    <td style={{ padding: '14px 20px', borderBottom: '1px solid #E5E5E5', fontSize: '14px', fontWeight: 700, background: '#000', color: '#fff' }}>
                      <CellValue value={row.otj} />
                    </td>
                    <td style={{ padding: '14px 20px', borderBottom: '1px solid #E5E5E5', fontSize: '14px', color: '#444' }}>
                      <CellValue value={row.boot} />
                    </td>
                    <td style={{ padding: '14px 20px', borderBottom: '1px solid #E5E5E5', fontSize: '14px', color: '#444' }}>
                      <CellValue value={row.uni} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
