import React, { useState, useEffect } from "react";

import { Container, Row, Col, Card } from "react-bootstrap";
import "./Portfolio.css"; // Import the CSS file
import Prompts from "./prompts.gif";
import FineTune from "./fine-tune.gif";
import VideoAnnotation from "./video-annotation-service.gif";
import WebScraping from "./web-scraping.gif";

const Portfolio = () => {
  const [maxHeight, setMaxHeight] = useState("auto");

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      // Find the maximum height among the cards
      const cards = document.querySelectorAll(".my-card-p");
      let max = 0;
      cards.forEach((card) => {
        const height = card.getBoundingClientRect().height;
        if (height > max) {
          max = height;
        }
      });
      setMaxHeight(`${max}px`);
    }, 1000); // Delay of 1 second (1000 milliseconds)

    return () => clearTimeout(timeoutId); // Clean up timeout on unmount or re-run
  }, []);

  return (
    <Container fluid className="my-container-p">
      <Row className="my-row-p">
        <Col sm={12} md={6} lg={6} xl={6} xxl={3} className="my-col-p">
          <Card className="my-card-p" style={{ height: maxHeight }}>
            <Card.Img
              variant="top"
              src={Prompts}
              alt="Image description"
              style={{ height: "300px" }}
            />
            <Card.Body>
              <Card.Title>Prompt Engineering</Card.Title>
              <Card.Text>
                <p>
                  In the world of artificial intelligence, where machines are
                  learning to understand and interact with the human world,
                  prompt engineering has emerged as a critical skill. It is the
                  art and science of crafting the perfect instructions,
                  questions, and prompts for language models, unlocking their
                  full potential and driving cutting-edge applications like
                  resume parsing.
                </p>
                <p>
                  Through careful prompt engineering, I have mastered the
                  language of AI, empowering me to build innovative and
                  impactful applications. My expertise lies in crafting prompts
                  that precisely guide language models to perform specific tasks
                  with remarkable accuracy. This includes my work on a resume
                  parser, a powerful tool that automates the extraction and
                  analysis of essential information from resumes, saving time
                  and resources for businesses.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={6} xl={6} xxl={3} className="my-col-p">
          <Card className="my-card-p" style={{ height: maxHeight }}>
            <Card.Img
              variant="top"
              src={FineTune}
              alt="Fine-Tune"
              style={{ height: "300px" }}
            />
            <Card.Body>
              <Card.Title>Fine Tuning</Card.Title>
              <Card.Text>
                <p>
                  Fine-tuning in machine learning refines pre-trained models for
                  specific tasks, adapting them to new data without starting
                  from scratch. This process adjusts parameters to excel in
                  targeted areas, proving valuable for transfer learning in
                  various applications..
                </p>
                <p>
                  In recent projects, I've employed fine-tuning for multi-label
                  and document classification, optimizing models to predict
                  multiple labels accurately and categorize documents
                  efficiently. Additionally, I've utilized this technique for
                  object detection, enabling the identification of entities
                  within images and PDFs. These ventures underscore
                  fine-tuning's adaptability across diverse domains, showcasing
                  its efficacy in refining machine learning models' performance.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={6} xl={6} xxl={3} className="my-col-p">
          <Card className="my-card-p" style={{ height: maxHeight }}>
            <Card.Img
              variant="top"
              style={{ height: "300px" }}
              src={VideoAnnotation}
              alt="Video-Annotation"
            />
            <Card.Body>
              <Card.Title>Video Annotation</Card.Title>
              <Card.Text>
                Within the domain of video annotation, a versatile tool has been
                developed to meticulously label video content while seamlessly
                integrating object detection models for enhanced learning
                capabilities. Video annotation stands as a meticulous process
                involving the tagging and categorization of elements within
                videos, aiding machine learning models in understanding visual
                data. This tool not only streamlines manual annotation tasks but
                also facilitates model learning by incorporating object
                detection algorithms. By converging these functionalities, the
                tool adeptly identifies and labels diverse objects, elevating
                accuracy and efficiency in comprehending video content. This
                synergistic approach between manual annotations and machine
                learning endeavors to drive advancements in computer vision,
                enabling systems to glean invaluable insights from intricate
                video datasets.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={6} xl={6} xxl={3} className="my-col-p">
          <Card className="my-card-p" style={{ height: maxHeight }}>
            <Card.Img
              variant="top"
              src={WebScraping}
              alt="Web Scraping"
              style={{ height: "300px" }}
            />
            <Card.Body>
              <Card.Title>Web Scraping</Card.Title>
              <Card.Text>
                My expertise lies in proficiently executing web scraping
                solutions, catering to clients by automating data entry and
                collection processes. Through tailored web scraping
                methodologies, I've facilitated seamless extraction of targeted
                information from various online sources. This approach not only
                expedites data acquisition but also ensures accuracy and
                consistency in the collected data sets. By automating data entry
                tasks, I've empowered businesses to streamline their operations,
                saving time and resources while maintaining data integrity. My
                commitment to refining these processes has resulted in
                customized solutions that efficiently navigate diverse online
                platforms, enabling clients to access and utilize valuable data
                critical for informed decision-making and business growth.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Portfolio;
