class ContextSpan extends HTMLElement {
    constructor() {
      super();

      const style = document.createElement('style');
      const span = document.createElement('span');
      span.textContent = this.textContent;

      const shadowRoot = this.attachShadow({mode: 'open'});
      shadowRoot.appendChild(style);
      shadowRoot.appendChild(span);

      /**
       * https://developer.mozilla.org/zh-CN/docs/Web/CSS/:host
       * https://developer.mozilla.org/zh-CN/docs/Web/CSS/:host()
       * https://developer.mozilla.org/zh-CN/docs/Web/CSS/:host-context()
       */
      style.textContent = `
        span:hover { text-decoration: underline; }
        :host-context(h1) { font-style: italic; }
        :host-context(h1):after { content: " - no links in headers!" }
        :host-context(article),
        :host-context(aside) { color: gray; }
        :host(.footer) { color : red; }
        :host { background: rgba(0,0,0,0.1); padding: 2px 5px; }
      `;
    }
}

// Define the new element
customElements.define('context-span', ContextSpan);
