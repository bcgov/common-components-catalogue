import React from 'react';


const CoCoLinkAttribute = ({ label, link }) => {
  if (!link) return null;
  
  return (
      <p>
        <strong className="d-block d-md-inline">{label}: </strong>
        <a
          href={link}
          title={label}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link}
        </a>
      </p>
  )
}

export default CoCoLinkAttribute;