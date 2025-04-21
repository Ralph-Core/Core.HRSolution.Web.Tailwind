import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '@/app/auth';

import { toAbsoluteUrl } from '@/_metronic/utils';
import { useSettings } from '@/_metronic/providers/SettingsProvider';
import { DefaultTooltip, KeenIcon } from '@/_metronic/components';
import { MenuItem, MenuLink, MenuSub, MenuTitle, MenuSeparator, MenuArrow, MenuIcon } from '@/_metronic/components/menu';

import {
  SelectClientCompanyGroupComponent,
  SelectCoreServiceComponent,
  SelectClientStatusComponent,
  SelectEmploymentComponent,
  SelectJobProfileStatusComponent,
  SelectClientComponent,
  SelectReasonComponent,
  SelectStatusComponent
} from '../../../client.profile/component/dropdowns/client_profile_dropdown_component';


const DropdownFilter = ({
  menuItemRef,
  group,
  setGroup,
  client, 
  setClient,
  reason,
  setReason,
  status,
  setStatus
}) => {
  const {
    settings,
    storeSettings
  } = useSettings();
  const {
    logout
  } = useAuthContext();


  
  const handleThemeMode = event => {
    const newThemeMode = event.target.checked ? 'dark' : 'light';
    storeSettings({
      themeMode: newThemeMode
    });
  };
  const buildHeader = () => {
    return ( 
      <div className="flex items-center justify-between px-5 gap-1.5">
        <span className="font-bold text-sm">Filter Options</span>
      </div>
    )
  };
  const buildMenu = () => {
    return <Fragment>
        <MenuSeparator />
        <div className="flex flex-col gap-1">
          <MenuItem className='menu-item mx-2'>
            <div className='flex flex-col gap-1'>
              <label className='form-label'>Group:</label>
              <SelectClientCompanyGroupComponent className="select-sm select" value={group} onChange={setGroup} />
            </div>
          </MenuItem>

          <MenuItem className="menu-item mx-2">
            <div className='flex flex-col gap-1'>
                <label className='form-label'>Client:</label>
                <SelectClientStatusComponent className="select-sm select" value={client} onChange={setClient}/>
            </div>
          </MenuItem>

          <MenuItem className="menu-item mx-2">
            <div className='flex flex-col gap-1'>
                <label className='form-label'>Reason:</label>
                <SelectReasonComponent className="select-sm select" value={reason} onChange={setReason}/>
            </div>
          </MenuItem>

          <MenuItem className="menu-item mx-2">
            <div className='flex flex-col gap-1'>
                <label className='form-label'>Status:</label>
                <SelectStatusComponent className="select-sm select" value={status} onChange={setStatus}/>
            </div>
          </MenuItem>
          <MenuSeparator />
        </div>
      </Fragment>;
  };
  const buildFooter = () => {
    const handleReset = () => {
      setGroup("");
      setReason("");
      setClient("");
      setStatus("");
    };
    return( 
      <>
        <div className="flex justify-end gap-2 mx-2">
            <button className='btn btn-sm btn-light' onClick={handleReset}>Reset</button>
            <button className='btn btn-sm btn-danger'>Apply</button>
          </div>
      </>
    )
  };
  return <MenuSub className="menu-default light:border-gray-300 w-[200px] md:w-[250px]" rootClassName="p-0">
      {buildHeader()}
      {buildMenu()}
      {buildFooter()}
    </MenuSub>;
};
export { DropdownFilter };