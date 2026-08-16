import './ModalRules.css'
import { createPortal } from 'react-dom'
type Props = {
  onClose: () => void
}

const RULES = [
  {
    title: 'Сменная обувь',
    text: 'Чистота для ползающих малышей. Возьмите любимые тапочки или воспользуйтесь нашими мягкими носочками.',
  },
  {
    title: 'Эко-игрушки',
    text: 'Бережное отношение к дереву и текстилю. Просим не уносить детали игровых наборов за пределы игровых зон.',
  },
  {
    title: 'Эстетика стола',
    text: 'Праздничные угощения остаются в обеденной зоне. Это убережет игровые вигвамы и ковры от пятен.',
  },
  {
    title: 'Безопасность',
    text: 'Пространство продумано до мелочей, но присмотр за детками всегда остается за сопровождающими взрослыми.',
  },
  {
    title: 'Декор без хлопот',
    text: 'Пожалуйста, согласуйте украшения заранее. Просим отказаться от мелкого фольгированного конфетти.',
  },
  {
    title: 'Уютный тайминг',
    text: 'Ждем вас за 15 минут до начала. После праздника у вас будет 15 бесплатных минут на неспешные сборы.',
  },
]

export default function ModalRules({ onClose }: Props) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-rules" onClick={(e) => e.stopPropagation()}>
        <button className="modal-rules-close" onClick={onClose} type="button" aria-label="Закрыть">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6l12 12" stroke="#9F9BA7" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        <div className="rules-grid">
          {RULES.map((rule) => (
            <article key={rule.title} className="rule-card">
              <h3>{rule.title}</h3>
              <p>{rule.text}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
