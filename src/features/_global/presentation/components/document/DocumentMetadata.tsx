import type { FC } from 'react';

interface IDocumentMetadataProps {
  title?: string;
  authorContent?: string;
  authorHref?: string;
  keywordsContent?: string;
  descriptionContent?: string;
}

export const DocumentMetadata: FC<IDocumentMetadataProps> = ({
  title,
  keywordsContent,
  authorContent,
  authorHref,
  descriptionContent,
}) => {
  return (
    <>
      <title>{title}</title>
      <meta name="author" content={authorContent} />
      <link rel="author" href={authorHref} />
      <meta name="keywords" content={keywordsContent} />
      <meta name="description" content={descriptionContent} />
    </>
  );
};
