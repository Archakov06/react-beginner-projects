import ContentLoader from 'react-content-loader';

function TextSkeleton() {
  return (
    <ContentLoader
      className="text-skeleton"
      speed={1}
      width={600}
      height={400}
      viewBox="0 0 600 400"
      backgroundColor="#f4f4f4"
      foregroundColor="#ecebeb">
      <rect x="0" y="1" rx="10" ry="10" width="400" height="15" />
      <rect x="0" y="30" rx="10" ry="10" width="600" height="15" />
      <rect x="0" y="60" rx="10" ry="10" width="500" height="15" />
      <rect x="0" y="90" rx="10" ry="10" width="310" height="15" />
      <rect x="0" y="120" rx="10" ry="10" width="500" height="15" />
      <rect x="0" y="150" rx="10" ry="10" width="600" height="15" />
      <rect x="0" y="180" rx="10" ry="10" width="500" height="15" />
      <rect x="0" y="210" rx="10" ry="10" width="350" height="15" />
    </ContentLoader>
  );
}

export default TextSkeleton;
