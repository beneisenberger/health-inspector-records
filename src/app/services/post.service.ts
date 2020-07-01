import { Injectable } from "@angular/core";
import * as firebase from "firebase";
import { Post } from "../post";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PostService {
  db = firebase.firestore();

  getPosts(): Observable<Post[]> {
    return new Observable((observer) => {
      this.db
        .collection("posts")
        .orderBy("published", "desc")
        .onSnapshot(
          (snapshot) => {
            let posts: Post[] = [];
            snapshot.docs.forEach((doc) => {
              let post = doc.data();
              posts.push(post as Post);
            });
            observer.next(posts);
          },
          (error) => {
            observer.error(error);
          }
        );
    });
  }

  getPost(id: string): Observable<Post> {
    return new Observable((observer) => {
      this.db
        .collection("posts")
        .doc(id)
        .onSnapshot(
          (snapshot) => {
            observer.next(snapshot.data() as Post);
          },
          (error) => {
            observer.error(error);
          }
        );
    });
  }

  addPost(post: Post) {
    return this.db
      .collection("posts")
      .doc(post.id)
      .set({ ...post });
  }

  updatePost(post: Post) {
    return this.db
      .collection("posts")
      .doc(post.id)
      .update({ ...post });
  }

  deletePost(id: string) {
    return this.db.collection("posts").doc(id).delete();
  }
}
