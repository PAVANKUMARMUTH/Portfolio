import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={require("../../Assets/tft.png")}
              isBlog={false}
              title="Text File Translator"
              description="Built a web application supporting translation in 50+ languages, capable of processing up to 100-page documents 
in under 2 minutes. 
 Achieved 95% translation accuracy, ensuring high-quality results even with complex texts. 
 Optimized processing performance by 40%, improving scalability and speed for large files. 
 Enhanced UI/UX, resulting in a 20% increase in user retention through a smoother and more intuitive translation 
experience."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={require("../../Assets/ocr.png")}
              isBlog={false}
              title="Medical Prescription Optical Character Recognition "
              description="Developed an OCR solution to convert handwritten and printed prescriptions into machine-readable text with 
90%+ accuracy. 
 Processed up to 200 prescriptions per hour, reducing manual data entry errors by 80% and boosting workflow 
efficiency. 
 Implemented real-time data extraction and validation, cutting prescription data processing time by 30%. 
Integrated with existing healthcare systems for seamless data transfer and reduced manual intervention. 
"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
