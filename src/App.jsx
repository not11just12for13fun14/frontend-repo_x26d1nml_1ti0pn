import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

function App() {
  return (
    <div dir="rtl" className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
        <footer className="py-10 bg-slate-100 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-600 text-sm">© {new Date().getFullYear()} وكالة شرارة — جميع الحقوق محفوظة</p>
            <div className="flex items-center gap-4 text-sm text-slate-600">
              <a href="#services" className="hover:text-blue-600">الخدمات</a>
              <a href="#portfolio" className="hover:text-blue-600">الأعمال</a>
              <a href="#contact" className="hover:text-blue-600">تواصل</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
