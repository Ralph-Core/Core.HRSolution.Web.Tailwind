import React from 'react';
import { Link } from 'react-router-dom';
import { KeenIcon } from '@/_metronic/components';
import { CommonHexagonBadge } from '../common';
const MiscHighlightedPosts = ({
  posts
}) => {
  const renderItem = (post, index) => {
    return <React.Fragment key={index}>
        <div className="flex flex-col items-start gap-2.5">
          <div className="mb-2.5">
            <CommonHexagonBadge stroke="stroke-brand-clarity" fill="fill-brand-light" size="size-[50px]" badge={<KeenIcon icon={post.icon} className="text-1.5xl ps-px text-brand" />} />
          </div>

          <Link to={`${post.path}`} className="text-base font-semibold text-gray-900 hover:text-primary">
            {post.title}
          </Link>

          <p className="text-sm text-gray-700">{post.summary}</p>

          <Link to={`${post.path}`} className="btn btn-link flex-none">
            Learn more
          </Link>
        </div>

        <span className="hidden [&:not(:last-child)]:block [&:not(:last-child)]:border-b border-b-gray-200"></span>
      </React.Fragment>;
  };
  return <div className="card">
      <div className="card-body py-10 flex flex-col gap-5 lg:gap-7.5">
        {posts.map((post, index) => {
        return renderItem(post, index);
      })}
      </div>
    </div>;
};
export { MiscHighlightedPosts };