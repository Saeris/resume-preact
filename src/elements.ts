import styled, { css, DefaultTheme } from "styled-components";
import { Link } from "./Link";

const list = css`
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
`;

const divider = (side = `right`) => ({ theme }: { theme: DefaultTheme }) => css`
  padding-${side}: 1ch;
  border-${side}: 0.15rem solid ${theme.colors.secondary};
`;

const gradient = ({ theme }: { theme: DefaultTheme }) => css`
  @media screen {
    background: linear-gradient(300deg, ${theme.colors.primary} 0%, ${theme.colors.secondary} 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const overview = ({ theme }: { theme: DefaultTheme }) => css`
  display: grid;
  grid-column-gap: 1ch;
  align-items: baseline;
  width: 100%;
  color: ${theme.colors.primary};
  font-size: ${theme.sizes.body};
  font-weight: ${theme.weights.light};
  line-height: ${theme.sizes.header};
`;

export const Main = styled.main(
  ({ theme }) => css`
    position: relative;
    width: 100%;
    max-width: 8.5in;
    min-height: 100vh;
    padding: 0.25in 0.5in;
    margin: 0 auto;
    box-sizing: border-box;
    font-family: ${theme.fonts.body};
    color: ${theme.colors.text};
    box-decoration-break: clone;

    @media screen {
      display: grid;
      grid-gap: ${theme.sizes.small};
    }
  `
);

export const Navigation = styled.header(
  ({ theme }) => css`
    display: grid;
    grid-template:
      "fullname"
      "title"
      "contact";
    width: 100%;

    @media print {
      grid-template:
        "fullname contact" min-content
        "title contact" min-content / minmax(0, 1fr) max-content;
      margin-bottom: ${theme.sizes.small};
    }
  `
);

export const Fullname = styled.h1(
  ({ theme }) => css`
    ${gradient};
    grid-area: fullname;
    margin: 0;
    color: ${theme.colors.primary};
    font-family: ${theme.fonts.title};
    font-size: ${theme.sizes.title};
    line-height: 3rem;
    text-transform: uppercase;

    @media screen {
      text-align: center;
    }

    @media print {
      font-size: 5.2rem;
      line-height: 5rem;
    }
  `
);

export const Title = styled.h2(
  ({ theme }) => css`
    ${gradient};
    grid-area: title;
    margin: 0;
    color: ${theme.colors.secondary};
    font-size: ${theme.sizes.subtitle};
    font-weight: ${theme.weights.extralight};

    @media screen {
      text-align: center;
    }

    @media print {
      font-size: 3.55rem;
      line-height: 3rem;
    }
  `
);

export const Contact = styled.address(
  () => css`
    grid-area: contact;
    display: grid;
    justify-content: space-around;
    width: 100%;
    font-style: normal;

    @media screen {
      grid-template-columns: repeat(4, minmax(0, max-content));
      grid-gap: 1ch;
      margin: 0.75rem 0;
    }
  `
);

export const Service = styled(Link)<{ label?: string }>(
  ({ theme, label = `` }) => css`
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    color: ${theme.colors.primary};
    font-size: ${theme.sizes.header};

    svg {
      font-size: ${theme.sizes.header};

      @media print {
        margin-right: 1ch;
      }
    }

    @media screen {
      font-size: 0;

      &:after {
        content: '${label}';
        margin-left: 1ch;
        color: ${theme.colors.secondary};
        font-size: ${theme.sizes.header};
        text-transform: uppercase;
        user-select: none;
      }
    }
  `
);

export const Content = styled.article(
  ({ theme }) => css`
    position: relative;
    display: grid;
    grid-template:
      "summary"
      "expertise"
      "experience"
      "projects"
      "education";
    grid-row-gap: ${theme.sizes.small};
    grid-column-gap: 2ch;
    width: 100%;

    @media print {
      grid-template:
        "summary summary"
        "projects expertise"
        "projects experience"
        "education experience" / 30% minmax(0, 70%);
    }
  `
);

const Section = styled.section(
  () => css`
    position: relative;
    break-inside: avoid;
  `
);

export const Summary = styled(Section)`
  grid-area: summary;
`;

export const Expertise = styled(Section)`
  grid-area: expertise;
`;

export const Experience = styled(Section)(
  ({ theme }) => css`
    grid-area: experience;

    @media print {
      h3 {
        font-size: 0;

        &:after {
          content: "Relevant Experience:";
          font-size: ${theme.sizes.header};
        }
      }
    }
  `
);

export const Projects = styled(Section)`
  grid-area: projects;
`;

export const Education = styled(Section)`
  grid-area: education;
