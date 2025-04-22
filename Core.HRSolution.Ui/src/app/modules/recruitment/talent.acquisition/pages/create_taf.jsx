import React, { useState, useCallback } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
// import {Flatpickr} from 'react-flatpickr';
import {
  SelectClientComponent,
  SelectClientCompanyGroupComponent,
} from '../../client.profile/component/dropdowns/client_profile_dropdown_component';
import {
  SelectReasonComponent,
  SelectStatusComponent,
  SelectWorkArrangementComponent,
  SelectClientIndividualsComponent,
  SelectClientJobProfilesComponent
} from '../components/dropdown/taf_dropdown_component';

import {
  CreateNewTaf
} from '../request/taf_request';

import { ToolbarWrapper } from '../../../../../_metronic/layout/components/toolbar';
import { Content } from '../../../../../_metronic/layout/components/content';
import Swal from 'sweetalert2';
// import DatePicker from 'react-flatpickr';

const CreateTafPage = () => {
  const [clientValue, setClientValue] = useState('');
  const [departmentValue, setDepartmentValue] = useState('');
  const [jobProfileValue, setJobProfileValue] = useState('');
  const [reasonValue, setReasonValue] = useState('');
  const [hiringManager, setHiringManager] = useState('');
  const [approver, setApprover] = useState('');



  // Validation Schema using Yup
  const validationSchema = Yup.object().shape({
    requestDate: Yup.date().required('Request date is required'),
    statusId: Yup.string().required('Status is required'),
    reasonId: Yup.string().required('Reason is required'),
    headcount: Yup.number()
      .required('Headcount is required')
      .min(1, 'Headcount must be at least 1'),
    departmentId: Yup.string().required('Client is required'),
    
    jobId: Yup.string().required('Job profile is required'),
    negotiable: Yup.string().when('reason', {
      is: (value) => value !== '4', // Check if reason is not '4'
      then: () => Yup.string().required('Negotiable Competencies is required'),
      otherwise: () => Yup.string().notRequired(),
    }),
    nonNegotiable: Yup.string().when('reason', {
      is: (value) => value !== '4', // Check if reason is not '4'
      then: () => Yup.string().required('Non-Negotiable Competencies is required'),
      otherwise: () => Yup.string().notRequired(),
    }),
    targetSalaryRange: Yup.string().nullable(),
    interviewSchedule: Yup.string().nullable(),
    hiringManager: Yup.string().required('Hiring manager is required'),
    targetStartDate: Yup.date().required('Target start date is required'),
    workArrangement: Yup.string().required('Work arrangement is required'),
    schedule: Yup.string().required('Work schedule is required'),
    equipment: Yup.string().required('Equipment is required'),
    notes: Yup.string().nullable(),
    
  });
  

  // Initial Values for Formik
  const initialValues = {
    requestDate: '',
    statusId: '',
    reasonId: '',
    headcount: '',
    departmentId: '',
    department: '',
    jobId: '',
    negotiable: '',
    nonNegotiable: '',
    targetSalaryRange: '',
    interviewSchedule: '',
    hiringManager: '',
    approver: '',
    targetStartDate: '',
    workArrangement: '',
    schedule: '',
    equipment: '',
    notes: '',
  };

  const handleSubmit = async (values, { resetForm }) => {
    console.log(values)
    try {
      // console.log(values,'123123')
      // Assuming `formData` needs to be constructed from `values`
      const formData = {
        ...values,
      };
  
      const response = await CreateNewTaf(formData);
  
      if (response?.data.success) {
        Swal.fire({
          icon: 'success',
          title: 'Form Submitted',
          text: 'Your Talent Acquisition Form has been created successfully!',
        });
        resetForm();
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Submission Failed',
          text: response?.message || 'An error occurred during submission.',
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Submission Error',
        text: error.message || 'An unexpected error occurred.',
      });
    }
  };
  

  return (
    <>
      {/* <ToolbarWrapper
        title="Create Talent Acquisition Form"
        subtitle="Recruitment - Talent Acquisition"
      /> */}
      <Content>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue }) => (
            <Form>
              <div className="card my-5 border-gray-300">
                <div className="card-body my-5">
                  <div className="flex flex-row mb-6">
                    <div className="p-5 flex-[1] border-dotted border-gray-300 border-r-3">
                      <h3 className="text-gray-800 mb-4 text-lg font-semibold">SUMMARY</h3>
                      <div className="flex flex-row gap-5">
                        <div className="flex flex-col flex-1">
                          <label className="text-gray-800 text-sm mb-2 required">
                            Request Date
                          </label>
                          <Field
                            type="date"
                            className="input"
                            name="requestDate"
                            // onChange={(date) => setFieldValue('requestDate', date[0])}
                          />
                          <ErrorMessage
                            name="requestDate"
                            component="div"
                            className="form-hint text-danger mt-1"
                          />
                        </div>
                        <div className="flex flex-col flex-1">
                          <label className="text-sm mb-2 text-gray-800 required">
                            Status
                          </label>
                          <Field
                            as={SelectStatusComponent}
                            name="statusId"
                            className="input select"
                          />
                          <ErrorMessage
                            name="statusId"
                            component="div"
                            className="form-hint text-danger mt-1"
                          />
                        </div>
                      </div>
                      <div className="flex flex-row pt-2 gap-5">
                        <div className="flex flex-col flex-1">
                          <label className="text-gray-800 text-sm mb-2 required">
                            Reason
                          </label>
                          <Field
                            as={SelectReasonComponent}
                            name="reasonId"
                            className="input select"
                            onChange={(e) => {
                              setFieldValue('reasonId', e.target.value);
                              setReasonValue(e.target.value);
                            }}
                          />
                          <ErrorMessage
                            name="reasonId"
                            component="div"
                            className="form-hint text-danger mt-1"
                          />
                        </div>
                        <div className="flex flex-col flex-1">
                          <label className="text-gray-800 text-sm mb-2 required">
                            Headcount
                          </label>
                          <Field
                            type="number"
                            name="headcount"
                            className="input"
                            placeholder="Headcount"
                          />
                          <ErrorMessage
                            name="headcount"
                            component="div"
                            className="form-hint text-danger mt-1"
                          />
                        </div>
                      </div>
                      <div className="flex flex-row pt-2 gap-5">
                        <div className="flex flex-col flex-1">
                          <label className="text-gray-800 text-sm mb-2 required">
                            Company/Client Name
                          </label>
                          <Field
                            as={SelectClientComponent}
                            name="departmentId"
                            className="input select"
                            onChange={(e) => {
                              setFieldValue('departmentId', e.target.value);
                              setClientValue(e.target.value);
                            }}
                          />
                          <ErrorMessage
                            name="departmentId"
                            component="div"
                            className="form-hint text-danger mt-1"
                          />
                        </div>
                      </div>
                      
                      <div className="flex flex-row pt-2 gap-5">
                        <div className="flex flex-col flex-1">
                          <label className="text-gray-800 text-sm mb-2 required">
                            Job Profile
                          </label>
                          <Field
                            as={SelectClientJobProfilesComponent}
                            name="jobId"
                            className="input select"
                            departmentId={clientValue} 
                            // departmentId={departmentValue}
                            onChange={(e) => {
                              setFieldValue('jobId', e.target.value);
                              setJobProfileValue(e.target.value);
                            }}
                          />
                          <ErrorMessage
                            name="jobId"
                            component="div"
                            className="form-hint text-danger mt-1"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="p-5 flex-[1.25]">
                      <h3 className="text-gray-800 mb-4 text-lg font-semibold">
                        CALIBRATION SHEET
                      </h3>
                      {reasonValue!='4'&& (
                        <>
                        <div className="flex flex-row gap-5">
                        <div className="flex flex-col flex-1">
                          <label className="text-gray-800 text-sm mb-2 required">
                            Negotiable Competencies
                          </label>
                          <Field
                            as="textarea"
                            name="negotiable"
                            className="textarea"
                          />
                          <ErrorMessage
                            name="negotiable"
                            component="div"
                            className="form-hint text-danger mt-1"
                          />
                        </div>
                        <div className="flex flex-col flex-1">
                          <label className="text-gray-800 text-sm mb-2 required">
                            Non-Negotiable Competencies
                          </label>
                          <Field
                            as="textarea"
                            name="nonNegotiable"
                            className="textarea"
                          />
                          <ErrorMessage
                            name="nonNegotiable"
                            component="div"
                            className="form-hint text-danger mt-1"
                          />
                        </div>
                      </div>
                      <div className="flex flex-row pt-2 gap-5">
                        <div className="flex flex-col flex-1">
                          <label className="text-gray-800 text-sm mb-2 required">
                            Salary Range
                          </label>
                          <Field
                            type="text"
                            name="targetSalaryRange"
                            className="input"
                            placeholder="e.g., 10,000-20,000"
                          />
                        </div>
                        <div className="flex flex-col flex-1">
                          <label className="text-gray-800 text-sm mb-2 required">
                            Interview Schedule
                          </label>
                          <Field
                            type="text"
                            name="interviewSchedule"
                            className="input"
                          />
                        </div>
                      </div>
                      <div className="flex flex-row pt-2 gap-5">
                        <div className="flex flex-col flex-1">
                          <label className="text-gray-800 text-sm mb-2 required">
                            Hiring Manager
                          </label>
                          <Field
                            as={SelectClientIndividualsComponent}
                            name="hiringManager"
                            className="input select"
                            departmentId={clientValue} 
                            onChange={(e) => {
                              setFieldValue('hiringManager', e.target.value);
                              setHiringManager(e.target.value);
                            }}
                          />
                          <ErrorMessage
                            name="hiringManager"
                            component="div"
                            className="form-hint text-danger mt-1"
                          />
                        </div>
                        <div className='flex flex-col flex-1'>
                        </div>
                      </div>
                        </>
                      )}
                      
                      <div className="flex flex-row pt-2 gap-5">
                        <div className="flex flex-col flex-1">
                          <label className="text-gray-800 text-sm mb-2 required">
                            Target Start Date
                          </label>
                          <Field
                            type="date"
                            className="input"
                            name="targetStartDate"
                            // onChange={(date) =>
                            //   setFieldValue('targetStartDate', date[0])
                            // }
                          />
                          <ErrorMessage
                            name="targetStartDate"
                            component="div"
                            className="form-hint text-danger mt-1"
                          />
                        </div>
                        <div className="flex flex-col flex-1">
                          <label className="text-gray-800 text-sm mb-2 required">
                            Work Arrangement
                          </label>
                          <Field
                            as={SelectWorkArrangementComponent}
                            name="workArrangement"
                            className="input select"
                          />
                          <ErrorMessage
                            name="workArrangement"
                            component="div"
                            className="form-hint text-danger mt-1"
                          />
                        </div>
                      </div>
                      <div className="flex flex-row pt-2 gap-5">
                        <div className="flex flex-col flex-1">
                          <label className="text-gray-800 text-sm mb-2 required">
                            Work Schedule
                          </label>
                          <Field
                            type="text"
                            name="schedule"
                            className="input"
                            placeholder="e.g., 12:00 am - 09:00 pm"
                          />
                          <ErrorMessage
                            name="schedule"
                            component="div"
                            className="form-hint text-danger mt-1"
                          />
                        </div>
                        <div className="flex flex-col flex-1">
                          <label className="text-gray-800 text-sm mb-2 required">
                            Equipment
                          </label>
                          <Field as="select" name="equipment" className="input select">
                            <option value="">Select option</option>
                            <option value="Core">CORE</option>
                            <option value="Client">Client</option>
                          </Field>
                          <ErrorMessage
                            name="equipment"
                            component="div"
                            className="form-hint text-danger mt-1"
                          />
                        </div>
                      </div>
                      <div className="flex flex-row pt-2">
                        <div className="flex flex-col flex-1">
                          <label className="text-gray-800 text-sm mb-2">Notes</label>
                          <Field as="textarea" name="notes" className="textarea" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <button type="submit" className="btn btn-danger">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </Content>
    </>
  );
};

const CreateTalentAcquisitionWrapper = () => <CreateTafPage />;

export { CreateTalentAcquisitionWrapper };
