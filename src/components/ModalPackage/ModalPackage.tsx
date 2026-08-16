import type { Package } from '../../data'
import './ModalPackage.css'
import { createPortal } from 'react-dom'

type Props = {
  pkg: Package
  onClose: () => void
  onBook: () => void
}

function CookieIcon() {
 return (
    <img
      className="pkg-icon"
      src={`/cookie.svg`}
      alt="cookie icon"
    />
  )
}

function WandIcon() {
  return (
    <img
      className="pkg-icon"
      src={`/wand.svg`}
      alt="wand icon"
    />
  )
}

function GiftIcon() {
  return (
    <img
      className="pkg-icon"
      src={`/box.svg`}
      alt="gift icon"
    />
  )
}

function PackageIcon({ type }: { type: Package['icon'] }) {
  if (type === 'cookie') return <CookieIcon />
  if (type === 'wand') return <WandIcon />
  return <GiftIcon />
}

export default function ModalPackage({ pkg, onClose }: Props) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className={`modal-package theme-${pkg.theme}`}
        onClick={(e) => void e.stopPropagation()}
      >
        <button className="modal-package-close" onClick={onClose} type="button" aria-label="Закрыть">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        <div className="modal-package-body">
          <div className="modal-package-content">
            <h2>{pkg.title}</h2>

            <div className="pkg-tags">
              {pkg.tags.map((tag) => (
                <span key={tag} className="pkg-tag">{tag}</span>
              ))}
            </div>

            <ul className="pkg-details">
              {pkg.details.map((item) => (
                <li key={item.label}>
                  <span className="pkg-bullet" />
                  <p>
                    <strong>{item.label}.</strong> {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="modal-package-icon">
            <PackageIcon type={pkg.icon} />
          </div>
        </div>
      </div>
    </div>
  )
}
