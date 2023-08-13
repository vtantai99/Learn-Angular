import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'; // Đảm bảo đường dẫn đúng
import { Post } from 'src/models/post';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html'
})
export class ItemListComponent implements OnInit {
  items: Post[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getItems().subscribe((data: Post[]) => {
      this.items = data;
    });
  }
}
