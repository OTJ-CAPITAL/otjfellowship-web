'use client'
import { useEffect, useState } from 'react'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // Close menu on outside click
  useEffect(() => {
    if (!menuOpen) return
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest('[data-nav]')) setMenuOpen(false)
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [menuOpen])

  const navLinks = [
    { label: 'Programme', href: '#programme' },
    { label: 'Disciplines', href: '#disciplines' },
  ]

  return (
    <nav
      data-nav
      style={{
        position:'fixed', top:0, left:0, right:0, zIndex:100,
        background: scrolled ? 'rgba(255,255,255,0.95)' : '#fff',
        borderBottom: scrolled ? '1px solid #E5E5E5' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        transition:'all 0.2s',
        padding:'0 32px',
        height:'60px',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
      }}
    >
      <span style={{ fontFamily:'var(--font-sg)', fontWeight:700, fontSize:'16px', letterSpacing:'-0.5px' }}>OTJ Fellowship</span>

      {/* Desktop nav */}
      {!isMobile && (
        <div style={{ display:'flex', gap:'32px', alignItems:'center' }}>
          {navLinks.map(item => (
            <a key={item.label} href={item.href} style={{ fontFamily:'var(--font-inter)', fontSize:'14px', color:'#555', textDecoration:'none' }}>{item.label}</a>
          ))}
          <a href="#apply" style={{ background:'#000', color:'#fff', padding:'8px 18px', fontSize:'14px', fontFamily:'var(--font-sg)', fontWeight:600, textDecoration:'none' }}>Apply</a>
        </div>
      )}

      {/* Mobile hamburger */}
      {isMobile && (
        <button
          data-nav
          onClick={() => setMenuOpen(o => !o)}
          style={{
            background:'none',
            border:'none',
            fontSize:'22px',
            cursor:'pointer',
            color:'#000',
            padding:'4px 8px',
            lineHeight:1,
            fontFamily:'var(--font-inter)',
          }}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      )}

      {/* Mobile dropdown overlay */}
      {isMobile && menuOpen && (
        <div
          data-nav
          style={{
            position:'fixed',
            top:'60px',
            left:0,
            right:0,
            background:'#fff',
            borderBottom:'1px solid #E5E5E5',
            padding:'24px 32px',
            zIndex:99,
            display:'flex',
            flexDirection:'column',
            gap:'24px',
          }}
        >
          {navLinks.map(item => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              style={{ fontFamily:'var(--font-inter)', fontSize:'18px', color:'#111', textDecoration:'none' }}
            >{item.label}</a>
          ))}
          <a
            href="#apply"
            onClick={() => setMenuOpen(false)}
            style={{ fontFamily:'var(--font-sg)', fontWeight:600, fontSize:'18px', color:'#111', textDecoration:'none' }}
          >Apply →</a>
        </div>
      )}
    </nav>
  )
}
