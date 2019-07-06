export class Post {
  title: string;
  content: string;
  loveIts: number;
  created_at: Date = new Date();

  constructor(t: string, c: string){
    this.title = t;
    this.content = c;
    this.loveIts = 0;
    this.created_at = new Date();
  }
}
