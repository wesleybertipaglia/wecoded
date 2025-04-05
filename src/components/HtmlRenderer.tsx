import React from "react";

interface Props {
  htmlContent: string;
}

const HtmlRenderer: React.FC<Props> = ({ htmlContent }) => {
  return (
    <div
      className="flex flex-col gap-4 prose max-w-none"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
};

export default HtmlRenderer;
