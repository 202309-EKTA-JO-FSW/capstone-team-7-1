import React from 'react';

const TeamSection = () => {

  const teamMembers = [
    {
      name: 'Hakimah ALzaidanin ',
      role: 'Full-stack Devloper',
      image: '/team/hakeema.jpeg', 
      linkedin: 'https://www.linkedin.com/in/hakimah-al-zaidanin-31917a2b6/', 
      github: 'https://github.com/hakimahalzaidanin',
    },
    {
      name: 'Lunar Salameh',
      role: 'Full-stack Devloper',
      image: '/team/IMG_8228.webp',
      linkedin: 'https://www.linkedin.com/in/lunarsalameh',
      github: 'https://github.com/LunarSalameh',
    },
    {
      name: 'Abdullah Alawad',
      role: 'Full-stack Devloper',
      image: '/team/Abdullah.webp',
      linkedin: 'https://www.linkedin.com/in/abdullah-alawad-0989b7269/',
      github: 'https://github.com/Abdullah-Alawad',
    },
    {
      name: 'Ammar Kolko',
      role: 'Full-stack Devloper',
      image: '',
      linkedin: '#',
      github: '#',
    },
  ];

  return (
    <div >
      <h2 className="bg-light-orange text-4xl font-bold text-center mb-20 ">Main Team Members</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {teamMembers.map((member) => (
          <div key={member.name} className="bg-gray-200 rounded-lg p-6 flex flex-col items-center text-center">
            <img
              src={member.image}
              alt={member.name}
              className="rounded-full w-32 h-32 mb-4"
            />
            <h3 className="text-lg font-bold">{member.name}</h3>
            <p className="text-sm mb-4">{member.role}</p>
            <div className="flex justify-center gap-4">
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                {/* Replace with actual LinkedIn icon */}

                LinkedIn
              </a>
              <a href={member.github} target="_blank" rel="noopener noreferrer">
                {/* Replace with actual GitHub icon */}
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
