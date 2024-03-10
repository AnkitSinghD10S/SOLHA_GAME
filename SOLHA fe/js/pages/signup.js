export class Signup {
  constructor() {
    this.init();
  }
  
  init() {
    const form = document.querySelector("form#signUpForm");
    form.addEventListener("submit", this.handleRegisteration.bind(this));
  }

  handleRegisteration(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const full_name = formData.get("full_name");
    const email = formData.get("email");
    const password = formData.get("password");

    console.log("##", formData, full_name, email, password);
  }
}
