export interface Results {
  fullName: string;
  title: string;
  contacts: { label: string; to: string }[];
  summary: string;
  skills: string[];
  jobs: {
    role: string;
    type: string;
    company: string | null;
    print: boolean;
    timeframe: string;
    location: string;
    industry: string;
    technologies: string[];
    highlights: string[];
  }[];
  projects: { name: string; description: string; website: string; repository: string; technologies: string[] }[];
  schools: { name: string; description: string; graduated: string; location: string }[];
}

export const results: { data: Results } = {
  data: {
    fullName: `Drake Costa`,
    title: `Full-Stack JavaScript Engineer`,
    contacts: [
      { label: `Email`, to: `drake@saeris.io` },
      { label: `LinkedIn`, to: `https://www.linkedin.com/in/saeris` },
      { label: `Twitter`, to: `https://www.twitter.com/saeris` },
      { label: `GitHub`, to: `https://www.github.com/saeris` }
    ],
    summary: `Self-taught software engineer with a background in graphic design and game development. Enthusiastic about developer experience, tooling, and web accessibility. Avid photographer and competitive online gamer. Highly values learning and bringing people together.`,
    skills: [
      `JavaScript`,
      `TypeScript`,
      `HTML / CSS`,
      `GraphQL`,
      `Node.js`,
      `React`,
      `Gatsby`,
      `Apollo`,
      `Jest`,
      `Styled-Components`,
      `Webpack / Babel`,
      `AWS Lambda`,
      `GitKraken`,
      `JIRA`,
      `Figma`,
      `Adobe Lightroom`,
      `Adobe Photoshop`,
      `Adobe Illustrator`
    ],
    jobs: [
      {
        role: `Front-End Engineer`,
        type: `Contract`,
        company: `CodeSandbox`,
        print: true,
        timeframe: `05/19 - 03/20`,
        location: `Remote`,
        industry: `Software Development Tools`,
        technologies: [`React`, `TypeScript`, `Styled-Components`, `Reakit`, `Apollo`, `GraphQL`],
        highlights: [
          `Responsible for front-end work on [Custom Templates](https://codesandbox.io/post/Templates), enabling users to [build and share](https://codesandbox.io/post/hello-template-universe-goodbye-project-setup) their own reusable starter projects.`,
          `Built a 'crash handler' page, prototyped within CodeSandbox, providing users with a [tool to file crash reports](https://codesandbox.io/post/CodeSadbox) with pre-filled details. The dog-fooding process used to develop this feature is now used internally to quickly iterate on new UI features.`,
          `Established coding style guidlines and implemented them alongside a refactor of dozens of components to React Hooks / TypeScript. Would later oversee a call for open-source contributions through [Hacktoberfest](https://github.com/codesandbox/codesandbox-client/issues/2621), resulting in [60+ submissions](https://github.com/codesandbox/codesandbox-client/issues?q=label%3A%22Hacktoberfest%22+-label%3A%22%F0%9F%96%A8+Duplicate%22+is%3Aclosed+) from multiple contributors.`
        ]
      },
      {
        role: `Full-Stack Engineer`,
        type: `Freelance`,
        company: null,
        print: false,
        timeframe: `01/17 - 05/19`,
        location: `Pleasanton, CA`,
        industry: `Open Source Software Development`,
        technologies: [`React`, `Vue`, `Apollo`, `GraphQL`, `AWS`],
        highlights: [`Published multiple GraphQL example applications and libraries (see projects)`]
      },
      {
        role: `Front-End Developer`,
        type: `Full-Time`,
        company: `4-Tell`,
        print: false,
        timeframe: `10/16 - 12/16`,
        location: `Portland, OR`,
        industry: `eCommerce SaaS`,
        technologies: [`Aurelia`, `Redux`, `GraphQL`, `Highcharts`, `Microsoft Azure`],
        highlights: [
          `Developed a prototype application using the Aurelia Framework. Implemented a CI/CD pipeline deploying to Microsoft Azure and collaborated with the CTO on API design.`
        ]
      },
      {
        role: `Developer III`,
        type: `Full-Time`,
        company: `Catalyst DevWorks`,
        print: true,
        timeframe: `08/15 - 02/16`,
        location: `Beaverton, OR`,
        industry: `Software Engineering Services`,
        technologies: [`Aurelia`, `Sass`, `Apache Velocity`, `Liferay`, `Grunt`],
        highlights: [
          `Responsible for front-end development of various UI components for [Regence Blue-Cross](https://www.regence.com/web/regence_individual/) and [Asuris Health](https://www.asuris.com/) at Cambia Health Solutions`,
          `Overhauled Node.js / Grunt build process and project organization, optimizing Node package usage (from 6+ Gb down to ~250 Mb) and reducing automated build times in Jenkins (from over 1 hour down to ~15 minutes), enabling faster iteration and higher productivity`,
          `Mentored junior engineers in the use of Aurelia, component-based architectures, CSS Flexbox, and JavaScript best-practices`
        ]
      },
      {
        role: `Front-End Developer`,
        type: `Contract`,
        company: `Sellpoints`,
        print: true,
        timeframe: `12/14 – 05/15`,
        location: `Emeryville, CA`,
        industry: `Online Marketing & Advertising`,
        technologies: [`HTML`, `CSS`, `jQuery`],
        highlights: [
          `Coded a prototype front-end for an IBM Watson powered search results page for CES 2015, [which helped to secure a $7.5 million Series C](https://www-03.ibm.com/press/us/en/pressrelease/46950.wss)`,
          `Trained a dozen co-workers from sales and management to use an internally developed content management system, enabling the company to meet a huge deadline for a contract with Walmart, equivalent to a year’s worth of normal work in a period of three months`,
          `Automated a set of common and repetitive tasks for the production team via a JavaScript browser extension, saving hours of work daily`
        ]
      }
    ],
    projects: [
      {
        name: `Rachel Taylor Design`,
        description: `Portfolio Website built with Gatsby`,
        website: `https://rtaylor.design`,
        repository: `https://github.com/Saeris/gatsby-process`,
        technologies: [`Gatsby`, `TypeScript`, `Reakit`, `Styled-Components`, `Netlify Functions`]
      },
      {
        name: `GraphQL Scalars`,
        description: `Type-Safety and Validation Library`,
        website: `https://graphql-scalars.saeris.io`,
        repository: `https://github.com/Saeris/graphql-scalars`,
        technologies: [`TypeScript`, `GraphQL`, `Joi`, `Jest`, `Webpack`]
      },
      {
        name: `GraphQL Directives`,
        description: `Apollo Schema Directives Library`,
        website: `https://graphql-directives.saeris.io`,
        repository: `https://github.com/Saeris/graphql-directives`,
        technologies: [`Apollo Server`, `TypeScript`, `GraphQL`]
      },
      {
        name: `Scryfall API`,
        description: `GraphQL wrapper for the Scryfall Magic: The Gathering API`,
        website: `https://scryfall.saeris.io`,
        repository: `https://github.com/Saeris/Scryfall-API`,
        technologies: [
          `Apollo Server`,
          `GraphQL`,
          `TypeScript`,
          `Netlify Functions`,
          `Serverless Framework`,
          `Travis CI`
        ]
      },
      {
        name: `Mini Movie DB API`,
        description: `GraphQL wrapper for the TheMovieDB API`,
        website: `https://mini-movie-db-api.saeris.io`,
        repository: `https://github.com/Saeris/mini-movie-db-api`,
        technologies: [
          `Apollo Server`,
          `GraphQL`,
          `TypeScript`,
          `Netlify Functions`,
          `Serverless Framework`,
          `Travis CI`
        ]
      },
      {
        name: `React Mana`,
        description: `Magic: The Gathering Mana Symbols Component Library`,
        website: `https://react-mana.saeris.io`,
        repository: `https://github.com/Saeris/react-mana`,
        technologies: [`React`, `Emotion`, `Jest`]
      },
      {
        name: `React Keyrune`,
        description: `Magic: The Gathering Set Icons Component Library`,
        website: `https://react-keyrune.saeris.io`,
        repository: `https://github.com/Saeris/react-keyrun`,
        technologies: [`React`, `Emotion`, `Sass`, `Jest`]
      },
      {
        name: `Vue Spinners`,
        description: `Loading Indicators Component Library`,
        website: `https://vue-spinners.saeris.io`,
        repository: `https://github.com/Saeris/vue-spinners`,
        technologies: [`Vue`, `Emotion`, `CodeSandbox`]
      }
    ],
    schools: [
      {
        name: `Las Positas Community College`,
        description: `AA - Visual Communications`,
        graduated: `May 2010`,
        location: `Livermore, CA`
      }
    ]
  }
};
