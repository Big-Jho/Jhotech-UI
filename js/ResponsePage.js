class ResponsePage {
  constructor() {
    this.modal = document.getElementById("response");
    this.sucMess = document.getElementById("success-message");
    this.closeBtn = document.getElementById("close-btn");

    this.closeBtn.addEventListener("click", this.closeModal.bind(this));
  }

  showModal() {
    this.modal.classList.add("show");
  }

  closeModal() {
    this.modal.classList.remove("show");
  }
}

export default ResponsePage;
