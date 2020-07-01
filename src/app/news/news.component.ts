import { Component, OnInit } from "@angular/core";
import { Post } from "../post";
import { PostService } from "../services/post.service";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-news",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.scss"],
})
export class NewsComponent implements OnInit {
  posts: Post[] = [];
  isNewPostModalVisible = false;

  constructor(private postService: PostService, public auth: AuthService) {}

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.postService.getPosts().subscribe((res) => {
      this.posts = res;
    });
  }

  deletePost(id: string) {
    this.postService.deletePost(id);
  }

  newPost() {
    this.isNewPostModalVisible = true;
    this.auth.login();
  }
}
