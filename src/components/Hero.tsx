import React from "react";

export const Hero: React.FC = () => {
  return (
    <div className="max-w-7xl bg-gray-50 mx-auto my-10 py-10 px-5">
      <div className="flex flex-wrap justify-center lg:justify-between items-center">
        <div className="flex flex-col w-full lg:w-1/2 px-5">
          <div className="flex flex-col md:flex-row items-center mb-5">
            <img
              className="h-20 w-auto sm:h-20"
              src="/dsccvr.png"
              alt="gdsccvr"
            />
            <h1 className="text-xl font-semibold">
              CVR COLLEGE OF ENGINEERING
            </h1>
          </div>
          <h2 className="text-indigo-800 font-bold text-4xl">
            <span className="relative inline-block highlight z-10 mr-4">
              Google
            </span>
            <span className="relative inline-block highlight z-10 mr-4">
              Developer
            </span>
            <span className="relative inline-block highlight z-10 mr-4">
              Student
            </span>
            <span className="relative inline-block highlight z-10">
              Clubs,{" "}
            </span>{" "}
          </h2>

          <div>
            <h3 className="text-lg mt-1">
              At Google Developer Student Clubs’ CVR Chapter we leverage the
              plethora of technologies and tools Google has created, in order to
              solve problems ranging from the ones in our communities to those
              that impact us on a global level.  
            </h3>
            <h3 className="text-lg mt-1">
              We nurture talent by training students from all undergraduate and
              graduate programs in up-and-coming technologies, help them
              identify problems, come up with solutions for them, and even
              provide for holistic engagement through collaborations with
              industry professionals.
            </h3>
          </div>
        </div>
        <div
          style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70% " }}
          className="hidden lg:block border-2 w-1/2 h-full overflow-hidden bg-gradient-to-r from-teal-500 to-cyan-600"
        >
          <img src="/team.svg" alt="" />
        </div>
      </div>
      <style jsx>
        {`
          .highlight::before {
            content: "";
            height: 1rem;
            background-color: #2dd7d1;
            width: calc(100% + 0.5rem);
            left: -0.25rem;
            bottom: 0.4rem;
            display: block;
            position: absolute;
            transform: rotate(-1deg) skewX(-1deg);
            z-index: -1;
          }
        `}
      </style>
    </div>
  );
};
