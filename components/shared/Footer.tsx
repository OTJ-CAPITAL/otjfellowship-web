'use client'

import React from 'react'

export default function Footer() {
  return (
    <footer style={{ background: '#080808', color: '#FFFFFF' }}>
      <style>{`
        .footer-link {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          color: #888888;
          text-decoration: none;
          transition: color 0.2s;
          display: block;
        }
        .footer-link:hover { color: #FFFFFF; }
        .footer-email-link {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          color: #888888;
          text-decoration: none;
          transition: color 0.2s;
          display: block;
          margin-bottom: 8px;
        }
        .footer-email-link:hover { color: #C9A84C; }
        .footer-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 48px;
          padding-bottom: 48px;
          border-bottom: 1px solid #222222;
        }
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '64px 24px 40px',
        }}
      >
        {/* Top grid */}
        <div className="footer-grid">
          {/* Left: Wordmark */}
          <div>
            <div
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: '18px',
                letterSpacing: '2px',
                color: '#FFFFFF',
                textTransform: 'uppercase',
                marginBottom: '12px',
              }}
            >
              OTJ Fellowship
            </div>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '14px',
                color: '#888888',
                lineHeight: '1.6',
              }}
            >
              Where talent becomes system.
            </p>
          </div>

          {/* Middle: Ecosystem links */}
          <div>
            <div
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: '11px',
                letterSpacing: '3px',
                color: '#C9A84C',
                textTransform: 'uppercase',
                marginBottom: '20px',
              }}
            >
              Ecosystem
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { label: 'OTJ Capital', href: '#' },
                { label: 'OTJ Fellowship', href: '#' },
                { label: 'OTJ Research', href: '#' },
                { label: 'OTJ Ventures', href: '#' },
              ].map((link) => (
                <a key={link.label} href={link.href} className="footer-link">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Contact */}
          <div>
            <div
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: '11px',
                letterSpacing: '3px',
                color: '#C9A84C',
                textTransform: 'uppercase',
                marginBottom: '20px',
              }}
            >
              Contact
            </div>
            <a
              href="mailto:fellowship@otjfellowship.com"
              className="footer-email-link"
            >
              fellowship@otjfellowship.com
            </a>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '13px',
                color: '#555555',
                lineHeight: '1.6',
              }}
            >
              Cohort One applications open 2026
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            paddingTop: '32px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: '#555555' }}>
            © 2026 OTJ Holdings. All rights reserved.
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: '#555555' }}>
            otjfellowship.com
          </p>
        </div>
      </div>
    </footer>
  )
}
