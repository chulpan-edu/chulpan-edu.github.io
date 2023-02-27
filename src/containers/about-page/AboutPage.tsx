import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const AboutPage: FC = () => {
  return (
    <>
      <ul>
        <li>
          <a href="https://reactjs.org/" target="_blank">
            React
          </a>
        </li>
        <li>
          <a href="https://webpack.js.org/" target="_blank">
            Webpack
          </a>
        </li>
      </ul>
      <Link to="/">
        <button type="button">to main</button>
      </Link>
    </>
  );
};

export default AboutPage;
