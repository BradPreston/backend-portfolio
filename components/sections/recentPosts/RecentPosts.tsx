import { Posts } from "../../../types";
import AnchorLink from "../../AnchorLink/AnchorLink";
import styles from "./Posts.module.scss"

export function RecentPosts({posts}: Posts) {
  return (
    <section id="recentPosts" className={styles.posts}>
      <h2>My Recent Blog Posts</h2>
      <div id="postLinks" className={styles.postLinks}>
        {posts.map(post => {
          return (
            <AnchorLink next={true} target="_blank" href={`https://bradpreston.hashnode.dev/${post.slug}`} title={post.title} key={post.title} content={post.title} />
          );
        })}
      </div>
    </section>
  )
}

export default RecentPosts;