import './PackagesSection.css'
import { forwardRef } from 'react'
import { PACKAGES, type Package } from '../../data'

type Props = {
  onOpenPackage: (pkg: Package) => void
  onBook: () => void
}

const PackagesSection = forwardRef<HTMLElement, Props>(function PackagesSection(
  { onOpenPackage, onBook },
  ref
) {
  return (
    <section className="section" id="parties" ref={ref}>
      <div className="container">
        <h2 className="section-title">Наши праздники</h2>
        <div className="packages">
          {PACKAGES.map((pkg) => (
            <article key={pkg.id} className={`package-card theme-${pkg.theme}`}>
              <h3>{pkg.title}</h3>
              <p>{pkg.description}</p>
              <div className="package-footer">
                <span className="package-price">{pkg.price}</span>
                <button
                  className="package-arrow"
                  onClick={() => onOpenPackage(pkg)}
                  type="button"
                  aria-label={`Подробнее: ${pkg.title}`}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="#6B6560" strokeWidth="2">
                    <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>
        <div className="parties-cta">
          <button className="btn-primary" onClick={onBook} type="button">
            забронировать
          </button>
        </div>
      </div>
    </section>
  )
})

export default PackagesSection
