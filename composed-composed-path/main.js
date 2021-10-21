/**
 * https://developer.mozilla.org/zh-CN/docs/Web/API/Element/attachShadow
 * mode:open - shadow root 元素可以从 js 外部访问根节点，例如使用 Element.shadowRoot
 * mode:closed - 拒绝从 js 外部访问关闭的 shadow root 节点
 */
customElements.define('open-shadow',
  class extends HTMLElement {
    constructor() {
      super();

      const pElem = document.createElement('p');
      pElem.textContent = this.getAttribute('text');

      const shadowRoot = this.attachShadow({mode: 'open'});
      shadowRoot.appendChild(pElem);

      console.log(this.shadowRoot) // Returns a ShadowRoot obj
    }
  }
);

customElements.define('closed-shadow',
  class extends HTMLElement {
    constructor() {
      super();

      const pElem = document.createElement('p');
      pElem.textContent = this.getAttribute('text');

      const shadowRoot = this.attachShadow({mode: 'closed'});
      shadowRoot.appendChild(pElem);

      console.log(this.shadowRoot) // Returns null
    }
  }
);

document.querySelector('html').addEventListener('click', e => {
  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/API/Event/composed
   * 只读属性，返回一个 Boolean 值，用来指示该事件是否可以从 Shadow DOM 传递到一般的 DOM
   */
  console.log(e.composed);
  /**
   * https://developer.mozilla.org/zh-CN/docs/Web/API/Event/composedPath
   * 返回事件路径，如果影子根节点被创建并且 ShadowRoot.mode 是关闭的，那么该路径不包括影子树中的节点
   */
  console.log(e.composedPath());
});
