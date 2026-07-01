class GalleryImage extends HTMLElement {
  connectedCallback() {
    const title = this.getAttribute('title') || '';
    const subtitle = this.getAttribute('subtitle') || '';
    const bgClass = this.getAttribute('bgClass') || 'bg-placeholder-1';
    
    this.innerHTML = `
      <div class="relative w-full h-[347px] border border-white/20 group overflow-hidden ${bgClass}">
          <div class="absolute inset-0 gallery-overlay opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
              <div>
                  ${subtitle ? `<p class="text-[#bdbdbd] font-mono text-xs mb-1 uppercase tracking-wider">${subtitle}</p>` : ''}
                  <p class="text-white font-bold">${title}</p>
              </div>
          </div>
      </div>
    `;
  }
}
customElements.define('gallery-image', GalleryImage);
