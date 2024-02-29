import { Controller } from "@hotwired/stimulus"
import JSConfetti from 'js-confetti'

// Connects to data-controller="confetti"
export default class extends Controller {
  connect() {
  }

  explode() {
    const jsConfetti = new JSConfetti()
    jsConfetti.addConfetti({
      emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
      confettiRadius: 15,
      confettiNumber: 500,
   })
  }
}
