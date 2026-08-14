import './Header.css'
type Props = {
  onOpenMenu: () => void
  onScrollTo: (section: 'space' | 'parties' | 'contacts') => void
}

export default function Header({ onOpenMenu, onScrollTo }: Props) {
  return (
    <header className="header">
      <div className="container header-inner">
        <div className="logo">
          <img src="/logo.svg" alt="Логотип"/>
        </div>
        <nav>
          <ul className="nav">
            <li>
              <a href="#space" onClick={(e) => { e.preventDefault(); onScrollTo('space') }}>
                пространство
              </a>
            </li>
            <li>
              <a href="#parties" onClick={(e) => { e.preventDefault(); onScrollTo('parties') }}>
                праздники
              </a>
            </li>
            <li>
              <a href="#contacts" onClick={(e) => { e.preventDefault(); onScrollTo('contacts') }}>
                контакты
              </a>
            </li>
          </ul>
        </nav>
        <button className="menu-btn" onClick={onOpenMenu} type="button" aria-label="Меню">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>
    </header>
  )
}
