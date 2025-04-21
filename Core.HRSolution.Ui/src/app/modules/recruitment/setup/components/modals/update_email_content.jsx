import { forwardRef, useEffect, useState } from 'react';
import { Dialog, DialogBody, DialogContent, DialogDescription, DialogHeader, DialogTitle} from '@/_metronic/components/ui/dialog';
import { DialogActions } from '@mui/material';
import Swal from 'sweetalert2';
// import { Modal, Button } from 'react-bootstrap';
import { KTIcon } from '@/_metronic/helpers';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import {
    ClassicEditor,
    createDropdown,
    ButtonView,
    ListView,
    ListItemView,
    Bold,
    Essentials,
    Italic,
    Paragraph,
    List,
    Heading,
    Link,
    Table,
    TableToolbar,
    Indent,
    IndentBlock,
} from 'ckeditor5';
import 'ckeditor5/ckeditor5.css';
import {UpdateEmailTemplate} from '../../request/email_template'


const emailTemplateValidationSchema = Yup.object().shape({
    id: Yup.string().required('ID is required'),
    name: Yup.string().max(1000, 'Must be 1000 characters or less').required('Template Name is required'),
    subject: Yup.string().max(1000, 'Must be 1000 characters or less').required('Subject is required'),
    emailBody: Yup.string().required('Email Body is required'),
});

function TextField(editor) {
    editor.ui.componentFactory.add('textFieldOptions', (locale) => {
        const dropdownView = createDropdown(locale);
        dropdownView.buttonView.set({
            label: 'Text Field',
            withText: true,
            tooltip: true,
        });

        const listView = new ListView(locale);
        const options = [
            { label: '[candidate_full_name]', content: '[candidate_full_name]' },
            { label: '[candidate_first_name]', content: '[candidate_first_name]' },
            { label: '[candidate_email]', content: '[candidate_email]' },
            { label: '[job_title]', content: '[job_title]' },
            { label: '[job_link]', content: '[job_link]' },
            { label: '[assessment_password]', content: '[assessment_password]' },
            { label: '[assessment_link]', content: '[assessment_link]' },
            { label: '[job_offer_link]', content: '[job_offer_link]' },
            { label: '[onboarding_form_link]', content: '[onboarding_form_link]' },
            { label: '[documents]', content: '[documents]' },
        ];

        options.forEach((option) => {
            const listItemView = new ListItemView(locale);
            const buttonView = new ButtonView(locale);

            buttonView.set({
                label: option.label,
                withText: true,
            });

            buttonView.on('execute', () => {
                editor.model.change((writer) => {
                    const insertPosition = editor.model.document.selection.getFirstPosition();
                    writer.insertText(option.content, insertPosition);
                });

                dropdownView.isOpen = false;
            });

            listItemView.children.add(buttonView);
            listView.items.add(listItemView);
        });

        dropdownView.panelView.children.add(listView);
        return dropdownView;
    });
}

const CKEditorConfig = {
    licenseKey: 'GPL',
    plugins: [
        Essentials,
        Bold,
        Italic,
        Paragraph,
        List,
        Heading,
        Link,
        Table,
        TableToolbar,
        Indent,
        IndentBlock,
    ],
    toolbar: ['undo', 'redo', '|','textFieldOptions','|','bulletedList','numberedList','|','bold','italic','|','insertTable', '|', 'indent', 'outdent'],
    extraPlugins: [TextField],
    table: {
        contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells'],
    },
    viewportTopOffset: 60,
};

