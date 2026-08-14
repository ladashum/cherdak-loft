import './ContactsSection.css'
import { forwardRef, useState } from 'react'
import type { FormEvent } from 'react'

type Props = {
  onOpenRules: () => void
}

const ContactsSection = forwardRef<HTMLElement, Props>(function ContactsSection(
  { onOpenRules },
  ref
) {
  const [quickPhone, setQuickPhone] = useState('')

  const handleQuickSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!quickPhone.trim()) return
    console.log('Quick phone:', quickPhone)
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.')
    setQuickPhone('')
  }

  return (
    <section className="section contacts-section" id="contacts" ref={ref}>
      <div className="container">
        <div className="section-header-contacts">
          <h2 className="section-title-contacts">Ждем вас в гости</h2>
        <div className="parties-cta">
          <button className="btn-back" type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            назад
          </button>
        </div>
        </div>
        <p className="contacts-desc">
          Приходите познакомиться с лофтом лично. Угостим чаем,
          покажем пространство и обсудим каждую важную деталь.
        </p>

        <div className="contacts-grid">
          <div className="contact-list">
            <div className="contact-item">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#9CB3A6" />
                <circle cx="12" cy="9" r="2.2" fill="#F7F0E9" />
              </svg>
              <span>г. Москва, ул. Центральная, дом 12к4</span>
            </div>
            <div className="contact-item">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" fill="#D4E3D8" />
                <path d="M8 10.5h8M8 13.5h5" stroke="#4A6356" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <span>+7 (012) 345-67-89</span>
            </div>
            <div className="contact-item">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="5" width="18" height="14" rx="2" fill="#C5C0D0" />
                <path d="M3 7l9 6 9-6" stroke="#fff" strokeWidth="1.5" />
              </svg>
              <span>hello@cherdakloft.ru</span>
            </div>
            <button className="rules-btn" onClick={onOpenRules} type="button">
              правила
            </button>
          </div>

          <div className="plan-form">
            <h3>Запланировать праздник</h3>
            <p>Оставьте номер — мы перезвоним и поможем подобрать формат.</p>
            <form className="phone-row" onSubmit={handleQuickSubmit}>
              <input
                type="tel"
                placeholder="+7 (___) ___-__-__"
                value={quickPhone}
                onChange={(e) => setQuickPhone(e.target.value)}
                required
              />
              <button className="btn-send" type="submit">
                отправить
              </button>
            </form>
          </div>
        </div>

        <div className="socials">
          <a href="https://t.me/" target="_blank" rel="noopener noreferrer" aria-label="Telegram" >
            <img src="/tg.svg" alt="Telegram" width="60px" height="60px"/>
          </a>
          <a href="https://vk.com/" target="_blank" rel="noopener noreferrer" aria-label="VK" >
            <img src="/vk.svg" alt="VK" width="42px" height="42px"/>
          </a>
        </div>
      </div>
    </section>
  )
})

export default ContactsSection
