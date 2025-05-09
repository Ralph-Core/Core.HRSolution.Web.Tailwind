import clsx from 'clsx';
import { toAbsoluteUrl } from '@/_metronic/utils/Assets';
const CommonAvatars = ({
  size,
  group,
  more,
  className
}) => {
  const avatarSize = size ? size : 'size-6';
  const renderItem = (each, index) => {
    return <div key={index} className="flex">
        {each.filename || each.path ? <img src={toAbsoluteUrl(each.path || `/media/avatars/${each.filename}`)} className={clsx(`hover:z-5 relative shrink-0 rounded-full ring-1 ring-light-light ${avatarSize}`)} alt="" /> : each.fallback ? <span className={clsx(`hover:z-5 relative inline-flex items-center justify-center shrink-0 rounded-full ring-1 font-semibold leading-none text-3xs ${avatarSize}`, each.variant)}>
            {each.fallback}
          </span> : null}
      </div>;
  };
  return <div className={clsx('flex -space-x-2', className && className)}>
      {group.map((each, index) => {
      return renderItem(each, index);
    })}

      {more && <div className="flex">
          <span className={clsx(`relative inline-flex items-center justify-center shrink-0 rounded-full ring-1 font-semibold leading-none text-3xs ${size} size-6`, more.variant)}>
            +{more.number || more.label}
          </span>
        </div>}
    </div>;
};
export { CommonAvatars };