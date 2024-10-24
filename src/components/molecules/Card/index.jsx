import React from 'react';
import PropTypes from 'prop-types';
import { picture } from '../../../assets';

export const Card = ({
  title,
  image,
  description,
}) => {
  return (
    <article className="rounded-xl mt-10 overflow-hidden shadow-xl shadow-slate-300 dark:shadow-slate-900">
      <img src={image} alt="" loading="lazy" />
      <div className="dark:bg-dark-card p-4">
        <h1 className="dark:text-light-heading font-semibold text-lg pt-1">
          {title}
        </h1>
        <p className="text-content pt-4 font-light">{description}</p>
      </div>
    </article>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  description: PropTypes.string,
};

Card.defaultProps = {
  image: picture,
  description: '-',
};
