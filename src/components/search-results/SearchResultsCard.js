// React
import React from 'react';

export default function SearchResultsCard(props) {
  return (
    <li>
      <a href={props.result.url}>{props.result.title}</a>
    </li>
  );
}
