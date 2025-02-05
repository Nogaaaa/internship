import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // For ngModel

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule], // Add FormsModule here
  template: `
    <div class="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h1 class="text-2xl font-bold text-gray-800 mb-2">Welcome back</h1>
      <p class="text-gray-600 mb-6">Enter your email and password to sign in!</p>

      <form (ngSubmit)="onSubmit()" class="space-y-4">
        <!-- Email Input -->
        <div>
          <label class="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            [(ngModel)]="email"
            name="email"
            placeholder="user@example.com"
            required
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
        </div>

        <!-- Password Input -->
        <div>
          <label class="block text-gray-700 mb-2">Password</label>
          <input
            type="password"
            [(ngModel)]="password"
            name="password"
            placeholder="••••••••"
            required
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
        </div>

        <!-- Login Button -->
        <button
          type="submit"
          class="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Login
        </button>
      </form>

      <!-- Additional Links -->
      <div class="mt-6 space-y-2 text-center">
        <a routerLink="/explore" class="text-blue-600 hover:text-blue-700 block text-sm">
          Explore More
        </a>
        <a
          href="https://www.encorestore.org/scorp.cat"
          target="_blank"
          class="text-blue-600 hover:text-blue-700 text-sm"
        >
          Learn from: shop at encorestore.org/scorp.cat
        </a>
      </div>
    </div>
  `,
  styles: []
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  onSubmit() {
    // Authentication logic here
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }
}
