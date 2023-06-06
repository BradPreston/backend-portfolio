type Props = {
  age: number
  practice: number
  professionalExp: number
}

function About({age, practice, professionalExp}: Props) {
  return (
    // <section className={styles.aboutme}>
    <section>
          <p>
            I am a {age} year old full stack developer from Kalamazoo, MI. I have a
            focus on NextJS, TypeScript, and Golang with {practice} years of
            practice and {professionalExp} years of professional
            experience.
          </p>
        </section>
  )
}

export default About