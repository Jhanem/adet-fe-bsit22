import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent {
  // Sample data to display in your cards
 // Inside your PostsComponent class:

  posts = [
    { 
      id: 1, 
      title: 'Alex Suba', 
      description: 'Alex shares insights on why minimalist modular design is taking over urban spaces in 2026.' 
    },
    { 
      id: 2, 
      title: 'Jordan Michael',
      description: 'Jordan breaks down the top 5 habits that separate junior developers from senior engineers.' 
    },
    { 
      id: 3, 
      title: 'Jordan Michael',
      description: 'Sam discusses how green data centers are reducing the carbon footprint of global networks.' 
    }
  ];

  // Logic to handle the delete button
  deletePost(id: number) {
    this.posts = this.posts.filter(post => post.id !== id);
  }
}

