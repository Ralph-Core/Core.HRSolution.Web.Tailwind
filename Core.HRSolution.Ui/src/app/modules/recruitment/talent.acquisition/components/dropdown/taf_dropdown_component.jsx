import React, { useState, useEffect, useCallback } from 'react';
import {
    SelectTafStatusDropDown,
    SelectTafReasonDropDown,
    SelectTafWorkArrangementDropDown,
    SelectTafApproverDropDown,
    SelectJobProfileDropDown,
    SelectTAFDropDown
} from '../../request/taf_dropdown_request'
import Select from 'react-select'

const SelectReasonComponent = ({
    id,
    name,
    onChange,
    value,
    className,
    placeholder,
}) => {
    const [options, setOptions] = useState([]);

    useEffect(() => {
        const fetchOptions = async () => {
            try {
                const response = await SelectTafReasonDropDown();
                setOptions(response.data.values);
            } catch (error) {
                console.error("Error fetching options:", error);
            }
        };

        fetchOptions();
    }, []);

    return (
        <select 
        name={name}
        onChange={onChange}
        value={value}
        id={id}
        className={className}
        >
            <option value='0'>Select option</option>
            {options.map(option => (
                <option key={option.id} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

const SelectStatusComponent = ({
    id,
    name,
    onChange,
    value,
    className,
    placeholder,
}) => {
    const [options, setOptions] = useState([]);

    useEffect(() => {
        const fetchOptions = async () => {
            try {
                const response = await SelectTafStatusDropDown();
                setOptions(response.data.values);
            } catch (error) {
                console.error("Error fetching options:", error);
            }
        };

        fetchOptions();
    }, []);

    return (
        <select 
        name={name}
        onChange={onChange}
        value={value}
        id={id}
        className={className}
        >
            <option value='0'>Select option</option>
            {options.map(option => (
                <option key={option.id} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

const SelectWorkArrangementComponent = ({
    id,
    name,
    onChange,
    value,
    className,
    placeholder,
}) => {
    const [options, setOptions] = useState([]);

    useEffect(() => {
        const fetchOptions = async () => {
            try {
                const response = await SelectTafWorkArrangementDropDown();
                setOptions(response.data.values);
            } catch (error) {
                console.error("Error fetching options:", error);
            }
        };

        fetchOptions();
    }, []);

    return (
        <select 
        name={name}
        onChange={onChange}
        value={value}
        id={id}
        className={className}
        >
            <option value='0'>Select option</option>
            {options.map(option => (
                <option key={option.id} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

// const SelectClientIndividualsComponent = ({
//   id,
//   name,
//   onChange,
//   value,
//   className,
//   placeholder = 'Select option',
//   departmentId,
// }) => {
//   const [options, setOptions] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (!departmentId) {
//       setOptions([]); // Reset options if departmentId is not provided
//       return;
//     }

//     const fetchOptions = async () => {
//       setLoading(true); // Start loading indicator
//       try {
//         const response = await SelectTafApproverDropDown(departmentId);
//         setOptions(response.data.values || []);
//       } catch (error) {
//         console.error('Error fetching options:', error);
//         setOptions([]); // Reset options on error
//       } finally {
//         setLoading(false); // Stop loading indicator
//       }
//     };

//     fetchOptions();
//   }, [departmentId]); // Add departmentId as a dependency

//   return (
//     <select
//       id={id}
//       name={name}
//       onChange={onChange}
//       value={value}
//       className={className}
//     >
//       <option value="">{placeholder}</option>
//       {loading ? (
//         <option disabled>Loading...</option>
//       ) : (
//         options.map((option) => (
//           <option key={option.id} value={option.value}>
//             {option.label}
//           </option>
//         ))
//       )}
//     </select>
//   );
// };
const SelectClientIndividualsComponent = React.memo(
    ({ id, name, onChange, value, className, placeholder = 'Select option', departmentId }) => {
      const [options, setOptions] = useState([]);
      const [loading, setLoading] = useState(false);
  
      useEffect(() => {
        // console.log(departmentId, 'departmentId')

        if (!departmentId) {
          setOptions([]); // Reset options when departmentId is not provided
          return;
        }
  
        const fetchOptions = async () => {
          setLoading(true);
          try {
            const response = await SelectTafApproverDropDown(departmentId);
            setOptions(response.data.values || []);
          } catch (error) {
            console.error('Error fetching options:', error);
            setOptions([]);
          } finally {
            setLoading(false);
          }
        };
  
        fetchOptions();
      }, [departmentId]); // Runs only when departmentId changes
  
      return (
        <select id={id} name={name} value={value} onChange={onChange} className={className}>
          <option value="">{placeholder}</option>
          {loading ? (
            <option disabled>Loading...</option>
          ) : (
            options.map((option) => (
              <option key={option.id} value={option.value}>
                {option.label}
              </option>
            ))
          )}
        </select>
      );
    }
);

// const SelectClientJobProfilesComponent = ({
//     id,
//     name,
//     onChange,
//     value,
//     className,
//     placeholder,
//     departmentId,
//     departmentid
// }) => {
//     const [options, setOptions] = useState([]);

//     useEffect(() => {
//         const fetchOptions = async () => {
//             try {
//                 const response = await SelectJobProfileDropDown(departmentId,departmentid);
//                 setOptions(response.data.values);
//             } catch (error) {
//                 console.error("Error fetching options:", error);
//             }
//         };

//         fetchOptions();
//     }, []);

//     return (
//         <select 
//         name={name}
//         onChange={onChange}
//         value={value}
//         id={id}
//         className={className}
//         >
//             <option value=''>Select option</option>
//             {options.map(option => (
//                 <option key={option.id} value={option.value}>
//                     {option.label}
//                 </option>
//             ))}
//         </select>
//     );
// };

const SelectClientJobProfilesComponent = React.memo(
    ({ id, name, onChange, value, className, placeholder = 'Select option', departmentId}) => {
      const [options, setOptions] = useState([]);
      const [loading, setLoading] = useState(false);
    
      useEffect(() => {
        if (!departmentId) {
          setOptions([]); // Reset options when departmentId is not provided
          return;
        }
  
        const fetchOptions = async () => {
          setLoading(true);
          try {
            const response = await SelectJobProfileDropDown(departmentId);
            setOptions(response.data.values || []);
          } catch (error) {
            console.error('Error fetching options:', error);
            setOptions([]);
          } finally {
            setLoading(false);
          }
        };
  
        fetchOptions();
      }, [departmentId]); // Runs only when departmentId changes
  
      return (
        <select id={id} name={name} value={value} onChange={onChange} className={className}>
          <option value="">{placeholder}</option>
          {loading ? (
            <option disabled>Loading...</option>
          ) : (
            options.map((option) => (
              <option key={option.id} value={option.value}>
                {option.label}
              </option>
            ))
          )}
        </select>
      );
    }
);

const SelectMultipleClientJobProfilesComponent = React.memo(
  ({ id, name, onChange, value, className, placeholder = 'Select option', departmentId, departmentid }) => {
    const [options, setOptions] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      if (!departmentId) {
        setOptions([]); // Reset options when departmentId is not provided
        return;
      }

      const fetchOptions = async () => {
        setLoading(true);
        try {
          const response = await SelectTAFDropDown(departmentId, departmentid);
          setOptions(
            response.data.values.map((item) => ({
              value: item.id,
              label: item.label, // Adjust these fields to match your API response
            }))
          );
        } catch (error) {
          console.error('Error fetching options:', error);
          setOptions([]);
        } finally {
          setLoading(false);
        }
      };

      fetchOptions();
    }, [departmentId, departmentid]);

    return (
      <Select
        options={options}
        placeholder={placeholder}
        classNamePrefix='react-select' 
        isMulti
        id={id}
        name={name}
        className={className}
        onChange={onChange} // Pass the selected value to the parent via onChange
        value={value} // Controlled value
        isLoading={loading} // Show loading spinner while fetching
      />
    );
  }
);


export {
    SelectReasonComponent,
    SelectStatusComponent,
    SelectWorkArrangementComponent,
    SelectClientIndividualsComponent,
    SelectClientJobProfilesComponent,
    SelectMultipleClientJobProfilesComponent
};
