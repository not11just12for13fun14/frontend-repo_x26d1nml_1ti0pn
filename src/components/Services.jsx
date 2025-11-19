import { Megaphone, PenTool, BarChart3, Globe2, MonitorSmartphone, Camera } from 'lucide-react'

const items = [
  { icon: Megaphone, title: 'إعلانات مدفوعة', desc: 'إدارة حملات جوجل، سناب، تيك توك، وإنستجرام لتحقيق أعلى عائد.' },
  { icon: PenTool, title: 'الهوية البصرية', desc: 'شعارات، أدلة استخدام، قوالب ثابتة وحيوية تعكس شخصية علامتك.' },
  { icon: BarChart3, title: 'إستراتيجية ونمو', desc: 'تحليل السوق، خطط محتوى، ومؤشرات أداء لقياس النتائج.' },
  { icon: Globe2, title: 'المواقع والصفحات', desc: 'مواقع سريعة بواجهة عربية متوافقة مع محركات البحث.' },
  { icon: MonitorSmartphone, title: 'إدارة السوشيال', desc: 'جدولة، تفاعل، وتقارير شهرية لرفع الوعي والمبيعات.' },
  { icon: Camera, title: 'إنتاج محتوى', desc: 'تصوير، مونتاج، وكوبي رايتنج يفتح باب التحويل.' },
]

function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">خدماتنا</h2>
          <p className="text-slate-600">حلول متكاملة تُصنع خصيصًا لأهدافك</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({icon:Icon, title, desc}) => (
            <div key={title} className="text-right p-6 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-white hover:shadow transition">
              <div className="flex items-center justify-end gap-3 mb-3">
                <span className="text-slate-900 font-semibold">{title}</span>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-blue-600/10 text-blue-700">
                  <Icon className="w-5 h-5" />
                </span>
              </div>
              <p className="text-slate-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
