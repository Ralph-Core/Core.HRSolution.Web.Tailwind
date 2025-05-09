import { KeenIcon } from '@/_metronic/components';
import { CommonHexagonBadge } from '@/_metronic/partials/common';
const CommunityBadges = ({
  title
}) => {
  const items = [{
    stroke: 'stroke-primary-clarity',
    fill: 'fill-primary-light',
    icon: 'abstract-39',
    iconColor: 'text-primary'
  }, {
    stroke: 'stroke-brand-clarity',
    fill: 'fill-brand-light',
    icon: 'abstract-44',
    iconColor: 'text-brand'
  }, {
    stroke: 'stroke-success-clarity',
    fill: 'fill-success-light',
    icon: 'abstract-25',
    iconColor: 'text-success'
  }, {
    stroke: 'stroke-info-clarity',
    fill: 'fill-info-light',
    icon: 'delivery-24',
    iconColor: 'text-info'
  }];
  const renderItem = (item, index) => {
    return <CommonHexagonBadge key={index} stroke={item.stroke} fill={item.fill} size="size-[50px]" badge={<KeenIcon icon={item.icon} className={`text-1.5xl ps-px ${item.iconColor}`} />} />;
  };
  return <div className="card">
      <div className="card-header">
        <h3 className="card-title">{title}</h3>
      </div>

      <div className="card-body pb-7.5">
        <div className="flex items-center flex-wrap gap-3 lg:gap-4">
          {items.map((item, index) => {
          return renderItem(item, index);
        })}
        </div>
      </div>
    </div>;
};
export { CommunityBadges };