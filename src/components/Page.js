import React from 'react';

const Page = ({ postsPerPage, totalPosts,paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  let item = pageNumbers.map((number) => {
    return <li key={number} className="item" onClick={() => paginate(number)} ><a href="#head">{number}</a></li>;
  });

  return <div className="page" >{item}</div>;
};

export default Page;
