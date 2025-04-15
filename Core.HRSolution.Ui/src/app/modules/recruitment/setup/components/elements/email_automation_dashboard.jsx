import React, { useState, useEffect,useRef } from 'react';
import { SelectEmailAutomation } from '../../request/email_template';
import TopBarProgress from 'react-topbar-progress-indicator';
import { useNavigate } from 'react-router-dom';
import { EditEmailAutomationModal } from '../modals/update_email_automation';
import { KTIcon } from '../../../../../../_metronic/helpers';

// Dropdown
import {EmailAutomationOptions} from "../../components/dropdown/EmailAutomationOptions"
import { Menu, MenuItem, MenuToggle } from '@/_metronic/components';



function DataEmailAutomationDashboardComponent() {
  const itemUserRef = useRef(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch data once on load
  useEffect(() => {
    setLoading(true);
    SelectEmailAutomation()
      .then((response) => {
        setData(response.data.automations || []); // Ensure data is an array
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching email templates:', error);
        navigate(`/error/${error.status}`);
        setLoading(false);
      });
  }, [navigate]);

  const refreshData = () => {
    SelectEmailAutomation()
      .then((response) => {
        setData(response.data.automations || []);
      })
      .catch((error) => {
        console.error('Error refreshing data:', error);
      });
  };

  // if (loading) return <TopBarProgress />;

  return (
    <div>
      <div className="flex flex-row gap-5 flex-wrap">
        {data.length > 0 ? (
          data.map((automation) => (
            <div key={automation.id} className='flex flex-1 min min-w-80 max-w-80'>
              <div className="card flex flex-row gap-2 p-4">
                <div className='card-body p-0 my-auto text-gray-700 parent-hover-primary text-sm font-semibold justify-center'>
                  {automation.emailAutomation}
                </div>
                
                <Menu>
                  <MenuItem 
                    toggle="dropdown"
                    trigger="click"
                    dropdownProps={{
                      placement:"bottom-start",
                      modifiers: [{
                        name: "offset",
                        options: {
                          offset: [-20,10]
                        }
                      }]
                    }}>
                      <MenuToggle className="">
                      <button className='dropdown-toggle btn btn-sm btn-icon btn-outline btn-clear hover:btn-danger'>
                        <KTIcon iconName='dots-horizontal' className='text-lg'/>
                      </button>
                      </MenuToggle>
                      {EmailAutomationOptions({
                        menuItemRef: itemUserRef
                      })}
                  </MenuItem>
                </Menu>
              </div>
            </div>
          ))
        ): (
          <div className="flex mx-auto justify-center">
            <div className='flex'>
              <p className='mx-auto'>No email templates available.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )};

export { DataEmailAutomationDashboardComponent };
