import React from 'react';

import nasaImg from '../../assets/images/Nasa1.jpg';

import './styles.css';
export class Article extends React.Component { 

    render() { 
        return (
          <article id='article'>
            <img src={nasaImg} alt="" />

            <div className="article-infos">
              <h2>{this.props.title}</h2>
              <h3>NASA</h3>
              <p>
                NASA stands for the National Aeronautics and Space
                Administration. It is the United States government agency
                responsible for the nation's civilian space program and for
                aeronautics and aerospace research. Founded in 1958, NASA is
                known for its space exploration missions, including manned and
                unmanned missions, the exploration of planets and other
                celestial bodies, as well as the development of new technologies
                for aviation and space exploration.
              </p>
            </div>
          </article>
        );
    }
}