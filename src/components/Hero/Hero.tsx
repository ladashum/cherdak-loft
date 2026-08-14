import './Hero.css'
import bunnyBear from '../../assets/bunny-bear.svg'

type Props = {
  onBook: () => void
}

export default function Hero({ onBook }: Props) {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-text">
            <h1>
              Чердак.
              <br />
              Атмосфера уюта
              <br />
              и беззаботных игр!
            </h1>
            <p>
              Светлый лофт для детских праздников.
              Уютное пространство для самых важных дат.
            </p>
            <button className="btn-primary" onClick={onBook} type="button">
              забронировать
            </button>
          </div>
          <div className="hero-illustration">
            <img src={bunnyBear} alt="Зайчик и мишка" />
          </div>
        </div>
      </div>
    </section>
  )
}
