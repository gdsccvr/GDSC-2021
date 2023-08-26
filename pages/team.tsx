import Head from "next/head";
import React from "react";
import { Heading } from "../src/components/Heading";
import { Footer } from "../src/components/Layouts/Footer";
import { Nav } from "../src/components/Layouts/Nav";
import { TeamCard } from "../src/components/TeamCard";
import Marquee from "react-fast-marquee";

// const people21 = [
//   {
//     name: "Vijaya Mair",
//     role: "Placement Co-ordinator and Mentor",
//     imageUrl: "/team/vijaya_mair.jpg",
//     bio: `A 20 y/o Hardware Designer and Software Developer, I have a knack for designing Digital Systems using Verilog HDL and have worked with protocols like AXI, AXI - Lite, AXI - Stream, AHB, AHB - Lite, UART, SPI. I also have a good grasp on SOC design and am proficient with RISC-based CPU design. I've worked with various microcontroller units like STM32, MSP430, TIVA Series, Arduino, AVR Tiny Series and can develop a bare-metal code.`,
//     instagramUrl: "",
//     githubUrl: "",
//     linkedinUrl: "https://www.linkedin.com/in/vijayamair/",
//   },
//   {
//     name: "SeetharamNagesh Appe",
//     role: "Faculty Co-Ordinator",
//     imageUrl: "/team/nagesh.jpg",
//     bio: `A 20 y/o Hardware Designer and Software Developer, I have a knack for designing Digital Systems using Verilog HDL and have worked with protocols like AXI, AXI - Lite, AXI - Stream, AHB, AHB - Lite, UART, SPI. I also have a good grasp on SOC design and am proficient with RISC-based CPU design. I've worked with various microcontroller units like STM32, MSP430, TIVA Series, Arduino, AVR Tiny Series and can develop a bare-metal code.`,
//     instagramUrl: "",
//     githubUrl: "",
//     linkedinUrl: "asas",
//   },
//   {
//     name: "Srimanth Tenneti",
//     role: "Community Lead & Machine Learning Lead",
//     imageUrl: "/team/SrimanthTenneti.jpg",
//     bio: `A 20 y/o Hardware Designer and Software Developer, I have a knack for designing Digital Systems using Verilog HDL and have worked with protocols like AXI, AXI - Lite, AXI - Stream, AHB, AHB - Lite, UART, SPI. I also have a good grasp on SOC design and am proficient with RISC-based CPU design. I've worked with various microcontroller units like STM32, MSP430, TIVA Series, Arduino, AVR Tiny Series and can develop a bare-metal code.`,
//     instagramUrl: "https://www.instagram.com/srimanth_tenneti/",
//     githubUrl: "https://github.com/srimanthtenneti",
//     linkedinUrl: "https://www.linkedin.com/in/srimanth-tenneti-662b7117b/",
//   },

