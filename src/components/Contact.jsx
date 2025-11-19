import { Phone, Mail, MapPin } from 'lucide-react'

function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="order-last lg:order-none">
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="text-2xl font-bold mb-4 text-right">ارسل لنا تفاصيل مشروعك</h3>
              <form className="grid gap-4 text-right">
                <div>
                  <label className="block mb-2 text-sm text-slate-300">الاسم</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl bg-white text-slate-900 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="مثال: أحمد" />
                </div>
                <div>
                  <label className="block mb-2 text-sm text-slate-300">البريد الإلكتروني</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl bg-white text-slate-900 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="block mb-2 text-sm text-slate-300">نوع الخدمة</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-white text-slate-900 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>إعلانات مدفوعة</option>
                    <option>الهوية البصرية</option>
                    <option>إدارة السوشيال</option>
                    <option>موقع/صفحة هبوط</option>
                    <option>إنتاج محتوى</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-2 text-sm text-slate-300">ملخص المشروع</label>
                  <textarea rows="4" className="w-full px-4 py-3 rounded-xl bg-white text-slate-900 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="حدثنا عن أهدافك والجمهور المستهدف..."></textarea>
                </div>
                <button type="button" className="px-5 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-colors">إرسال</button>
              </form>
            </div>
          </div>

          <div className="text-right">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">تواصل معنا</h2>
            <p className="text-slate-300 mb-8">تتبعنا على القنوات التالية أو احجز مكالمة مباشرة.
            </p>

            <div className="space-y-4">
              <a href="tel:+966500000000" className="flex items-center justify-end gap-3">
                <span>+966 50 000 0000</span>
                <span className="w-10 h-10 inline-flex items-center justify-center rounded-lg bg-white/10">
                  <Phone className="w-5 h-5" />
                </span>
              </a>
              <a href="mailto:hello@sharara.agency" className="flex items-center justify-end gap-3">
                <span>hello@sharara.agency</span>
                <span className="w-10 h-10 inline-flex items-center justify-center rounded-lg bg-white/10">
                  <Mail className="w-5 h-5" />
                </span>
              </a>
              <div className="flex items-center justify-end gap-3">
                <span>الرياض، المملكة العربية السعودية</span>
                <span className="w-10 h-10 inline-flex items-center justify-center rounded-lg bg-white/10">
                  <MapPin className="w-5 h-5" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
