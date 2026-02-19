import { Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component'; // Import the component

export const routes: Routes = [
  // Add this object to your routes array:
  { 
    path: 'posts', 
    component: PostsComponent 
  },
  
  // Optional: Redirect empty path to posts so you see it immediately
  { path: '', redirectTo: 'posts', pathMatch: 'full' }
];