import {Container,Row, Col} from 'react-bootstrap';
import {ArrowRightCircle} from 'react-bootstrap-icons';
import headerImg from '../assets/img/header-img.png';
import {useState,useEffect} from 'react';
import 'animate.css';
import TrackVisibility from 'react-on-screen';


const Banner = () => {
   
  const [loopNum, setLoopNum]=useState(0);
  const [isDeleting, setIsDeleting]=useState(false);
  const toRotate = ['Web Developer','Front-End Web Development','UI/UX Developer'];
  const [text,setText] = useState('');
  const [delta, setDelta] = useState(300-Math.random()*100);
  const period= 2000;
  
  useEffect(()=>{
    let ticker = setInterval(()=>{
        tick();
    }, delta )

    return () => {clearInterval(ticker)};
  }, [text] )

  const tick = () =>{
    let i=loopNum %toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring (0,text.length-1):fullText.toString(0,text.length + 1);

    setText(updatedText);

    if(isDeleting){
        setDelta(prevDelta=>prevDelta/2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    } 
  }

   return (
    <section className="banner" id="home">
     <Container>
       <Row className="align-items-center">
         <Col xs={12} md={6} xl={7}>
         <TrackVisibility>
         {({ isVisible }) =>
         <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
           <span className="tagline">Welcome to my Portfolio</span>
           <h1>{`Hi! I am Somya Negi `}<span className="wrap">{text}</span></h1>
            <p>Hi, I’m Somya, an 18-year-old Computer Science (Hons.) student at the College of Vocational Studies, Delhi University. I am passionate about pursuing a career in front-end and full-stack development, with proficiency in HTML, CSS, and a commitment to continually improving my skills in JavaScript and React.

            I have hands-on experience developing an e-commerce website during an internship at Internship Studio, where I applied my technical knowledge to real-world projects. In addition to front-end technologies, I am familiar with OOP concepts, C++, and Python, which complement my skill set as I strive to become a well-rounded developer.
            
            I am always looking to expand my expertise by working on diverse projects and gaining practical experience through internships. My goal is to continuously grow and contribute to impactful development work in the tech industry.</p>
            <button onClick={()=>console.log('connect')}>Let's Connect <ArrowRightCircle size={25}/></button>
            </div>}
            </TrackVisibility>
        </Col>
        <Col xs={12} md={6} xl={5}>
          <img src={headerImg} alt="header img" className="banner-img"/>
        </Col>
       </Row>
     </Container>
    
    </section>
   )
}

export default Banner;