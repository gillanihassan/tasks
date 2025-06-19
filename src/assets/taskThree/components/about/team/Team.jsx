import UserOne from "../../../images/about/team/user-one.png";
import UserTwo from "../../../images/about/team/user-two.png";
import UserThree from "../../../images/about/team/user-three.png";
import UserFour from "../../../images/about/team/user-four.png";
import UserFive from "../../../images/about/team/user-five.png";
import styles from "./styles.module.css";

import { Card, Row, Col } from "react-bootstrap";

const TeamGrid = () => {
  const teamMembers = [
    {
      name: "Trine Bjørnsen",
      title: "CEO",
      email: "trine@sklls.ai",
      img: UserOne,
    },
    {
      name: "Ole Paulsen",
      title: "Executive Chairman",
      email: "ole@sklls.ai",
      img: UserTwo,
    },
    {
      name: "Arne Rannestad",
      title: "Business Development",
      email: "arne.rannestad@sklls.ai",
      img: UserThree,
    },
    {
      name: "Håkon Hapnes Strand",
      title: "Chief Technology Officer",
      email: "haakon@sklls.ai",
      img: UserFour,
    },
    {
      name: "Trine Bjørnsen",
      title: "CEO",
      email: "haakon@sklls.ai",
      img: UserFive,
    },
    {
      name: "Håkon Hapnes Strand",
      title: "Chief Technology Officer",
      email: "haakon@sklls.ai",
      img: UserFour,
    },
    {
      name: "Trine Bjørnsen",
      title: "CEO",
      email: "trine@sklls.ai",
      img: UserOne,
    },
    {
      name: "Arne Rannestad",
      title: "Business Development",
      email: "arne.rannestad@sklls.ai",
      img: UserThree,
    },
  ];

  return (
    <div className={`container-xxl ${styles.mainContainer}`}>
      <Row>
        {teamMembers.map((member, index) => (
          <Col key={index} xs={12} md={6} lg={3} className="mb-4">
            <Card className="py-2 border-0">
              <Card.Img variant="top" src={member.img} alt={member.name} />
              <Card.Body>
                <Card.Title className={`mb-0 ${styles.cardName}`}>
                  {member.name}
                </Card.Title>
                <Card.Text className={`mb-1 ${styles.cardTitle}`}>
                  {member.title}
                </Card.Text>
                <Card.Text className={`${styles.cardEmail}`}>
                  {member.email}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default TeamGrid;
