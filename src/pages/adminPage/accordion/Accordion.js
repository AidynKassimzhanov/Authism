import React, { useState } from 'react';

const AccordionS = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? 'active' : '';

    return (
      <div key={index}>
        <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
          <i className="arrow down icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </div>
    );
  });

  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default AccordionS;