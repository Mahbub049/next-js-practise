import Link from "next/link";

const BlogsPage = () => {
  const blogData = [
    {
      slug: "web-development-trends-2024",
      title: "Top Web Development Trends to Follow in 2024",
      description:
        "Explore the latest web development trends that will dominate the tech world in 2024, including AI, serverless architecture, and edge computing.",
    },
    {
      slug: "beginner-guide-react",
      title: "A Beginner's Guide to React",
      description:
        "An introduction to React.js, covering the basics of components, state, props, and how to build dynamic web applications with React.",
    },
    {
      slug: "tailwind-vs-bootstrap",
      title: "Tailwind CSS vs Bootstrap: Which Should You Choose?",
      description:
        "A comparison of Tailwind CSS and Bootstrap, discussing their differences, pros, cons, and when to use each for your projects.",
    },
    {
      slug: "importance-of-seo",
      title: "Why SEO is Crucial for Your Website",
      description:
        "Learn why Search Engine Optimization (SEO) plays a key role in driving organic traffic to your website and how to implement SEO best practices.",
    },
    {
      slug: "mern-stack-tutorial",
      title: "MERN Stack Tutorial: Building Your First Full Stack App",
      description:
        "Step-by-step tutorial on building a full-stack web application using MongoDB, Express, React, and Node.js (MERN stack).",
    },
  ];

  return <div>
    {
        blogData.map(blog=><div key={blog.slug} className="border p-8 text-[12px]">
                <h3>{blog.title}</h3>
                <p className="font-normal">{blog.description}</p>
                <button>
                    <Link href={`/blogs/${blog.slug}`}>View Details</Link>
                </button>
            </div>)
    }
  </div>;
};

export default BlogsPage;
