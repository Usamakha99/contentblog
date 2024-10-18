import React from 'react';
export default function Page({ params }) {

  const blog =
  {
    title: "Typescript Blog Post",
    description: "A brief description of my first blog post.",
    author: "John Doe",
    date: "October 11, 2024",
    content: "<p>This is the content of the first blog post it can include <strong>HTML</strong> tag and other elements.</p>"
  };



  return (
    <div className="max-w-5xl mx-auto p-4">

      <h1 className="text-3xl font-semibold mb-4">{blog.title}</h1>
      <p className="text-base font-bold mb-4 border-l-4 border-black pl-2 italic ">&quot;{blog.description}&quot;</p>
      <div className="flex gap-2">
        <p className=" text-sm text-gray-500 mb-1/2">Author: {blog.author}</p>
        <p className=" text-sm text-gray-500 mb-4">Date: {blog.date}</p>
      </div>
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: blog.content }} ></div>
    </div>


  );
}