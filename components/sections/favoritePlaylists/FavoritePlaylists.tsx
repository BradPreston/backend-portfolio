import AnchorLink from "../../AnchorLink/AnchorLink";
import SpotifyLinks from "../../../data/SpotifyLinks";
import styles from "./Playlist.module.scss"

function FavoritePlaylists() {
  return (
    <section>
      <h2>My Favorite Playlists</h2>
      <div className={styles.links}>
        {SpotifyLinks.map(link => {
          return (
            <AnchorLink
              href={link.href}
              title={link.title}
              content={link.content}
              target="_blank"
              key={link.title}
            />
          );
        })}
      </div>
    </section>
  )
}

export default FavoritePlaylists;