import type { Project } from '../types';

const Projects: Project[] = [
  {
    name: "One With the Riverbed",
    link: "https://onewiththeriverbed.com",
    bio: "This website is for a band out of Kalamazoo, MI.",
    part: "I designed, built, and currently host the site",
    challenges: "This was my first time using both Tailwind and ReCAPTCHA. Configuring ReCAPTCHA took some figuring, but eventually got it to work. Tailwind was pretty straight forward, but I only scratched the surface of what it can really do.",
    stack: ["NextJS", "TypeScript", "Tailwind", "CSS Modules", "Vercel"],
    key: '0oanh3g',
    slug: "one-with-the-riverbed"
  },
  {
    name: "Aaron's Music Service",
    link: "https://aaronsmusicservice.com",
    bio: "This is a simple website I built and maintain for a local luthier",
    part: "I designed, built, and currently host the site",
    challenges: "I'm not a strong designer, so that was a challenge for me. One of the main challenges was trying to make a site that felt modern, but not confusing to the older generations as they are the ones who use the site the most.",
    stack: ["Svelte", "SCSS", "Render"],
    key: 'aeigh93',
    slug: "aarons-music-service"
  },
  {
    name: "Get Pokemon Data From API",
    link: "https://github.com/BradPreston/getPokemonDataFromAPI",
    bio: "This is the first step in building my full-stack Pokedex app",
    part: "I built this app myself",
    challenges: "This was the first project I implemented testing on my own. Learning how to verify data was coming in as expected was a bit of a learning curve.",
    stack: ["Typescript", "Jest", "Rest API"],
    key: 'oekt92k',
    slug: "get-pokemon-data-from-api"
  },
  {
    name: "Kazoo48 Film Festival",
    link: "https://kazoo48.com",
    bio: "Kazoo48 is a local film festival that allows teams to compete to create a film in 48 hours",
    part: "I designed, built, and currently host the site",
    challenges: "This was the first time I've used Stripe, so getting Stripe configured was challening at first. Also, trying to set up the site so that people can't enter the competition without paying was a first time for me.",
    stack: ["NextJS", "SCSS", "TypeScript", "Stripe", "Vercel"],
    key: '04kab82',
    slug: "kazoo-48"
  }
];

export default Projects;
