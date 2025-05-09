import { Link } from 'react-router-dom';

import { KeenIcon, Menu, MenuItem, MenuToggle } from '@/_metronic/components';
import { DropdownCardItem1 } from '../dropdowns/general';
import { CommonHexagonBadge } from '../common';
const CardRole = ({
  path,
  title,
  subTitle,
  description,
  team,
  badge
}) => {
  
  return <div className="card flex flex-col gap-5 p-5 lg:p-7.5">
      <div className="flex items-center flex-wrap justify-between gap-1">
        <div className="flex items-center gap-2.5">
          <CommonHexagonBadge {...badge} />

          <div className="flex flex-col">
            <Link to={`${path}`} className="text-md font-medium text-gray-900 hover:text-primary-active mb-px">
              {title}
            </Link>
            <span className="text-2sm text-gray-700">{subTitle}</span>
          </div>
        </div>

        <Menu className="inline-flex">
          <MenuItem toggle="dropdown" trigger="click" dropdownProps={{
          placement: 'bottom-start',
          modifiers: [{
            name: 'offset',
            options: {
              offset: [0, -10]// [skid, distance]
            }
          }]
        }}>
            <MenuToggle className="btn btn-sm btn-icon btn-light btn-clear">
              <KeenIcon icon="dots-vertical" />
            </MenuToggle>
            {DropdownCardItem1()}
          </MenuItem>
        </Menu>
      </div>

      <p className="text-2sm text-gray-700">{description}</p>

      <span className="text-2sm text-gray-800">{team}</span>
    </div>;
};
export { CardRole };