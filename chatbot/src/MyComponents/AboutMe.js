import Card from 'react-bootstrap/Card';
import './AboutMe.css'
function AboutMe() {
  return (
    <Card className="tushar-card">
    <Card.Header><h2>Hi, I'm Tushar Burade!</h2></Card.Header>
        
      <Card.Body>
          <p>
            I love chatting with machines, and for the past five years, I've
            been diving deep into machine learning. I'm lucky enough to make a
            living doing what I adore—talking to these incredible machines using
            Python, which is like a second language to me.
          </p>

          <p>
            My typical day involves lots of cool stuff! I research, design, run
            experiments, evaluate results, and do a ton of coding. But when I'm
            not glued to tech, I'm all about the butterfly effect—I believe
            small actions can lead to big impacts. I enjoy reading, exploring
            various topics, and playing cricket or football for fun and a good
            break.
          </p>

          <p>
            In a nutshell, I'm all about the magic of tech and creativity coming
            together. I'm endlessly curious and always up for new challenges in
            the world of data science and machine learning. Can't wait to
            explore more!
          </p>
          
          </Card.Body>
    </Card>
  );
}

export default AboutMe;