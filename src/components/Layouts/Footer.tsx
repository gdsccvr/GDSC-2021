import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const navigation = [
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/company/gdsc-cvr/",
    icon: BsLinkedin,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/gdsccvr/",
    icon: BsInstagram,
  },
  {
    name: "GitHub",
    href: "https://github.com/gdsccvr",
    icon: BsGithub,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/gdsccvr?s=09",
    icon: BsTwitter,
  },

  {
    name: "Youtube",
    href: "https://youtube.com/channel/UCx74X8jekY5Q3S0u7i6hOxw",
    icon: BsYoutube,
  },
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white mb-5">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {navigation.map((item) => (
            <a
              target="_blank"
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-center text-base text-gray-400">
            &copy; {new Date().getFullYear()} Google Developers Student Club.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
