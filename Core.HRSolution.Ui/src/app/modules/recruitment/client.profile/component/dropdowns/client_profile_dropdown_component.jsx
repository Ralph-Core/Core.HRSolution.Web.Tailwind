import React, { useEffect, useState } from 'react';
import {
    SelectCoreServiceDropDown,
    SelectClientStatusDropDown,
    SelectEmployementDropDown,
    SelectJobStatusDropDown,
    SelectClientsDropDown,
    SelectClientCompanyGroupDropDown,
    SelectReasonDropDown,
    SelectStatusDropdown
} from '../../core/request/clients_request'

const SelectCoreServiceComponent = ({
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
                const response = await SelectCoreServiceDropDown();
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
            <option value='0' hidden>All Records</option>
            {options.map(option => (
                <option key={option.id} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

const SelectClientStatusComponent = ({
    id,
    name,
    onChange,
    value,
    className,
    placeholder = "All Records",
}) => {
    const [options, setOptions] = useState([]);

    useEffect(() => {
        const fetchOptions = async () => {
            try {
                const response = await SelectClientStatusDropDown();
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
        onChange={(e) => onChange(e.target.value)}
        value={value || ""}
        id={id}
        className={className}
        >
            <option value="" hidden>{placeholder}</option>
            {options.map(option => (
                <option key={option.id} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

const SelectEmploymentComponent = ({
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
                const response = await SelectEmployementDropDown();
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
            <option value='0' hidden>All Records</option>
            {options.map(option => (
                <option key={option.id} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

const SelectJobProfileStatusComponent = ({
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
                const response = await SelectJobStatusDropDown();
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
            <option value='0' hidden>All Records</option>
            {options.map(option => (
                <option key={option.id} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

const SelectClientComponent = ({
    id,
    name,
    onChange,
    value,
    className,
    placeholder = "All Records",
}) => {
    const [options, setOptions] = useState([]);

    useEffect(() => {
        const fetchOptions = async () => {
            try {
                const response = await SelectClientsDropDown();
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
        onChange={(e) => onChange(e.target.value)}
        value={value || ""}
        id={id}
        className={className}
        >
            <option value="" hidden>{placeholder}</option>
            {options.map(option => (
                <option key={option.id} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};


const SelectClientCompanyGroupComponent = ({
    id,
    name,
    onChange,
    value,
    className,
    placeholder = "All Records",
}) => {
    const [options, setOptions] = useState([]);

    useEffect(() => {
        const fetchOptions = async () => {
            try {
                const response = await SelectClientCompanyGroupDropDown();
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
        onChange={(e) => onChange(e.target.value)}
        value={value || ""}
        id={id}
        className={className}
        >
            <option value="" hidden>{placeholder}</option>
            {options.map(option => (
                <option key={option.id} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

const SelectReasonComponent = ({
    id,
    name,
    onChange,
    value,
    className,
    placeholder = "All Records",
}) => {
    const [options, setOptions] = useState([]);

    useEffect(() => {
        const fetchOptions = async () => {
            try {
                const response = await SelectReasonDropDown();
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
        onChange={(e) => onChange(e.target.value)}
        value={value || ""}
        id={id}
        className={className}
        >
            <option value="" hidden>{placeholder}</option>
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
    placeholder = "All Records",
}) => {
    const [options, setOptions] = useState([]);

    useEffect(() => {
        const fetchOptions = async () => {
            try {
                const response = await SelectStatusDropdown();
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
        onChange={(e) => onChange(e.target.value)}
        value={value || ""}
        id={id}
        className={className}
        >
            <option value="" hidden>{placeholder}</option>
            {options.map(option => (
                <option key={option.id} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export {
    SelectCoreServiceComponent,
    SelectClientStatusComponent,
    SelectEmploymentComponent,
    SelectJobProfileStatusComponent,
    SelectClientComponent,
    SelectClientCompanyGroupComponent,
    SelectReasonComponent,
    SelectStatusComponent
};
