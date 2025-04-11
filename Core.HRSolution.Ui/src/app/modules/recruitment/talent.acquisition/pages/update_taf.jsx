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
  SelectClientJobProfilesComponent,
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
  const [departmentId, setClientId] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      const response = await SelectTafFormDetails(id);
      if (response?.data?.taf) {
        setData(response.data.taf);
        setClientId(response.data.taf.departmentId)
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
      departmentId: Yup.string().required('Client is required'),
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
        fetchData()
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

  function toLocalDateInputString(date) {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  if (!data) {
    return <div>Loading...</div>; // Show loading until data is fetched
  }

  return (
    <>
      <ToolbarWrapper
        title="Update Talent Acquisition Form"
      />
      {console.log(data)}
      <Content>
        <Formik
          enableReinitialize
          initialValues={{
            requestDate: data.requestDate ? toLocalDateInputString(data.requestDate) : '',
            statusId: data.statusId || '',
            reasonId: data.reasonId || '',
            headcount: data.headcount || '',
            departmentId: data.departmentId || '',
            department: data.department || '',
            jobId: data.jobId || '',
            negotiable: data.negotiable || '',
            nonNegotiable: data.nonNegotiable || '',
            targetSalaryRange: data.targetSalaryRange || '',
            interviewSchedule: data.interviewSchedule || '',
            hiringManager: data.hiringManager || '',
            approver: data.approver || '',
            targetStartDate: data.targetStartDate ? toLocalDateInputString(data.targetStartDate) : '' ,
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
                          <label className="text-gray-800 text-sm mb-2 required">
                            Request Date 
                          </label>
                          <Field
                            type="date"
                            className="input"
                            name="requestDate"
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
                          <label className="text-gray-800 text-sm mb-2 required">
                            Job Profile
                          </label>
                          <Field
                            as={SelectClientJobProfilesComponent}
                            name="jobId"
                            className="input select"
                            departmentId={departmentId}
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
                            placeholder="e.g., 10000-20000"
                          />
                        </div>
                        <div className="flex flex-col flex-1">
                          <label className="text-gray-800 text-sm mb-2 required">
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
                          <label className="text-gray-800 text-sm mb-2 required">
                            Hiring Manager
                          </label>
                          <Field
                            as={SelectClientIndividualsComponent}
                            name="hiringManager"
                            className="input select"
                            departmentId={departmentId} 
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
                            name="targetStartDate"
                            className="input"
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
                            placeholder="e.g., 12:00a - 09:00p"
                          />
                          <ErrorMessage
                            name="schedule"
                            component="div"
                            className="text-red-600 text-sm m-2"
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
                      Update
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
