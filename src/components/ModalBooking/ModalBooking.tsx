import './ModalBooking.css'
import { createPortal } from 'react-dom'
import { FormEvent, useState } from 'react'

type Props = {
  onClose: () => void
}

export default function ModalBooking({ onClose }: Props) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !phone.trim()) return
    console.log('Booking:', { name, phone })
    setSubmitted(true)
    setTimeout(onClose, 2000)
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} type="button">×</button>
        {submitted ? (
          <>
            <h2>Спасибо!</h2>
            <p>Мы получили вашу заявку и скоро свяжемся с вами.</p>
          </>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14, width: '100%' }}
          >
            <h2>Забронировать</h2>
            <input
              className="modal-input"
              type="text"
              placeholder="ИМЯ"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              className="modal-input"
              type="tel"
              placeholder="+7 (___) ___-__-__"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <button className="btn-send" type="submit">
              отправить
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
