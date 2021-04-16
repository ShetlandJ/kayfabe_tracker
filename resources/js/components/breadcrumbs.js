import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Breadcrumbs ({breadcrumbs}) {
  const autoCrumbs = breadcrumbs.map((crumb, index) => (
    <li className="flex items-center mx-2" key={index}>
      {crumb.to && (
        <Link className="mr-3 dark:text-gray-200" to={crumb.to}>
          {crumb.text}
        </Link>
      )}
      {crumb.active && (
        <b>{crumb.text}</b>
      )}
      {index !== breadcrumbs.length - 1 && (
        <FontAwesomeIcon className="dark:text-gray-200" icon={faChevronCircleRight} />
      )}
    </li>
  ));

  return (
    <nav className="text-black font-bold flex justify-center" aria-label="Breadcrumb">
      <ol className="list-none p-0 inline-flex">
        {autoCrumbs}
      </ol>
    </nav>
  );
}

export default Breadcrumbs;
