import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

class GalleryImage extends LitElement {
  static properties = {
    title: { type: String },
    subtitle: { type: String },
    bgClass: { type: String }
  };

  constructor() {
    super();
    this.bgClass = 'bg-placeholder-1';
  }
  
  createRenderRoot() { return this; }

  render() {
    return html`
      <div class="relative w-full h-[347px] border border-white/20 group overflow-hidden ${this.bgClass}">
          <div class="absolute inset-0 gallery-overlay opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
              <div>
                  ${this.subtitle ? html`<p class="text-[#bdbdbd] font-mono text-xs mb-1 uppercase tracking-wider">${this.subtitle}</p>` : ''}
                  <p class="text-white font-bold">${this.title}</p>
              </div>
          </div>
      </div>
    `;
  }
}
customElements.define('gallery-image', GalleryImage);
