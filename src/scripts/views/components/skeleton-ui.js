class SkeletonUI extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="skeleton-wrapper">
        <div class="skeleton-restaurant">
          <div class="skeleton-img"></div>
          <div class="skeleton-content">
            <div class="skeleton-title"></div>
            <div class="skeleton-desc"></div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('skeleton-ui', SkeletonUI);