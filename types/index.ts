export type Link = {
  href: string;
  content?: string;
  title?: string;
  target?: string;
  next?: boolean;
  children?: any;
}

export type Project = {
  name: string;
  link: string;
  bio?: string;
  stack?: string[];
  id?: string | string[];
  part?: string;
  challenges?: string;
  style?: string;
  key: string;
  slug?: string;
}

export type Post = {
  title: string
  brief: string
  slug: string
}

export type Posts = {
  posts: Post[]
}