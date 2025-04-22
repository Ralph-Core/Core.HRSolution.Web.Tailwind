import React, { useState, useEffect } from 'react';
import { KTIcon } from '@/_metronic/helpers';
import Swal from 'sweetalert2';
import { ToolbarWrapper } from '../../../../../_metronic/layout/components/toolbar';
import { Content } from '../../../../../_metronic/layout/components/content';
import { CreateEmailTemplateModal } from '../components/modals/create_email_content';
import { DataEmailDashboardComponent } from '../components/elements/email_dashboard';

import {UpdateTafEmailTemplateModal} from '../components/modals/update_email_content';


const EmailTemplatePage = () => {
  const [createEmailTemplate, setCreateEmailTemplate] = useState(false);

  const handleModalOpen = () => setCreateEmailTemplate(true)
  const handleModalClose = () => {
    setCreateEmailTemplate(false)
  };

  // For Testing
  const [updateEmailTemplate, setUpdateEmailTemplate] = useState(false);

  const handleUpdateOpen = () => setUpdateEmailTemplate(true);
  const handleUpdateClose = () => setUpdateEmailTemplate(false);

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
                <button className="btn btn-danger" onClick={handleModalOpen}>
                  <i className='ki-filled ki-feather text-white'></i>
                  Create Email Template
                </button>
                {/* <button className="btn btn-danger" onClick={handleUpdateOpen}>
                  <i className='ki-filled ki-feather text-white'></i>
                  Update Email Template
                </button> */}
              </div>
            </div>
            <DataEmailDashboardComponent></DataEmailDashboardComponent>

          </div>
        </div>
      </Content>

      <CreateEmailTemplateModal
        open={createEmailTemplate}
        onOpenChange={handleModalClose}
      />

      <UpdateTafEmailTemplateModal
        open={updateEmailTemplate}
        onOpenChange={handleUpdateClose}
      />

    </>
  );
  
};

const EmailTemplateWrapper = () => <EmailTemplatePage />;

export { EmailTemplateWrapper };