//   {
//     name: "Vaishnavi Tammali",
//     role: "Corporate Outreach Lead",
//     imageUrl: "/team/vaishnavi.jpeg",
//     bio: "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
//     instagramUrl: "https://instagram.com/yshna_we?utm_medium=copy_link",
//     githubUrl: "https://github.com/VaishnaviTammali",
//     linkedinUrl: "https://www.linkedin.com/in/vaishnavi-tammali-9a14801b3",
//   },
//   {
//     name: "P Renu",
//     role: "Content Lead",
//     imageUrl: "/team/renu.png",
//     bio: "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
//     instagramUrl: "https://www.instagram.com/Pinjaralarenu/",
//     githubUrl: "",
//     linkedinUrl: "https://www.linkedin.com/mwlite/in/pinjarala-r-4926581a5",
//   },
//   {
//     name: "Sirichandan Reddy",
//     role: "Management Lead",
//     imageUrl: "/team/sirichandanreddy.JPG",
//     bio: "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
//     instagramUrl: "https://www.instagram.com/sirichandan_reddy/",
//     githubUrl: "",
//     linkedinUrl:
//       "https://www.linkedin.com/in/sirichandan-reddy-beeravolu-257b031b5/",
//   },
//   {
//     name: "Vedanvita Gudavalli",
//     role: "Strategies and Outreach Lead",
//     imageUrl: "/team/vedanvitagudavalli.jpg",
//     bio: "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
//     instagramUrl: "https://www.instagram.com/vedanvita_/",
//     githubUrl: "https://github.com/Vedanvita",
//     linkedinUrl: "http://www.linkedin.com/in/vedanvita-gudavalli-bb58971a7",
//   },
//   {
//     name: "S Preetham Reddy",
//     role: "Student Relations Lead",
//     imageUrl: "/team/PreethamReddy.jpg",
//     bio: "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
//     instagramUrl: "",
//     githubUrl: "https://github.com/Preetham71",
//     linkedinUrl: "https://www.linkedin.com/in/preetham-r-755128129",
//   },
//   {
//     name: "Jannaikode Yashwanth Kumar",
//     role: "Strategies and Operations Lead",
//     imageUrl: "/team/yashwanth.jpg",
//     bio: "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
//     instagramUrl: "https://instagram.com/yashwanth_24_12?utm_medium=copy_link",
//     githubUrl: "https://github.com/Yashwanth-Kumar24",
//     linkedinUrl: "https://www.linkedin.com/in/yashwanthkj",
//   },
//   {
//     name: "Annam DevikaLahari",
//     role: "Women Empowerment Lead",
//     imageUrl: "/team/lahari.jpeg",
//     bio: "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
//     instagramUrl: "https://www.instagram.com/_lahari09_/",
//     githubUrl: "https://github.com/L09-c",
//     linkedinUrl: "https://www.linkedin.com/in/lahari-annam-76b0a9192",
//   },
//   {
//     name: "Thushar KE",
//     role: "Web Development Lead",
//     imageUrl: "/team/thushar.jpg",
//     bio: "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
//     instagramUrl: "https://www.instagram.com/thusharke25/",
//     githubUrl: "https://github.com/thusharke",
//     linkedinUrl: "https://www.linkedin.com/in/thushar-ke-b00ba51a0/",
//   },
//   {
//     name: "Shaik Adil",
//     role: "GCP Facilitator & Web development core team",
//     imageUrl: "/team/adil.jpeg",
//     bio: "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
//     instagramUrl: "https://www.instagram.com/_adilshaik/",
//     githubUrl: "https://github.com/adilshaik",
//     linkedinUrl: "https://www.linkedin.com/in/adil-shaik-7497a01b1/",
//   },
//   {
//     name: "Karthik Pavoor ",
//     role: "Wed development core team",
//     imageUrl: "/team/karthikpavoor.jpg",
//     bio: "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
//     instagramUrl: "https://www.instagram.com/k_a_r_t_h_i_k_01/",
//     githubUrl: "https://github.com/karthikpavoor",
//     linkedinUrl: "https://www.linkedin.com/in/karthik-pavoor-73331b21a/",
//   },
//   {
//     name: "Rishi Shreshtham",
//     role: "Machine Learning core team",
//     imageUrl: "/team/rishishrestham.jpeg",
//     bio: "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
//     instagramUrl: "https://www.instagram.com/rishi_shreshtham/",
//     githubUrl: "https://github.com/fluire",
//     linkedinUrl: "http://www.linkedin.com/in/rishi-shrestham-98a6231a9",
//   },
//   {
//     name: "Hari Sri Purna Vishnu Karthik",
//     role: "Machine Learning core team",
//     imageUrl: "/team/harikarthik.jpeg",
//     bio: "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
//     instagramUrl: "https://www.instagram.com/hks3npai/",
//     githubUrl: "https://github.com/hksenpai",
//     linkedinUrl: "https://www.linkedin.com/in/hari-karthik-46477b1b3/",
//   },
//   {
//     name: "S Abhinav",
//     role: "Machine Learning core team",
//     imageUrl: "/team/Abhinav.png",
//     bio: "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
//     instagramUrl: "https://www.instagram.com/abhinavsam_03/",
//     githubUrl: "https://github.com/sabhinav3",
//     linkedinUrl: "https://www.linkedin.com/in/s-abhinav/",
//   },
//   {
//     name: "Pisati Sai Charan Reddy",
//     role: "Machine Learning core team",
//     imageUrl: "/team/Pisati.JPG",
//     bio: "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
//     instagramUrl: "https://github.com/saicharanreddypisati",
//     githubUrl: "https://github.com/Wolfenstein31",
//     linkedinUrl: "http://linkedin.com/in/pisati-sai-charan-reddy-a41596205",
//   },
//   {
//     name: "Sandeep P",
//     role: "Android Lead",
//     imageUrl: "/team/sandeep.jpg",
//     bio: "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
//     instagramUrl: "https://instagram.com/sandeepo9o7",
//     githubUrl: "https://github.com/sandeep-prabhakula",
//     linkedinUrl: "https://www.linkedin.com/in/sandeep-prabhakula-791769202",
//   },
//   {
//     name: "Nimma Likhitha",
//     role: "Android core team",
//     imageUrl: "/team/LikhithaNimma.jpeg",
//     bio: "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
//     instagramUrl: "https://www.instagram.com/likhitha_n_reddy/",
//     githubUrl: "https://github.com/likhithanimma",
//     linkedinUrl: "https://www.linkedin.com/in/likhithanimma/",
//   },
// ];
// 
const people = [
  {
    name: "Vijaya Mair",
    role: "Placement Co-ordinator and Mentor",
    imageUrl: "/team/vijaya_mair.jpg",
    bio: `A 20 y/o Hardware Designer and Software Developer, I have a knack for designing Digital Systems using Verilog HDL and have worked with protocols like AXI, AXI - Lite, AXI - Stream, AHB, AHB - Lite, UART, SPI. I also have a good grasp on SOC design and am proficient with RISC-based CPU design. I've worked with various microcontroller units like STM32, MSP430, TIVA Series, Arduino, AVR Tiny Series and can develop a bare-metal code.`,
    instagramUrl: "",
    githubUrl: "",
    linkedinUrl: "https://www.linkedin.com/in/vijayamair/",
  },
  {
    name: "SeetharamNagesh Appe",
    role: "Faculty Co-Ordinator",
    imageUrl: "/team/nagesh.jpg",
    bio: `A 20 y/o Hardware Designer and Software Developer, I have a knack for designing Digital Systems using Verilog HDL and have worked with protocols like AXI, AXI - Lite, AXI - Stream, AHB, AHB - Lite, UART, SPI. I also have a good grasp on SOC design and am proficient with RISC-based CPU design. I've worked with various microcontroller units like STM32, MSP430, TIVA Series, Arduino, AVR Tiny Series and can develop a bare-metal code.`,
    instagramUrl: "",
    githubUrl: "",
    linkedinUrl: "asas",
  },
  {
    name: "Shubh A Chudasama",
    role: "GDSC Lead",
    imageUrl: "/team/Team2023/Shubh.jpg",
    bio: `A 20 y/o Hardware Designer and Software Developer, I have a knack for designing Digital Systems using Verilog HDL and have worked with protocols like AXI, AXI - Lite, AXI - Stream, AHB, AHB - Lite, UART, SPI. I also have a good grasp on SOC design and am proficient with RISC-based CPU design. I've worked with various microcontroller units like STM32, MSP430, TIVA Series, Arduino, AVR Tiny Series and can develop a bare-metal code.`,
    instagramUrl: "https://www.instagram.com/c_shubh_/",
    githubUrl: "https://github.com/c-shubh/",
    linkedinUrl: "https://www.linkedin.com/in/c-shubh/",
  },
  {
    name: "Deeskshitha Gona",
    role: "Management Lead and AI/ML Core Team Member",
    imageUrl: "/team/Team2023/Deekshitha.jpeg",
    bio: `A 20 y/o Hardware Designer and Software Developer, I have a knack for designing Digital Systems using Verilog HDL and have worked with protocols like AXI, AXI - Lite, AXI - Stream, AHB, AHB - Lite, UART, SPI. I also have a good grasp on SOC design and am proficient with RISC-based CPU design. I've worked with various microcontroller units like STM32, MSP430, TIVA Series, Arduino, AVR Tiny Series and can develop a bare-metal code.`,
    instagramUrl: "https://www.instagram.com/dexita_rao_gona/",
    githubUrl: "",
    linkedinUrl: "https://www.linkedin.com/in/gona-deekshitha-543232235/",
  },
  {
    name: "Vikas Rushi",
    role: "Web Core Team Lead",
    imageUrl: "/team/Team2023/web/Vikas.jpg",
    bio: `A 20 y/o Hardware Designer and Software Developer, I have a knack for designing Digital Systems using Verilog HDL and have worked with protocols like AXI, AXI - Lite, AXI - Stream, AHB, AHB - Lite, UART, SPI. I also have a good grasp on SOC design and am proficient with RISC-based CPU design. I've worked with various microcontroller units like STM32, MSP430, TIVA Series, Arduino, AVR Tiny Series and can develop a bare-metal code.`,
    instagramUrl: "https://www.instagram.com/vikas_rushi/",
    githubUrl: "https://github.com/0xVikasRushi/",
    linkedinUrl: "https://www.linkedin.com/in/vikas-rushi/",
  },
  {
    role: "Web Core Team Member",
    name: "Pavan Manish Devulapally",
    imageUrl: "/team/Team2023/web/Pavan.jpg",
    instagramUrl: "pavanmanish.d",
    githubUrl: "github.com/pavanmanishd",
    linkedinUrl: "https://www.linkedin.com/in/pavanmanishd"
  },
  {
    role: "Web Core Team Member",
    name: "Suraj Thammi",
    imageUrl: "/team/Team2023/web/Suraj.jpg",
    instagramUrl: "https://www.instagram.com/suraj__712",
    githubUrl: "https://github.com/suraj719",
    linkedinUrl: "https://www.linkedin.com/in/surajthammi/"
  },
  {
    role: "Web Core Team Member",
    name: "Puli Revanth Pershad",
    imageUrl: "/team/Team2023/web/Revanth.jpeg",
    instagramUrl: "https://www.instagram.com/revanthpershad",
    githubUrl: "https://github.com/Revanth-Pershad",
    linkedinUrl: "https://www.linkedin.com/in/revanth-pershad-217937245/"
  },
  {
    role: "Web Core Team Member",
    name: "G Nithish Reddy",
    imageUrl: "/team/Team2023/web/Nithish.jpg",
    instagramUrl: "https://www.instagram.com/nithish_reddy27",
    githubUrl: "https://github.com/nithishreddy27",
    linkedinUrl: "https://www.linkedin.com/in/nithish-reddy-5703a11ba"
  },
  {
    role: "Android Core Team Lead",
    name: "Hitesh Lalwani",
    imageUrl: "/team/Team2023/android/Hitesh.jpg",
    instagramUrl: "",
    githubUrl: "https://github.com/xobe19",
    linkedinUrl: "https://www.linkedin.com/in/hiteshlwni/"
  },
  {
    role: "Android Core Team Member",
    name: "Aryan Shivva",
    imageUrl: "/team/Team2023/android/Aryan.jpg",
    instagramUrl: "https://www.instagram.com/aryanshivva",
    githubUrl: "https://github.com/AryanShivva",
    linkedinUrl: "https://www.linkedin.com/in/aryan-shivva-839669256/"
  },
  {
    role: "Android Core Team Member",
    name: "Umang Darak",
    imageUrl: "/team/Team2023/android/Umang.jpg",
    instagramUrl: "https://www.instagram.com/umang_darak",
    githubUrl: "https://github.com/umangdarak/TripPlanner",
    linkedinUrl: "https://www.linkedin.com/in/umang-darak-14064025a"
  },
  {
    role: "Android Core Team Member",
    name: "Shaik Taj Baba",
    imageUrl: "/team/Team2023/android/Taj.jpg",
    instagramUrl: "https://www.instagram.com/tajbaba999",
    githubUrl: "https://github.com/tajbaba999",
    linkedinUrl: "https://www.linkedin.com/in/taj-baba-profile/"
  },
  {
    role: "Android Core Team Member",
    name: "Abbaraju Sai Sri Alekhya",
    imageUrl: "/team/Team2023/android/Alekhya.jpg",
    instagramUrl: "https://www.instagram.com/__.its_alekhya.__",
    githubUrl: "https://github.com/Alekhya-Abbaraju",
    linkedinUrl: "www.linkedin.com/in/alekhya-abbaraju-628599231"
  },
  {
    role: "AI/ML Core Team Lead",
    name: "Dasula Akshat Mohan",
    imageUrl: "/team/Team2023/aiml/Akshat.jpg",
    instagramUrl: "https://www.instagram.com/kamearirikachi_159",
    githubUrl: "https://github.com/AkshatMittu?tab=repositories",
    linkedinUrl: "www.linkedin.com/in/akshat-mohan-5a361b212"
  },
  {
    role: "AI/ML Core Team Member",
    name: "M Lakshminarayana Rao",
    imageUrl: "/team/Team2023/aiml/Lakshminarayana.jpg",
    instagramUrl: "https://www.instagram.com/ln11211",
    githubUrl: "https://github.com/Ln11211",
    linkedinUrl: "https://www.linkedin.com/in/lakshminarayana-malyala/"
  },
  {
    role: "AI/ML Core Team Member",
    name: "Nithin Kumar Reddy Vangala",
    imageUrl: "/team/Team2023/aiml/Nithin.jpg",
    instagramUrl: "https://www.instagram.com/nithin_kumar_reddie",
    githubUrl: "https://github.com/Nithinkumar-29",
    linkedinUrl: "https://www.linkedin.com/in/nithin-kumar-reddy-vangala-021b77212"
  },
  {
    role: "AI/ML Core Team Member",
    name: "Sai Vishal",
    imageUrl: "/team/Team2023/aiml/Vishal.jpg",
    instagramUrl: "https://www.instagram.com/vishal_.sai",
    githubUrl: "https://github.com/Vishal0129",
    linkedinUrl: "https://www.linkedin.com/in/vishal-sai-7033a9271"
  },
  {
    role: "Cybersecurity Core Team Lead",
    name: "Samrath Reddy Yelapati",
    imageUrl: "/team/Team2023/cybersec/Samrath.jpg",
    instagramUrl: "",
    githubUrl: "https://github.com/samrathreddy",
    linkedinUrl: "https://www.linkedin.com/in/samrath-reddy-74103824a"
  },
  {
    role: "Cybersecurity Core Team Member",
    name: "Ramavath Rajaram",
    imageUrl: "/team/Team2023/cybersec/Rajaram.jpg",
    instagramUrl: "https://www.instagram.com/rajaram._.ramavath",
    githubUrl: "https://github.com/rajaramramavath",
    linkedinUrl: "https://in.linkedin.com/in/rajaram-ramavath-8807731a0"
  },
  {
    role: "Cybersecurity Core Team Member",
    name: "Abhishyant Reddy",
    imageUrl: "/team/Team2023/cybersec/Abhishyant.jpg",
    instagramUrl: "https://www.instagram.com/abhi_reds",
    githubUrl: "https://github.com/AbhishyantReds",
    linkedinUrl: "https://www.linkedin.com/in/abhishyant-reddy-a87b23287/"
  },
  {
    role: "Cybersecurity Core Team Member",
    name: "Yashwanth Chilaka",
    imageUrl: "/team/Team2023/cybersec/Yashwanth.jpg",
    instagramUrl: "https://www.instagram.com/yashwanth.30",
    githubUrl: "https://github.com/Yashwanth-13",
    linkedinUrl: "www.linkedin.com/in/yashwanth-chilaka-834284253"
  },
  {
    role: "Cybersecurity Core Team Member",
    name: "Tanusree Reddy",
    imageUrl: "/team/Team2023/cybersec/Tanusree.jpg",
    instagramUrl: "https://www.instagram.com/tanusree.reddyy",
    githubUrl: "https://github.com/tanusree13",
    linkedinUrl: "https://www.linkedin.com/in/tanusree-reddy-a46b24287/"
  },
  {
    role: "Blockchain Core Team Lead",
    name: "Sirangi Sanjay",
    imageUrl: "/team/Team2023/blockchain/Sanjay.jpg",
    instagramUrl: "https://www.instagram.com/sanjay_salvatore_",
    githubUrl: "https://github.com/sanjay-sol",
    linkedinUrl: "https://www.linkedin.com/in/sanjay-sirangi/"
  },
  {
    role: "Blockchain Core Team Member",
    name: "Chandolu Yasvanth Venkata Sai",
    imageUrl: "/team/Team2023/blockchain/Yasvanth.jpg",
    instagramUrl: "https://www.instagram.com/yashwanth_1027",
    githubUrl: "https://github.com/0xYashwanth",
    linkedinUrl: "https://www.linkedin.com/in/yashwanth-chandolu-3705a3231/"
  },
  {
    role: "Blockchain Core Team Member",
    name: "Vinay Ganta",
    imageUrl: "/team/Team2023/blockchain/Vinay.jpg",
    instagramUrl: "https://www.instagram.com/_mellomanic",
    githubUrl: "",
    linkedinUrl: "https://www.linkedin.com/in/vinayganta/"
  },
  {
    role: "Graphic Designer",
    name: "Kowluru Sai",
    imageUrl: "/team/Team2023/graphics/Sai.jpeg",
    instagramUrl: "https://www.instagram.com/sai_kowluru",
    githubUrl: "",
    linkedinUrl: "https://www.linkedin.com/in/kowluru-sai-522032261"
  },
  {
    role: "Graphic Designer",
    name: "Yalamanchili Venkata Sridhar",
    imageUrl: "/team/Team2023/graphics/Sridhar.jpg",
    instagramUrl: "https://www.instagram.com/yvsridhar2",
    githubUrl: "",
    linkedinUrl: "https://www.linkedin.com/in/yv-sridhar-137674230"
  },
  {
    role: "Graphic Designer",
    name: "Himavarshini Attili",
    imageUrl: "/team/Team2023/graphics/Himavarshini.jpg",
    instagramUrl: "https://www.instagram.com/himavarshini.attili",
    githubUrl: "",
    linkedinUrl: "www.linkedin.com/in/himavarshini-attili"
  },
  {
    role: "Strategies & Operations",
    name: "Bellamkonda Leela Rishik",
    imageUrl: "/team/Team2023/strategy/Rishik.JPEG",
    instagramUrl: "https://www.instagram.com/am_rishik",
    githubUrl: "",
    linkedinUrl: "https://www.linkedin.com/in/leela-rishik-bellamkonda-2998a3235"
  },
  {
    role: "Strategies & Operations and Content Writer",
    name: "Harshith Madhavaram",
    imageUrl: "/team/Team2023/strategy/Harshith.png",
    instagramUrl: "https://www.instagram.com/madhavaram.harshith",
    githubUrl: "",
    linkedinUrl: "www.linkedin.com/in/harshith-madhavaram-37433322b"
  },
  {
    role: "Strategies & Operations",
    name: "Rishika. Bussa",
    imageUrl: "/team/Team2023/strategy/Rishika.jpg",
    instagramUrl: "https://www.instagram.com/me_rishika_",
    githubUrl: "",
    linkedinUrl: "https://www.linkedin.com/in/rishika-bussa-690bb2252"
  },
  {
    role: "Corporate Outreach",
    name: "Sathvika",
    imageUrl: "/team/Team2023/corporate/Sathvika.jpg",
    instagramUrl: "https://www.instagram.com/sathvika_reddy_24",
    githubUrl: "",
    linkedinUrl: "https://www.linkedin.com/in/sathvika-reddy-6a2006259"
  },
  {
    role: "Corporate Outreach",
    name: "Patalay Amrith",
    imageUrl: "/team/Team2023/corporate/Amrith.jpg",
    instagramUrl: "https://www.instagram.com/p__amrith",
    githubUrl: "",
    linkedinUrl: "https://www.linkedin.com/in/amrith-patalay-92a498258"
  },
  {
    role: "Content Writer",
    name: "G Sneha",
    imageUrl: "/team/Team2023/content/Sneha.jpg",
    instagramUrl: "https://www.instagram.com/sneha_gopishetty",
    githubUrl: "",
    linkedinUrl: "https://www.linkedin.com/in/sneha-gopishetty-21b32027a"
  }
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
            {/* <div className="mt-20"> */
            /* <div className="hidden md:block">
                <Marquee
                  gradient={true}
                  speed={80}
                  direction="left"
                  pauseOnHover
                >
                  <ApplicationFormLink />
                </Marquee>
              </div>
              <div className="md:hidden">
                <ApplicationFormLink />
              </div> */
            /* </div> */}
            <Heading
              heading="GDSC Team 2023"
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
