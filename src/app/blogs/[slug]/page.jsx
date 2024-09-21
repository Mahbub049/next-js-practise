const page = ({ params }) => {
  const blogs = [
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
  const { title, description } = blogs.find((blog) => blog.slug == params.slug);
  return (
    <div>
      <h3>{title}</h3>
      <h3>{description}</h3>
    </div>
  );
};

export default page;
