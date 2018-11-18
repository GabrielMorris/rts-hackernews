// React
import React from 'react';

// Styles
import './SearchResultsCard.css';

export default function SearchResultsCard(props) {
  return (
    <li>
      <p>
        <a href={props.result.url}>{props.result.title}</a>
      </p>

      <p>
        <strong>Author: </strong>
        {props.result.author}
      </p>
    </li>
  );
}
