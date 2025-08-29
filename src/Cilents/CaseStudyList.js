import React from "react";
import "./CaseStudies.css"; // make sure to include the CSS file

const caseStudiesData = [
  {
    title: "Recruitment Process Outsourcing (RPO)",
    challenge: "A global IT consulting firm needed to close 100+ technical roles in record time, across multiple geographies.",
    solution: [
      "Deployed a dedicated RPO team.",
      "Built an efficient hiring pipeline with pre-vetted candidates.",
      "Leveraged internal technical screening to ensure only top profiles reached clients."
    ],
    outcome: [
      "100+ roles filled in less than 3 months.",
      "Average closure time reduced to 26 days.",
      "Client reported a 90%+ satisfaction rate and continued engagement with Chiselon."
    ],
    logo: "https://arisecareer.com/wp-content/uploads/2024/05/Recruitment-Process-Outsourcing.webp",
    website: "https://www.manpowergroup.co.in/recruitment-process-outsourcing.html"
  },
  {
    title: "AI-Powered Healthcare Solution (AestheTech)",
    challenge: "Dermatology clinics struggled with manual processes, diagnostic delays, and lack of imaging support.",
    solution: [
      "Deployed AestheTech, our in-house AI-powered clinic management system.",
      "Integrated imaging modules for better diagnosis.",
      "Added scheduling, billing, and AI-assist for junior doctors."
    ],
    outcome: [
      "40% reduction in patient wait times.",
      "Improved diagnostic accuracy with AI-based imaging.",
      "Clinics reported higher patient satisfaction and operational efficiency."
    ],
    logo: "https://www.doctorsapp.in/uploads/blog_image/images/250325_1587_blog_image.png",
    website: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12159716/"
  },
  {
    title: "On-Demand Healthcare Staffing (Quantum Quest)",
    challenge: "Hospitals and clinics faced acute nursing shortages, leading to gaps in patient care.",
    solution: [
      "Introduced Quantum Quest (SureCare) – “Uber for Nurses” platform.",
      "Enabled real-time nurse-to-patient/hospital matching.",
      "Integrated compliance and secure payment modules."
    ],
    outcome: [
      "Hospitals gained access to a flexible nursing workforce.",
      "Nurses benefited from flexible work opportunities.",
      "Improved patient care delivery in multiple hospitals."
    ],
    logo: "https://medicalbuyer.co.in/wp-content/uploads/2023/06/Global-healthcare-staffing-market-to-reach-USD-57-billion-by-2030.png",
    website: "https://www.truecare24.com/staffing-on-demand/"
  },
  {
    title: "HRMS Implementation",
    challenge: "A mid-sized consulting firm struggled with manual HR processes, tracking employee hours, and managing leave.",
    solution: [
      "Implemented Chiselon’s HRMS with integrated timesheet and leave management.",
      "Added dashboards for HR and leadership reporting."
    ],
    outcome: [
      "70% reduction in manual HR workload.",
      "Improved accuracy in payroll and timesheet tracking.",
      "Higher employee satisfaction due to transparent processes."
    ],
    logo: "https://blog.darwinbox.com/hubfs/Rid%20Yourself%20of%20Repetitive%20and%20Recurring%20HR%20Tasks_%20HRMS%20System%20Implementation.jpg",
    website: "https://www.hrmsworld.com/project-managing-hrms-implementation.html"
  }
];

const CaseStudyList = () => {
  return (
    <div className="case-studies-wrapper">
      <h2 className="section-title">Case Studies</h2>
      <div className="case-studies">
        {caseStudiesData.map((cs, index) => (
          <div className="case-study-card" key={index}>
            <h3>{cs.title}</h3>

            {/* Logo with clickable link */}
            {cs.logo && cs.website && (
              <a href={cs.website} target="_blank" rel="noopener noreferrer">
                <img
                  src={cs.logo}
                  alt={`${cs.title} Logo`}
                  className="case-study-logo"
                />
              </a>
            )}

            <p>
              <strong>Client Challenge:</strong> {cs.challenge}
            </p>

            <div className="solution">
              <strong>Chiselon Solution:</strong>
              <ul>
                {cs.solution.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="outcome">
              <strong>Outcome:</strong>
              <ul>
                {cs.outcome.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudyList;
