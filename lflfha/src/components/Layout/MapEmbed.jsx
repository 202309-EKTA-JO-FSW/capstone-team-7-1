import React from "react";

const MapEmbed = () => {
  return (
    <div className="flex justify-center items-center">
      <iframe
        title="Our Location on Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.712290388921!2d35.9360989!3d31.9727246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b5fe80b009e4d%3A0x25fdf9d888760208!2sIstiqlal%20St%2C%20Amman!5e0!3m2!1sen!2sjo!4v1647269158493!5m2!1sen!2sjo"
        width="1300"
        height="450"
        allowFullScreen=""
        loading="lazy"
        className=" justify-center items-center border-0 rounded-lg shadow-lg  "
      ></iframe>
    </div>
  );
};

export default MapEmbed;
