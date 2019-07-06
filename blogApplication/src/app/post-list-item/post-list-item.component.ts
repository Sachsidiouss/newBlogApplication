import {Component, Input, OnInit} from '@angular/core';
import {PostsService} from '../services/posts.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postDate: Date;
  @Input() postIndex: number;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
  }

  incLoveIts() {
    this.postsService.incLoveIts(this.postIndex);
  }

  decLoveIts() {
    this.postsService.decLoveIts(this.postIndex);
  }

  onDeletePost() {
    this.postsService.removePost(this.postIndex);
  }

}
