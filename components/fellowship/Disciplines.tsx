'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeUp, staggerContainer } from '@/lib/animations'
import { useState } from 'react'

const disciplines = [
  {
    num:'01',
    title:'Quant Researchers',
    body:'Build the mathematical models that generate trading signals. You need to love statistics, hate ambiguity, and be comfortable being wrong most of the time.',
    builds:['Build momentum and mean-reversion signal generators','Run backtests against 5 years of market data','Ship a live strategy into the trading engine'],
  },
  {
    num:'02',
    title:'AI Engineers',
    body:'Train and deploy the machine learning systems at the core of the trading engine. You build the brain.',
    builds:['Train LSTM models on price and order flow data','Deploy model inference in < 50ms latency','Monitor and retrain models as market regimes shift'],
  },
  {
    num:'03',
    title:'Data Scientists',
    body:'Source, clean, and structure the market data that feeds everything. The models are only as good as what you feed them.',
    builds:['Build the ETL pipeline that feeds 40+ instruments','Engineer features from raw tick data','Design the data quality monitoring layer'],
  },
  {
    num:'04',
    title:'Risk Managers',
    body:'Define the rules the AI must follow. You are the last line of defence between a good trade and a catastrophic one.',
    builds:['Define position sizing and stop-loss rules','Build the circuit breakers that protect fund capital','Write the risk policy the AI must follow'],
  },
  {
    num:'05',
    title:'Market Analysts',
    body:'Deep knowledge of African and emerging market dynamics. Context the models cannot derive from price data alone.',
    builds:['Research microstructure of African equity markets','Source alternative data specific to emerging markets','Brief the quant team on structural market inefficiencies'],
  },
  {
    num:'06',
    title:'System Governors',
    body:'Ensure the AI evolves correctly over time. Monitor performance, detect drift, flag anomalies. You are the immune system.',
    builds:['Monitor AI decision drift in live trading','Design the alerting system for anomalous behaviour','Run quarterly model audits against benchmark'],
  },
]

export default function Disciplines() {
  const { ref, inView } = useInView({ triggerOnce: true, fallbackInView: true })
  const [activeCard, setActiveCard] = useState<number | null>(null)

  return (
    <section id="disciplines" ref={ref} style={{ padding:'120px 32px', borderBottom:'1px solid #E5E5E5' }}>
      <div style={{ maxWidth:'1280px', margin:'0 auto' }}>
        <motion.div variants={staggerContainer} initial="hidden" animate={inView?'visible':'hidden'}>
          <motion.div variants={fadeUp} style={{ fontFamily:'var(--font-mono)', fontSize:'11px', letterSpacing:'2px', color:'#888', marginBottom:'16px' }}>WHO WE SELECT</motion.div>
          <motion.h2 variants={fadeUp} style={{ fontFamily:'var(--font-sg)', fontWeight:800, fontSize:'clamp(28px,4vw,48px)', color:'#000', letterSpacing:'-1px', marginBottom:'64px' }}>Six roles. One machine.</motion.h2>
          <motion.div variants={staggerContainer} style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))', gap:'0' }}>
            {disciplines.map((d,i) => {
              const isActive = activeCard === i
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  onClick={() => setActiveCard(isActive ? null : i)}
                  style={{
                    padding:'40px 32px',
                    border:'1px solid #E5E5E5',
                    marginLeft: i%3!==0?'-1px':'0',
                    marginTop: i>2?'-1px':'0',
                    background: isActive ? '#000' : '#fff',
                    cursor:'pointer',
                    transition:'background 0.2s',
                    position:'relative',
                    zIndex: isActive ? 1 : 0,
                  }}
                >
                  <div style={{ fontFamily:'var(--font-mono)', fontSize:'11px', color: isActive ? '#666' : '#BBB', marginBottom:'16px' }}>{d.num}</div>
                  <h3 style={{ fontFamily:'var(--font-sg)', fontWeight:700, fontSize:'18px', color: isActive ? '#fff' : '#000', marginBottom:'12px' }}>{d.title}</h3>
                  <p style={{ fontSize:'14px', color: isActive ? '#AAA' : '#555', lineHeight:1.7 }}>{d.body}</p>
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height:0, opacity:0 }}
                        animate={{ height:'auto', opacity:1 }}
                        exit={{ height:0, opacity:0 }}
                        style={{ overflow:'hidden' }}
                      >
                        <div style={{ marginTop:'24px', paddingTop:'24px', borderTop:'1px solid #333' }}>
                          <div style={{ fontFamily:'var(--font-mono)', fontSize:'11px', color:'#666', letterSpacing:'1px', marginBottom:'12px' }}>WHAT YOU'LL BUILD</div>
                          {d.builds.map((b, bi) => (
                            <div key={bi} style={{ display:'flex', gap:'10px', alignItems:'flex-start', marginBottom:'10px' }}>
                              <span style={{ fontFamily:'var(--font-mono)', fontSize:'12px', color:'#555', flexShrink:0, marginTop:'1px' }}>—</span>
                              <span style={{ fontSize:'13px', color:'#888', lineHeight:1.6 }}>{b}</span>
                            </div>
                          ))}
                        </div>
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
