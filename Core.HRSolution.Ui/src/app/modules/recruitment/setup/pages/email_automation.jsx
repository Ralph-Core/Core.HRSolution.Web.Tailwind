import React, { useState, useEffect } from 'react';
import { KTIcon } from '@/_metronic/helpers';
import Swal from 'sweetalert2';
import { ToolbarWrapper } from '../../../../../_metronic/layout/components/toolbar';
import { Content } from '../../../../../_metronic/layout/components/content';
import { CreateEmailAutomationModal } from '../components/modals/create_email_automation';
import { DataEmailAutomationDashboardComponent } from '../components/elements/email_automation_dashboard';
import { useNavigate } from 'react-router';


const EmailAutomationPage = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    
  })

  return (
    <>
      <Content>
        <div className="card mb-5">
          <div className="card-body">
            <div className='flex flex-row'>
              <div className="input-group ml-auto">
                <label className="input input-sm">
                  <KTIcon iconName='magnifier' />
                  <input type="text" placeholder="Search assessment" 
                  // value={searchTerm} 
                  // onChange={handleSearch} 
                  />
                </label>
                {/* <span className='btn btn-sm btn-danger'>
                  <KTIcon iconName="setting-4"/>
                </span> */}
              </div>
            </div>


            <div className="mb-6">
                <span data-kt-element="bullet" className="bullet bullet-vertical d-flex align-items-center min-h-20px mh-50 me-4 bg-info"></span>
                <div className="flex-grow-1 me-5">
                    <div className="uppercase font-bold border-red-600 border-l-4 pl-2">
                        Automation Template
                    </div>
                </div>
            </div>
            <div className="flex flex-row gap-5 flex-wrap">
              <div className='flex flex-1 min-w-80 max-w-80'>
                <CreateEmailAutomationModal type={"1"}/>
              </div>
              <div className='flex flex-1 min-w-80 max-w-80'>
                <CreateEmailAutomationModal type={"2"}/>
              </div>
              <div className='flex flex-1 min-w-80 max-w-80'>
                <CreateEmailAutomationModal type={"3"}/>
              </div>
              <div className='flex flex-1 min-w-80 max-w-80'>
                <CreateEmailAutomationModal type={"4"}/>
              </div>
              <div className='flex flex-1 min-w-80 max-w-80'>
                <CreateEmailAutomationModal type={"5"}/>
              </div>
            </div>

            <div className="separator separator-dashed border-secondary my-10"></div>

            <div className="d-flex align-items-center mb-6">
                <span data-kt-element="bullet" className="bullet bullet-vertical d-flex align-items-center min-h-20px mh-50 me-4 bg-info"></span>
                <div className="flex-grow-1 me-5">
                    <div className="uppercase font-bold border-red-600 border-l-4 pl-2">
                      Automation Dashboard
                    </div>
                </div>
            </div>

            <DataEmailAutomationDashboardComponent></DataEmailAutomationDashboardComponent>
          </div>
        </div>
      </Content>
    </>
  );
};

const EmailAutomationWrapper = () => <EmailAutomationPage />;

export { EmailAutomationWrapper };
