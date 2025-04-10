import React, { useState, useCallback, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Flatpickr from 'react-flatpickr';
import {
  SelectClientComponent,
} from '../../client.profile/component/dropdowns/client_profile_dropdown_component';
import {
  SelectReasonComponent,
  SelectStatusComponent,
  SelectWorkArrangementComponent,
  SelectClientIndividualsComponent,
  SelectClientJobProfilesComponent
} from '../components/dropdown/taf_dropdown_component';

import {
  SaveChangesTaf,
  SelectTafFormDetails
} from '../request/taf_request';

import { ToolbarWrapper } from '../../../../../_metronic/layout/components/toolbar';
import { Content } from '../../../../../_metronic/layout/components/content';
import Swal from 'sweetalert2';

const UpdateTafPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [clientId, setClientId] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      const response = await SelectTafFormDetails(id);
      if (response?.data?.taf) {
        setData(response.data.taf);
        setClientId(response.data.taf.clietId)
      }
    } catch (err) {
      navigate(`/error/400`);
    }
  }, [id, navigate]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const validationSchema = Yup.object().shape({
    requestDate: Yup.date().required('Request date is required'),
    statusId: Yup.string().required('Status is required'),
    reasonId: Yup.string().required('Reason is required'),
    headcount: Yup.number()
      .required('Headcount is required')
      .min(1, 'Headcount must be at least 1'),
    clientId: Yup.string().required('Client is required'),
    jobId: Yup.string().required('Job profile is required'),
    negotiable: Yup.string().nullable(),
    nonNegotiable: Yup.string().nullable(),
    targetSalaryRange: Yup.string().nullable(),
    interviewSchedule: Yup.string().nullable(),
    hiringManager: Yup.string().required('Hiring manager is required'),
    targetStartDate: Yup.date().required('Target start date is required'),
    workArrangement: Yup.string().required('Work arrangement is required'),
    schedule: Yup.string().required('Work schedule is required'),
    equipment: Yup.string().required('Equipment is required'),
    notes: Yup.string().nullable(),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      console.log(values)
      const response = await SaveChangesTaf(id,values);

      if (response?.data.success) {
        Swal.fire({
          icon: 'success',
          title: 'Form Updated',
          text: 'Your Talent Acquisition Form has been updated successfully!',
        });
        resetForm();
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Update Failed',
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

  if (!data) {
    return <div>Loading...</div>; // Show loading until data is fetched
  }

  return (
    <>
      {/* <ToolbarWrapper
        title="Update Talent Acquisition Form"
        subtitle="Recruitment - Talent Acquisition"
      /> */}
      <Content>
        <Formik
          enableReinitialize
          initialValues={{
            requestDate: data.requestDate || '',
            statusId: data.statusId || '',
            reasonId: data.reasonId || '',
            headcount: data.headcount || '',
            clientId: data.clietId || '',
            department: data.department || '',
            jobId: data.jobId || '',
            negotiable: data.negotiable || '',
            nonNegotiable: data.nonNegotiable || '',
            targetSalaryRange: data.targetSalaryRange || '',
            interviewSchedule: data.interviewSchedule || '',
            hiringManager: data.hiringManager || '',
            approver: data.approver || '',
            targetStartDate: data.targetStartDate || '',
            workArrangement: data.workArrangement || '',
            schedule: data.schedule || '',
            equipment: data.equipment || '',
            notes: data.notes || '',
          }}
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
                          <label className="text-gray-800 text-sm mb-2">
                            Request Date <span className='text-danger'> *</span>
                          </label>
                          <Flatpickr
                            className="input"
                            placeholder="Request Date"
                            name="requestDate"
                            value={data.requestDate ? new Date(data.requestDate) : ''}
                            options={{
                              dateFormat: 'Y-m-d', // Ensure correct date format
                              defaultDate: data.requestDate ? new Date(data.requestDate) : '',
                            }}
                            onChange={(date) => setFieldValue('requestDate', date[0])}
                          />
                          <ErrorMessage
                            name="requestDate"
                            component="div"
                            className="form-hint text-danger mt-1"
                          />
                        </div>
                        <div className="flex flex-col flex-1">
                          <label className="text-sm mb-2 text-gray-800">
                            Status <span className='text-danger'> *</span>
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
                          <label className="text-gray-800 text-sm mb-2">
                            Reason <span className='text-danger'> *</span>
                          </label>
                          <Field
                            as={SelectReasonComponent}
                            name="reasonId"
                            className="input select"
                            
                          />
                          <ErrorMessage
                            name="reasonId"
                            component="div"
                            className="form-hint text-danger mt-1"
                          />
                        </div>
                        <div className="flex flex-col flex-1">
                          <label className="text-gray-800 text-sm mb-2">
                            Headcount <span className='text-danger'> *</span>
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
                          <label className="text-gray-800 text-sm mb-2">
                            Company/Client Name <span className='text-danger'> *</span>
                          </label>
                          <Field
                            as={SelectClientComponent}
                            name="clientId"
                            className="input select"
                            onChange={(e) => {
                              setFieldValue('clientId', e.target.value);
                              setClientId(e.target.value);
                            }}
                          />
                          <ErrorMessage
                            name="clietId"
                            component="div"
                            className="form-hint text-danger mt-1"
                          />
                        </div>
                      </div>
                      
                      <div className="flex flex-row pt-2 gap-5">
                        <div className="flex flex-col flex-1">
                          <label className="text-gray-800 text-sm mb-2">
                            Job Profile <span className='text-danger'> *</span>
                          </label>
                          <Field
                            as={SelectClientJobProfilesComponent}
                            name="jobId"
                            className="input select"
                            clientId={clientId} 
                            // departmentid={1}
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
                      {data.reasonId !='4'&& (
                        <>
                        <div className="flex flex-row gap-5">
                        <div className="flex flex-col flex-1">
                          <label className="text-gray-800 text-sm mb-2">
                            Negotiable Competencies <span className="text-danger"> *</span>
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
                          <label className="text-gray-800 text-sm mb-2">
                            Non-Negotiable Competencies <span className="text-danger"> *</span>
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
                          <label className="text-gray-800 text-sm mb-2">
                            Salary Range
                          </label>
                          <Field
                            type="text"
                            name="targetSalaryRange"
                            className="input"
                            placeholder="e.g., 10000-20000"
                          />
                        </div>
                        <div className="flex flex-col flex-1">
                          <label className="text-gray-800 text-sm mb-2">
                            Interview Schedule
                          </label>
                          <Field
                            type="text"
                            name="interviewSchedule"
                            className="border-2 border-solid rounded-md text-sm p-2"
                          />
                        </div>
                      </div>
                      <div className="flex flex-row pt-2 gap-5">
                        <div className="flex flex-col flex-1">
                          <label className="text-gray-800 text-sm mb-2">
                            Hiring Manager <span className="text-danger"> *</span>
                          </label>
                          <Field
                            as={SelectClientIndividualsComponent}
                            name="hiringManager"
                            className="input select"
                            clientId={clientId} 
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
                          <label className="text-gray-800 text-sm mb-2">
                            Target Start Date <span className="text-danger"> *</span>
                          </label>
                          <Flatpickr
                            name="targetStartDate"
                            className="input"
                            value={data.targetStartDate ? new Date(data.targetStartDate) : ''}
                            options={{
                              dateFormat: 'Y-m-d', // Ensure correct date format
                              defaultDate: data.targetStartDate ? new Date(data.targetStartDate) : '',
                            }}
                          />
                          <ErrorMessage
                            name="targetStartDate"
                            component="div"
                            className="form-hint text-danger mt-1"
                          />
                        </div>
                        <div className="flex flex-col flex-1">
                          <label className="text-gray-800 text-sm mb-2">
                            Work Arrangement <span className="text-danger"> *</span>
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
                          <label className="text-gray-800 text-sm mb-2">
                            Work Schedule <span className='text-danger'> *</span>
                          </label>
                          <Field
                            type="text"
                            name="schedule"
                            className="input"
                            placeholder="e.g., 12:00a - 09:00p"
                          />
                          <ErrorMessage
                            name="schedule"
                            component="div"
                            className="text-red-600 text-sm m-2"
                          />
                        </div>
                        <div className="flex flex-col flex-1">
                          <label className="text-gray-800 text-sm mb-2">
                            Equipment <span className='text-danger'> *</span>
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
                    <button type="submit" className="btn btn-primary">
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

const UpdateTalentAcquisitionWrapper = () => <UpdateTafPage />;

export { UpdateTalentAcquisitionWrapper };
