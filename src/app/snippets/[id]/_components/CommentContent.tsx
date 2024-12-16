import CodeBlock from "./CodeBlock";

const CommentContent = ({ content }: { content: string }) => {
  // regex
  const parts = content.split(/(```[\w-]*\n[\s\S]*?\n```)/g);

  return (
    <div className="max-w-none text-white">
      {parts.map((part, index) => {
        if (part.startsWith("```")) {
          const match = part.match(/```([\w-]*)\n([\s\S]*?)\n```/);

          if (match) {
            const [, language, code] = match;
            return <CodeBlock key={index} code={code} language={language} />;
          }
        }

        return part.split("\n").map((line, lineIdx) => (
          <p key={lineIdx} className="mb-4 text-gray-300 last:mb-0">
            {line}
          </p>
        ));
      })}
    </div>
  );
};

export default CommentContent;
