'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeUp, staggerContainer } from '@/lib/animations'
import { useState } from 'react'

const stages = [
  { num:'01', title:'Selection', desc:'A rigorous process. We test for quantitative reasoning, systems thinking, and intellectual honesty. Not credentials.' },
  { num:'02', title:'Foundation', desc:'12 weeks of intensive training. Quantitative finance, ML fundamentals, Python, risk management. No shortcuts.' },
  { num:'03', title:'Deployment', desc:'You work on the real fund. Real models. Real capital. Real consequences. This is when you learn what you actually know.' },
  { num:'04', title:'Integration', desc:'The best Fellows join OTJ permanently. Not as employees — as architects of the system.' },
]

export default function Stages() {
  const { ref, inView } = useInView({ triggerOnce: true, fallbackInView: true })
  const [activeStage, setActiveStage] = useState<number | null>(null)
  const [hoveredStage, setHoveredStage] = useState<number | null>(null)

  return (
    <section id="programme" ref={ref} style={{ padding:'120px 32px', background:'#F5F5F5', borderBottom:'1px solid #E5E5E5' }}>
      <div style={{ maxWidth:'1280px', margin:'0 auto' }}>
        <motion.div variants={staggerContainer} initial="hidden" animate={inView?'visible':'hidden'}>
          <motion.div variants={fadeUp} style={{ fontFamily:'var(--font-mono)', fontSize:'11px', letterSpacing:'2px', color:'#888', marginBottom:'16px' }}>THE PROGRAMME</motion.div>
          <motion.h2 variants={fadeUp} style={{ fontFamily:'var(--font-sg)', fontWeight:800, fontSize:'clamp(28px,4vw,48px)', color:'#000', letterSpacing:'-1px', marginBottom:'64px' }}>Four stages. Real stakes.</motion.h2>
          <motion.div variants={staggerContainer} style={{ display:'flex', flexDirection:'column', gap:'0' }}>
            {stages.map((s,i) => {
              const isActive = activeStage === i
              const isHovered = hoveredStage === i
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  onClick={() => setActiveStage(isActive ? null : i)}
                  onMouseEnter={() => setHoveredStage(i)}
                  onMouseLeave={() => setHoveredStage(null)}
                  style={{
                    background: isHovered && !isActive ? '#F5F5F5' : '#fff',
                    borderLeft: isActive ? '3px solid #000' : '3px solid transparent',
                    borderBottom:'1px solid #E5E5E5',
                    borderTop: i === 0 ? '1px solid #E5E5E5' : 'none',
                    borderRight:'1px solid #E5E5E5',
                    padding:'28px 32px',
                    cursor:'pointer',
                    transition:'background 0.15s, border-left 0.15s',
                  }}
                >
                  <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
                    <div style={{ display:'flex', alignItems:'center', gap:'24px' }}>
                      <div style={{ width:'36px', height:'36px', border:'1px solid #000', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                        <span style={{ fontFamily:'var(--font-mono)', fontSize:'11px', fontWeight:500 }}>{s.num}</span>
                      </div>
                      <h3 style={{ fontFamily:'var(--font-sg)', fontWeight: isActive ? 700 : 600, fontSize:'20px', color:'#000', margin:0 }}>{s.title}</h3>
                    </div>
                    <span style={{ fontFamily:'var(--font-mono)', fontSize:'20px', color:'#888', lineHeight:1, userSelect:'none', transition:'transform 0.2s', transform: isActive ? 'rotate(45deg)' : 'rotate(0deg)', display:'inline-block' }}>+</span>
                  </div>
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height:0, opacity:0 }}
                        animate={{ height:'auto', opacity:1 }}
                        exit={{ height:0, opacity:0 }}
                        style={{ overflow:'hidden' }}
                      >
                        <p style={{ fontSize:'16px', color:'#555', lineHeight:1.7, marginTop:'20px', paddingLeft:'60px', marginBottom:0 }}>{s.desc}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
