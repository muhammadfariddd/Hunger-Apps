if (!customElements.get('review-form')) {
  class ReviewForm extends HTMLElement {
    constructor() {
      super();
      this.render();
    }

    render() {
      this.innerHTML = `
        <div class="review-form">
          <h4>Add Review</h4>
          <form id="reviewForm">
            <div class="form-group">
              <input 
                type="text" 
                id="reviewName" 
                placeholder="Your Name"
                required
                minlength="3"
              >
            </div>
            <div class="form-group">
              <textarea 
                id="reviewText" 
                placeholder="Your Review"
                required
                minlength="3"
              ></textarea>
            </div>
            <button type="submit" class="submit-review">
              Submit Review
            </button>
          </form>
        </div>
      `;
    }
  }

  customElements.define('review-form', ReviewForm);
}
