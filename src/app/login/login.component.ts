// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms'; // For ngModel

// @Component({
//   selector: 'app-login',
//   standalone: true,
//   imports: [FormsModule], // Add FormsModule here
//   template: `
//     <div class="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
//       <h1 class="text-2xl font-bold text-gray-800 mb-2">Welcome back</h1>
//       <p class="text-gray-600 mb-6">Enter your email and password to sign in!</p>

//       <form (ngSubmit)="onSubmit()" class="space-y-4">
//         <!-- Email Input -->
//         <div>
//           <label class="block text-gray-700 mb-2">Email</label>
//           <input
//             type="email"
//             [(ngModel)]="email"
//             name="email"
//             placeholder="user@example.com"
//             required
//             class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//         </div>

//         <!-- Password Input -->
//         <div>
//           <label class="block text-gray-700 mb-2">Password</label>
//           <input
//             type="password"
//             [(ngModel)]="password"
//             name="password"
//             placeholder="••••••••"
//             required
//             class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//         </div>

//         <!-- Login Button -->
//         <button
//           type="submit"
//           class="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
//         >
//           Login
//         </button>
//       </form>

//       <!-- Additional Links -->
//       <div class="mt-6 space-y-2 text-center">
//         <a routerLink="/explore" class="text-blue-600 hover:text-blue-700 block text-sm">
//           Explore More
//         </a>
//         <a
//           href="https://www.encorestore.org/scorp.cat"
//           target="_blank"
//           class="text-blue-600 hover:text-blue-700 text-sm"
//         >
//           Learn from: shop at encorestore.org/scorp.cat
//         </a>
//       </div>
//     </div>
//   `,
//   styles: []
// })
// export class LoginComponent {
//   email: string = '';
//   password: string = '';

//   onSubmit() {
//     // Authentication logic here
//     console.log('Email:', this.email);
//     console.log('Password:', this.password);
//   }
// }

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MainButtonComponent } from "../components/main-button/main-button.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink, MainButtonComponent],
  template: `
   <div class="min-h-screen grid grid-cols-2">
  <!-- Left Column -->
  <div class="bg-regal-blue flex flex-col items-center justify-center">
    <!-- Image Wrapper -->
    <div class="w-[60%] max-w-md bg-none">
      <img
        src="/img/work-steps.png"
        alt="Background"
        class="w-full h-auto object-contain"
      >
    </div>

    <!-- Text Below Image -->
    <div class="mt-4 text-center space-y-2">
      <a
        routerLink="/explore"
        class="text-blue-600 hover:text-blue-800 text-sm font-medium"
      >
        Explore More
      </a>
      <div class="text-gray-500 text-sm">
        Learn from:
        <a
          href=""
          target="_blank"
          class="text-blue-600 hover:text-blue-800"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, voluptas doloremque dolorem dolor recusandae inventore ducimus modi mollitia cum molestiae odit aspernatur. Iusto dolorum molestiae odit impedit ipsum. Consequatur, totam! lo
        </a>
      </div>
    </div>
  </div>

  <!-- Right Column - Login Form -->
  <div class="bg-gray-50 flex items-center justify-center p-8">
    <div class="w-full max-w-md">
      <h1 class="text-3xl font-bold text-gray-900 mb-2">Welcome back</h1>
      <p class="text-gray-600 mb-8">Enter your email and password to sign in!</p>

      <form (ngSubmit)="onSubmit()" class="space-y-6">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">User Name/Email</label>
          <input
            type="email"
            [(ngModel)]="email"
            name="email"
            placeholder="Type Here"
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Password</label>
          <input
            type="password"
            [(ngModel)]="password"
            name="password"
            placeholder="••••••••"
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
        </div>

        <app-main-button label="Login"/>
      </form>
    </div>
  </div>
</div>
  `,
  styles: [],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  onSubmit() {
    console.log('Login attempt:', this.email, this.password);
  }
}
