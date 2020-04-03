import { h } from "preact";
import { Results } from "./results";
import { Project as Container, Name, Description, Website, Repository, Technologies } from "./elements";

export const Project: React.FC<Results["projects"][0]> = ({ name, description, website, repository, technologies }) => (
  <Container key={name}>
    <Name>{name}</Name>
    <Description>{description}</Description>
    <Website to={website} />
    <Repository to={repository} />
    <Technologies>{technologies.join(`, `)}</Technologies>
  </Container>
);
