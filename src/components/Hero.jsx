function Hero() {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_100%_0%,rgba(59,130,246,.15),transparent)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="text-right">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900 mb-6">
              نصنع هويات وعائدًا تسويقيًا يحرّك عملك
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              وكالة تسويق عربية متخصصة في بناء العلامات التجارية، إدارة الحملات الإعلانية، وصناعة المحتوى الذي يلفت الانتباه ويحوّل المتابعين إلى عملاء.
            </p>
            <div className="flex items-center justify-end gap-3">
              <a href="#contact" className="px-5 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-colors">ابدأ مشروعك الآن</a>
              <a href="#portfolio" className="px-5 py-3 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors">شاهد أعمالنا</a>
            </div>
          </div>
          <div className="relative order-first lg:order-none">
            <div className="aspect-[4/3] bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1400&auto=format&fit=crop" alt="Agency" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white border border-blue-200 text-blue-700 rounded-xl px-4 py-3 shadow-lg">
              نمو العملاء هذا الشهر +38%
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
