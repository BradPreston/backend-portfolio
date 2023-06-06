import AnchorLink from "../../AnchorLink/AnchorLink";
import styles from "./Contact.module.scss";

function Contact() {
  return (
    <section className={styles.contact}>
      <h2>Contact Me</h2>
      <div className={styles.contactButtons}>
        <AnchorLink
          href="mailto:bap5393@gmail.com"
          target="_blank"
          title="Link to Email"
          content="Email"
          key="email"
        />
        <AnchorLink
          href="https://twitter.com/BradDoesCoding"
          target="_blank"
          title="Link to Twitter"
          content="Twitter"
          key="twitter"
        />
        <AnchorLink
          href="https://www.linkedin.com/in/brad-preston/"
          target="_blank"
          title="Link to LinkedIn"
          content="Linkedin"
          key="linkedin"
        />
        <AnchorLink
          href="https://github.com/BradPreston"
          target="_blank"
          title="Link to GitHub"
          content="GitHub"
          key="github"
        />
      </div>
    </section>
  )
}

export default Contact;