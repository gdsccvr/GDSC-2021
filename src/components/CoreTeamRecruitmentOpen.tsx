const ApplicationFormLink = () => (
  <a
    href="https://docs.google.com/forms/d/e/1FAIpQLSe-7jbL-sXKlPA6DmWr__h4JOTq3R3JIlALpLjRIYywuj0DRw/viewform"
    target="_blank"
    rel="noopener noreferrer"
    className="text-2xl font-bold text-blue-500 text-center"
  >
    Applications are now open! To join the Core Team of 2023-24,{" "}
    <span className="underline">apply here!</span>
  </a>
);

export const CoreTeamRecruitmentOpen: React.FC = (props) => {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="border-2 rounded-md m-8 flex p-4 max-w-7xl">
        <ApplicationFormLink />
      </div>
    </div>
  );
};
