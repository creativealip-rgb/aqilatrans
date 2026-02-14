'use client';

import { useState } from 'react';
import { Phone, MapPin, Clock, Star, ArrowRight, CheckCircle, Shield, Users, Car, Navigation, Menu, X, Calendar, Info, Image as ImageIcon } from 'lucide-react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2.5">
              <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center shadow-sm">
                <span className="text-white font-semibold text-sm">A</span>
              </div>
              <div>
                <span className="text-base font-medium text-gray-900">Aqila Trans</span>
                <span className="text-[10px] text-gray-500 block leading-tight">Banjarnegara</span>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-7">
              <a href="#home" className="text-sm text-gray-600 hover:text-blue-600 transition">Beranda</a>
              <a href="#routes" className="text-sm text-gray-600 hover:text-blue-600 transition">Rute</a>
              <a href="#features" className="text-sm text-gray-600 hover:text-blue-600 transition">Layanan</a>
              <a href="#contact" className="text-sm text-gray-600 hover:text-blue-600 transition">Kontak</a>
            </div>

            <div className="hidden md:flex items-center">
              <a
                href="https://wa.me/6285290902690?text=Halo, saya ingin pesan travel..."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-sm flex items
-center space-x-1.5 shadow-sm"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Pesan</span>
              </a>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 hover:bg-gray-100 rounded-lg transition"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-5 py-4 space-y-2.5">
            <a href="#home" className="block text-sm text-gray-600 hover:text-blue-600 transition py-1">Beranda</a>
            <a href="#routes" className="block text-sm text-gray-600 hover:text-blue-600 transition py-1">Rute</a>
            <a href="#features" className="block text-sm text-gray-600 hover:text-blue-600 transition py-1">Layanan</a>
            <a href="#contact" className="block text-sm text-gray-600 hover:text-blue-600 transition py-1">Kontak</a>
            <a
              href="https://wa.me/6285290902690?text=Halo, saya ingin pesan travel..."
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm text-center mt-2"
            >
              Pesan Travel
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-12 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center space-x-1.5 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-[11px] mb-5">
                <Star className="w-3 h-3 fill-current" />
                <span>Melayani sejak 2015</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-medium text-gray-900 mb-3.5 leading-snug">
                Travel dari Banjarnegara ke Seluruh Jawa Tengah
              </h1>
              <p className="text-base text-gray-600 mb-6 leading-relaxed max-w-lg">
                Kami jemput di alamat dan antar sampai tujuan. Armada Hiace, Avanza, dan Innova dengan driver berpengalaman.
              </p>
              <div className="flex flex-col sm:flex-row gap-2.5 mb-6">
                <a
                  href="#routes"
                  className="bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition flex items-center justify-center space-x-1.5 text-sm font-medium shadow-sm"
                >
                  <span>Lihat Jadwal</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://wa.me/6285290902690?text=Halo, saya ingin pesan travel..."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-blue-600 px-5 py-2.5 rounded-lg hover:bg-blue-50 transition border border-blue-200 text-sm font-medium"
                >
                  Chat WhatsApp
                </a>
              </div>
              
              {/* Testimonial */}
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 text-sm font-medium">B</span>
                  </div>
                  <div>
                    <div className="flex items-center space-x-1.5 mb-1">
                      <span className="text-sm font-medium text-gray-900">Budi Santoso</span>
                      <div className="flex space-x-0.5">
                        {[1, 2, 3, 4, 5].map(i => (
                          <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      "Perjalanan Banjarnegara ke Semarang lancar. Driver ramah dan mobil bersih."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1549317661-bd319e4c4e9?w=800&h=600&fit=crop"
                  alt="Travel van"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3">
                    <div className="flex items-center space-x-2">
                      <div className="flex -space-x-1">
                        {[1, 2, 3].map(i => (
                          <div key={i} className="w-6 h-6 bg-blue-600 rounded-full border-2 border-white"></div>
                        ))}
                      </div>
                      <div className="text-xs text-gray-700">10,000+ penumpang</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label: '20+', desc: 'Kota tujuan' },
              { label: '4.8', desc: 'Rating Google' },
              { label: '8+', desc: 'Tahun pengalaman' },
              { label: '15', desc: 'Armada aktif' },
            ].map((stat, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-medium text-gray-900">{stat.label}</div>
                <div className="text-xs text-gray-500 mt-0.5">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Routes Section */}
      <section id="routes" className="py-12 px-5 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-medium text-gray-900 mb-1">
                Jadwal & Harga
              </h2>
              <p className="text-sm text-gray-600">
                Travel reguler door to door
              </p>
            </div>
            <div className="hidden md:flex items-center space-x-2 text-xs text-gray-500">
              <Calendar className="w-3.5 h-3.5" />
              <span>Update: 14 Feb 2026</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { from: 'Banjarnegara', to: 'Semarang', desc: 'Via Temanggung', time: '3-4 jam', price: 'Rp 150.000', freq: '4x/hari', img: 'https://images.unsplash.com/photo-1544620347-c5fd4a9c4b0e?w=400&h=300&fit=crop' },
              { from: 'Banjarnegara', to: 'Yogyakarta', desc: 'Via Magelang', time: '4-5 jam', price: 'Rp 180.000', freq: '3x/hari', img: 'https://images.unsplash.com/photo-1552831568-a771d4554182?w=400&h=300&fit=crop' },
              { from: 'Banjarnegara', to: 'Solo', desc: 'Via Sragen', time: '4-5 jam', price: 'Rp 180.000', freq: '3x/hari', img: 'https://images.unsplash.com/photo-1566517790759-1d9e64065433?w=400&h=300&fit=crop' },
              { from: 'Banjarnegara', to: 'Jakarta', desc: 'Via Purbalingga', time: '6-7 jam', price: 'Rp 250.000', freq: '2x/hari', img: 'https://images.unsplash.com/photo-1542314831-068cd4db0eb0?w=400&h=300&fit=crop' },
              { from: 'Banjarnegara', to: 'Bandung', desc: 'Via Tol Trans Jawa', time: '7-8 jam', price: 'Rp 300.000', freq: '1x/hari', img: 'https://images.unsplash.com/photo-1558619661-4733380eeb8c?w=400&h=300&fit=crop' },
              { from: 'Banjarnegara', to: 'Surabaya', desc: 'Via Semarang', time: '8-9 jam', price: 'Rp 350.000', freq: '1x/hari', img: 'https://images.unsplash.com/photo-1555443591-7703e4835f87?w=400&h=300&fit=crop' },
            ].map((route, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition group">
                <div className="relative h-32 overflow-hidden">
                  <img
                    src={route.img}
                    alt={route.to}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="text-white text-sm font-medium">{route.to}</div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm font-medium text-gray-900">{route.from}</div>
                    <div className="text-blue-600 text-sm font-medium">{route.price}</div>
                  </div>
                  <div className="space-y-1 mb-3">
                    <div className="flex items-center space-x-1.5 text-gray-600 text-xs">
                      <Clock className="w-3 h-3" />
                      <span>{route.time}</span>
                    </div>
                    <div className="text-gray-600 text-xs">{route.desc}</div>
                    <div className="text-gray-500 text-[10px]">{route.freq}</div>
                  </div>
                  <a
                    href={`https://wa.me/6285290902690?text=Halo, saya ingin pesan travel dari ${route.from} ke ${route.to}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition text-xs text-center font-medium"
                  >
                    Pesan Sekarang
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Routes */}
          <div className="mt-6">
            <h3 className="text-sm font-medium text-gray-900 mb-3">Rute Lainnya</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
              {[
                'Salatiga', 'Demak', 'Kudus', 'Boyolali', 'Jepara', 'Klaten', 'Pati', 'Purwodadi', 'Wonosobo', 'Pekalongan'
              ].map((city, i) => (
                <div key={i} className="bg-white rounded-lg px-3 py-2 text-xs text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition text-center border border-gray-100">
                  {city}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section id="features" className="py-12 px-5 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-medium text-gray-900 mb-2">
              Armada Kami
            </h2>
            <p className="text-sm text-gray-600 max-w-md mx-auto">
              Mobil terawat dan nyaman untuk perjalanan jauh
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                title: 'Toyota Hiace',
                desc: 'Kapasitas 14 penumpang. Cocok untuk rombongan.',
                img: 'https://images.unsplash.com/photo-1570125477074-5fdcf4c69875?w=400&h=300&fit=crop',
              },
              {
                title: 'Toyota Avanza',
                desc: 'Kapasitas 7 penumpang. Nyaman dan irit bahan bakar.',
                img: 'https://images.unsplash.com/photo-1632813222983-0c234c00e226?w=400&h=300&fit=crop',
              },
              {
                title: 'Toyota Innova',
                desc: 'Kapasitas 7 penumpang. Premium dan luas.',
                img: 'https://images.unsplash.com/photo-1552519505-6102e4b3a3fe?w=400&h=300&fit=crop',
              },
            ].map((vehicle, i) => (
              <div key={i} className="bg-gray-50 rounded-xl overflow-hidden group">
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={vehicle.img}
                    alt={vehicle.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-medium text-gray-900 mb-2">{vehicle.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{vehicle.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-5 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-medium text-gray-900 mb-2">
              Kenapa Memilih Aqila Trans?
            </h2>
            <p className="text-sm text-gray-600 max-w-md mx-auto">
              Pengalaman dan kualitas layanan terbaik
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: 'Jemput & Antar',
                desc: 'Kami jemput di alamat dan antar sampai tujuan. Tidak perlu ke terminal.',
                icon: MapPin,
              },
              {
                title: 'Driver Berpengalaman',
                desc: 'Driver kami rata-rata memiliki pengalaman 5+ tahun.',
                icon: Users,
              },
              {
                title: 'Jadwal Fleksibel',
                desc: 'Travel reguler berangkat setiap hari. Charter bisa kapan saja.',
                icon: Calendar,
              },
              {
                title: 'Harga Kompetitif',
                desc: 'Harga terjangkau dengan layanan premium. Tidak ada biaya tersembunyi.',
                icon: Star,
              },
            ].map((feature, i) => (
              <div key={i} className="bg-white rounded-xl p-5 border border-gray-100">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-3">
                  <feature.icon className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-sm font-medium text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-5 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-medium text-gray-900 mb-6">
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
              <div key={i} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <div className="flex items-start space-x-2 mb-2">
                  <Info className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <h3 className="text-sm font-medium text-gray-900">{faq.q}</h3>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed pl-6">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 px-5 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl font-medium mb-3">
                Hubungi Kami
              </h2>
              <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                Pesan travel, tanya jadwal, atau request charter. Tim kami siap membantu 24 jam.
              </p>
              <div className="space-y-4">
                <div>
                  <div className="text-blue-200 text-xs mb-1">WhatsApp</div>
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
                  <div className="text-blue-200 text-xs mb-1">Lokasi Kantor</div>
                  <div className="text-sm text-blue-50">Banjarnegara, Jawa Tengah</div>
                </div>
                <div>
                  <div className="text-blue-200 text-xs mb-1">Jam Operasional</div>
                  <div className="text-sm text-blue-50">24 Jam / 7 Hari</div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
              <h3 className="text-sm font-medium mb-4">Pesan Cepat</h3>
              <div className="space-y-3">
                <div className="text-xs text-blue-200 mb-2">Pilih rute:</div>
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
                    className="block bg-white text-blue-600 hover:bg-blue-50 transition rounded-lg px-4 py-2.5 text-xs font-medium"
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
      <footer className="bg-gray-900 text-white py-10 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">A</span>
                </div>
                <div>
                  <span className="text-sm font-medium">Aqila Trans</span>
                  <span className="text-[10px] text-gray-400 block">Banjarnegara, Jawa Tengah</span>
                </div>
              </div>
              <p className="text-xs text-gray-400 mb-3 max-w-md">
                Travel reguler dan charter dengan armada Hiace, Avanza, dan Innova. Melayani door to door ke berbagai kota di Jawa Tengah.
              </p>
              <a
                href="https://wa.me/6285290902690"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-xs font-medium"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Hubungi Kami</span>
              </a>
            </div>
            <div>
              <h4 className="text-xs font-medium text-gray-300 mb-3">Rute Populer</h4>
              <ul className="space-y-1.5 text-xs text-gray-400">
                <li>Banjarnegara - Semarang</li>
                <li>Banjarnegara - Yogyakarta</li>
                <li>Banjarnegara - Solo</li>
                <li>Banjarnegara - Jakarta</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-medium text-gray-300 mb-3">Layanan</h4>
              <ul className="space-y-1.5 text-xs text-gray-400">
                <li>Travel Reguler</li>
                <li>Charter</li>
                <li>Wisata</li>
                <li>Door to Door</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-800">
            <p className="text-xs text-gray-400">
              © {new Date().getFullYear()} Aqila Trans. Travel & Charter Banjarnegara.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
