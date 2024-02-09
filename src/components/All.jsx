import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const All = () => {
  const cards = [
    {
      id: 1,
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/04/javascript-animated-image.jpg",
      title: "Master JavaScript Frontend Roadmap: From Novice to Expert [2024]",
      description:
        "Are you eager to learn JavaScript? Want to dive deep into the JavaScript frontend roadmap?",
    },
    {
      id: 2,
      img: "https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Best-Software-Tools-for-Writing-Elevate-Your-Writing-Skills.webp",
      title: "Best Software Tools for Writing: Elevate Your Writing Skills",
      description:
        "Whether you’re penning your next bestseller, crafting an engaging blog post, or just jotting down",
    },
    {
      id: 3,
      img: "https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Top-Digital-Marketing-Trends.webp",
      title: "Top Digital Marketing Trends for 2024",
      description:
        "It’s a new year. It’s time for all digital marketers to amp up their digital marketing game strategies for this year",
    },
    {
      id: 4,
      img: "https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Innovate-or-Stagnate-Comprehensive-Generative-AI-Terms-For-Enthusiasts.webp",
      title:
        "Innovate or Stagnate: Comprehensive Generative AI Terms For Enthusiasts",
      description:
        "Generative AI is essential in many fields today to help professionals survive in an era of tech",
    },
    {
      id: 5,
      img: "https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Exciting-Project-Ideas-for-Final-Year-B-Tech-Students.webp",
      title:
        "8 Exciting Project Ideas for Final Year B Tech Students [2024].Projects Available!!!!!",
      description:
        "If you are a final year B Tech student, we can understand your frustration for choosing one project out of others",
    },
    {
      id: 6,
      img: "https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Best-Project-Ideas-for-Robotic-Applications-Including-All-3-Levels.webp",
      title:
        "Best Project Ideas for Robotic Applications – Including All 3 Levels [2024]",
      description:
        "Real-world projects are one of the important things that you have to do to improve your skillset and resume",
    },
    {
      id: 7,
      img: "https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Top-Free-Courses-by-GUVI-Best-Upskilling-Courses-in-Tech.webp",
      title:
        "Top 5 Free Courses by GUVI: Best Upskilling Courses in Tech [2024]",
      description:
        "Does waking up to the news of mass layoffs every morning make you anxious about your future too? As a college student",
    },
    {
      id: 8,
      img: "https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-01-1.png",
      title:
        "Journey Mapping in Design Thinking: Important Things to Do [2024]",
      description:
        "UI/UX designing is not just about designing and creating user interfaces. The domain is so populated right now",
    },
    {
      id: 9,
      img: "https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Important-Things-to-Consider-Before-Joining-Digital-Marketing-Course.webp",
      title:
        "10 Important Things to Consider Before Joining Digital Marketing Course",
      description:
        "Digital marketing is an exceptionally dynamic field that keeps on evolving with the changing trends,",
    },
  ];

  return (
    <>
      <div
        className="container"
        style={{ backgroundColor: "rgb(247, 242, 236)" }}
      >
        <div className="row">
          {cards.map((card) => (
            <div key={card.id} className="col-lg-4 col-md-4 col-sm-6 mb-4">
              {/* Adjust column classes based on your design requirements */}
              <div className="card" style={{ width: "100%", height: "100%" }}>
                <img
                  src={card.img}
                  className="card-img-top img"
                  alt="..."
                  style={{ height: "100%", objectFit: "cover" }}
                ></img>
                <div className="card-body">
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text">{card.description}</p>
                  <Link to="#" className="btn btn-primary">
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default All;
