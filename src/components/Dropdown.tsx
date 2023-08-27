import React from 'react';
import { Menu, Transition } from '@headlessui/react';
import  Link  from 'next/link';

const CustomMenu = ({ navigate, textColor }) => {
  return (
    <div>
      <Menu as='div' className='relative inline-block text-left'>
        <div>
          <Menu.Button className={`cursor-pointer text-lg font-medium text-${textColor}-500 hover:text-gray-900`}>
            {navigate.name}
          </Menu.Button>
        </div>
        <Transition
          as={React.Fragment}
          enter='duration-100 ease-out'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='duration-100 ease-in'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
        >
          <Menu.Items className='absolute left-20 mt-2 transform -translate-x-full bg-white border border-gray-700 px-5 shadow-md rounded-md focus:outline-none'>
            <div className='py-2'>
              <div className='border-b-2 border-black w-full'>
                <Menu.Item>
                  {({ active }) => (
                    <Link href='/team/2021'>
                      <p
                        className={`block py-2 cursor-pointer text-sm ${active
                          ? 'text-gray-900'
                          : 'text-gray-700 hover:text-black'
                        }`}
                      >
                        2021
                      </p>
                    </Link>
                  )}
                </Menu.Item>
              </div>
              <Menu.Item>
                {({ active }) => (
                  <Link href='/team/2023'>
                    <p
                      className={`block py-2 cursor-pointer text-sm ${active
                        ? 'text-gray-900'
                        : 'text-gray-700 hover:text-black'
                      }`}
                    >
                      2023
                    </p>
                  </Link>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default CustomMenu;
