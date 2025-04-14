import React, { useState, useEffect } from 'react';
import { KTIcon } from '@/_metronic/helpers';
import Swal from 'sweetalert2';
import { ToolbarWrapper } from '../../../../../_metronic/layout/components/toolbar';
import { Content } from '../../../../../_metronic/layout/components/content';
import { CreateEmailTemplateModal } from '../components/modals/create_email_content';
import { DataEmailDashboardComponent } from '../components/elements/email_dashboard';


const EmailTemplatePage = () => {

  return (
    <>
      {/* <ToolbarWrapper
        title="Email Template"
        subtitle="System Setup - Settings"
      />
       */}
      <Content>
        <div className="card mb-5 ">
          <div className="card-body">
            <div className="flex gap-5">
              <div className='flex flex-[1]'>
                <div className="flex input max-w-72">
                  <KTIcon iconName="magnifier" className="" />
                  <input
                    type="text"
                    className=""
                    placeholder="Search"
                  />
                </div>
              </div>
              
              <div className="flex ml-auto">
                <button className="btn btn-danger">
                  <i className='ki-filled ki-feather text-white'></i>
                  Create Email Template
                  {/* <CreateEmailTemplateModal></CreateEmailTemplateModal> */}
                </button>
              </div>
            </div>
            <DataEmailDashboardComponent></DataEmailDashboardComponent>

          </div>
        </div>
      </Content>
    </>
  );
};

const EmailTemplateWrapper = () => <EmailTemplatePage />;

export { EmailTemplateWrapper };
