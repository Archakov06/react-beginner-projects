import React from 'react';
import ContentLoader from 'react-content-loader';

const ListSkeleton = () => {
  return (
    <div className="list-skeleton">
      <ContentLoader
        speed={1}
        width={213}
        height={45}
        viewBox="0 0 213 45"
        backgroundColor="#fff"
        foregroundColor="#ecebeb">
        <rect x="1" y="1" rx="5" ry="5" width="213" height="40" />
      </ContentLoader>
      <ContentLoader
        speed={1}
        width={213}
        height={45}
        viewBox="0 0 213 45"
        backgroundColor="#fff"
        foregroundColor="#ecebeb">
        <rect x="1" y="1" rx="5" ry="5" width="213" height="40" />
      </ContentLoader>
      <ContentLoader
        speed={1}
        width={213}
        height={45}
        viewBox="0 0 213 45"
        backgroundColor="#fff"
        foregroundColor="#ecebeb">
        <rect x="1" y="1" rx="5" ry="5" width="213" height="40" />
      </ContentLoader>
    </div>
  );
};

const List = ({ loading }) => {
  if (loading) {
    return <ListSkeleton />;
  }

  return (
    <ul className="list">
      <li>
        <svg viewBox="0 0 30 30" className="page">
          <g>
            <path d="M16,1H4v28h22V11L16,1z M16,3.828L23.172,11H16V3.828z M24,27H6V3h8v10h10V27z M8,17h14v-2H8V17z M8,21h14v-2H8V21z M8,25h14v-2H8V25z"></path>{' '}
          </g>
        </svg>
        Покупки
      </li>
      <li>
        <svg height="14px" id="Layer_1" version="1.1" viewBox="0 0 32 32" width="14px">
          <path d="M28,14H18V4c0-1.104-0.896-2-2-2s-2,0.896-2,2v10H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h10v10c0,1.104,0.896,2,2,2  s2-0.896,2-2V18h10c1.104,0,2-0.896,2-2S29.104,14,28,14z" />
        </svg>
        Добавить
      </li>
    </ul>
  );
};

export default List;
