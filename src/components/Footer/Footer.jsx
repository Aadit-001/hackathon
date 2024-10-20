import React from 'react';
import FooterColumn from './FooterColumn';
import FooterLogo from './FooterLogo';

const Footer = () => {
  const columns = [
    {
      title: 'Help Desk',
      items: ['Customer Care', 'Legal Help', 'Service', 'Donation', 'Child Care']
    },
    {
      title: 'About',
      items: ['About us', 'Our Team', 'Practice Area', 'Help Guide', 'Tutorials']
    },
    {
      title: 'Support',
      items: ['Support', 'Documentation', 'Faq', 'Contact Us']
    }
  ];

  return (
    <footer className="flex flex-col justify-center items-start self-stretch px-20 py-20 mt-36 w-full text-base leading-none bg-zinc-900 text-slate-300 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col w-full max-w-[1092px] max-md:max-w-full">
        <div className="flex gap-5 justify-between items-center w-full max-w-screen-lg max-md:max-w-full">
          <FooterLogo />
          {columns.map((column, index) => (
            <FooterColumn key={index} title={column.title} items={column.items} />
          ))}
        </div>
        <div className="flex flex-col pl-20 mt-20 text-center max-md:pl-5 max-md:mt-10 max-md:max-w-full">
          <hr className="shrink-0 max-w-full h-px w-[999px]" />
          <p className="self-center mt-11 ml-12 max-md:mt-10">
            © 2021. All Rights Reserved. a product of Slonas
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;