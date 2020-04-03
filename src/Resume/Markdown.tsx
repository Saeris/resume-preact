import { h } from "preact";
// @ts-ignore
import Markup from "preact-markup";
// @ts-ignore
import snarkdown from "snarkdown";

interface MarkdownProps {
  markdown: string;
  components: Record<string, React.ElementType>;
}

export const Markdown: React.FC<MarkdownProps> = ({ markdown, ...props }) => (
  <Markup markup={snarkdown(markdown)} type="html" trim={false} {...props} />
);
