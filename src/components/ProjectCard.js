import { Col } from "react-bootstrap";

const ProjectCard = ({ title, description, imgUrl, linkUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        {/* Make sure the anchor tag wraps the entire div containing the image and text */}
        <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="project-link">
          <img src={imgUrl} alt={`Project image for ${title}`} className="project-img"/>
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </a>
      </div>
    </Col>
  );
};

export default ProjectCard;
