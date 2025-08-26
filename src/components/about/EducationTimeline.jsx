import React from "react";
import { Timeline } from "./TimeLine";
import "./EducationTimeline.css"; // import the CSS file

export function EducationTimeline() {
  const data = [
    {
      title: "2019 – 2020",
      content: (
        <div>
          <p className="edu-text">
            <strong>10th Standard</strong> — Passout
          </p>
          <p className="edu-detail">School: Lotus The Real School</p>
          <p className="edu-detail">Percentage: 10 CGPA</p>
        </div>
      ),
    },
    {
      title: "2020 – 2022",
      content: (
        <div>
          <p className="edu-text">
            <strong>12th Intermediate</strong> — Passout
          </p>
          <p className="edu-detail">College: Sri Chaitanya Junior College</p>
          <p className="edu-detail">Percentage: 93%</p>
        </div>
      ),
    },
    {
      title: "2022 – Present",
      content: (
        <div>
          <p className="edu-text">
            <strong>B.Tech</strong>
          </p>
          <p className="edu-detail">
            Institute: Swarna Bharathi Institute of Science and Technology
          </p>
          <p className="edu-detail">Percentage: —</p>
        </div>
      ),
    },
  ];

  return (
    <div className="edu-timeline-container">
      <Timeline data={data} />
    </div>
  );
}
