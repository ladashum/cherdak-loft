import './SpaceSection.css'
import { forwardRef } from 'react'
import Polaroid from '../Polaroid/Polaroid'

type Props = {
  photoSrc: string
  onNextPhoto: () => void
}

const SpaceSection = forwardRef<HTMLElement, Props>(function SpaceSection(
  { photoSrc, onNextPhoto },
  ref
) {
  return (
    <section className="section" id="space" ref={ref}>
      <div className="container">
        <h2 className="section-title">Наше пространство</h2>
        <div className="space-layout">
          <div className="space-polaroid">
            <Polaroid src={photoSrc} onNext={onNextPhoto} />
          </div>
          <div className="space-features">
            <div className="feature">
              <h3>Экологичные материалы</h3>
              <p>
                Безопасны для детей — не выделяют вредных веществ, снижают риск
                аллергии. Натуральные текстуры создают ощущение комфорта и
                близости к природе.
              </p>
            </div>
            <div className="feature soft">
              <h3>Мягкая сенсорика</h3>
              <p>
                Не перегружают восприятие, помогают избежать перевозбуждения,
                создают спокойную атмосферу. Отличный фон для декора и фото.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

export default SpaceSection
