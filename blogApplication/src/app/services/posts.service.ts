import { Injectable } from '@angular/core';
import {Post} from '../models/Post.model';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts: Post[] = [];
  postsSubject = new Subject<Post[]>();

  constructor(private httpClient: HttpClient) { }

  emiPosts() {
    this.postsSubject.next(this.posts);
    this.savePostsToServer();
  }

  createNewPost(post: Post) {
    this.posts.push(post);
    this.emiPosts();
  }

  removePost(index: number) {
    this.posts.splice(index, 1);
    this.emiPosts();
  }

  incLoveIts(index: number) {
    this.posts[index].loveIts ++;
    this.emiPosts();
  }

  decLoveIts(index: number) {
    this.posts[index].loveIts --;
    this.emiPosts();
  }

  savePostsToServer() {
    this.httpClient
      .put('https://posts-d7b3a.firebaseio.com/posts.json', this.posts)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur de sauvegarde ! ' + error);
        }
      );
  }

  getPostsFromServer() {
    this.httpClient
      .get<any[]>('https://posts-d7b3a.firebaseio.com/posts.json')
      .subscribe(
        (response) => {
          /*this.posts = response;*/
          this.posts = response ? response : [];
          this.emiPosts();
          console.log('Chargement terminé !');
        },
        (error) => {
          console.log('Erreur de chargement ! ' + error);
        }
      );
  }


}
