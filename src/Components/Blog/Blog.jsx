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
      link: "https://www.weareams.com/p/102j87v/the-future-of-rpo-how-ai-is-transforming-talent-acquisition/" // example link
    },
    {
      title: "How Cloud & DevOps Accelerate Digital Transformation",
      desc: "Cloud-native solutions are helping businesses scale like never before.",
      full: "Cloud and DevOps work hand in hand to speed up software delivery, enhance collaboration, and ensure scalability. Modern businesses rely on containerization, CI/CD pipelines, and automation to thrive in digital transformation.",
      img: "https://www.heliossolutions.co/blog/wp-content/uploads/2018/11/Devops-And-Cloud-The-Synergy-Driving-Digital-Transformation-In-Enterprises.jpg",
      link: "https://appinventiv.com/blog/how-cloud-and-devops-accelerating-digital-transformation/"
    },
    {
      title: "AI in Healthcare: Improving Diagnostics and Outcomes",
      desc: "From early detection to patient care, AI is revolutionizing healthcare.",
      full: "AI in healthcare is enabling early diagnosis of diseases, personalized treatment plans, and predictive analytics. Machine learning models are helping doctors improve patient outcomes and reduce errors.",
      img: "https://media.licdn.com/dms/image/v2/D5612AQHf63ijupDVsA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1707018163137?e=2147483647&v=beta&t=FMr_4yxNXLYtrynVwxJPTpDQBt1UQnK_A5sEfxc2ZEk",
      link: "https://www.weforum.org/stories/2024/09/ai-diagnostics-health-outcomes/"
    },
    {
      title: "Carving Excellence: 640+ Successful Placements",
      desc: "Our journey in transforming careers and driving growth.",
      full: "Chiselon has successfully placed more than 640 candidates across industries. Our approach blends deep industry knowledge, client needs assessment, and personalized candidate support to ensure long-term success.",
      img: "https://www.cbit.ac.in/wp-content/uploads/2019/03/Placements-CBIT.png",
      link: "https://www.chiselon.com/career-success-stories"
    },
    {
    title: "AI-Powered Imaging: Transforming Radiology",
    desc: "Machine learning algorithms are enhancing medical imaging analysis.",
    full: "AI-powered imaging tools help radiologists detect anomalies faster and with greater accuracy. These solutions assist in early diagnosis of conditions such as tumors and cardiovascular diseases.",
    img: "https://nextgeninvent.com/wp-content/uploads/2025/02/use-of-ai-in-radiology.jpg",
    link: "https://deephealth.com/insights/future-trends-in-ai-powered-radiology/"
  },
  {
    title: "Predictive Analytics in Patient Care",
    desc: "Leveraging AI to predict patient outcomes and reduce risks.",
    full: "Predictive analytics models can forecast disease progression, readmission risks, and treatment effectiveness, allowing healthcare providers to make data-driven decisions.",
    img: "https://daxg39y63pxwu.cloudfront.net/images/blog/predictive-analytics-in-healthcare-projects/Predictive_Analytics_in_Healthcare_Projects.png",
    link: "https://www.foreseemed.com/predictive-analytics-in-healthcare"
  },
  {
    title: "Robotics and AI in Surgery",
    desc: "Robotic-assisted surgeries are improving precision and recovery times.",
    full: "Combining AI and robotics, surgeons can perform minimally invasive procedures with high precision. AI guides robotic instruments, reduces errors, and enhances patient recovery.",
    img: "https://media.licdn.com/dms/image/v2/D5612AQGq8bWZodoGGQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1710548218831?e=2147483647&v=beta&t=yiqCTNCTBMIYL3KQJj4ubGvwP06oeZYn-qUwcsGiyiE",
    link: "https://www.merillife.com/blogs/artificial-intelligence-and-robotic-surgery"
  },
  {
    title: "AI for Drug Discovery",
    desc: "Accelerating the discovery of new drugs with artificial intelligence.",
    full: "AI algorithms analyze chemical compounds and biological data to identify potential drug candidates faster than traditional methods, significantly reducing development time and costs.",
    img: "https://images.nature.com/lw1200/magazine-assets/d41586-018-05267-x/d41586-018-05267-x_15789480.jpg",
    link: "https://www.cas.org/solutions/biofinder-discovery-platform?utm_campaign=GLO_GEN_ANY_BDP_LDG&utm_medium=SCH_SUP_PAD&utm_source=Google_Neutral&utm_content=APAC-Other&gad_source=1&gad_campaignid=21547860436&gbraid=0AAAAAD_fAwCNLQhwYdAvWCQAugGWFcDKX&gclid=CjwKCAjwtrXFBhBiEiwAEKen12KRMlRvFs-BRo8n0-ZPDDubw7IahDH4qmVJW0WQIV7YhU8VLnEHZhoC7QAQAvD_BwE"
  }
  ];

  const handleSubscribe = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      setMessage("⚠️ Please enter your email.");
      return;
    }

    if (!emailRegex.test(email)) {
      setMessage("⚠️ Please enter a valid email address.");
      return;
    }

    console.log("Subscribed with email:", email);
    setMessage("🎉 Thank you for subscribing!");
    setEmail("");
  };

  return (
    <div className="blog-clean">
      <header className="blog-hero">
        <h1 style={{color:"black"}}>Insights, Innovation & Ideas That Matter</h1>
        <p style={{color:"black"}}>
          Explore the latest trends in recruitment, technology, and digital
          transformation. Stay ahead with Chiselon.
        </p>
      </header>

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

              {/* External Link */}
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="full-article-link"
              >
                🔗 Go to full article
              </a>
            </div>
          </article>
        ))}
      </section>

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
