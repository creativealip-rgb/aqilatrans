'use client';

import { useState } from 'react';
import { Phone, MapPin, Clock, Star, ArrowRight, CheckCircle, Shield, Users, Car, Navigation, Menu, X } from 'lucide-react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                <span className="text-white font-semibold text-sm">A</span>
              </div>
              <span className="font-medium text-gray-900">Aqila Trans</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-sm text-gray-600 hover:text-gray-900 transition">Beranda</a>
              <a href="#routes" className="text-sm text-gray-600 hover:text-gray-900 transition">Rute</a>
              <a href="#features" className="text-sm text-gray-600 hover:text-gray-900 transition">Keunggulan</a>
              <a href="#contact" className="text-sm text-gray-600 hover:text-gray-900 transition">Kontak</a>
            </div>

            <div className="hidden md:flex items-center">
              <a
                href="https://wa.me/6285290902690?text=Halo, customer service Aqila Travel..."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition text-sm flex items-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>Hubungi Kami</span>
              </a>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-3">
            <a href="#home" className="block text-sm text-gray-600 hover:text-gray-900 transition">Beranda</a>
            <a href="#routes" className="block text-sm text-gray-600 hover:text-gray-900 transition">Rute</a>
            <a href="#features" className="block text-sm text-gray-600 hover:text-gray-900 transition">Keunggulan</a>
            <a href="#contact" className="block text-sm text-gray-600 hover:text-gray-900 transition">Kontak</a>
            <a
              href="https://wa.me/6285290902690?text=Halo, customer service Aqila Travel..."
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-900 text-white px-4 py-2 rounded-lg text-sm text-center"
            >
              Hubungi Kami
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-xs mb-6">
                <Star className="w-3 h-3 fill-current" />
                <span>Terpercaya sejak 2015</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-medium text-gray-900 mb-4 leading-tight">
                Travel Aman & Nyaman
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Melayani travel reguler dan charter dengan armada terbaru. 
                Door to door ke seluruh Jawa Tengah.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#routes"
                  className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition flex items-center justify-center space-x-2 text-sm font-medium"
                >
                  <span>Lihat Rute</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="https://wa.me/6285290902690?text=Halo, saya ingin pes pesan travel..."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-50 transition border border-gray-200 text-sm font-medium"
                >
                  Pesan Sekarang
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gray-900 rounded-2xl p-8">
                <div className="bg-white rounded-xl p-6 space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-gray-700" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Banjarnegara</div>
                      <div className="text-xs text-gray-500">Titik jemput</div>
                    </div>
                  </div>
                  <div className="border-l-2 border-dashed border-gray-200 h-6 ml-5"></div>
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                      <Navigation className="w-5 h-5 text-gray-700" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Semarang, Jogja, Solo, Jakarta</div>
                      <div className="text-xs text-gray-500">Tujuan populer</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-3 -right-3 bg-white rounded-xl shadow-sm p-3">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-1">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-6 h-6 bg-gray-900 rounded-full border-2 border-white"></div>
                    ))}
                  </div>
                  <div className="text-xs text-gray-700">10,000+ penumpang</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: '20+', desc: 'Rute Travel' },
              { label: '4.9/5', desc: 'Rating' },
              { label: '24 Jam', desc: 'Layanan' },
              { label: '100%', desc: 'Aman' },
            ].map((stat, i) => (
              <div key={i} className="bg-white rounded-xl p-5 border border-gray-100 text-center">
                <div className="text-2xl font-medium text-gray-900">{stat.label}</div>
                <div className="text-xs text-gray-500 mt-1">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Routes Section */}
      <section id="routes" className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium text-gray-900 mb-3">
              Rute Travel
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Melayani berbagai rute di Jawa Tengah dan kota besar lainnya
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { from: 'Banjarnegara', to: 'Semarang', desc: 'Via Temanggung', time: '3-4 jam', price: 'Rp 150.000' },
              { from: 'Banjarnegara', to: 'Yogyakarta', desc: 'Via Magelang', time: '4-5 jam', price: 'Rp 180.000' },
              { from: 'Banjarnegara', to: 'Solo', desc: 'Via Sragen', time: '4-5 jam', price: 'Rp 180.000' },
              { from: 'Banjarnegara', to: 'Jakarta', desc: 'Via Purbalingga', time: '6-7 jam', price: 'Rp 250.000' },
              { from: 'Banjarnegara', to: 'Bandung', desc: 'Via Tol Trans Jawa', time: '7-8 jam', price: 'Rp 300.000' },
              { from: 'Banjarnegara', to: 'Surabaya', desc: 'Via Semarang', time: '8-9 jam', price: 'Rp 350.000' },
              { from: 'Banjarnegara', to: 'Salatiga', desc: 'Via Temanggung', time: '2-3 jam', price: 'Rp 120.000' },
              { from: 'Banjarnegara', to: 'Demak', desc: 'Via Semarang', time: '3-4 jam', price: 'Rp 150.000' },
              { from: 'Banjarnegara', to: 'Kudus', desc: 'Via Semarang', time: '3-4 jam', price: 'Rp 150.000' },
            ].map((route, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-5 hover:bg-white hover:shadow-sm transition border border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-900">{route.from}</div>
                    <div className="flex items-center space-x-1 my-1.5">
                      <div className="h-px w-6 bg-gray-400"></div>
                      <ArrowRight className="w-3 h-3 text-gray-400" />
                      <div className="h-px w-6 bg-gray-400"></div>
                    </div>
                    <div className="text-sm font-medium text-gray-900">{route.to}</div>
                  </div>
                </div>
                <div className="space-y-1 mb-3">
                  <div className="flex items-center space-x-1.5 text-gray-600 text-xs">
                    <Clock className="w-3 h-3" />
                    <span>{route.time}</span>
                  </div>
                  <div className="text-gray-600 text-xs">{route.desc}</div>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                  <div className="text-gray-900 text-sm font-medium">{route.price}</div>
                  <a
                    href={`https://wa.me/6285290902690?text=Halo, saya ingin pesan travel dari ${route.from} ke ${route.to}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-900 text-white px-3 py-1.5 rounded-lg hover:bg-gray-800 transition text-xs"
                  >
                    Pesan
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium text-gray-900 mb-3">
              Mengapa Memilih Aqila Trans?
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Pengalaman dan kualitas layanan terbaik
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: 'Terpercaya',
                desc: 'Berpengalaman lebih dari 8 tahun melayani ribuan penumpang',
                icon: Shield,
              },
              {
                title: 'Harga Terjangkau',
                desc: 'Harga kompetitif dengan layanan premium',
                icon: Star,
              },
              {
                title: 'Armada Terbaru',
                desc: 'Mobil berusia muda, terawat, dan nyaman',
                icon: Car,
              },
              {
                title: 'Driver Profesional',
                desc: 'Driver berpengalaman, ramah, dan mengutamakan keselamatan',
                icon: Users,
              },
            ].map((feature, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-100">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-3">
                  <feature.icon className="w-5 h-5 text-gray-700" />
                </div>
                <h3 className="font-medium text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="contact" className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-medium text-gray-900 mb-4">
                Tentang Aqila Trans
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Penyedia transportasi umum seperti charter dan travel reguler serta melayani wisata. 
                Berlokasi di Banjarnegara, Jawa Tengah.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  'Layanan door to door',
                  'Armada terawat dan nyaman',
                  'Driver profesional dan ramah',
                  'Harga kompetitif',
                  'Jadwal fleksibel',
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-gray-700" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <a
                href="https://wa.me/6285290902690?text=Halo, saya ingin bertanya tentang layanan Aqila Trans..."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-gray-900 text-white px-5 py-2.5 rounded-lg hover:bg-gray-800 transition text-sm font-medium"
              >
                <Phone className="w-4 h-4" />
                <span>Hubungi Kami</span>
              </a>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-medium text-gray-900 mb-4">Kontak</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-xs text-gray-500 mb-1">WhatsApp</div>
                  <a
                    href="https://wa.me/6285290902690"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 font-medium hover:underline"
                  >
                    0852-9090-2690
                  </a>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Lokasi</div>
                  <div className="text-sm text-gray-700">Banjarnegara, Jawa Tengah</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Jam Operasional</div>
                  <div className="text-sm text-gray-700">24 Jam / 7 Hari</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-gray-900 font-semibold text-sm">A</span>
                </div>
                <span className="font-medium">Aqila Trans</span>
              </div>
              <p className="text-gray-400 text-sm mb-4 max-w-md">
                Travel reguler dan charter dengan armada terbaru. Melayani door to door ke berbagai kota tujuan.
              </p>
              <a
                href="https://wa.me/6285290902690"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-white text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-100 transition text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Hubungi Kami</span>
              </a>
            </div>
            <div>
              <h4 className="font-medium mb-3">Rute Populer</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Banjarnegara - Semarang</li>
                <li>Banjarnegara - Yogyakarta</li>
                <li>Banjarnegara - Solo</li>
                <li>Banjarnegara - Jakarta</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3">Layanan</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Travel Reguler</li>
                <li>Charter</li>
                <li>Wisata</li>
                <li>Door to Door</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Aqila Trans. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
