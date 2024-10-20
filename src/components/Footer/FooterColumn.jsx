import React from 'react';

const FooterColumn = ({ title, items }) => {
  return (
    <nav className="flex flex-col items-start self-stretch my-auto">
      <h2 className="text-lg tracking-wider leading-loose text-white">{title}</h2>
      <ul className="list-none p-0">
        {items.map((item, index) => (
          <li key={index} className={`mt-4 ${index === 0 ? 'self-stretch' : ''}`}>
            <a href="#" className={index === 0 ? 'text-white' : ''}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FooterColumn;