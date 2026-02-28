import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Providers } from './components/providers'
import { Header } from './components/header'
import { Footer } from './components/footer'
import { ScrollBackground } from './components/scroll-background'
import { ErrorSuppressor } from './components/error-suppressor'
import Home from './pages_home/page'
import PrivacyPolicy from './pages_privacy/page'
import CpanelPage from './pages_cpanel/page'
import CpanelLogin from './pages_cpanel/login'

import './styles/globals.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorSuppressor />
      <Providers>
        {/* Header */}
        <Header />
        <ScrollBackground>
          <main className="min-h-[calc(100vh-var(--header-height))]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/cpanel" element={<CpanelPage />} />
              <Route path="/cpanel/login" element={<CpanelLogin />} />
            </Routes>
          </main>
          {/* Footer */}
          <Footer />
        </ScrollBackground>
      </Providers>
    </BrowserRouter>
  </React.StrictMode>,
)
