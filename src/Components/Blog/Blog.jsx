import React, { useState } from "react";
import "./Blog.css";

const Blog = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const posts = [
    {
      title: "The Future of RPO: AI and Automation in Hiring",
      desc: "AI-driven recruitment is transforming efficiency in hiring processes.",
      full: "Artificial Intelligence is changing recruitment by automating resume screening, reducing time-to-hire, and improving candidate matching. Automation tools also help in sourcing talent from multiple platforms efficiently.",
      img: "https://iplaceusa.com/wp-content/uploads/2023/08/The-Future-is-RPO-scaled.jpg",
    },
    {
      title: "How Cloud & DevOps Accelerate Digital Transformation",
      desc: "Cloud-native solutions are helping businesses scale like never before.",
      full: "Cloud and DevOps work hand in hand to speed up software delivery, enhance collaboration, and ensure scalability. Modern businesses rely on containerization, CI/CD pipelines, and automation to thrive in digital transformation.",
      img: "https://www.heliossolutions.co/blog/wp-content/uploads/2018/11/Devops-And-Cloud-The-Synergy-Driving-Digital-Transformation-In-Enterprises.jpg",
    },
    {
      title: "AI in Healthcare: Improving Diagnostics and Outcomes",
      desc: "From early detection to patient care, AI is revolutionizing healthcare.",
      full: "AI in healthcare is enabling early diagnosis of diseases, personalized treatment plans, and predictive analytics. Machine learning models are helping doctors improve patient outcomes and reduce errors.",
      img: "https://media.licdn.com/dms/image/v2/D5612AQHf63ijupDVsA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1707018163137?e=2147483647&v=beta&t=FMr_4yxNXLYtrynVwxJPTpDQBt1UQnK_A5sEfxc2ZEk",
    },
    {
      title: "Carving Excellence: 640+ Successful Placements",
      desc: "Our journey in transforming careers and driving growth.",
      full: "Chiselon has successfully placed more than 640 candidates across industries. Our approach blends deep industry knowledge, client needs assessment, and personalized candidate support to ensure long-term success.",
      img: "https://www.cbit.ac.in/wp-content/uploads/2019/03/Placements-CBIT.png",
    },
  ];

const handleSubscribe = () => {
  // Simple email regex for validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email) {
    setMessage("⚠️ Please enter your email.");
    return;
  }

  if (!emailRegex.test(email)) {
    setMessage("⚠️ Please enter a valid email address.");
    return;
  }

  // Here you would send the email to your backend or API
  console.log("Subscribed with email:", email);
  setMessage("🎉 Thank you for subscribing!");
  setEmail(""); // Clear input
};


  return (
    <div className="blog-clean">
      {/* Hero Section */}
      <header className="blog-hero">
        <h1>Insights, Innovation & Ideas That Matter</h1>
        <p>
          Explore the latest trends in recruitment, technology, and digital
          transformation. Stay ahead with Chiselon.
        </p>
      </header>

      {/* Blog Grid */}
      <section className="blog-grid">
        {posts.map((post, index) => (
          <article key={index} className="blog-card">
            <img src={post.img} alt={post.title} />
            <div className="card-content">
              <h2>{post.title}</h2>
              <p>{post.desc}</p>

              {openIndex === index && <p className="full-post">{post.full}</p>}

              <button
                className="read-more-btn"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                {openIndex === index ? "Show Less ↑" : "Read More →"}
              </button>
            </div>
          </article>
        ))}
      </section>

      {/* Subscribe */}
      <section className="subscribe">
        <h2>📩 Stay Ahead of the Curve</h2>
        <p>Get Chiselon’s insights delivered straight to your inbox.</p>
        <div className="subscribe-box">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleSubscribe}>Subscribe</button>
        </div>
        {message && <p className="subscribe-message">{message}</p>}
      </section>
    </div>
  );
};

export default Blog;
