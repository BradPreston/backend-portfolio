import { StaticImageData } from 'next/image';

interface Project {
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

export default Project;
