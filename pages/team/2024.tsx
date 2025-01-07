import Head from "next/head";
import React from "react";
import { Heading } from "../../src/components/Heading";
import { Footer } from "../../src/components/Layouts/Footer";
import { Nav } from "../../src/components/Layouts/Nav";
import { TeamCard } from "../../src/components/TeamCard";
import Marquee from "react-fast-marquee";
const people = [
    {
        name: "Vijaya Mair",
        role: "Placement Co-ordinator and Mentor",
        imageUrl: "/team/Team2024/vijaya_mair.jpg",
        linkedinUrl: "https://www.linkedin.com/in/vijayamair/",
      },
      {
        name: "Seetharam Nagesh Appe",
        role: "Faculty Co-Ordinator",
        imageUrl: "/team/Team2024/nagesh.jpeg",
        linkedinUrl: "https://www.linkedin.com/in/seetharamnagesh-appe-4584281aa/",
      },
      {
        name: "Sheetal Gujar",
        role: "GDG Lead",
        imageUrl: "/team/Team2024/Sheetal Gujar.jpeg",
        instagramUrl: "https://www.instagram.com/_shheetal/",
        githubUrl: "https://github.com/sshheetal",
        linkedinUrl: "https://www.linkedin.com/in/sheetal-gujar/",
      },
      {
        name: "Vishal Keerthan Parankusham",
        role: "Web Core Team Lead",
        imageUrl: "/team/Team2024/Vishal Keerthan.jpg",
        instagramUrl: "https://www.instagram.com/pvishalkeerthan/",
        githubUrl: "https://github.com/pvishalkeerthan",
        linkedinUrl: "https://www.linkedin.com/in/vishal-keerthan/",
      },
      {
        role: "Web Core Team Member",
        name: "Suraj Thammi",
        imageUrl: "/team/Team2024/Suraj Thammi.png",
        instagramUrl: "https://www.instagram.com/suraj__712",
        githubUrl: "https://github.com/suraj719",
        linkedinUrl: "https://www.linkedin.com/in/surajthammi/",
      },
      {
        role: "Web Core Team Member",
        name: "Sneha Muthyala",
        imageUrl: "/team/Team2024/Sneha Muthyala.jpg",
        githubUrl: "https://github.com/SnehaMuthyala",
        linkedinUrl: "https://www.linkedin.com/in/sneha-muthyala-78594a280",
      },
      {
        role: "Web Core Team Member",
        name: "Siripuram Akash",
        imageUrl: "/team/Team2024/Siripuram Akash.jpeg",
        instagramUrl: "https://www.instagram.com/akash_siripuram_19",
        githubUrl: "https://github.com/akashsiripuram",
        linkedinUrl: "https://www.linkedin.com/in/siripuramakash",
      },
      {
        role: "Android Core Team Lead",
        name: "Aryan Shivva",
        imageUrl: "/team/Team2024/Aryan Shivva.jpg",
        instagramUrl: "https://github.com/AryanShivva",
        githubUrl: "https://github.com/AryanShivva",
        linkedinUrl: "https://www.linkedin.com/in/aryan-shivva-839669256/",
      },
      {
        role: "Android Core Team Member",
        name: "Pesarikayala Sai Charan Reddy",
        imageUrl: "/team/Team2024/Sai Charan Reddy.jpeg",
        instagramUrl: "https://www.instagram.com/saicharanreddy_79",
        githubUrl: "https://github.com/PSaiCharanReddy",
        linkedinUrl:
          "https://www.linkedin.com/in/pesarikayalasaicharanreddypesarikayala/",
      },
      {
        role: "Android Core Team Member",
        name: "Anjith surya vamshi",
        imageUrl: "/team/Team2024/Anjith surya vamshi.jpg",
        instagramUrl: "https://www.instagram.com/anjith.sv",
        githubUrl: "https://github.com/AnjithSuryaVamshi",
        linkedinUrl: "https://www.linkedin.com/in/anjith-a561a22a0/",
      },
      {
        role: "AI/ML & DS Core Team Lead",
        name: "K Shanthan",
        imageUrl: "/team/Team2024/K Shanthan.jpg",
        instagramUrl: "https://www.instagram.com/shanthan_katkuri",
        githubUrl: "https://www.github.com/shanthankatkuri",
        linkedinUrl: "https://www.linkedin.com/in/shanthanreddykatkuri/",
      },
      {
        role: "AI/ML & DS Core Team Member",
        name: "Kruthin Reddy",
        imageUrl: "/team/Team2024/Kruthin Reddy.jpeg",
        instagramUrl: "https://www.instagram.com/kruthin_reddy",
        githubUrl: "https://github.com/Rikkykruthin",
        linkedinUrl: "https://www.linkedin.com/in/kruthin-reddy",
      },
      {
        role: "AI/ML & DS Core Team Member",
        name: "K Rohith Kumar",
        imageUrl: "/team/Team2024/K Rohith Kumar.jpeg",
        instagramUrl: "https://www.instagram.com/umheyitsrohit",
        githubUrl: "https://github.com/rohitkumar9989",
        linkedinUrl: "https://www.linkedin.com/in/rohith-kumar-650560215",
      },
      {
        role: "AI/ML & DS Core Team Member",
        name: "Badisa Srinidhi",
        imageUrl: "/team/Team2024/Badisa Srinidhi.jpg",
        instagramUrl: "https://www.instagram.com/bsrinidhi_04",
        githubUrl: "http://github.com/SNidhi2004",
        linkedinUrl: "http://www.linkedin.com/in/srinidhi-badisa- 10311b301",
      },
      {
        role: "Cybersecurity & Block Chain Core Team Lead",
        name: "Rajaram Ramavath",
        imageUrl: "/team/Team2024/Rajaram Ramavath.jpg",
        instagramUrl: "https://www.instagram.com/id._.ram",
        githubUrl: "https://github.com/rajaramramavath",
        linkedinUrl: "http://www.linkedin.com/in/rajaram-ramavath",
      },
      {
        role: "Cybersecurity & Block Chain Core Team Member",
        name: "Mani Venkata Sai Medam",
        imageUrl: "/team/Team2024/Mani Venkata sai Medam.jpg",
        instagramUrl: "https://www.instagram.com/_m_m_v_s_",
        githubUrl: "https://github.com/manivenkatasai9494",
        linkedinUrl: "https://www.linkedin.com/in/manivenkatasaimedam/",
      },
      {
        role: "Cybersecurity & Block Chain Core Team Member",
        name: "Shaik Saalam",
        imageUrl: "/team/Team2024/Shaik Saalam.jpeg",
        instagramUrl: "https://www.instagram.com/vr0nti",
        githubUrl: "https://github.com/Saalam121",
        linkedinUrl: "https://www.linkedin.com/in/vronti/",
      },
      {
        role: "Cybersecurity & Block Chain Core Team Member",
        name: "Padigepati Sai Charan Reddy",
        imageUrl: "/team/Team2024/Padigepati Sai Charan Reddy.jpg",
        instagramUrl: "https://www.instagram.com/sai___charan__reddy",
        githubUrl: "https://github.com/SaicharanCEH",
        linkedinUrl:
          "http://www.linkedin.com/in/sai-charan-reddy-padigepati-841658291",
      },
      {
        role: "Competitive Programming Core Team Lead",
        name: "Ananya Pappula",
        imageUrl: "/team/Team2024/Ananya pappula.jpg",
        instagramUrl: "https://www.instagram.com/_ananya_521",
        githubUrl: "https://github.com/Ananya54321",
        linkedinUrl: "https://www.linkedin.com/in/ananya-pappula-1735b9288/",
      },
      {
        role: "Competitive Programming Core Team Member",
        name: "Mani Yadla",
        imageUrl: "/team/Team2024/Mani Yadla.jpg",
        instagramUrl: "https://www.instagram.com/_mani_yadla/",
        githubUrl: "https://github.com/YadlaMani",
        linkedinUrl: "https://www.linkedin.com/in/yadla-mani/",
      },
      {
        role: "Competitive Programming Core Team Member",
        name: "Devoju Siri",
        imageUrl: "/team/Team2024/Devoju Siri.jpg",
        instagramUrl: "https://www.instagram.com/im_siri6",
        githubUrl: "https://github.com/siridevoju",
        linkedinUrl: "https://linkedin.com/in/siridevoju",
      },
      {
        role: "Competitive Programming Core Team Member",
        name: "Vemulakonda Sai Venkata Prabath",
        imageUrl: "/team/Team2024/Vemulakonda Sai Venkata Prabath.jpg",
        instagramUrl: "https://www.instagram.com/this_is_prabhath/",
        githubUrl: "https://github.com/Prabathvsv",
        linkedinUrl: "https://www.linkedin.com/in/prabhath-vemulakonda-37b6a222a",
      },
      {
        name: "T Karthik Gupta",
        role: "IoT and Embedded Core Team Lead",
        imageUrl: "/team/Team2024/T Karthik Gupta.png",
        instagramUrl: "https://www.instagram.com/jame_smort/",
        linkedinUrl: "http://linkedin.com/in/karthik-gupta-telukunta-884b3a26a",
      },
      {
        name: "Chindada Mahima Sharon",
        role: "IoT and Embedded Core Team Member",
        imageUrl: "/team/Team2024/Chindada Mahima Sharon.jpg",
        instagramUrl: "https://www.instagram.com/mahimasharxnn",
        githubUrl: "https://github.com/mahimasharonn",
        linkedinUrl: "https://www.linkedin.com/in/mahima-sharon-chindada-b161aa319/",
      },
      {
        name: "Damuluri Sathvik",
        role: "IoT and Embedded Core Team Member",
        imageUrl: "/team/Team2024/Damuluri Sathvik.jpg",
        instagramUrl: "https://www.instagram.com/sathvikd09",
        githubUrl: "https://github.com/sathvikdamuluri",
        linkedinUrl: "https://www.linkedin.com/in/sathvik-damuluri/",
      },
      {
        name: "Rendla Yashasri",
        role: "IoT and Embedded Core Team Member",
        imageUrl: "/team/Team2024/Rendla Yashasri.jpg",
        instagramUrl: "https://www.instagram.com/yashasri.04",
        githubUrl: "https://github.com/yashasri04",
        linkedinUrl: "https://www.linkedin.com/in/yashasri-rendla-952362295/",
      },
      {
        name: "Ayush A. Shah",
        role: "Logistics Core Team Lead",
        imageUrl: "/team/Team2024/Ayush A. Shah.jpg",
        instagramUrl: "https://www.instagram.com/_ayushshah_07",
        githubUrl: "https://github.com/AyushShah-07",
        linkedinUrl: "http://www.linkedin.com/in/ayush-shah-17646927b",
      },
      {
        name: "Dhruv Gupta",
        role: "Logistics Core Team Member",
        imageUrl: "/team/Team2024/Dhruv Gupta.jpg",
        instagramUrl: "https://www.instagram.com/dhruuu_txt",
        githubUrl: "https://github.com/dhruvvv07",
        linkedinUrl: "http://www.linkedin.com/in/dhruvgupta007",
      },
      {
        name: "Kompally Amarthya",
        role: "Logistics Core Team Member",
        imageUrl: "/team/Team2024/Kompally Amarthya.jpg",
        instagramUrl: "https://www.instagram.com/amarthya_munna",
        githubUrl: "https://github.com/Amarthya076",
        linkedinUrl:
          "https://www.linkedin.com/in/amarthya-kompally-a6ba2228b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
      {
        name: "Patalay Amrith",
        role: "Logistics Core Team Member",
        imageUrl: "/team/Team2024/Patalay Amrith.jpeg",
        instagramUrl: "https://www.instagram.com/P_amrith",
        githubUrl: "https://github.com/topics/login/patalayamrith",
        linkedinUrl: "https://www.linkedin.com/in/amrith-patalay-92a498258",
      },
      {
        role: "Graphic Designer Core Team Lead",
        name: "U.Prajwal kumar",
        imageUrl: "/team/Team2024/U.Prajwal kumar.jpg",
        instagramUrl: "https://www.instagram.com/_prajwalkumarr_",
        githubUrl: "https://github.com/Prajwalkumarrr",
        linkedinUrl: "http://www.linkedin.com/in/prajwalkumar-uppala",
      },
      {
        role: "Graphic Designer Core Team Member",
        name: "Akash Garine",
        imageUrl: "/team/Team2024/Akash Garine.jpeg",
        instagramUrl: "https://www.instagram.com/akash_garine",
        githubUrl: "https://github.com/akashgarine",
        linkedinUrl: "https://www.linkedin.com/in/akashgarine",
      },
      {
        role: "Graphic Designer Core Team Member",
        name: "Vemulawada Omkar",
        imageUrl: "/team/Team2024/Vemulawada Omkar.jpg",
        instagramUrl: "https://www.instagram.com/Omkar_39356",
        githubUrl: "https://github.com/omkar393566",
        linkedinUrl: "https://www.linkedin.com/in/omkar-vemulawada-691010301/",
      },
      {
        role: "Social Awareness Core Team",
        name: "Rishika Bussa",
        imageUrl: "/team/Team2024/Rishika Bussa.jpg",
        instagramUrl: "https://www.instagram.com/me_rishika_",
        githubUrl: "https://github.com/RishikaHub",
        linkedinUrl:
          "https://www.linkedin.com/in/rishika-bussa?utm_source=share&utm_campaign=share_via&utm_content=profile",
      },
  ]
  const ApplicationFormLink = () => (
    <a
      href="https://docs.google.com/forms/d/e/1FAIpQLSe-7jbL-sXKlPA6DmWr__h4JOTq3R3JIlALpLjRIYywuj0DRw/viewform"
      target="_blank"
      rel="noopener noreferrer"
      className="text-2xl font-bold text-blue-500"
    >
      Applications are now open! To join the team of 2023-24, apply here!
    </a>
  );
  
  const team: React.FC = () => {
    return (
      <>
        <Head>
          <title>GDSC | Team</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Nav />
        <main>
          <div className="bg-white">
            <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
             
              <Heading
                heading="GDSC Team 2024"
                description="A team that is extremely innovative and always on toes when it comes to
          managing and organising an event that can help the student community in
          their technical endeavours."
              />
  
              <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
                <div className="lg:col-span-3">
                  <ul
                    role="list"
                    className="space-y-12 sm:grid sm:grid-cols-3 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8"
                  >
                    {people.map((person) => (
                      <li key={person.name}>
                        <TeamCard person={person} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  };
  
  export default team;
  