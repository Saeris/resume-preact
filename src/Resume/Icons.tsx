import { h } from "preact";
import { FaEnvelope as Email, FaLinkedin as LinkedIn, FaTwitter as Twitter, FaGithub as GitHub } from "react-icons/fa";

export const Icons: Record<string, JSX.Element> = {
  Email: <Email />,
  LinkedIn: <LinkedIn />,
  Twitter: <Twitter />,
  GitHub: <GitHub />
};
