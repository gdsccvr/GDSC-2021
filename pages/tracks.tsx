import React from "react";
import {
  DeviceMobileIcon,
  EyeIcon,
  GlobeAltIcon,
  LockClosedIcon,
  CodeIcon,
} from "@heroicons/react/outline";
import { TrackCard } from "../src/components/TrackCard";
import { Nav } from "../src/components/Layouts/Nav";
import { Footer } from "../src/components/Layouts/Footer";
import Head from "next/head";
const supportLinks = [
  {
    name: "Web Development",
    href: "#",
    description:
      "Go from no-code to an in-demand web developer. Start with the front-end by learning HTML, CSS, and JavaScript. Then, master the back-end and APIs to round out your full-stack skills",
    icon: GlobeAltIcon,
  },
  {
    name: "Android Development",
    href: "#",
    description:
      "Learn to build mobile apps with Flutter. The use of mobile devices is increasing every year. Meet the operating system that powers nearly 90% of these devices",
    icon: DeviceMobileIcon,
  },
  {
    name: "Machine Learning",
    href: "#",
    description:
      "Whether you’re just learning to code or you’re a seasoned machine learning practitioner, you’ll find information and exercises to help you develop your skills and advance your projects.",
    icon: EyeIcon,
  },
  {
    name: "Cybersecurity",
    href: "#",
    description:
      "Become a cybersecurity expert and learn how to protect digital systems, networks, and data from cyber threats. Explore topics like ethical hacking, network security, and risk management.",
    icon: LockClosedIcon,
  },
  {
    name: "Blockchain Development",
    href: "#",
    description:
      "Dive into the world of blockchain technology. Learn to build decentralized applications (DApps), explore smart contracts, and understand the fundamentals of cryptocurrencies.",
    icon: CodeIcon,
  },
];

const tracks: React.FC = () => {
  return (
    <div className="bg-white">
      <Head>
        <title>GDSC | Collaboration</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />

      <div className="relative pb-32 bg-gray-800 pt-40 ">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
            alt=""
          />
          <div
            className="absolute inset-0 bg-gray-800 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
            Tracks
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
            Our GDSC CVR has three tracks. Each track is dedicated on the
            technologies and their respective development in the field.
          </p>
        </div>
      </div>

      <section
        className="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-13 lg:gap-x-8 mb-1">
          {supportLinks.map((link) => (
            <TrackCard link={link} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default tracks;
