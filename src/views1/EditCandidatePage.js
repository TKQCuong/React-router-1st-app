import React, { useEffect, useState } from "react";
import { Form, Button, Col, InputGroup, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

export default function EditCandidatePage() {
  const [validated, setValidated] = useState(false);
  const [candidates, setCandidates] = useState({});

  const { id } = useParams();
  console.log("hi", id);

  useEffect(() => {
    const editCandidate = async () => {
      const response = await fetch(`http://localhost:3001/candidates/` + id);
      const data = await response.json();
      console.log({ data });
      setCandidates(data);
    };
    editCandidate();
  }, []);

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    const config = {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(candidates)
    };

    const response = await fetch(
      `http://localhost:3001/candidates/` + id,
      config
    );
    console.log({ response });
  };
  console.log(candidates);

  return (
    <Container>
      <Row>
        <Col>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Row>
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  value={candidates.first_name}
                  onChange={event =>
                    setCandidates({ ...candidates, first_name: event.target.value })
                  }
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please enter a First name.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Last name"
                  value={candidates.last_name}
                  onChange={event =>
                    setCandidates({ ...candidates, last_name: event.target.value })
                  }
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please enter a Last name.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustomEmail">
                <Form.Label>Email</Form.Label>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    type="text"
                    value={candidates.email}
                    placeholder="Email"
                    aria-describedby="inputGroupPrepend"
                    required
                    onChange={event =>
                      setCandidates({ ...candidates, email: event.target.value })
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter a valid email
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="3" controlId="validationCustom05">
                <Form.Label>Job title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Job title"
                  required
                  value={candidates.job_title}
                  onChange={event =>
                    setCandidates({ ...candidates, job_title: event.target.value })
                  }
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid occupation
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="3" controlId="validationCustom04">
                <Form.Label>Company</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Company"
                  required
                  value={candidates.company}
                  onChange={event =>
                    setCandidates({ ...candidates, company: event.target.value })
                  }
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid company name
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="6" controlId="validationCustom03">
                <Form.Label>Country</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Country"
                  required
                  value={candidates.country}
                  onChange={event =>
                    setCandidates({ ...candidates, country: event.target.value })
                  }
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid Country
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="6" controlId="validationCustom03">
                <Form.Label>Photo (optional)</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Photo"
                  required
                  value={candidates.photo_url}
                  onChange={event =>
                    setCandidates({ ...candidates, photo_url: event.target.value })
                  }
                />
                <Form.Control.Feedback type="valid">
                  Please provide an appropriate photo (optional)
                </Form.Control.Feedback>
              </Form.Group>


            </Form.Row>
            <Form.Group>
              <Form.Check
                required
                label="Agree to terms and conditions"
                feedback="You must agree before submitting."
              />
            </Form.Group>
            <Button type="submit">Submit form</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
