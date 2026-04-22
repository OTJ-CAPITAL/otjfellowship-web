'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeUp, staggerContainer } from '@/lib/animations'

const stages = [
  { num:'01', title:'Selection', desc:'A rigorous process. We test for quantitative reasoning, systems thinking, and intellectual honesty. Not credentials.' },
  { num:'02', title:'Foundation', desc:'12 weeks of intensive training. Quantitative finance, ML fundamentals, Python, risk management. No shortcuts.' },
  { num:'03', title:'Deployment', desc:'You work on the real fund. Real models. Real capital. Real consequences. This is when you learn what you actually know.' },
  { num:'04', title:'Integration', desc:'The best Fellows join OTJ permanently. Not as employees — as architects of the system.' },
]

export default function Stages() {
  const { ref, inView } = useInView({ triggerOnce: true, fallbackInView: true })
  return (
    <section id="programme" ref={ref} style={{ padding:'120px 32px', background:'#F5F5F5', borderBottom:'1px solid #E5E5E5' }}>
      <div style={{ maxWidth:'1280px', margin:'0 auto' }}>
        <motion.div variants={staggerContainer} initial="hidden" animate={inView?'visible':'hidden'}>
          <motion.div variants={fadeUp} style={{ fontFamily:'var(--font-mono)', fontSize:'11px', letterSpacing:'2px', color:'#888', marginBottom:'16px' }}>THE PROGRAMME</motion.div>
          <motion.h2 variants={fadeUp} style={{ fontFamily:'var(--font-sg)', fontWeight:800, fontSize:'clamp(28px,4vw,48px)', color:'#000', letterSpacing:'-1px', marginBottom:'64px' }}>Four stages. Real stakes.</motion.h2>
          <motion.div variants={staggerContainer} style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(220px, 1fr))', gap:'0' }}>
            {stages.map((s,i) => (
              <motion.div key={i} variants={fadeUp} style={{ padding:'40px 32px', border:'1px solid #E5E5E5', marginLeft: i>0?'-1px':'0', background:'#fff' }}>
                <div style={{ width:'40px', height:'40px', border:'1px solid #000', display:'flex', alignItems:'center', justifyContent:'center', marginBottom:'24px' }}>
                  <span style={{ fontFamily:'var(--font-mono)', fontSize:'12px', fontWeight:500 }}>{s.num}</span>
                </div>
                <h3 style={{ fontFamily:'var(--font-sg)', fontWeight:700, fontSize:'20px', color:'#000', marginBottom:'12px' }}>{s.title}</h3>
                <p style={{ fontSize:'14px', color:'#555', lineHeight:1.7 }}>{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
