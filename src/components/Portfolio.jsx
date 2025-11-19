function Portfolio() {
  const works = [
    { title: 'حملة إطلاق مطعم', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop' },
    { title: 'هوية علامة أزياء', img: 'https://images.unsplash.com/photo-1544531583-0572bc2bde7b?q=80&w=1200&auto=format&fit=crop' },
    { title: 'موقع شركة تقنية', img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop' },
  ]

  return (
    <section id="portfolio" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">أعمال مختارة</h2>
          <p className="text-slate-600">نماذج من نتائج حققناها لعملائنا</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {works.map((w) => (
            <div key={w.title} className="group rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm">
              <div className="aspect-video overflow-hidden">
                <img src={w.img} alt={w.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-4 text-right">
                <h3 className="font-semibold text-slate-900">{w.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
