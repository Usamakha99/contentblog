import { Button } from '@/components/ui/button';
import { buttonVariants } from "@/components/ui/button"
import Link from 'next/link';
import React from 'react';

function Blog() {
  const blogs = [
    {
      title: 'Understanding React',
      description: 'A deep dive into React and its ecosystem.',
      author: 'John Doe',
      image: 'https://images.pexels.com/photos/16129703/pexels-photo-16129703/free-photo-of-man-coding-on-computers-sitting-at-desk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: 'October 1, 2023',
      slug: 'understanding-react',
    },
    {
      title: 'Next.js for Beginners',
      description: 'Learn the basics of Next.js and how to get started.',
      author: 'Jane Smith',
      image: 'https://images.pexels.com/photos/12662810/pexels-photo-12662810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: 'October 5, 2023',
      slug: 'nextjs-for-beginners',
    },
    {
      title: 'Next.js for Beginners',
      description: 'Learn the basics of Next.js and how to get started.',
      author: 'Jane Smith',
      image: 'https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: 'October 5, 2023',
      slug: 'nextjs-for-beginners',
    },
    // Add more blog objects as needed
  ];

  return (
    <div className="container mx-auto p-4 px-28">
      <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
              <p className="text-gray-700 mb-4">{blog.description}</p>
              
              <div className = "text-sm text-gray-500 mb-4"> <span>
              <p className="text-sm text-gray-500 mt-2">By {blog.author}</p>
              <p className="text-sm text-gray-500 mt-1">Posted on{new Date(blog.date).toLocaleDateString()} </p></span>
            </div>
              <Link href={`/blogpost/${blog.slug}`} className={buttonVariants({ variant: "outline" })}>Read more</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;

// gernarte a blog  page that contain a baeutiful cards display using map function assume blog array and use it to display the blog. blog should have title Description links which genarte from slang author and image the blog card should look good and the overall blog page is responsive  using tailwindcss dont forget using nextjs react
