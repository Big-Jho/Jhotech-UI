// import ResponsePage from "./ResponsePage";

class Form {
  constructor() {
    this.form = document.querySelector(".contact-form");
    this.responsePage = new ResponsePage();
    this.nameEl = document.querySelector("#name.contact-inputs");
    this.emailEl = document.querySelector("#email.contact-inputs");
    this.subjectEl = document.querySelector("#subject.contact-inputs");
    this.messageEl = document.querySelector("#message.contact-inputs");
    this.submitBtn = document.querySelector(".submit-btn[type='submit']");

    this.form.addEventListener("submit", this.submit.bind(this));
  }

  submit(event) {
    event.preventDefault();

    const name = this.nameEl.value;
    const email = this.emailEl.value;
    const subject = this.subjectEl.value;
    const message = this.messageEl.value;

    const res = {
      name,
      email,
      subject,
      message,
    };

    // console.log(res);

    this.feedback(res);
    this.responsePage.showModal();
    this.clearFormUI();
    return;
  }

  clearFormUI() {
    this.nameEl.value = "";
    this.emailEl.value = "";
    this.subjectEl.value = "";
    this.messageEl.value = "";
  }

  upperCaseFirst(text) {
    return text[0].toUpperCase() + text.substring(1);
  }

  feedback(res) {
    this.responsePage.sucMess.children[0].children[2].textContent = `Thank you ${this.upperCaseFirst(
      res.name
    )} for getting in touch with us, we will get back to you
            shortly. ${this.regards()}!`;
  }

  regards() {
    const d = new Date();
    const hour = d.getHours();

    switch (true) {
      case hour < 6:
        return "Have a great day ahead";
        break;

      case hour < 12:
        return "Have a great day";
        break;

      case hour < 18:
        return "Enjoy the rest of your day";
        break;

      default:
        return "Good Night";
    }
  }
}

export default Form;
