import React, { useEffect, useRef } from 'react';

import { BsInstagram } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';

interface IProps {
  person: IPerson;
}
interface IPerson {
  name: string;
  role: string;
  imageUrl: string;
  // bio: string;
  githubUrl: string;
  linkedinUrl: string;
  instagramUrl: string;
}
export const TeamCard: React.FC<IProps> = (props) => {
  return (
    <div className='space-y-4'>
      <div className='aspect-w-3 aspect-h-2'>
        <img
          className='object-cover shadow-lg rounded-lg'
          src={props.person.imageUrl}
          alt='team-image'
        />
      </div>
      <div className='text-lg leading-6 font-medium space-y-1'>
        <h3>{props.person.name}</h3>
        <p className='text-blue-600'>{props.person.role}</p>
      </div>

      <div className='flex space-x-5'>
        {props.person.linkedinUrl && (
          <a
            target='_blank'
            href={props.person.linkedinUrl}
            className='text-gray-400 hover:text-gray-500'
          >
            <span className='sr-only'>Linkedin</span>
            <BsLinkedin />
          </a>
        )}
        {props.person.githubUrl && (
          <a
            target='_blank'
            href={props.person.githubUrl}
            className='text-gray-400 hover:text-gray-500'
          >
            <span className='sr-only'>Github</span>
            <BsGithub />
          </a>
        )}
        {props.person.instagramUrl && (
          <a
            target='_blank'
            href={props.person.instagramUrl}
            className='text-gray-400 hover:text-gray-500'
          >
            <span className='sr-only'>Instagram</span>
            <BsInstagram />
          </a>
        )}

        {/* <a
          href={props.person.twitterUrl}
          className='text-gray-400 hover:text-gray-500'
        >
          <span className='sr-only'>Twitter</span>
          <BsTwitter />
        </a> */}
        {/* <a
          href={props.person.youtubeUrl}
          className='text-gray-400 hover:text-gray-500'
        >
          <span className='sr-only'>Youtube</span>
          <BsYoutube />
        </a> */}
      </div>
    </div>
  );
};
