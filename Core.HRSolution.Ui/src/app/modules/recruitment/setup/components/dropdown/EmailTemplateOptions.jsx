import { Fragment } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '@/app/auth';

import { toAbsoluteUrl } from '@/_metronic/utils';
import { useSettings } from '@/_metronic/providers/SettingsProvider';
import { DefaultTooltip, KeenIcon } from '@/_metronic/components';
import { MenuItem, MenuLink, MenuSub, MenuTitle, MenuSeparator, MenuArrow, MenuIcon } from '@/_metronic/components/menu';

import {
  SelectClientCompanyGroupComponent,
} from '../../../client.profile/component/dropdowns/client_profile_dropdown_component';
import { KTIcon } from '../../../../../../_metronic/helpers';

import {UpdateTafEmailTemplateModal} from '../../components/modals/update_email_content'

const EmailTemplateOptions = ({
  menuItemRef,
  onUpdate
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

  // const [updateEmailTemplate, setUpdateEmailTemplate] = useState(false);

  // const handleUpdateOpen = () => {
  //   console.log("Opening modal..."); 
  //   setUpdateEmailTemplate(true);
  // };
  // const handleUpdateClose = () => setUpdateEmailTemplate(false);

  // const [updateEmailTemplate, setUpdateEmailTemplate] = useState(false);
  
  // const handleEmailUpdateOpen = () => setUpdateEmailTemplate(true)
  // const handleEmailUpdateClose = () => {
  //   setUpdateEmailTemplate(false)
  // };

  const buildMenu = () => {
    return <Fragment>
          <div className="flex flex-col gap-1">
            <MenuItem className='menu-item mx-2'>
              <button className='btn btn-outline btn-clear btn-light hover:btn-danger text-xs' onClick={onUpdate} ><KTIcon iconName="pencil"/> Update</button>   
            </MenuItem>

            <MenuItem className="menu-item mx-2">
              <button className='btn btn-outline btn-clear btn-light hover:btn-danger text-xs'><KTIcon iconName="trash"/> Delete</button>
            </MenuItem>
          </div>
        </Fragment>
  };
  return <MenuSub className="menu-default light:border-gray-300 w-[115px]" rootClassName="p-0">
          {buildMenu()}
      </MenuSub>

    
};

export { EmailTemplateOptions };