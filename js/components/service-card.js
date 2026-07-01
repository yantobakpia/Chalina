import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

class ServiceCard extends LitElement {
  static properties = {
    title: { type: String },
    description: { type: String },
    link: { type: String },
    bgClass: { type: String }
  };

  constructor() {
    super();
    this.link = '#';
    this.bgClass = 'bg-placeholder-2';
  }
  
  createRenderRoot() { return this; }

  render() {
    return html`
      <div class="bg-[#111] border border-white/10 flex flex-col h-[381px] group m-4">
          <div class="h-[220px] w-full ${this.bgClass}"></div>
          <div class="p-6 flex-1 flex flex-col justify-between bg-[#111111]">
              <div>
                  <h3 class="text-base font-bold mb-2 capitalize">${this.title}</h3>
                  <p class="text-[#bdbdbd] text-xs font-sans font-light">
                      ${this.description}
                  </p>
              </div>
              <a href="${this.link}" class="text-right text-[#b71c1c] font-bold font-mono group-hover:translate-x-2 transition-transform inline-block">
                  &rarr;
              </a>
          </div>
      </div>
    `;
  }
}
customElements.define('service-card', ServiceCard);
