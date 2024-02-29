import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="toggle"
export default class extends Controller {
  static targets = ['toggableElement']

  connect() {
    // console.log('connected toggle controller');
    // console.log(this.toggableElementTarget);
  }

  fire() {
    // console.log('click in button');
    this.toggableElementTarget.classList.toggle('d-none')
  }
}
