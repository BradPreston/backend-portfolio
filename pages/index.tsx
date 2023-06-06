import type { GetServerSideProps, NextPage } from 'next';
import type { Post, Posts } from '../types';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import { useEffect } from 'react';
import { user } from '../graphql/user';
import { getAge, getYearsOfExperience } from '../helpers';
import { AboutMe, Hobbies, RecentPosts, Skills, Work, FavoritePlaylists, Contact } from '../components/sections';

export const getServerSideProps: GetServerSideProps<{posts: Post[]}> = async () => {
  const res = await fetch('https://api.hashnode.com', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: user
    })
  });
  
  const json = await res.json();
  const posts = json.data.user.publication.posts
  return { props: { posts } }
} 

const Home: NextPage = ({posts}: Posts) => {
  const age = getAge();
  const professionalExp = getYearsOfExperience()
  const practice = new Date().getFullYear() - 2017;

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const heading = document.querySelector('#heading')!;
    const headerBackground = document.querySelector('#headerBackground')!;
    const addStickyHeader = () => {
      if (heading.getBoundingClientRect().top <= 0) {
        heading.classList.add('stickyHeader');
        headerBackground.classList.add('headerBackground');
      } else {
        heading.classList.remove('stickyHeader');
        headerBackground.classList.remove('headerBackground');
      }
    };

    window.onscroll = () => {
      addStickyHeader();
    };
    addStickyHeader();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio | Brad Preston</title>
        <meta
          name="description"
          content="Professional web development portfolio for Brad Preston."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div id="headerBackground"></div>

      <main className={styles.main}>
        <h1 id="heading" onClick={scrollTop}>
          Brad Preston
        </h1>
        <AboutMe age={age} practice={practice} professionalExp={professionalExp} />
        <Skills />
        <RecentPosts posts={posts} />
        <Work />
        <Hobbies />
        <FavoritePlaylists />
        <Contact />
      </main>
    </div>
  )
}

export default Home;