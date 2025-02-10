export class User {
  constructor(email, caption, description) {
    this.email = email;
    this.caption = caption;
    this.description = description;
    this.issueDate = new Date().toLocaleDateString('sv-SE');
    this.issueNumber = crypto.randomUUID().replaceAll('-', '');
  }
}
