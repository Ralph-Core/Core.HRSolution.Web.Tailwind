import React, { useState, useEffect, useRef } from 'react';
import {Link} from 'react-router-dom'
import { KTIcon } from '@/_metronic/helpers';
import {
  SelectClientComponent,
  SelectClientCompanyGroupComponent,
} from '../../client.profile/component/dropdowns/client_profile_dropdown_component';
import {
  SelectReasonComponent,
  SelectStatusComponent,
} from '../components/dropdown/taf_dropdown_component';
import {format} from 'date-fns';

import { SelectDashboardTaf } from '../request/taf_request';
import { ToolbarWrapper } from '../../../../../_metronic/layout/components/toolbar';
import { Content } from '../../../../../_metronic/layout/components/content';

import { SendTAFModal } from "../components/modal/send_taf";
import {
  enableLoadingRequest,
  disableLoadingRequest,
} from '../../../../helpers/loading_request';
import TableWithPagination from '../../../../../app/helpers/table/TableWithPagination';
import { Menu, MenuItem, MenuToggle } from '@/_metronic/components';
import {DropdownFilter} from '../components/filter/DropdownFilter';



const DashboardTafPage = () => {
  const itemUserRef = useRef(null);
  const [tafData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); // search state
  const [tableLoading, setTableLoading]  = useState(false);

  const [sortConfig, setSortConfig] = useState({ key: 'id', direction: 'asc' });
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalRecords, setTotalRecords] = useState(0);
  const columns = [
    { Header: 'TAF ID', accessor: 'id', className: 'text-center', sortable: true, },
    { Header: 'Requisition', accessor: 'position', classname: 'text-center', sortable: true, },
    { Header: 'Headcount', accessor: 'headcount',className: 'text-center', sortable: true, },
    { Header: 'Reason', accessor: 'reason',className: 'text-center', sortable: true, },
    { Header: 'Status', accessor: 'status',className: 'text-center', sortable: true, },
    { Header: 'Target Start Date', accessor: 'createdDate',className: 'text-center', sortable: true,
      Cell: row => (
        format(new Date(row.targetStartDate), 'MMMM d, yyyy')
        )
     },
    { Header: 'Work Arrangement', accessor: 'workArrangement',className: 'text-center', sortable: true, },
    { Header: 'Action', accessor: 'actionButtons',className: 'text-center', sortable: false,
      Cell: row => (
        <Link
          to={`/recruitment/talentacquisitioninfo/${row.id}`}
          className="btn btn-icon btn-sm btn-secondary"
        >
          <KTIcon iconName='eye' className='fs-3'/>
        </Link>

        )
     },
    
  ];
  const fetchAssessments = (   
   searchValue = '',
   sortKey = '',
   sortDirection = 'asc',
   page = 0,
   size = 10) => {
    enableLoadingRequest()
    setTableLoading(true)
    SelectDashboardTaf(searchValue, columns, sortKey, sortDirection, page, size)
      .then(response => {
        setFilteredData(response.data.data); // Set initial filtered data
        setTotalRecords(response.data.recordsTotal);
      })
      .catch(err => {
        console.error("Error fetching permissions:", err);
      })
      .finally(() => {
              disableLoadingRequest()
              setTableLoading(false)
            });
  };
 
  
  const handleSortChange = (key, direction) => {
    setSortConfig({ key, direction });
    fetchAssessments(searchTerm, key, direction, currentPage, pageSize); // Fetch roles with updated sorting
  };

  const handlePageSizeChange = (size) => {
    console.log(size);
    setPageSize(size);
    setCurrentPage(0); // Reset to first page
    fetchAssessments(searchTerm, sortConfig.key, sortConfig.direction, 0, size);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    fetchAssessments(searchTerm, sortConfig.key, sortConfig.direction, page, pageSize);
  };
  useEffect(() => {
     fetchAssessments(searchTerm, sortConfig.key, sortConfig.direction, currentPage, pageSize);
   }, []);

   const [group, setGroup] = useState(null);
   const [client, setClient] = useState(null);
   const [reason, setReason] = useState(null);
   const [status, setStatus] = useState(null);

  const handleReset = () => {
    setGroup("");
    setReason("");
    setClient("");
    setStatus("");
  };

  return (
    <>    
      <Content>
        <div className="card mb-5">
          <div className='card-header'>
            <span></span>
          <div className=" flex gap-2">
              <div className="input-group rounded-md border">
                <label className="input input-sm">
                  <KTIcon iconName='magnifier' />
                  <input type="text" placeholder="Search assessment" 
                  // value={searchTerm} 
                  // onChange={handleSearch} 
                  />
                  {/* <span className='btn rounded-none btn-sm  btn-danger mr-0'>
                    <KTIcon iconName="setting-4"/>
                  </span> */}
                </label>
                <Menu>
                    <MenuItem toggle="dropdown" trigger="click"
                      dropdownProps={{
                        placement: 'bottom-start',
                        modifiers: [{
                          name: 'offset',
                          options: {
                            offset: [-20, 10] // [skid, distance]
                          }
                        }]
                      }}>
                        <MenuToggle className="btn btn-danger btn-outline btn-sm rounded-none  btn-clear ">
                        <KTIcon iconName='setting-4' />
                        </MenuToggle>
                        {DropdownFilter({
                          menuItemRef: itemUserRef,
                          group, setGroup,
                          client, setClient,
                          reason, setReason,
                          status, setStatus,
                      })}
                    </MenuItem>
                  </Menu>
                  <div class="border-l-2 border-gray ..."></div>
                  <span
                            type='reset'
                            className='btn btn-sm btn-warning btn-outline btn-clear border-warning'
                            data-kt-menu-dismiss='true'
                            onClick={handleReset}
                          >
                            <KTIcon iconName='arrows-loop' />
                  </span>
              </div>
          </div>
          </div>
          <div className="">
            {/* <div className="py-5"> */}
              <TableWithPagination
                data={tafData} 
                columns={columns} 
                isLoadingValue={tableLoading}
                totalRecords={totalRecords}
                onSortChange={handleSortChange}
                onPageChange={handlePageChange}
                onPageSizeChange={handlePageSizeChange}
              />
            {/* </div> */}
          </div>
        </div>
      </Content>
    </>
  );
};

const DashboardTalentAcquisitionWrapper = () => <DashboardTafPage />;

export { DashboardTalentAcquisitionWrapper };
