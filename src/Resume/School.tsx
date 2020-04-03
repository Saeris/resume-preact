import { h } from "preact";
import { Results } from "./results";
import { School as Container, Name, Description, Graduated, Location } from "./elements";

export const School: React.FC<Results["schools"][0]> = ({ name, description, graduated, location }) => (
  <Container>
    <Name>{name}</Name>
    <Description>{description}</Description>
    <Graduated>{graduated}</Graduated>
    <Location>{location}</Location>
  </Container>
);
