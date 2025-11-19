import { Menu, Phone, Mail } from 'lucide-react'

function Navbar() {
  return (
    <header className="w-full fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src="/logo.svg" alt="وكالة شرارة" className="w-9 h-9" onError={(e)=>{e.currentTarget.style.display='none'}} />
            <span className="text-xl font-bold text-slate-900">وكالة شرارة</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-slate-700">
            <a href="#services" className="hover:text-blue-600 transition-colors">خدماتنا</a>
            <a href="#portfolio" className="hover:text-blue-600 transition-colors">أعمالنا</a>
            <a href="#testimonials" className="hover:text-blue-600 transition-colors">آراء العملاء</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">تواصل</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+966500000000" className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors">
              <Phone className="w-4 h-4" />
              <span>اتصل بنا</span>
            </a>
            <a href="mailto:hello@sharara.agency" className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors">
              <Mail className="w-4 h-4" />
              <span>احجز استشارة</span>
            </a>
          </div>

          <button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-slate-200 text-slate-700">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
