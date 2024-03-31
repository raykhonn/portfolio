import { Anchor, Button, Card } from 'antd';
import {
  FaGithub,
  FaLocationArrow,
  FaMailBulk,
  FaPhoneAlt,
  FaTelegramPlane,
  FaTwitter
} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import Marquee from 'react-fast-marquee';
import mine from './assets/me.jpg';

const http = axios.create({
  baseURL: 'https://api.github.com/users/raykhonn/repos'
});
const Main: React.FC = () => {
  interface Repo {
    name: string;
    html_url: string;
  }

  const repos = useRef<HTMLDivElement>(null);
  const [repoList, setRepoList] = useState<Repo[]>([]);

  const tech = [
    './images/html.svg',
    './images/css.svg',
    './images/js.svg',
    './images/sass.svg',
    './images/bootstrap.svg',
    './images/types.svg',
    './images/react.svg',
    './images/tail.svg',
    './images/postman.svg',
    './images/ant-design.svg',
    './images/redux.svg'
  ];

  useEffect(() => {
    http
      .get('')
      .then(response => {
        const res: Repo[] = response.data;
        console.log('data: ', res);
        setRepoList(res);
      })
      .catch(error => {
        console.error('Error:', error);
      });
    ///////////////////////
    AOS.init({
      duration: 1000,
      once: true
    });
    AOS.refresh();
  }, []);

  useEffect(() => {
    repoList.forEach(repo => {
      console.log(repo);
      const repoElement = document.createElement('a');
      repoElement.className = 'bg-blue-300 p-5 border rounded-lg mr-10 cursor-pointer';
      repoElement.setAttribute('href', repo.html_url);
      repoElement.setAttribute('target', '_blank');
      repoElement.textContent = repo.name;
      // repos.current?.appendChild(repoElement);
      const doc = document.querySelector('.rfm-initial-child-container')!;
      doc.appendChild(repoElement);
    });
  }, [repoList]);

  return (
    <div className="pt-[.1px] ">
      <nav
        data-aos="zoom-in-down"
        id="#"
        className="fixed flex-wrap gap-5 shadow-md flex  py-5 px-16 md:px-5 z-50 w-full bg-white  items-center justify-between"
      >
        <div className="flex gap-2">
          <div
            className="font-bold text-2xl bg-gradient-to-r from-red-600 via-pink-500
         to-indigo-400 inline-block bg-clip-text text-transparent"
          >
            raykhona
          </div>
          <img
            className="w-10 h-10 rounded-full"
            src="https://avatars.githubusercontent.com/u/125505907?s=400&u=db162f8b66aa61633ee13d297b95c2a3e219881d&"
            alt="girl"
          />
        </div>
        <Anchor
          direction="horizontal"
          items={[
            {
              key: 'home',
              href: '#home',
              title: 'home'
            },
            {
              key: 'myTechStack',
              href: '#myTechStack',
              title: 'myTechStack'
            },
            {
              key: 'repos',
              href: '#repos',
              title: 'repos'
            },
            {
              key: 'projects',
              href: '#projects',
              title: 'projects'
            }
          ]}
        />

        <div className="flex items-center gap-10">
          <Button className="border-none bg-pink-400 text-white">
            <a type="tel" href="tel:+998974230824">
              Contact
            </a>
          </Button>
          <a target="_blank" href="https://github.com/raykhonn">
            <FaGithub className="text-2xl" />
          </a>
          <a target="_blank" href="https://t.me/khr_04">
            <FaTelegramPlane className="text-2xl" />
          </a>
        </div>
      </nav>
      <div className="px-16 lg:px-5">
        <div
          id="home"
          className=" section  flex md:flex-wrap md:mt-40 items-center  justify-around"
        >
          <div className=" flex flex-col gap-5" data-aos="fade-right">
            <div className="lg:text-2xl text-5xl text-pink-500">
              <div className="flex gap-2">
                <div className="">Hi </div>
                <img
                  className="w-10"
                  src="https://raw.githubusercontent.com/Bharath-designer/bharath-designer/main/assets/wave.gif"
                  alt=""
                />
              </div>
              I'm Raykhona <br />
              Frontend Developer
            </div>
            <span className="text-pink-500 display hover:text-black cursor-pointer">
              <FaPhoneAlt />
              +998 97 423 08 24
            </span>
            <span className="text-pink-500 display hover:text-black cursor-pointer">
              <FaMailBulk />
              <a href="mailto:raykhonarasulova@gmail.com">Email address</a>
            </span>
            <span className="text-pink-500 display hover:text-black cursor-pointer">
              <FaLocationArrow />
              Tashkent
            </span>
          </div>
          <div className="" data-aos="fade-left">
            <img className="w-[400px]" src={mine} alt="" />
          </div>
        </div>
        <div id="myTechStack" className="section md:h-full flex flex-col justify-center   ">
          <div className="text-center font-bold text-4xl pb-10">My Tech Stack</div>
          <div className="flex items-center gap-24 md:flex-wrap">
            <div
              data-aos="zoom-in-right"
              className="w-[600px] leading-loose text-3xl text-pink-500 font-bold"
            >
              I'm 19 years old <br /> I'm studying in Tashkent State University of Economics <br />{' '}
              and I'm Frontend developer
            </div>

            <div data-aos="zoom-in-left" className="flex items-center gap-5 flex-wrap">
              {tech.map(tech => {
                return <img src={tech} alt="" />;
              })}{' '}
            </div>
          </div>
        </div>
        <div id="repos" className="   flex flex-col justify-center ">
          <div className="text-center font-bold text-4xl mb-20">My repos</div>
          <Marquee
            pauseOnHover
            speed={20}
            ref={repos}
            className="repos transition duration-700 ease-in-out"
          ></Marquee>
        </div>
        <div id="projects" className="transition-all section flex flex-col justify-center">
          <div className="text-center font-bold text-4xl pb-5">My deployed project</div>
          <div className="flex flex-wrap justify-center gap-5">
            <a
              href="https://dice-gamee-in-react.netlify.app/"
              target="_blank"
              data-aos="zoom-in"
              rel="noopener noreferrer"
            >
              <Card
                title="Dice game 🎲"
                className="bg-gradient-to-r from-red-200 to-pink-300  shadow-lg w-[300px] md:w-[250px]  hover:scale-110	 transition-transform duration-500 "
              >
                <p>React</p>
                <p>Tailwind</p>
              </Card>
            </a>
            <a
              href="https://tic-tac-toe-game-by-r.netlify.app/"
              target="_blank"
              data-aos="zoom-in"
              rel="noopener noreferrer"
            >
              <Card
                title="tictactoe game in react"
                className="bg-gradient-to-r from-orange-200 to-green-200 shadow-lg w-[300px] md:w-[250px]  hover:scale-110	 transition-transform duration-500 "
              >
                <p> React</p>
                <p>Tailwind</p>
              </Card>
            </a>
            <a
              href="https://user-table-by-r.netlify.app/"
              target="_blank"
              data-aos="zoom-in"
              rel="noopener noreferrer"
            >
              <Card
                title="users table"
                className="bg-gradient-to-r from-cyan-200 to-blue-200  shadow-lg w-[300px] md:w-[250px]  hover:scale-110	 transition-transform duration-500 "
              >
                <p> React</p>
                <p>Tailwind</p>
              </Card>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
