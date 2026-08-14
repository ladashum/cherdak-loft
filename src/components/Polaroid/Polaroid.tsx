import './Polaroid.css'
type Props = {
  src: string
  onNext: () => void
  className?: string
}

export default function Polaroid({ src, onNext, className = '' }: Props) {
  return (
    <div className={`polaroid ${className}`}>
      <img className="polaroid-img" src={src} alt="Пространство Чердак"/>
      <div className="polaroid-caption">Dreams come true</div>
      <button className="polaroid-arrow" onClick={onNext} type="button" aria-label="Следующее фото">
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M9 18l6-6-6-6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  )
}