const UpdateTafEmailTemplateModal= forwardRef(({ 
    onUpdate, 
    id,
    name,
    subject,
    emailBody,
    emailCc,
    open,
    onOpenChange}, ref) => {
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);

    const formik = useFormik({
        initialValues: {
            id: id,
            name: name,
            subject: subject,
            emailBody: emailBody,
            emailCc: emailCc,
        },
        validationSchema: emailTemplateValidationSchema,
        onSubmit: async (values, { setStatus, setSubmitting }) => {
            setLoading(true);
            try {
                const formData = new FormData();
                formData.append('EmailBody', values.emailBody);
                formData.append('Name', values.name);
                formData.append('Subject', values.subject);
                formData.append('EmailCc', values.emailCc);
                const response = await UpdateEmailTemplate(values.id,formData); // Replace with your API call
                setShow(false);
                Swal.fire({
                    title: 'Success!',
                    text: `${response.data.responseText}`,
                    icon: 'success',
                    confirmButtonText: 'OK',
                }).then(() => {
                    if (onUpdate) {
                        onUpdate();
                    }
                });
            } catch (error) {
                setStatus(error.message || 'An error occurred');
                Swal.fire({
                    title: 'Error!',
                    text: error.message || 'An error occurred while updating the profile.',
                    icon: 'error',
                    confirmButtonText: 'OK',
                });
            } finally {
                setSubmitting(false);
                setLoading(false);
            }
        },
    });

    return (
        <>
            <Dialog open={open} onOpenChange={onOpenChange}>
                <DialogContent className="max-w-[600px] top-[2%] translate-y-0  " ref={ref}>
                    <DialogHeader>
                        <DialogTitle as="h3" className="text-base font-semibold text-grey-900">
                            UPDATE EMAIL TEMPLATE
                        </DialogTitle>          
                    </DialogHeader>
                    <DialogBody>
                        <form onSubmit={formik.handleSubmit}>
                            <div className="flex flex-row gap-4 my-4">
                                <div className="flex flex-col">
                                    <label className="required text-sm font-semibold mb-2">ID</label>
                                    <input
                                        type="text"
                                        name="id"
                                        onChange={formik.handleChange}
                                        value={formik.values.id}
                                        className="input"
                                        readOnly
                                    />
                                    {formik.touched.id && formik.errors.id && (
                                        <div className="text-danger mt-2">{formik.errors.id}</div>
                                    )}
                                </div>
                            </div>
                            <div className="flex flex-row gap-4 my-4">
                                <div className="flex flex-col flex-1">
                                    <label className="required text-sm font-semibold mb-2">Template Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        onChange={formik.handleChange}
                                        value={formik.values.name}
                                        className="input"
                                    />
                                    {formik.touched.name && formik.errors.name && (
                                        <div className="text-danger mt-2">{formik.errors.name}</div>
                                    )}
                                </div>
                                <div className="flex flex-col flex-1">
                                    <label className="required text-sm font-semibold mb-2">Email Subject</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        onChange={formik.handleChange}
                                        value={formik.values.subject}
                                        className="input"
                                    />
                                    {formik.touched.subject && formik.errors.subject && (
                                        <div className="text-danger mt-2">{formik.errors.subject}</div>
                                    )}
                                </div>
                            </div>
                            <div className="mb-4">
                                <div className="flex flex-col">
                                    <label className="required text-sm font-semibold mb-2">Email Body</label>
                                    <CKEditor
                                        editor={ClassicEditor}
                                        config={CKEditorConfig}
                                        data={formik.values.emailBody} // Set the initial value
                                        onChange={(event, editor) => {
                                            formik.setFieldValue('emailBody', editor.getData());
                                        }}
                                        className="max-w"
                                    />
                                    {formik.touched.emailBody && formik.errors.emailBody && (
                                        <div className="text-danger mt-2">{formik.errors.emailBody}</div>
                                    )}
                                </div>
                            </div>
                            <div className="flex flex-row gap-4 mb-4">
                                <div className="flex flex-col flex-1">
                                    <label className="required text-sm font-semibold mb-2">Email Cc:</label>
                                    <input
                                        type="text"
                                        name="emailCc"
                                        onChange={formik.handleChange}
                                        value={formik.values.emailCc}
                                        className="input"
                                    />
                                    <div className="text-sm font-medium text-gray-600 mt-4 ">Make sure to add " , " between emails to separate them.</div>
                                </div>
                                
                            </div>
                        </form>
                    </DialogBody>
                    <DialogActions>
                        <button className="btn btn-sm btn-secondary" onOpenChange={onOpenChange}>
                            Cancel
                        </button>
                        <button
                            className="btn btn-sm btn-danger"
                            type="submit"
                            onClick={formik.handleSubmit}
                            disabled={loading}
                        >
                            {loading ? 'Updating...' : 'Update'}
                        </button>
                    </DialogActions>
                </DialogContent>  
            </Dialog>
        </>
    )
});

export { UpdateTafEmailTemplateModal };
