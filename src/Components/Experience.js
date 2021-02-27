import Card from 'react-bootstrap/Card';
import './styles.css';

function Experience() {
    return (
			<Card className="cardInfo rounded">
				<Card.Body>
				<Card.Title>
					<i className="fas fa-suitcase fa-fw icons"></i> Professional experience
				</Card.Title>
				<br/>
				<Card.Subtitle>Social service</Card.Subtitle>
				<br/>
				<Card.Text><i className="far fa-calendar-alt fa-fw icons"></i> 2012 - 2013</Card.Text>
				<Card.Text className="text-justify">Assistant at the tv and radio transmitter of the 53 channel in Universidad Autónoma de Nuevo León.</Card.Text>
				<hr/>
				<Card.Subtitle>Professional practices</Card.Subtitle>
				<br/>
				<Card.Text><i className="far fa-calendar-alt fa-fw icons"></i> 2013 </Card.Text>
				<Card.Text className="text-justify">Educational assistant at the signals and systems laboratory in Facultad de Ingeniería Mecánica y Eléctrica, Universidad Autónoma de Nuevo León.</Card.Text>
				<hr/>
				<Card.Subtitle>Professor</Card.Subtitle>
				<br/>
				<Card.Text><i className="far fa-calendar-alt fa-fw icons"></i> 2018 - 2019</Card.Text>
				<Card.Text className="text-justify">Professor at the engineering field in the UVM Campus Cumbres. </Card.Text>
				<hr/>
				<Card.Subtitle>Software developer</Card.Subtitle>
				<br/>
				<Card.Text><i className="far fa-calendar-alt fa-fw icons"></i> 2019 <span className="badge header text-white">Current job</span></Card.Text>
				<Card.Text className="text-justify">.NET Development of web apps and web APIs at Softtek.</Card.Text>
			</Card.Body>
			</Card>
    )
}

export default Experience;