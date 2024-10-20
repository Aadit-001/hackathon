import React from 'react';

const FooterLogo = () => {
  return (
    <div className="flex flex-col self-start mt-3.5 leading-6 text-gray-400">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0cbfc36e528aeb9b2036f0de21d54c7ffb41bce9092d3374d9be738f41d86cf7?placeholderIfAbsent=true&apiKey=bbe760bc23954c8e906e681ae675d7c5" alt="Company logo" className="object-contain max-w-full aspect-[3.1] w-[198px]" />
      <div className="flex flex-col pl-6 mt-3.5 max-md:pl-5">
        <p>
          You can now order your prescription via the website. For the last few weeks the website has been under test …
        </p>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/875a3f2dd47fea2b056cd17bcfc09c745e060c9fef9b9bbc516c09ca41eba25e?placeholderIfAbsent=true&apiKey=bbe760bc23954c8e906e681ae675d7c5" alt="" className="object-contain mt-11 max-w-full aspect-[5.38] w-[118px] max-md:mt-10" />
      </div>
    </div>
  );
};

export default FooterLogo;