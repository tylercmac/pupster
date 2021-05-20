import React from "react";

function ResultList(props) {
  return (
    <ul className="list-group">
      {props.images.map(image => (
        <li className="list-group-item" key={image}>
          <img  className="img-fluid" src={image} />
        </li>
      ))}
    </ul>
  );
}

export default ResultList;