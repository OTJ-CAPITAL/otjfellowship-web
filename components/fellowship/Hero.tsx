'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeUp, staggerContainer } from '@/lib/animations'
import { useEffect, useState } from 'react'

const DEADLINE = new Date('2026-09-01T00:00:00').getTime()

function getTimeLeft() {
  const diff = DEADLINE - Date.now()
  if (diff <= 0) return { d: '00', h: '00', m: '00', s: '00' }
  const d = Math.floor(diff / (1000 * 60 * 60 * 24))
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const m = Math.floor((diff / (1000 * 60)) % 60)
  const s = Math.floor((diff / 1000) % 60)
  return {
    d: String(d).padStart(2, '0'),
    h: String(h).padStart(2, '0'),
    m: String(m).padStart(2, '0'),
    s: String(s).padStart(2, '0'),
  }
}

export default function Hero() {
  const { ref, inView } = useInView({ triggerOnce: true, fallbackInView: true })
  const [time, setTime] = useState(getTimeLeft())
  const [btn1Hover, setBtn1Hover] = useState(false)
  const [btn2Hover, setBtn2Hover] = useState(false)

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <section ref={ref} style={{ minHeight:'100vh', display:'flex', flexDirection:'column', justifyContent:'center', padding:'100px 32px 80px', borderBottom:'1px solid #E5E5E5' }}>
      <div style={{ maxWidth:'900px', margin:'0 auto', width:'100%' }}>
        <motion.div variants={staggerContainer} initial="hidden" animate={inView?'visible':'hidden'}>
          <motion.div variants={fadeUp} style={{ fontFamily:'var(--font-mono)', fontSize:'11px', letterSpacing:'2px', color:'#888', marginBottom:'32px' }}>OTJ FELLOWSHIP — COHORT ONE. 2026.</motion.div>
          <motion.h1 variants={fadeUp} style={{ fontFamily:'var(--font-sg)', fontWeight:800, fontSize:'clamp(40px,6vw,80px)', color:'#000', lineHeight:1.05, letterSpacing:'-2px', marginBottom:'32px' }}>
            We train people<br />to build AI<br />trading systems.
          </motion.h1>
          <motion.p variants={fadeUp} style={{ fontSize:'20px', color:'#444', maxWidth:'560px', lineHeight:1.7, marginBottom:'48px' }}>
            The OTJ Fellowship selects exceptional minds from Africa and puts them to work building quantitative models that run on real capital. This is not a bootcamp. You work on the actual fund.
          </motion.p>
          <motion.div variants={fadeUp} style={{ display:'flex', gap:'16px', marginBottom:'80px' }}>
            <a
              href="#apply"
              onMouseEnter={() => setBtn1Hover(true)}
              onMouseLeave={() => setBtn1Hover(false)}
              style={{
                background: btn1Hover ? '#fff' : '#000',
                color: btn1Hover ? '#000' : '#fff',
                border: btn1Hover ? '1px solid #000' : '1px solid #000',
                padding:'14px 32px',
                fontFamily:'var(--font-sg)',
                fontWeight:600,
                fontSize:'15px',
                transition:'all 0.15s',
                textDecoration:'none',
                display:'inline-block',
              }}
            >Apply to Cohort One</a>
            <a
              href="#programme"
              onMouseEnter={() => setBtn2Hover(true)}
              onMouseLeave={() => setBtn2Hover(false)}
              style={{
                background: btn2Hover ? '#000' : '#fff',
                color: btn2Hover ? '#fff' : '#000',
                border:'1px solid #000',
                padding:'14px 32px',
                fontFamily:'var(--font-sg)',
                fontWeight:600,
                fontSize:'15px',
                transition:'all 0.15s',
                textDecoration:'none',
                display:'inline-block',
              }}
            >The Programme</a>
          </motion.div>
          <motion.div variants={staggerContainer} style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:'0', borderTop:'1px solid #E5E5E5', paddingTop:'40px' }}>
            {[['6','disciplines'],['Africa','talent pool'],['Real capital','from day one'],['2026','Cohort One']].map(([v,l],i) => (
              <motion.div key={i} variants={fadeUp} style={{ paddingRight:'24px', borderRight: i<3?'1px solid #E5E5E5':'none', marginRight: i<3?'24px':'0' }}>
                <div style={{ fontFamily:'var(--font-sg)', fontWeight:800, fontSize:'28px', color:'#000', marginBottom:'4px' }}>{v}</div>
                <div style={{ fontSize:'13px', color:'#888' }}>{l}</div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div variants={fadeUp} style={{ marginTop:'32px' }}>
            <div style={{ background:'#F5F5F5', border:'1px solid #E5E5E5', padding:'12px 20px', display:'inline-flex', gap:'8px', alignItems:'center' }}>
              <span style={{ fontFamily:'var(--font-mono)', fontSize:'13px', color:'#888', letterSpacing:'1px' }}>COHORT 1 CLOSES IN</span>
              <span style={{ fontFamily:'var(--font-mono)', fontSize:'13px', color:'#888' }}>
                {time.d}d {time.h}:{time.m}:{time.s}
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
