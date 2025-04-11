import React, { useState, useEffect } from 'react';
import { SelectEmailTemplate } from '../../request/email_template';
import TopBarProgress from 'react-topbar-progress-indicator';
import { useNavigate } from 'react-router-dom';
import {UpdateTafEmailTemplateModal} from '../modals/update_email_content'

function DataEmailDashboardComponent() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch data once on load
  useEffect(() => {
    setLoading(true);
    SelectEmailTemplate()
      .then((response) => {
        setData(response.data.templates || []); // Ensure data is an array
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching email templates:', error);
        navigate(`/error/${error.status}`); // Uncomment this if you want to handle navigation on error
        setLoading(false);
      });
  }, [navigate]); // Add dependencies if needed

  if (loading) return <TopBarProgress />;

  return (
    <div>
      {/* Display data */}
      <div className="flex flex-col gap-3">
        {data.length > 0 ? (
          data.map((template) => (
            <div key={template.id} className="flex flex-col border-b-2 pb-6 border-dashed">
                <div className="d-flex align-items-center mb-6">
                    <span data-kt-element="bullet" className="bullet bullet-vertical d-flex align-items-center min-h-20px mh-50 me-4 bg-info"></span>
                    <div className="flex-grow-1 me-5">
                        <div className="uppercase font-bold  border-red-600 border-l-4 pl-2">
                            {template.actionName}
                        </div>
                    </div>
                </div>
              {/* Email Template Dashboard Cards */}
                <div className=""></div>
                <div className='px-5 pt-3'>
                  <div className="flex flex-row gap-5 flex-wrap">
                      {template.emailTemplateDashboard.map((dashboard) => (
                        <div key={dashboard.id} className="">
                           <div className="max-w-80">
                              <div className="card min-w-80 max-w-80 min-h-40 max-h-40 overflow-hidden">
                                <div className="card-body p-5 flex flex-row ">
                                    <div className="flex-[1] my-auto ">
                                        <div className="text-gray-900 font-base">{dashboard.name}</div>
                                        <div className="mt-2">
                                            <p className="text-gray-500"> Dashboard ID: {dashboard.id}</p>
                                        </div>
                                    </div>
                                    <div className="flex-[.5]">
                                        <button className="btn btn-sm btn-icon btn-bg-light btn-active-color-danger" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-flip="top-end">
                                            <i className="ki-filled ki-dots-horizontal"></i>
                                        </button>
                                        <div className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-auto min-w-200 mw-300px' data-kt-menu='true'>
                                            <div className="menu-item px-3">
                                                {/* <div className="menu-content fs-6 text-gray-900 fw-bold px-3 py-4">Actions</div> */}
                                            </div>
                                            {/* <div className='separator border-gray-200'></div>
                                            <div className="menu-item px-3 py-5"> */}
                                            {/* {template.id === 1 ? ( */}
                                                {/* <UpdateTafEmailTemplateModal
                                                id={dashboard.id}
                                                name={dashboard.name}
                                                subject={dashboard.subject}
                                                emailBody={dashboard.body}
                                                emailCc={dashboard.cc}
                                                /> */}
                                            {/* ) : null} */}
                                            {/* </div> */}
                                        </div>
                                    </div>
                                </div>
                              </div>
                            </div>
                        </div>
                      ))}
                  </div>
                </div>

            </div>
          ))
        ) : (
          <div className="col-12">
            <p className="text-muted text-center">No email templates available.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export { DataEmailDashboardComponent };
