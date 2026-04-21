'use client'

import React, { useState } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="site-nav">
      <style>{`
        .site-nav {
          background: #FFFFFF;
          border-bottom: 1px solid #E0E0E0;
          position: sticky;
          top: 0;
          z-index: 100;
        }
        .nav-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .nav-wordmark {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: 16px;
          letter-spacing: 2px;
          color: #080808;
          text-transform: uppercase;
          text-decoration: none;
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 32px;
        }
        .nav-link {
          font-family: 'Inter', sans-serif;
          font-weight: 500;
          font-size: 14px;
          color: #555555;
          text-decoration: none;
          letter-spacing: 0.5px;
          transition: color 0.2s;
        }
        .nav-link:hover { color: #080808; }
        .nav-cta {
          font-family: 'Inter', sans-serif;
          font-weight: 500;
          font-size: 14px;
          color: #FFFFFF;
          background: #080808;
          padding: 10px 20px;
          text-decoration: none;
          letter-spacing: 0.5px;
          transition: background 0.2s;
          display: inline-block;
        }
        .nav-cta:hover { background: #C9A84C; }
        .nav-hamburger {
          background: none;
          border: none;
          cursor: pointer;
          display: none;
          flex-direction: column;
          gap: 5px;
          padding: 4px;
        }
        .nav-hamburger span {
          display: block;
          width: 22px;
          height: 2px;
          background: #080808;
        }
        .nav-mobile {
          background: #FFFFFF;
          border-top: 1px solid #E0E0E0;
          padding: 16px 24px 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .nav-mobile-link {
          font-family: 'Inter', sans-serif;
          font-weight: 500;
          font-size: 16px;
          color: #080808;
          text-decoration: none;
        }
        .nav-mobile-cta {
          font-family: 'Inter', sans-serif;
          font-weight: 500;
          font-size: 14px;
          color: #FFFFFF;
          background: #080808;
          padding: 12px 20px;
          text-decoration: none;
          text-align: center;
          margin-top: 8px;
          transition: background 0.2s;
        }
        .nav-mobile-cta:hover { background: #C9A84C; }
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>

      <div className="nav-inner">
        <Link href="/" className="nav-wordmark">OTJ Fellowship</Link>

        <div className="nav-links">
          <a href="#programme" className="nav-link">Programme</a>
          <a href="#disciplines" className="nav-link">Disciplines</a>
          <a href="#apply" className="nav-link">Apply</a>
          <a href="#apply" className="nav-cta">Apply Now →</a>
        </div>

        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {menuOpen && (
        <div className="nav-mobile">
          {(['#programme', '#disciplines', '#apply'] as const).map((href, i) => (
            <a
              key={href}
              href={href}
              className="nav-mobile-link"
              onClick={() => setMenuOpen(false)}
            >
              {['Programme', 'Disciplines', 'Apply'][i]}
            </a>
          ))}
          <a href="#apply" className="nav-mobile-cta" onClick={() => setMenuOpen(false)}>
            Apply Now →
          </a>
        </div>
      )}
    </nav>
  )
}
