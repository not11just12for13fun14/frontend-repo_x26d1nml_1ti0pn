function Testimonials() {
  const items = [
    { name: 'سارة.م', role: 'مالكة متجر إلكتروني', quote: 'ارتفع معدل التحويل 2.3x خلال ثلاثة أشهر فقط. فريق احترافي وسريع الاستجابة.' },
    { name: 'خالد.ر', role: 'مدير مطعم', quote: 'صمموا لنا هوية ملفتة وأداروا الإعلانات بكفاءة. النتائج فوق المتوقع.' },
    { name: 'نورة.ع', role: 'مؤسسة شركة ناشئة', quote: 'أفضل قرار اتخذناه في التسويق. محتوى مرتب وتقارير واضحة.' },
  ]

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">آراء العملاء</h2>
          <p className="text-slate-600">ثقتكم رأس مالنا</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t) => (
            <div key={t.name} className="p-6 rounded-2xl border border-slate-200 bg-slate-50">
              <p className="text-slate-700 leading-relaxed mb-4 text-right">“{t.quote}”</p>
              <div className="text-right">
                <p className="font-semibold text-slate-900">{t.name}</p>
                <p className="text-sm text-slate-600">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
