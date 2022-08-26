import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Title, Text, Span } from "../../components/Core";
import imgPhoto from "../../assets/image/new/personal/portrait-about.jpeg";
import imgSignLight from "../../assets/image/new/personal/sign.png";

const LinkSocial = styled.a`
  color: ${({ theme }) => theme.colors.light} !important;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 13px;
  letter-spacing: 1.63px;
  transition: 0.4s;
  &:hover {
    color: ${({ theme }) => theme.colors.light} !important;
    transform: translateY(-5px);
  }
`;

const About = ({ hero = true, bg = "dark", ...rest }) => {
  return (
    <>
      <Section hero={hero} bg={bg} {...rest}>
        <Container>
          <Row className="align-items-center">
            <Col lg="6">
              <div>
                <img src={imgPhoto} alt="folio" className="img-fluid" />
              </div>
            </Col>
            <Col lg="6">
              <div className="pl-lg-4 pt-5 pt-lg-0">
                <Title color="light" variant="secSm">
                  Ferrari Tran
                </Title>
                <Text
                  color="light"
                  className="mt-3 mt-lg-5"
                  css={`
                    line-height: 1.5;
                  `}
                >
                  I'm front-end developer and UX/UI designer in Vietnam. Attention to detail is my working principle.
                </Text>
                <Text color="light" className="mt-4">
                  I strive for a minimal and beautiful design.
                </Text>
                <div className="mt-4">
                  <Text color="light">Email me at</Text>

                  <Text variant="p">
                    <a
                      href="mailto:ferrari.thuytran@gmail.com"
                      className="font-weight-bold"
                    >
                      <Span color="light">ferrari.thuytran@gmail.com</Span>
                    </a>
                  </Text>
                </div>
                <div className="mt-5">
                  <img src={imgSignLight} alt="sign" className="img-fluid" />
                </div>
                {/* <Text color="light" className="mt-3 font-weight-bold">
                  Ferrari Tran
                </Text> */}
                {/* <Text color="light" variant="small">
                  Founder of Folio Digital
                </Text> */}
                <div className="mt-5 d-flex">
                  <LinkSocial
                    href="https://dribbble.com/ferrari-tran"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-3"
                  >
                    Dribbble
                  </LinkSocial>
                  <LinkSocial
                    href="https://www.linkedin.com/in/thuy-tran-phuong/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-weight-bold"
                  >
                    Linkedin
                  </LinkSocial>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default About;
