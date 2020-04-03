import { h } from "preact";
import { ThemeProvider } from "styled-components";
import { FaEnvelope as Email, FaLinkedin as LinkedIn, FaTwitter as Twitter, FaGithub as GitHub } from "react-icons/fa";
import { theme } from "./theme";
import { extractCSSVars } from "./extractCSSVars";
import { GlobalStyles } from "./global";
import { Markdown } from "./Markdown";
import { Link } from "./Link";
import { Logo } from "./Logo";
import { results } from "./results";
import {
  Main,
  Navigation,
  Fullname,
  Title,
  Contact,
  Service,
  Content,
  Summary,
  Expertise,
  Experience,
  Projects,
  Education,
  Header,
  Break,
  Text,
  Skills,
  Skill,
  List,
  Job,
  JobOverview,
  Role,
  Type,
  Company,
  Timeframe,
  Location,
  JobMeta,
  Industry,
  Technologies,
  Highlights,
  Highlight,
  Project,
  Name,
  Description,
  Website,
  Repository,
  Schools,
  School,
  Graduated,
  Footer
} from "./elements";

const Icons: Record<string, JSX.Element> = {
  Email: <Email />,
  LinkedIn: <LinkedIn />,
  Twitter: <Twitter />,
  GitHub: <GitHub />
};

export const App = () => {
  const { data } = results;
  return (
    <ThemeProvider theme={extractCSSVars(theme)}>
      <GlobalStyles />
      <Main>
        <Navigation>
          <Fullname>{data.fullName}</Fullname>
          <Title>{data.title}</Title>
          <Contact>
            {data.contacts.map(service => (
              // @ts-ignore
              <Service key={service.label} {...service}>
                {Icons[service.label]} {service.to.replace(`https://www.`, ``)}
              </Service>
            ))}
          </Contact>
        </Navigation>
        <Content>
          <Summary>
            <Header>Summary:</Header>
            <Break />
            <Text>{data.summary}</Text>
          </Summary>
          <Expertise>
            <Header>Expertise:</Header>
            <Break />
            <Skills>
              {data.skills.map(skill => (
                <Skill key={skill}>{skill}</Skill>
              ))}
            </Skills>
          </Expertise>
          <Experience>
            <Header>Experience:</Header>
            <Break />
            <List>
              {data.jobs.map(
                ({ role, company, type, print, timeframe, location, industry, technologies, highlights }, i) => (
                  <Job key={i} print={print}>
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
                  </Job>
                )
              )}
            </List>
          </Experience>
          <Projects>
            <Header>Projects:</Header>
            <Break />
            <List>
              {data.projects.map(({ name, description, website, repository, technologies }) => (
                <Project key={name}>
                  <Name>{name}</Name>
                  <Description>{description}</Description>
                  <Website to={website} />
                  <Repository to={repository} />
                  <Technologies>{technologies.join(`, `)}</Technologies>
                </Project>
              ))}
            </List>
          </Projects>
          <Education>
            <Header>Education:</Header>
            <Break />
            <Schools>
              {data.schools.map(({ name, description, graduated, location }) => (
                <School key={name}>
                  <Name>{name}</Name>
                  <Description>{description}</Description>
                  <Graduated>{graduated}</Graduated>
                  <Location>{location}</Location>
                </School>
              ))}
            </Schools>
          </Education>
        </Content>
        <Footer>
          <a title="Saeris.io - Home" href="/">
            <Logo />
          </a>
        </Footer>
      </Main>
    </ThemeProvider>
  );
};
