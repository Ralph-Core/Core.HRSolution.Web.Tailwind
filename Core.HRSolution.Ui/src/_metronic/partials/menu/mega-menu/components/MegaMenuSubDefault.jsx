import { KeenIcon } from '@/_metronic/components';
import { MenuItem, MenuLink, MenuTitle, MenuIcon, MenuBadge } from '@/_metronic/components/menu';
import clsx from 'clsx';
const MegaMenuSubDefault = items => {
  const buildItems = items => {
    return items.map((item, index) => {
      if (item.children) {
        return <div key={index}>
            <MenuItem className="pt-1">
              <span className="text-gray-600 font-medium text-2sm p-2.5">{item.title}</span>
            </MenuItem>
            {buildItems(item.children)}
          </div>;
      } else {
        return <MenuItem key={index}>
            <MenuLink path={item.path}>
              {item.icon && <MenuIcon>
                  <KeenIcon icon={item.icon} />
                </MenuIcon>}

              <MenuTitle className={clsx('grow-0')}>{item.title}</MenuTitle>

              {item.disabled && <MenuBadge>
                  <span className="badge badge-xs">Soon</span>
                </MenuBadge>}

              {item.badge && <MenuBadge>
                  <span className="badge badge-primary badge-outline badge-xs">{item.badge}</span>
                </MenuBadge>}
            </MenuLink>
          </MenuItem>;
      }
    });
  };
  return buildItems(items);
};
export { MegaMenuSubDefault };