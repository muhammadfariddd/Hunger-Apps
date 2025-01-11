if (!customElements.get('loading-indicator')) {
  class LoadingIndicator extends HTMLElement {
    constructor() {
      super();
      this.render();
    }

    render() {
      this.innerHTML = `
          <div class="loading-container">
            <div class="loading-spinner"></div>
            <p>Loading...</p>
          </div>
        `;
    }
  }

  customElements.define('loading-indicator', LoadingIndicator);
}
