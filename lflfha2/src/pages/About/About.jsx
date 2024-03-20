// import React from 'react';
// import Image from 'next/image'; // This is for Next.js. For Create React App, use a regular img tag

// const About = () => {
//   return (
//     <div className="about-container">
//       <div className="content-wrapper">
//         <div className="text-section">
//           <h1>About us</h1>
//           <p>
//             This website is the product of a group of front-end developers of the Re:coded Bootcamp.
//             The name of the web application is Lflfha Restaurant. The Lflfha web application offers
//             a rich dining experience reminiscent of a high-end bazaar's front-end. The purpose of the
//             project is to demonstrate the team’s skills with the use of JavaScript frameworks and technologies.
//           </p>
//         </div>
//         <div className="image-section">
//           <Image
//             src="/foode.webp" // Adjust the path to your image
//             alt="Lflfha Restaurant"
//             width={400} // Set the image size to match your design
//             height={300}
//             objectFit="contain" // This will ensure the image maintains aspect ratio
//           />
//         </div>
//       </div>

//       <style jsx>{`
//         .about-container {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           padding: 2rem;
//           background: #fff; // Change as per your color scheme
//         }
//         .content-wrapper {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           max-width: 1200px; // Adjust the width as needed
//           margin: auto;
//           gap: 2rem;
//         }
//         .text-section {
//           flex: 1;
//           max-width: 600px; // Half of the content wrapper width
//         }
//         .image-section {
//           flex: 1;
//           display: flex;
//           justify-content: center;
//           max-width: 600px; // Half of the content wrapper width
//         }
//         h1 {
//           font-size: 2.5rem;
//           margin-bottom: 1rem;
//           text-align: left;
//         }
//         p {
//           font-size: 1rem;
//           line-height: 1.6;
//           text-align: justify;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default About;




import React from 'react';
import Image from 'next/image'; // This is for Next.js. For Create React App, use a regular img tag

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="breadcrumb">
      </div>
      <div className="about-container">
        <div className="content-wrapper">
          <div className="image-container">
            {/* Ensure you replace 'portrait.jpg' with the path to your actual image */}
            <Image
              src="/foode.webp"
              alt="Founders"
              width={300} // Adjust according to your image's aspect ratio
              height={300}
              objectFit="cover" // This can be 'cover' or 'contain' depending on how you want to display the image
            />
          </div>
          <div className="text-container">
            <h2>About Us</h2>
            <p>
            Discover Lflfha, where every click brings you closer to a culinary adventure.
             Designed with passion by the full-stack developers from Re:coded Bootcamp, 
             this web application takes you on a journey through a virtual bazaar, rich
              in flavors and culture. Leveraging dynamic JavaScript frameworks, 
              we've created an engaging, user-friendly experience that not only
               demonstrates our technical prowess but also our dedication to 
               creating memorable moments for our users.  


            </p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .about-page {
          font-family: 'Arial', sans-serif;
          color: #333;
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }
        .breadcrumb {
          margin-bottom: 1rem;
          font-size: 0.9rem;
          opacity: 0.7;
        }
        .about-container h1 {
          text-align: center;
          margin-bottom: 2rem;
        }
        .content-wrapper {
          display: flex;
          align-items: center;
          justify-content: space-around;
          gap: 2rem;
          flex-wrap: wrap;
        }
        .image-container {
          flex-basis: 40%;
          text-align: center;
        }
        .text-container {
          flex-basis: 50%;
        }
        .text-container h2 {
          margin-bottom: 1rem;
          color: #333;
          font-size: 1.5rem;
        }
        @media (max-width: 768px) {
          .content-wrapper {
            flex-direction: column;
            text-align: center;
          }
          .image-container, .text-container {
            flex-basis: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutPage;

