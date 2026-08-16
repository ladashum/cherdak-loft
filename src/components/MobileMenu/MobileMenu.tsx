import './MobileMenu.css'
import { createPortal } from 'react-dom'
type Props = {
  onClose: () => void
  onScrollTo: (section: 'space' | 'parties' | 'contacts') => void
  onBook: () => void
}

export default function MobileMenu({ onClose, onScrollTo, onBook }: Props) {
  return (
    <div className="mobile-menu">
      <button className="mobile-menu-close" onClick={onClose} type="button">×</button>
      <a href="#space" onClick={(e) => { e.preventDefault(); onScrollTo('space') }}>пространство</a>
      <a href="#parties" onClick={(e) => { e.preventDefault(); onScrollTo('parties') }}>праздники</a>
      <a href="#contacts" onClick={(e) => { e.preventDefault(); onScrollTo('contacts') }}>контакты</a>
      <button className="btn-primary" onClick={onBook} type="button">
        забронировать
      </button>
    </div>
  )
}
