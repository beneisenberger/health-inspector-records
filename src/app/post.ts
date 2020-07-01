import * as firebase from "firebase/app";

export interface Post {
  id?: string;
  title: string;
  author: string;
  authorImage: string;
  authorId: string;
  content: string;
  image: string;
  published: any;
}
