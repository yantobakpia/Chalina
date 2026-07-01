import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

class AppFooter extends LitElement {
  createRenderRoot() { return this; }
  
  render() {
    return html`
      <footer class="w-full bg-[#050505] pt-20 pb-10 px-8 flex flex-col items-center border-t border-white/10">
          <div class="max-w-7xl w-full flex flex-col md:flex-row justify-between gap-12 mb-16">
              <div class="max-w-sm">
                  <div class="flex gap-1 items-center mb-6">
                      <div class="w-8 h-8 bg-red-700 flex items-center justify-center font-bold text-white text-xl font-syne">C</div>
                      <div class="w-8 h-8 bg-red-900 flex items-center justify-center font-bold text-white text-xl font-syne">L</div>
                      <div class="text-xl font-bold tracking-widest ml-2 font-syne text-white">CHALINA</div>
                  </div>
                  <p class="text-gray-400 font-light font-sans text-sm mb-6">
                      Partner In Excellence.
                  </p>
                  <div class="flex gap-4">
                      <a href="#" class="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-red-700 hover:border-red-700 transition-colors text-white">
                          <i class="fa-brands fa-linkedin-in"></i>
                      </a>
                      <a href="#" class="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-red-700 hover:border-red-700 transition-colors text-white">
                          <i class="fa-brands fa-youtube"></i>
                      </a>
                  </div>
              </div>

              <div class="flex flex-col">
                  <h4 class="font-bold text-lg mb-6 font-sans text-white">Navigasi Cepat</h4>
                  <ul class="space-y-3 text-gray-400 text-sm font-sans">
                      <li><a href="#" class="hover:text-white transition-colors">Beranda</a></li>
                      <li><a href="#" class="hover:text-white transition-colors">Tentang Profil</a></li>
                      <li><a href="#" class="hover:text-white transition-colors">Visi & Misi</a></li>
                  </ul>
              </div>
          </div>
          <div class="w-full max-w-7xl border-t border-white/10 pt-8 flex justify-between items-center text-xs text-gray-500 font-sans">
              <p>&copy; 2026 PT Cahaya Lintang Abadi. All rights reserved.</p>
          </div>
      </footer>
    `;
  }
}
customElements.define('app-footer', AppFooter);