`;

export const Header = styled.h3(
  ({ theme }) => css`
    position: relative;
    ${gradient};
    margin: 0;
    color: ${theme.colors.primary};
    font-size: ${theme.sizes.header};
    font-weight: ${theme.weights.light};
    break-before: ;
  `
);

export const Break = styled.hr(
  ({ theme }) => css`
    margin: 0.5rem 0;
    border: 0.1rem solid ${theme.colors.accent};
  `
);

export const Text = styled.p(
  ({ theme }) => css`
    margin-bottom: 0.5em;
    font-size: ${theme.sizes.body};
  `
);

export const Skills = styled.ul(
  ({ theme }) => css`
    ${list};
    display: grid;
    grid-template-columns: repeat(6, minmax(max-content, 1fr));
    grid-column-gap: ${theme.sizes.header};
  `
);

export const Skill = styled.li(
  ({ theme }) => css`
    font-size: ${theme.sizes.body};
    font-variant: small-caps;
  `
);

export const List = styled.ul(
  ({ theme }) => css`
    ${list};
    display: grid;
    grid-gap: ${theme.sizes.label};

    @media print {
      grid-gap: ${theme.sizes.small};
    }
  `
);

export const Job = styled.li<{ print: boolean }>(
  ({ print }) => css`
    @media print {
      display: ${print ? `block` : `none`};
    }
  `
);

export const JobOverview = styled.div(
  () => css`
    ${overview};
    grid-template-columns:
      [role-start]
      max-content
      [role-end company-start]
      minmax(max-content, 1fr)
      [company-end timeframe-start]
      max-content
      [timeframe-end type-start]
      max-content
      [type-end location-start]
      13ch
      [location-end];

    @media screen {
      margin-bottom: 0.4rem;
    }
  `
);

export const Role = styled.div(
  ({ theme }) => css`
    ${divider()};
    grid-area: role;
    color: ${theme.colors.secondary};
    font-size: ${theme.sizes.label};
    font-weight: ${theme.weights.semibold};
  `
);

export const Company = styled.div(
  () => css`
    grid-area: company;
  `
);

export const Timeframe = styled.div(
  ({ children, theme }) => css`
    grid-area: timeframe;
    justify-self: flex-end;
    padding-right: 1ch;
    font-size: 0;

    &:after {
      content: "${(children as string).replace(/\//g, `.`)}";
      font-size: ${theme.sizes.body};
    }
  `
);

export const Type = styled.div(
  () => css`
    ${divider()};
    grid-area: type;
    justify-self: flex-end;
  `
);

export const Location = styled.div(
  () => css`
    grid-area: location;
  `
);

export const JobMeta = styled.div(
  ({ theme }) => css`
    display: grid;
    width: 100%;
    margin-bottom: 0.4rem;
    color: ${theme.colors.primary};
    font-size: ${theme.sizes.small};
    font-weight: ${theme.weights.light};
    line-height: ${theme.sizes.label};

    @media screen {
      grid-template:
        "industry technologies"
        / max-content minmax(max-content, 1fr);
      grid-column-gap: 1ch;
    }

    @media print {
      grid-template:
        "industry"
        "technologies";
      grid-row-gap: 0.4rem;
    }
  `
);

export const Industry = styled.div(
  ({ theme }) => css`
    grid-area: industry;

    &:before {
      content: "Industry: ";
      color: ${theme.colors.text};
      user-select: none;
    }
  `
);

export const Technologies = styled.div(
  ({ theme }) => css`
    grid-area: technologies;
    color: ${theme.colors.primary};
    font-size: ${theme.sizes.small};
    font-weight: ${theme.weights.light};
    line-height: ${theme.sizes.label};

    &:before {
      content: "Technologies: ";
      color: ${theme.colors.text};
      user-select: none;
    }
  `
);

export const Highlights = styled.ul(
  ({ theme }) => css`
    padding-left: 3ch;
    font-size: ${theme.sizes.body};
  `
);

export const Highlight = styled.li(() => css``);

export const Project = styled.li(
  () => css`
    ${overview};
    grid-template:
      "name description website repository"
      "technologies technologies technologies technologies" /
      max-content minmax(max-content, 1fr) max-content 12ch;
    grid-row-gap: 0.4rem;

    @media print {
      grid-template:
        "name"
        "description"
        "technologies"
        "website"
        "repository";

      &:nth-of-type(n + 6) {
        display: none;
      }
    }
  `
);

export const Name = styled.div(
  ({ theme }) => css`
    grid-area: name;
    color: ${theme.colors.secondary};
    font-size: ${theme.sizes.label};
    font-weight: ${theme.weights.semibold};

    @media screen {
      ${divider()};
    }
  `
);

export const Description = styled.div(
  ({ theme }) => css`
    grid-area: description;
    color: ${theme.colors.primary};
  `
);

const linkText = ({ theme }: { theme: DefaultTheme }) => css`
  align-self: flex-start;
  color: ${theme.colors.primary};
  font-size: 0;

  &:after {
    font-size: ${theme.sizes.body};
    text-decoration: underline;
    user-select: none;
  }
`;

export const Website = styled(Link).attrs(({ to = `` }) => ({
  children: `- Website: ${to}`
}))(
  ({ to = `` }) => css`
    ${linkText};
    grid-area: website;

    &:after {
      content: "${to.replace(`https://`, ``)}";
      @media screen {
        ${divider()};
        content: "Website";
        justify-self: flex-end;
        direction: rtl;
        right: 0;
      }
    }
  `
);

export const Repository = styled(Link).attrs(({ to = `` }) => ({
  children: `- Repository: ${to}`
}))(
  ({ to = `` }) => css`
    ${linkText};
    grid-area: repository;

    &:after {
      content: "${to.replace(`https://`, ``)}";
      @media screen {
        content: "Repository";
      }
    }
  `
);

export const Schools = styled.ul(
  () => css`
    ${list};
  `
);

export const School = styled.li(
  () => css`
    ${overview};
    grid-template-columns:
      [name-start]
      max-content
      [name-end description-start]
      minmax(max-content, 1fr)
      [description-end graduated-start]
      max-content
      [graduated-end location-start]
      13ch
      [location-end];

    @media print {
      grid-template:
        "name"
        "description"
        "location"
        "graduated";
    }
  `
);

export const Graduated = styled.div(
  () => css`
    grid-area: graduated;

    @media screen {
      ${divider()};
      justify-self: flex-end;
    }
  `
);

export const Footer = styled.footer(
  () => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 5rem;
    margin-top: 1rem;

    @media print {
      display: none;
    }
  `
);
