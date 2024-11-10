import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png";  // Direct import
import projImg2 from "../assets/img/Project2.png";    // Direct import
import projImg3 from "../assets/img/Project3.png";    // Direct import
import projImg4 from "../assets/img/Project4.png";    // Direct import
import projImg5 from "../assets/img/Project5.png";    // Direct import
import colorSharp2 from "../assets/img/color-sharp2.png";
import ProjectCard from './ProjectCard';

const Project = () => {

   const projects = [
     { 
       title: 'PGLife Website | Front-End Development Project',
       description: 'I developed a responsive, interactive PG Life website using HTML, CSS, JavaScript, and Bootstrap',
       imgUrl: projImg1, 
       linkUrl:'https://pglife-website.netlify.app/',
     },
     { 
       title: 'Advanced React Data Table with Server-Side Pagination and Persistent Row Selection',
       description: 'Developed a React app with Create React App, VITE, TypeScript, and PrimeReact’s DataTable',
       imgUrl: projImg2,   
       linkUrl:'https://tablemanager.netlify.app/',
     },
      {
       title: 'Healthcare Service Provider App - React-based Service Management System',
       description: 'Developed a responsive React web app for healthcare service management',
       imgUrl: projImg3,
       linkUrl:'https://healthservicesapp.netlify.app/',
     },
     { 
       title: 'E-Commerce Website (Frontend: HTML, CSS, and JavaScript)',
       description: 'I created a front-end e-commerce website with pages for Home, Category, Cart, etc.',
       imgUrl: projImg4, 
       linkUrl:'https://shoppersproject.netlify.app/',
     },
     { 
       title: 'YouTube Clone Project (HTML5 And CSS)',
       description: 'Developed a single-page YouTube clone using HTML and CSS',
       imgUrl: projImg5, 
       linkUrl:'https://github.com/Somya-Negi/yt-clone',
     }
    ]

   return (
       <section className="project" id='project'>
        <Container>
          <Row>
          <Col>
            <h2>Projects</h2>
            <p></p>
            <Tab.Container id='projects-tabs' defaultActiveKey='first' >
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Tab.Content>
                 <Tab.Pane eventKey='first'>
                   <Row>
                     {
                        projects.map((project, index) => {
                            return (
                                <ProjectCard
                                  key={index}
                                  {...project}   // Pass all project properties, including imgUrl
                                />
                            );
                        })
                     }
                   </Row>
                 </Tab.Pane>
                 <Tab.Pane eventKey='second'>
                 As a front-end developer, I have successfully developed and deployed a range of projects utilizing core web technologies such as HTML, CSS, JavaScript, React, and Bootstrap. These projects showcase my ability to create responsive, user-friendly, and interactive web applications with a strong focus on design and functionality.

                  PGLife Website | Front-End Development Project
                  A dynamic and responsive website built with HTML, CSS, JavaScript, and Bootstrap. The project features a visually engaging homepage with a carousel and a user-friendly dashboard for managing content. I focused on ensuring seamless navigation across devices through a responsive navbar and toggle button for an optimal mobile experience.

                  Advanced React Data Table with Server-Side Pagination and Persistent Row Selection
                  Developed using React, VITE, TypeScript, and PrimeReact’s DataTable component, this project features a data table with server-side pagination and persistent row selection. It provides a comprehensive and efficient solution for managing large datasets with smooth user interactions.

                  Healthcare Service Provider App - React-based Service Management System
                  A comprehensive web application for managing healthcare services. Built with React, the app ensures responsive design, easy navigation, and an intuitive interface for service providers to manage and track patient data. The project emphasizes performance optimization and user experience for both healthcare providers and patients.

                  E-Commerce Website (Frontend: HTML, CSS, and JavaScript)
                  Created a fully functional front-end for an e-commerce platform with pages for products, categories, and user accounts. Utilizing HTML, CSS, and JavaScript, I focused on developing a clean, responsive design, and integrating interactive elements such as product sliders and filters.

                  YouTube Clone Project (HTML5 and CSS)
                  A single-page YouTube clone built using HTML5 and CSS to replicate the core functionality and design of the YouTube interface. This project demonstrates my understanding of UI design and front-end technologies for creating interactive and visually appealing layouts.

                  These projects collectively demonstrate my expertise in front-end technologies and my ability to deliver projects that are visually appealing, responsive, and functional. My skills in creating optimized, user-centric web applications are reflected across these diverse projects, each tailored to meet specific business and user needs.
                 </Tab.Pane>
                 <Tab.Pane eventKey='third'>
                 A highly motivated and results-driven front-end developer with a strong foundation in HTML, CSS, JavaScript, and modern front-end frameworks like React, Vue.js, and Angular. Experienced in creating responsive, interactive, and visually appealing websites and web applications. Skilled in leveraging tools such as Bootstrap, Sass, and Tailwind CSS to design seamless, user-centric interfaces. Adept at optimizing web performance, ensuring cross-browser compatibility, and integrating RESTful APIs for dynamic content. Passionate about staying updated with the latest web development trends and best practices, including web accessibility, performance optimization, and version control with Git. Able to collaborate effectively in fast-paced environments, delivering high-quality projects on time while maintaining a keen eye for detail and user experience.
                 </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
          </Col>
          </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2} alt='background'/>
       </section>
   );
}

export default Project;
