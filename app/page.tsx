'use client';

import { useState } from 'react';
import { Phone, MapPin, Clock, Star, ArrowRight, CheckCircle, Shield, Users, Car, Navigation, Menu, X, Calendar, Info } from 'lucide-react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-stone-200 z-50">
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2.5">
              <div className="w-9 h-9 bg-stone-900 rounded-lg flex items-center justify-center">
                <span className="text-white font-semibold text-sm">A</span>
              </div>
              <div>
                <span className="text-base font-medium text-stone-900">Aqila Trans</span>
                <span className="text-[10px] text-stone-500 block leading-tight">Banjarnegara</span>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-7">
              <a href="#home" className="text-sm text-stone-600 hover:text-stone-900 transition">Beranda</a>
              <a href="#routes" className="text-sm text-stone-600 hover:text-stone-900 transition">Rute</a>
              <a href="#features" className="text-sm text-stone-600 hover:text-stone-900 transition">Layanan</a>
              <a href="#contact" className="text-sm text-stone-600 hover:text-stone-900 transition">Kontak</a>
            </div>

            <div className="hidden md:flex items-center">
              <a
                href="https://wa.me/6285290902690?text=Halo, saya ingin pesan travel..."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-stone-900 text-white px-4 py-2 rounded-lg hover:bg-stone-800 transition text-sm flex items-center space-x-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Pesan</span>
              </a>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 hover:bg-stone-100 rounded-lg transition"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-stone-200 px-5 py-4 space-y-2.5">
            <a href="#home" className="block text-sm text-stone-600 hover:text-stone-900 transition py-1">Beranda</a>
            <a href="#routes" className="block text-sm text-stone-600 hover:text-stone-900 transition py-1">Rute</a>
            <a href="#features" className="block text-sm text-stone-600 hover:text-stone-900 transition py-1">Layanan</a>
            <a href="#contact" className="block text-sm text-stone-600 hover:text-stone-900 transition py-1">Kontak</a>
            <a
              href="https://wa.me/6285290902690?text=Halo, saya ingin pesan travel..."
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-stone-900 text-white px-4 py-2 rounded-lg text-sm text-center mt-2"
            >
              Pesan Travel
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-14 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-3">
              <div className="inline-flex items-center space-x-1.5 bg-stone-100 text-stone-700 px-3 py-1 rounded-full text-[11px] mb-5">
                <Star className="w-3 h-3 fill-current" />
                <span>Melayani sejak 2015</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-medium text-stone-900 mb-3.5 leading-snug">
                Travel dari Banjarnegara ke Seluruh Jawa Tengah
              </h1>
              <p className="text-base text-stone-600 mb-6 leading-relaxed max-w-lg">
                Kami jemput di alamat dan antar sampai tujuan. Armada Hiace, Avanza, dan Innova dengan driver berpengalaman.
              </p>
              <div className="flex flex-col sm:flex-row gap-2.5">
                <a
                  href="#routes"
                  className="bg-stone-900 text-white px-5 py-2.5 rounded-lg hover:bg-stone-800 transition flex items-center justify-center space-x-1.5 text-sm font-medium"
                >
                  <span>Lihat Jadwal</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://wa.me/6285290902690?text=Halo, saya ingin pesan travel..."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-stone-900 px-5 py-2.5 rounded-lg hover:bg-stone-50 transition border border-stone-300 text-sm font-medium"
                >
                  Chat WhatsApp
                </a>
              </div>
              
              {/* Testimonial */}
              <div className="mt-8 bg-white rounded-xl p-4 border border-stone-200">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-stone-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-stone-600 text-sm font-medium">B</span>
                  </div>
                  <div>
                    <div className="flex items-center space-x-1.5 mb-1">
                      <span className="text-sm font-medium text-stone-900">Budi Santoso</span>
                      <div className="flex space-x-0.5">
                        {[1, 2, 3, 4, 5].map(i => (
                          <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      "Perjalanan Banjarnegara ke Semarang lancar. Driver ramah dan mobil bersih."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Route Card */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-5 border border-stone-200 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-medium text-stone-900">Rute Populer Hari Ini</h3>
                  <span className="text-[10px] text-stone-500">14 Feb 2026</span>
                </div>
                <div className="space-y-3">
                  {[
                    { from: 'Banjarnegara', to: 'Semarang', time: '07:00', seats: 8 },
                    { from: 'Banjarnegara', to: 'Yogyakarta', time: '08:00', seats: 5 },
                    { from: 'Banjarnegara', to: 'Solo', time: '09:00', seats: 12 },
                  ].map((route, i) => (
                    <div key={i} className="flex items-center justify-between py-2.5 border-b border-stone-100 last:border-0">
                      <div className="flex-1">
                        <div className="text-xs font-medium text-stone-900">{route.from}</div>
                        <div className="flex items-center space-x-1 my-0.5">
                          <div className="h-px w-4 bg-stone-400"></div>
                          <ArrowRight className="w-3 h-3 text-stone-400" />
                          <div className="h-px w-4 bg-stone-400"></div>
                        </div>
                        <div className="text-xs font-medium text-stone-900">{route.to}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-stone-600">{route.time}</div>
                        <div className="text-[10px] text-stone-500">{route.seats} kursi</div>
                      </div>
                    </div>
                  ))}
                </div>
                <a
                  href="https://wa.me/6285290902690?text=Halo, saya ingin cek jadwal travel..."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 block w-full bg-stone-900 text-white px-4 py-2 rounded-lg hover:bg-stone-800 transition text-xs text-center font-medium"
                >
                  Cek Jadwal Lengkap
                </a>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label: '20+', desc: 'Kota tujuan' },
              { label: '4.8', desc: 'Rating Google' },
              { label: '8+', desc: 'Tahun pengalaman' },
              { label: '15', desc: 'Armada aktif' },
            ].map((stat, i) => (
              <div key={i} className="bg-white rounded-lg p-4 border border-stone-100">
                <div className="text-2xl font-medium text-stone-900">{stat.label}</div>
                <div className="text-xs text-stone-500 mt-0.5">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Routes Section */}
      <section id="routes" className="py-12 px-5 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-medium text-stone-900 mb-1">
                Jadwal & Harga
              </h2>
              <p className="text-sm text-stone-600">
                Travel reguler door to door
              </p>
            </div>
            <div className="hidden md:flex items-center space-x-2 text-xs text-stone-500">
              <Calendar className="w-3.5 h-3.5" />
              <span>Update: 14 Feb 2026</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { from: 'Banjarnegara', to: 'Semarang', desc: 'Via Temanggung', time: '3-4 jam', price: 'Rp 150.000', freq: '4x/hari' },
              { from: 'Banjarnegara', to: 'Yogyakarta', desc: 'Via Magelang', time: '4-5 jam', price: 'Rp 180.000', freq: '3x/hari' },
              { from: 'Banjarnegara', to: 'Solo', desc: 'Via Sragen', time: '4-5 jam', price: 'Rp 180.000', freq: '3x/hari' },
              { from: 'Banjarnegara', to: 'Jakarta', desc: 'Via Purbalingga', time: '6-7 jam', price: 'Rp 250.000', freq: '2x/hari' },
              { from: 'Banjarnegara', to: 'Bandung', desc: 'Via Tol Trans Jawa', time: '7-8 jam', price: 'Rp 300.000', freq: '1x/hari' },
              { from: 'Banjarnegara', to: 'Surabaya', desc: 'Via Semarang', time: '8-9 jam', price: 'Rp 350.000', freq: '1x/hari' },
            ].map((route, i) => (
              <div key={i} className="bg-stone-50 rounded-xl p-4 hover:bg-white hover:shadow-sm transition border border-stone-100">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex-1">
                    <div className="text-sm font-medium text-stone-900">{route.from}</div>
                    <div className="flex items-center space-x-1 my-1">
                      <div className="h-px w-5 bg-stone-400"></div>
                      <ArrowRight className="w-3 h-3 text-stone-400" />
                      <div className="h-px w-5 bg-stone-400"></div>
                    </div>
                    <div className="text-sm font-medium text-stone-900">{route.to}</div>
                  </div>
                </div>
                <div className="space-y-1 mb-3">
                  <div className="flex items-center space-x-1.5 text-stone-600 text-xs">
                    <Clock className="w-3 h-3" />
                    <span>{route.time}</span>
                  </div>
                  <div className="text-stone-600 text-xs">{route.desc}</div>
                  <div className="text-stone-500 text-[10px]">{route.freq}</div>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-stone-200">
                  <div className="text-stone-900 text-sm font-medium">{route.price}</div>
                  <a
                    href={`https://wa.me/6285290902690?text=Halo, saya ingin pesan travel dari ${route.from} ke ${route.to}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-stone-900 text-white px-3 py-1.5 rounded-lg hover:bg-stone-800 transition text-xs"
                  >
                    Pesan
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Routes */}
          <div className="mt-6">
            <h3 className="text-sm font-medium text-stone-900 mb-3">Rute Lainnya</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {[
                'Salatiga', 'Demak', 'Kudus', 'Boyolali', 'Jepara', 'Klaten', 'Pati', 'Purwodadi', 'Wonosobo', 'Pekalongan'
              ].map((city, i) => (
                <div key={i} className="bg-stone-50 rounded-lg px-3 py-2 text-xs text-stone-700 hover:bg-stone-100 transition text-center">
                  {city}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 px-5 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-medium text-stone-900 mb-2">
              Kenapa Memilih Aqila Trans?
            </h2>
            <p className="text-sm text-stone-600 max-w-md mx-auto">
              Pengalaman melayani penumpang dari Banjarnegara ke berbagai kota
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: 'Armada Terawat',
                desc: 'Toyota Hiace, Daihatsu Luxio, Toyota Avanza, dan Toyota Innova. Semua mobil berusia di bawah 5 tahun dan servis rutin.',
                icon: Car,
              },
              {
                title: 'Driver Berpengalaman',
                desc: 'Driver kami rata-rata memiliki pengalaman 5+ tahun. Mengenal rute dan kondisi jalan.',
                icon: Users,
              },
              {
                title: 'Jemput & Antar',
                desc: 'Kami jemput di alamat dan antar sampai tujuan. Tidak perlu ke terminal atau pool.',
                icon: MapPin,
              },
              {
                title: 'Jadwal Fleksibel',
                desc: 'Travel reguler berangkat setiap hari. Charter bisa kapan saja sesuai kebutuhan Anda.',
                icon: Calendar,
              },
            ].map((feature, i) => (
              <div key={i} className="bg-white rounded-xl p-5 border border-stone-100">
                <div className="w-9 h-9 bg-stone-100 rounded-lg flex items-center justify-center mb-3">
                  <feature.icon className="w-4.5 h-4.5 text-stone-700" />
                </div>
                <h3 className="text-sm font-medium text-stone-900 mb-2">{feature.title}</h3>
                <p className="text-xs text-stone-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-5 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-medium text-stone-900 mb-6">
            Pertanyaan Umum
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                q: 'Bagaimana cara pesan travel?',
                a: 'Kirim pesan ke WhatsApp kami 0852-9090-2690. Beri tahu nama, alamat jemput, alamat tujuan, dan jumlah penumpang.',
              },
              {
                q: 'Berapa harga travel?',
                a: 'Harga mulai Rp 120.000 - Rp 350.000 tergantung rute. Cek tabel jadwal untuk harga lengkap.',
              },
              {
                q: 'Berapa jam berangkat?',
                a: 'Travel reguler biasanya berangkat pagi hari (06:00 - 09:00). Charter bisa kapan saja.',
              },
              {
                q: 'Apakah ada diskon?',
                a: 'Diskon untuk pesanan rombongan (5+ penumpang). Chat kami untuk info lebih lanjut.',
              },
            ].map((faq, i) => (
              <div key={i} className="bg-stone-50 rounded-xl p-4 border border-stone-100">
                <div className="flex items-start space-x-2 mb-2">
                  <Info className="w-4 h-4 text-stone-600 mt-0.5 flex-shrink-0" />
                  <h3 className="text-sm font-medium text-stone-900">{faq.q}</h3>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed pl-6">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 px-5 bg-stone-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl font-medium mb-3">
                Hubungi Kami
              </h2>
              <p className="text-stone-300 text-sm mb-5 leading-relaxed">
                Pesan travel, tanya jadwal, atau request charter. Tim kami siap membantu 24 jam.
              </p>
              <div className="space-y-4">
                <div>
                  <div className="text-stone-400 text-xs mb-1">WhatsApp</div>
                  <a
                    href="https://wa.me/6285290902690"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-medium hover:underline flex items-center space-x-2"
                  >
                    <Phone className="w-4 h-4" />
                    <span>0852-9090-2690</span>
                  </a>
                </div>
                <div>
                  <div className="text-stone-400 text-xs mb-1">Lokasi Kantor</div>
                  <div className="text-sm text-stone-200">Banjarnegara, Jawa Tengah</div>
                </div>
                <div>
                  <div className="text-stone-400 text-xs mb-1">Jam Operasional</div>
                  <div className="text-sm text-stone-200">24 Jam / 7 Hari</div>
                </div>
              </div>
            </div>
            <div className="bg-stone-800 rounded-xl p-5 border border-stone-700">
              <h3 className="text-sm font-medium mb-4">Pesan Cepat</h3>
              <div className="space-y-3">
                <div className="text-xs text-stone-400 mb-2">Pilih rute:</div>
                {[
                  'Banjarnegara - Semarang',
                  'Banjarnegara - Yogyakarta',
                  'Banjarnegara - Solo',
                  'Banjarnegara - Jakarta',
                ].map((route, i) => (
                  <a
                    key={i}
                    href={`https://wa.me/6285290902690?text=Halo, saya ingin pesan travel ${route}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-stone-700 hover:bg-stone-600 transition rounded-lg px-4 py-2.5 text-xs text-stone-200"
                  >
                    {route}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-950 text-stone-400 py-10 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-8 h-8 bg-stone-800 rounded-lg flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">A</span>
                </div>
                <div>
                  <span className="text-sm font-medium text-stone-200">Aqila Trans</span>
                  <span className="text-[10px] text-stone-500 block">Banjarnegara, Jawa Tengah</span>
                </div>
              </div>
              <p className="text-xs text-stone-500 mb-3 max-w-md">
                Travel reguler dan charter dengan armada Hiace, Avanza, dan Innova. Melayani door to door ke berbagai kota di Jawa Tengah.
              </p>
            </div>
            <div>
              <h4 className="text-xs font-medium text-stone-300 mb-3">Rute Populer</h4>
              <ul className="space-y-1.5 text-xs">
                <li>Banjarnegara - Semarang</li>
                <li>Banjarnegara - Yogyakarta</li>
                <li>Banjarnegara - Solo</li>
                <li>Banjarnegara - Jakarta</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-medium text-stone-300 mb-3">Layanan</h4>
              <ul className="space-y-1.5 text-xs">
                <li>Travel Reguler</li>
                <li>Charter</li>
                <li>Wisata</li>
                <li>Door to Door</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-stone-800">
            <p className="text-xs text-stone-500">
              © {new Date().getFullYear()} Aqila Trans. Travel & Charter Banjarnegara.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
