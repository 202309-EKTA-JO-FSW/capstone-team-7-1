import React from 'react';
import Image from 'next/image'; 
import TeamSection from '@/components/TeamSection';


const AboutPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-sm text-gray-600 mb-4">
      </div>

      <div className="flex flex-wrap justify-center items-center -mx-4">
        <div className="px-4 flex-1">
          <div className="max-w-sm mx-auto mb-20">
            <Image
              src="/foode.webp"
              alt="Founders"
              width={400} 
              height={300}
              objectFit="cover" 
            />
          </div>
        </div>
        <div className="px-4 flex-1">
          <h2 className="text-3xl font-semibold mb-4">About Us</h2>
          <p className="text-justify leading-relaxed ">
            Discover Lflfha,where every click brings you closer to a culinary adventure.
            Designed with passion by the full-stack developers from Re:coded Bootcamp,
            this web application takes you on a journey through a virtual bazaar, rich
            in flavors and culture. Leveraging dynamic JavaScript frameworks,
            we've created an engaging, user-friendly experience that not only
            demonstrates our technical prowess but also our dedication to
            creating memorable moments for our users.
          </p>
        </div>
      </div>
      <TeamSection/> 
    </div>
  );
};

export default AboutPage;
