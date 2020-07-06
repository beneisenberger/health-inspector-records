import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { PostService } from "src/app/services/post.service";
import * as firebase from "firebase";

@Component({
  selector: "app-new-post",
  templateUrl: "./new-post.component.html",
  styleUrls: ["./new-post.component.scss"],
})
export class NewPostComponent implements OnInit {
  storage = firebase.storage().ref();

  title: string;
  image: string = null;
  content: string;

  buttonText: string = "Post";
  downloadUrl: any;
  dialogRef: any;

  constructor(private auth: AuthService, private postService: PostService) {}

  ngOnInit() {}

  createPost() {
    const id = new Date().getTime().toString();
    const data = {
      author: this.auth.user.displayName || this.auth.user.email,
      authorId: this.auth.user.uid,
      authorImage: this.auth.user.photoURL,
      content: this.content,
      image: this.image,
      published: new Date(),
      title: this.title,
      id,
    };
    this.postService.addPost(data);
    this.title = "";
    this.content = "";
    this.image = "";
    this.buttonText = "Post Successful!";

    setTimeout(() => (this.buttonText = "Post"), 3000);
  }

  async uploadImage(event) {
    const file = event.target.files[0];
    if (file.type.split("/")[0] !== "image") {
      return alert("Please select a valid image file");
    } else {
      const path = `posts/${file.name}`;
      const ref = this.storage.child(path);
      ref.put(file).then(async (snapshot) => {
        this.image = await this.storage
          .child(snapshot.metadata.fullPath)
          .getDownloadURL();
      });
    }
  }
}
