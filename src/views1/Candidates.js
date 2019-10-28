import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  Card,
  ListGroup,
  Container,
  ListGroupItem,
  Button
} from "react-bootstrap";

export default function Candidates() {
  const [candidates, setCandidates] = useState([]);
//   console.log("s", candidates);

  useEffect(() => {
    const getCandidates = async () => {
      const response = await fetch("http://localhost:3001/candidates");
      const data = await response.json();
      setCandidates(data);
    };
    getCandidates();
  }, []);

  const onDeleteCard = async (e, id) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:3001/candidates/${id}`, {
      header: {
        "content-type": "application/json"
      },
      method: "DELETE"
    });
    // console.log("object", response);
    if (response.status === 200) {
      const newCandidates = candidates.filter(candidate => candidate.id !== id);
      setCandidates(newCandidates);
    }
  };

  return (
    <Container fluid>
      <Row>
        {candidates.map(
          ({
            first_name,
            last_name,
            country,
            company,
            id,
            photo_url,
            job_title
          }) => {
            return (
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={photo_url} />
                <Card.Body>
                  <Card.Title>
                    {first_name} {last_name}
                  </Card.Title>
                  <Card.Text>{job_title}</Card.Text>
                  <Card.Text>
                    Company:
                    {company}
                  </Card.Text>
                  <Card.Text>
                    Country:
                    {country}
                  </Card.Text>
                  <Button variant="primary" href={`/candidates/${id}`}>Edit</Button>
                  <Button
                    variant="danger"
                    style={{ color: "white" }}
                    onClick={e => onDeleteCard(e, id)}
                  >
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            );
          }
        )}
      </Row>
    </Container>
  );
}
