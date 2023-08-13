import { Component } from '@angular/core';
import { ApiService } from '../api.service'; // Đảm bảo đường dẫn đúng
import { Post } from 'src/models/post';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html'
})
export class ItemCreateComponent {
  newItem: Post = { userId: 1, title: '', body: '' }; // Đối tượng để lưu thông tin mục mới

  constructor(private apiService: ApiService) {}

  createItem() {
    this.apiService.createItem(this.newItem).subscribe(() => {
      // Thực hiện các tác vụ sau khi tạo mục thành công
      console.log('Item created successfully');
      // Điều hướng hoặc làm gì đó khác
    });
  }
}
