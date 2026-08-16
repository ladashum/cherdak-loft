import { useState, useRef, useEffect } from 'react'
import { SPACE_PHOTOS, type Package, type ModalType } from './data'
import Header from './components/Header/Header'
import MobileMenu from './components/MobileMenu/MobileMenu'
import Hero from './components/Hero/Hero'
import Polaroid from './components/Polaroid/Polaroid'
import SpaceSection from './components/SpaceSection/SpaceSection'
import PackagesSection from './components/PackagesSection/PackagesSection'
import ContactsSection from './components/ContactsSection/ContactsSection'
import ModalBooking from './components/ModalBooking/ModalBooking'
import ModalRules from './components/ModalRules/ModalRules'
import ModalPackage from './components/ModalPackage/ModalPackage'
import './App.css'

function App() {
  const [photoIndex, setPhotoIndex] = useState(0)
  const [modal, setModal] = useState<ModalType>(null)
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)

  const spaceRef = useRef<HTMLElement>(null)
  const partiesRef = useRef<HTMLElement>(null)
  const contactsRef = useRef<HTMLElement>(null)

  const scrollTo = (section: 'space' | 'parties' | 'contacts') => {
    setMenuOpen(false)
    const map = { space: spaceRef, parties: partiesRef, contacts: contactsRef }
    map[section].current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const openBooking = () => setModal('booking')
  const openRules = () => setModal('rules')
  const openPackage = (pkg: Package) => {
    setSelectedPackage(pkg)
    setModal('package')
  }
  const closeModal = () => {
    setModal(null)
    setSelectedPackage(null)
  }

  useEffect(() => {
  if (modal) {
    document.body.classList.add('modal-open')
  } else {
    document.body.classList.remove('modal-open')
  }
  return () => document.body.classList.remove('modal-open')
}, [modal])

  const nextPhoto = () => setPhotoIndex((i) => (i + 1) % SPACE_PHOTOS.length)

  return (
    <div className="app">
      <Header
        onOpenMenu={() => setMenuOpen(true)}
        onScrollTo={scrollTo}
      />

      {menuOpen && (
        <MobileMenu
          onClose={() => setMenuOpen(false)}
          onScrollTo={scrollTo}
          onBook={() => { setMenuOpen(false); openBooking() }}
        />
      )}

      <Hero onBook={openBooking} />

      <div className="polaroid-mobile">
        <Polaroid src={SPACE_PHOTOS[photoIndex]} onNext={nextPhoto} />
      </div>

      <SpaceSection
        ref={spaceRef}
        photoSrc={SPACE_PHOTOS[photoIndex]}
        onNextPhoto={nextPhoto}
      />

      <PackagesSection
        ref={partiesRef}
        onOpenPackage={openPackage}
        onBook={openBooking}
      />

      <ContactsSection
        ref={contactsRef}
        onOpenRules={openRules}
      />

      {modal === 'booking' && <ModalBooking onClose={closeModal} />}
      {modal === 'rules' && <ModalRules onClose={closeModal} />}
      {modal === 'package' && selectedPackage && (
        <ModalPackage
          pkg={selectedPackage}
          onClose={closeModal}
          onBook={openBooking}
        />
      )}
    </div>
  )
}

export default App
