import Project from '../../interfaces/Project';

const Projects: Project[] = [
  {
    name: "Blog backend",
    link: "https://github.com/BradPreston/blog-backend",
    bio: "This is the backend for a personal blog I'm building. It's a work in progress, but it's worth putting on my portfolio to show my work anyway.",
    part: "I built and am continuing to build the whole backend myself",
    challenges: "Learning how to design the database to match the content I needed was a fun puzzle to solve. I really learned the value of relating tables to each other for the ease of comment/post/account ownership",
    stack: ["Golang", "PostgreSQL", "REST APIs", "Supabase"],
    key: 'aie94n',
    slug: "blog-backend"
  },
  {
    name: "go-chat",
    link: "https://github.com/BradPreston/go-chat",
    bio: "This is a concurrent terminal chat app built in Go and hosted on Fly.io via a Docker container.",
    part: "I built this app myself",
    challenges: "I've never built a TCP chat app, so learning how to connect a client and server via TCP was a new challenge for me.",
    stack: ["Golang", "Docker", "Fly.io"],
    key: 'oekt92k',
    slug: "go-chat"
  },
  {
    name: "response-json Go Module",
    link: "https://github.com/BradPreston/response-json",
    bio: "I created this module because I got tired of creating the same function in every project. It made more sense to me to make this into a module I could just include in every project to save myself the time of writing it.",
    part: "I built the module myself",
    challenges: "This was my first public module, so it's still a work in progress, but I've learned a valuable skill as a Golang developer.",
    stack: ["Golang"],
    key: 'wub49s',
    slug: "response-json"
  }
];

export default Projects;
