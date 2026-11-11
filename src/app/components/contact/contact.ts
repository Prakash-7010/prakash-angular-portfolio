
import { Component, signal } from '@angular/core';import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {

  readonly recipientEmail = 'prakasharulraj7@gmail.com';

emailCopied = signal(false);
copyError = signal(false);

  contact = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  

async copyEmail(): Promise<void> {
  this.emailCopied.set(false);
  this.copyError.set(false);

  try {
    await navigator.clipboard.writeText(
      this.recipientEmail
    );

    this.emailCopied.set(true);

    console.log(
      'Email copied successfully:',
      this.recipientEmail
    );

  } catch (error) {
    console.error('Clipboard copy failed:', error);
    this.copyError.set(true);
  }
}



  sendMessage(): void {
    const subject = encodeURIComponent(
      this.contact.subject.trim()
    );

    const body = encodeURIComponent(
      `Name: ${this.contact.name.trim()}\n` +
      `Email: ${this.contact.email.trim()}\n\n` +
      `Message:\n${this.contact.message.trim()}`
    );

    const mailtoUrl =
      `mailto:${this.recipientEmail}` +
      `?subject=${subject}&body=${body}`;

    window.location.href = mailtoUrl;
  }
}
