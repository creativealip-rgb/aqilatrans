import { Phone, MapPin, Clock, Star, ArrowRight, CheckCircle } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Aqila Trans</span>
            </div>
            <div className="hiddenMD:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition">Beranda</a>
              <a href="#routes" className="text-gray-700 hover:text-blue-600 transition">Rute</a>
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition">Keunggulan</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Kontak</a>
            </div>
            <a
              href="https://wa.me/6285290902690?text=Halo, customer service Aqila Travel..."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition flex items-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>Hubungi Kami</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Travel Aman & Nyaman ke Seluruh Jawa Tengah
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Aqila Trans melayani travel reguler dan charter dengan armada terbaru dan driver berpengalaman. 
              Jemput dan antar door to door!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#routes"
                className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition flex items-center justify-center space-x-2 text-lg font-semibold"
              >
                <span>Lihat Rute</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/6285290902690?text=Halo, saya ingin pesan travel..."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition border-2 border-blue-600 text-lg font-semibold"
              >
                Pesan Sekarang
              </a>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: MapPin, label: '20+ Rute', desc: 'Kota tujuan' },
              { icon: Star, label: '4.9/5', desc: 'Rating pelanggan' },
              { icon: Clock, label: '24 Jam', desc: 'Layanan' },
              { icon: CheckCircle, label: '100%', desc: 'Aman & Terpercaya' },
            ].map((stat, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition text-center">
                <stat.icon className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900">{stat.label}</div>
                <div className="text-gray-600">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Routes Section */}
      <section id="routes" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
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
              { from: 'Banjarnegara', to: 'Semarang', desc: 'Via Temanggung, 3-4 jam' },
              { from: 'Banjarnegara', to: 'Yogyakarta', desc: 'Via Magelang, 4-5 jam' },
              { from: 'Banjarnegara', to: 'Solo', desc: 'Via Sragen, 4-5 jam' },
              { from: 'Banjarnegara', to: 'Jakarta', desc: 'Via Purbalingga, 6-7 jam' },
              { from: 'Banjarnegara', to: 'Bandung', desc: 'Via Tol Trans Jawa, 7-8 jam' },
              { from: 'Banjarnegara', to: 'Surabaya', desc: 'Via Semarang, 8-9 jam' },
              { from: 'Banjarnegara', to: 'Salatiga', desc: 'Via Temanggung, 2-3 jam' },
              { from: 'Banjarnegara', to: 'Demak', desc: 'Via Semarang, 3-4 jam' },
              { from: 'Banjarnegara', to: 'Kudus', desc: 'Via Semarang, 3-4 jam' },
            ].map((route, i) => (
              <div key={i} className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border border-blue-100 hover:shadow-lg transition">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex-1">
                    <div className="text-lg font-semibold text-gray-900">{route.from}</div>
                    <div className="text-blue-600">→</div>
                    <div className="text-lg font-semibold text-gray-900">{route.to}</div>
                  </div>
                </div>
                <div className="text-gray-600 text-sm mb-4">{route.desc}</div>
                <a
                  href={`https://wa.me/6285290902690?text=Halo, saya ingin pesan travel dari ${route.from} ke ${route.to}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium text-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>Pesan via WhatsApp</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-50">
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
                title: 'Terpercaya',
                desc: 'Kami sudah berpengalaman dan dapat dipercaya dalam melayani pelanggan',
                icon: CheckCircle,
              },
              {
                title: 'Harga Terjangkau',
                desc: 'Harga terjangkau dan berani bersaing dengan layanan terbaik',
                icon: Star,
              },
              {
                title: 'Armada Terbaru',
                desc: 'Mobil kami berusia muda, terawat, dan nyaman untuk perjalanan jauh',
                icon: MapPin,
              },
              {
                title: 'Driver Berpengalaman',
                desc: 'Driver kami berpengalaman dan siap melayani Anda dengan ramah',
                icon: Clock,
              },
            ].map((feature, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
                <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font font-bold text-gray-900 mb-">
                Tentang Aqila Trans
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Aqila Trans adalah penyedia transportasi umum seperti charter dan travel reguler serta melayani wisata. 
                Berlokasi di kota Banjarnegara Jawa Tengah, kami melayani travel ke berbagai kota di Jawa Tengah 
                dan kota-kota besar lainnya.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Layanan door to door</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Armada terawat dan nyaman</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Driver profesional dan ramah</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Harga kompetitif</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Hubungi Kami</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-blue-200 text-sm mb-1">WhatsApp</div>
                  <a
                    href="https://wa.me/6285290902690"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-semibold hover:underline"
                  >
                    0852-9090-2690
                  </a>
                </div>
                <div>
                  <div className="text-blue-200 text-sm mb-1">Telepon</div>
                  <div className="text-xl font-semibold">0852-9090-2690</div>
                </div>
                <div>
                  <div className="text-blue-200 text-sm mb-1">Lokasi</div>
                  <div className="text-lg">Banjarnegara, Jawa Tengah</div>
                </div>
              </div>
              <a
                href="https://wa.me/6285290902690?text=Halo, saya ingin bertanya tentang layanan Aqila Trans..."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition font-semibold"
              >
                Chat WhatsApp Sekarang
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">A</span>
                </div>
                <span className="text-xl font-bold">Aqila Trans</span>
              </div>
              <p className="text-gray-400">
                Travel reguler dan charter dengan armada terbaru dan layanan terbaik di Jawa Tengah.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Rute Populer</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Banjarnegara - Semarang</li>
                <li>Banjarnegara - Yogyakarta</li>
                <li>Banjarnegara - Solo</li>
                <li>Banjarnegara - Jakarta</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Kontak</h4>
              <div className="space-y-2 text-gray-400">
                <div>WhatsApp: 0852-9090-2690</div>
                <div>Lokasi: Banjarnegara, Jawa Tengah</div>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Aqila Trans. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
