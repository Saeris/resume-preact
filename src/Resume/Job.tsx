import { h } from "preact";
import { Markdown } from "./Markdown";
import { Link } from "./Link";
import { Results } from "./results";
import {
  Job as Container,
  JobOverview,
  Role,
  Type,
  Company,
  Timeframe,
  JobMeta,
  Industry,
  Highlights,
  Highlight,
  Location,
  Technologies
} from "./elements";

export const Job: React.FC<Results["jobs"][0]> = ({
  role,
  company,
  type,
  print,
  timeframe,
  location,
  industry,
  technologies,
  highlights
}) => (
  <Container print={print}>
    <JobOverview>
      <Role>{role}</Role>
      {company && <Company>{company}</Company>}
      <Type>{type}</Type>
      <Timeframe>{timeframe}</Timeframe>
      <Location>{location}</Location>
    </JobOverview>
    <JobMeta>
      <Industry>{industry}</Industry>
      <Technologies>{technologies.join(`, `)}</Technologies>
    </JobMeta>
    <Highlights>
      {highlights.map((highlight, i) => (
        <Highlight key={i}>
          <Markdown markdown={highlight} components={{ a: Link }} />
        </Highlight>
      ))}
    </Highlights>
  </Container>
);
