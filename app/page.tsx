'use client';

import { useState } from 'react';
import { Phone, MapPin, Clock, Star, ArrowRight, CheckCircle, Shield, Users, Car, Navigation, Menu, X } from 'lucide-react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-2xl">A</span>
              </div>
              <div>
                <span className="text-xl font-bold text-gray-900 block">Aqila Trans</span>
                <span className="text-xs text-gray-500">Travel & Charter</span>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition font-medium">Beranda</a>
              <a href="#routes" className="text-gray-700 hover:text-blue-600 transition font-medium">Rute</a>
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition font-medium">Keunggulan</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition font-medium">Kontak</a>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <a
                href="https://wa.me/6285290902690?text=Halo, customer service Aqila Travel..."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl font-medium"
              >
                <Phone className="w-5 h-5" />
                <span>Hubungi Kami</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
            <a href="#home" className="block text-gray-700 hover:text-blue-600 transition font-medium py-2">Beranda</a>
            <a href="#routes" className="block text-gray-700 hover:text-blue-600 transition font-medium py-2">Rute</a>
            <a href="#features" className="block text-gray-700 hover:text-blue-600 transition font-medium py-2">Keunggulan</a>
            <a href="#contact" className="block text-gray-700 hover:text-blue-600 transition font-medium py-2">Kontak</a>
            <a
              href="https://wa.me/6285290902690?text=Halo, customer service Aqila Travel..."
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-green-600 text-white px-6 py-3 rounded-xl text-center font-medium"
            >
              Hubungi Kami
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Star className="w-4 h-4 fill-current" />
                <span>Terpercaya sejak 2015</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Travel Aman & Nyaman ke Seluruh <span className="text-blue-600">Jawa Tengah</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Aqila Trans melayedani travel reguler dan charter dengan armada terbaru dan driver berpengalaman. 
                Nikmati perjalanan door to door dengan harga terjangkau.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#routes"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center space-x-2 text-lg font-semibold shadow-lg hover:shadow-xl"
                >
                  <span>Lihat Rute</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/6285290902690?text=Halo, saya ingin pesan travel..."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-300 border-2 border-blue-600 text-lg font-semibold"
                >
                  Pesan Sekarang
                </a>
              </div>
            </div>

            {/* Hero Image/Illustration */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-6 space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Banjarnegara</div>
                      <div className="text-sm text-gray-500">Titik jemput</div>
                    </div>
                  </div>
                  <div className="border-l-2 border-dashed border-blue-300 h-8 ml-6"></div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Navigation className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Semarang, Jogja, Solo, Jakarta</div>
                      <div className="text-sm text-gray-500">Tujuan populer</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full border-2 border-white"></div>
                    ))}
                  </div>
                  <div className="text-sm font-medium text-gray-700">10,000+ Penumpang</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: MapPin, label: '20+', desc: 'Rute Travel', color: 'blue' },
              { icon: Star, label: '4.9/5', desc: 'Rating', color: 'yellow' },
              { icon: Clock, label: '24 Jam', desc: 'Layanan', color: 'green' },
              { icon: Shield, label: '100%', desc: 'Aman', color: 'blue' },
            ].map((stat, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center">
                <div className={`w-12 h-12 bg-${stat.color}-100 rounded-xl flex items-center justify-center mx-auto mb-3`}>
                  <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
                </div>
                <div className="text-2xl font-bold text-gray-900">{stat.label}</div>
                <div className="text-gray-600 text-sm">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Routes Section */}
      <section id="routes" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Rute Travel Kami
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kami melayani berbagai rute di Jawa Tengah dan kota besar lainnya
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { from: 'Banjarnegara', to: 'Semarang', desc: 'Via Temanggung', time: '3-4 jam', price: 'Mulai Rp 150.000' },
              { from: 'Banjarnegara', to: 'Yogyakarta', desc: 'Via Magelang', time: '4-5 jam', price: 'Mulai Rp 180.000' },
              { from: 'Banjarnegara', to: 'Solo', desc: 'Via Sragen', time: '4-5 jam', price: 'Mulai Rp 180.000' },
              { from: 'Banjarnegara', to: 'Jakarta', desc: 'Via Purbalingga', time: '6-7 jam', price: 'Mulai Rp 250.000' },
              { from: 'Banjarnegara', to: 'Bandung', desc: 'Via Tol Trans Jawa', time: '7-8 jam', price: 'Mulai Rp 300.000' },
              { from: 'Banjarnegara', to: 'Surabaya', desc: 'Via Semarang', time: '8-9 jam', price: 'Mulai Rp 350.000' },
              { from: 'Banjarnegara', to: 'Salatiga', desc: 'Via Temanggung', time: '2-3 jam', price: 'Mulai Rp 120.000' },
              { from: 'Banjarnegara', to: 'Demak', desc: 'Via Semarang', time: '3-4 jam', price: 'Mulai Rp 150.000' },
              { from: 'Banjarnegara', to: 'Kudus', desc: 'Via Semarang', time: '3-4 jam', price: 'Mulai Rp 150.000' },
            ].map((route, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-300 group">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex-1">
                    <div className="text-lg font-semibold text-gray-900">{route.from}</div>
                    <div className="flex items-center space-x-2 my-2">
                      <div className="h-0.5 w-8 bg-blue-600"></div>
                      <ArrowRight className="w-4 h-4 text-blue-600" />
                      <div className="h-0.5 w-8 bg-blue-600"></div>
                    </div>
                    <div className="text-lg font-semibold text-gray-900">{route.to}</div>
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-gray-600 text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{route.time}</span>
                  </div>
                  <div className="text-gray-600 text-sm">{route.desc}</div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="text-blue-600 font-semibold">{route.price}</div>
                  <a
                    href={`https://wa.me/6285290902690?text=Halo, saya ingin pesan travel dari ${route.from} ke ${route.to}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center space-x-2 text-sm font-medium group-hover:scale-105"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Pesan</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Mengapa Memilih Aqila Trans?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Pengalaman dan kualitas layanan terbaik untuk kenyamanan perjalanan Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Terpercaya & Berpengalaman',
                desc: 'Kami sudah berpengalaman lebih dari 8 tahun melayani ribuan penumpang dengan kepuasan tinggi',
                icon: Shield,
                color: 'blue',
              },
              {
                title: 'Harga Terjangkau',
                desc: 'Harga kompetitif dengan layanan premium. Tidak ada biaya tersembunyi',
                icon: Star,
                color: 'yellow',
              },
              {
                title: 'Armada Terbaru & Terawat',
                desc: 'Mobil berusia muda, terawat rutin, dan dilengkapi AC yang nyaman',
                icon: Car,
                color: 'green',
              },
              {
                title: 'Driver Profesional',
                desc: 'Driver berpengalaman, ramah, dan mengutamakan keselamatan penumpang',
                icon: Users,
                color: 'blue',
              },
            ].map((feature, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className={`w-14 h-14 bg-${feature.color}-100 rounded-xl flex items-center justify-center mb-4`}>
                  <feature.icon className={`w-7 h-7 text-${feature.color}-600`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Tentang Aqila Trans
              </h2>
              <p className="text-lg text-blue-100 mb-6 leading-relaxed">
                Aqila Trans adalah penyedia transportasi umum seperti charter dan travel reguler serta melayani wisata. 
                Berlokasi di kota Banjarnegara Jawa Tengah, kami melayani travel ke berbagai kota di Jawa Tengah 
                dan kota-kota besar lainnya.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  'Layanan door to door',
                  'Armada terawat dan nyaman',
                  'Driver profesional dan ramah',
                  'Harga kompetitif',
                  'Jadwal fleksibel',
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-blue-50">{item}</span>
                  </div>
                ))}
              </div>
              <a
                href="https://wa.me/6285290902690?text=Halo, saya ingin bertanya tentang layanan Aqila Trans..."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-white text-blue-600 px-6 py-3 rounded-xl hover:bg-blue-50 transition-all duration-300 font-semibold"
              >
                <Phone className="w-5 h-5" />
                <span>Hubungi Kami Sekarang</span>
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Informasi Kontak</h3>
              <div className="space-y-6">
                <div>
                  <div className="text-blue-200 text-sm mb-2">WhatsApp</div>
                  <a
                    href="https://wa.me/6285290902690"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl font-semibold hover:underline flex items-center space-x-2"
                  >
                    <Phone className="w-6 h-6" />
                    <span>0852-9090-2690</span>
                  </a>
                </div>
                <div>
                  <div className="text-blue-200 text-sm mb-2">Lokasi</div>
                  <div className="text-lg font-medium">Banjarnegara, Jawa Tengah</div>
                </div>
                <div>
                  <div className="text-blue-200 text-sm mb-2">Jam Operasional</div>
                  <div className="text-lg font-medium">24 Jam / 7 Hari</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">A</span>
                </div>
                <div>
                  <span className="text-xl font-bold block">Aqila Trans</span>
                  <span className="text-xs text-gray-400">Travel & Charter</span>
                </div>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Travel reg dan charter dengan armada terbaru dan layanan terbaik di Jawa Tengah. 
                Melayani door to door ke berbagai kota tujuan.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://wa.me/6285290902690"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition"
                >
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Rute Populer</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white transition cursor-pointer">Banjarnegara - Semarang</li>
                <li className="hover:text-white transition cursor-pointer">Banjarnegara - Yogyakarta</li>
                <li className="hover:text-white transition cursor-pointer">Banjarnegara - Solo</li>
                <li className="hover:text-white transition cursor-pointer">Banjarnegara - Jakarta</li>
                <li className="hover:text-white transition cursor-pointer">Banjarnegara - Bandung</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white transition cursor-pointer">Travel Reguler</li>
                <li className="hover:text-white transition cursor-pointer">Charter</li>
                <li className="hover:text-white transition cursor-pointer">Wisata</li>
                <li className="hover:text-white transition cursor-pointer">Door to Door</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Aqila Trans. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition">Kebijakan Privasi</a>
                <a href="#" className="hover:text-white transition">Syarat & Ketentuan</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
