import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const App = () => {
  const initialValues = {
    CompanyName: "",
    RegistrationNumber: "",
    DateofIncorporation: "",
    BusinessEntityType: "",
    CompanyAddress: "",
    PINcode: "",
    RegistrationCerificate: "",
    DetailedProjectReport: "",
    UploadCancelChequePDF: "",
    BankName: "",
    BranchName: "",
    IFSCCode:"",
    BranchAddress:"",
    CurrentAccountNumber:"",
    CurrentAccountHolderName:"",
    PANNumber:"",
    GSTNumber:"",
  };

  return (
    // <div className='isolate bg-white px-6 py-24 sm:py-3 lg:px-8 h-screen overflow-y-auto flex flex-col items-center'>
    //   <div
		// 		className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
		// 		aria-hidden="true"
		// 	/>
    //   <Formik 
    //   initialValues={initialValues}
    //   >
    //     {() => (
    //       <Form className='bg-white shadow-2xl my-7 mx-7 rounded-md border border-gray-200 relative'>
    //         <h1 className="flex justify-center items-center text-center bold mt-3 font-bold border-b border-gray-200 pb-2">Company Information</h1>
    //       <div className='my-7 mx-7' style={{ marginBottom: "15px" }}>
    //         <label htmlFor="email">Company Name:</label>
    //         <Field name="email" type="email" className="form-control border border-gray-300 rounded-md" style={{ width: "100%", padding: "10px", margin: "5px 0" }} />
    //         <ErrorMessage name="email" component="div" style={{ color: "red" }} />
    //       </div>

    //       <div className='my-7 mx-7' style={{ marginBottom: "15px" }}>
    //         <label htmlFor="password">RegistrationNumber :</label>
    //         <Field name="password" type="password" className="form-control border border-gray-300 rounded-md" style={{ width: "100%", padding: "10px", margin: "5px 0" }} />
    //         <ErrorMessage name="password" component="div" style={{ color: "red" }} />
    //       </div>

    //       <div className='my-7 mx-7' style={{ marginBottom: "15px" }}>
    //         <label htmlFor="password">Date of Incorporation:</label>
    //         <Field name="password" type="password" className="form-control border border-gray-300 rounded-md" style={{ width: "100%", padding: "10px", margin: "5px 0" }} />
    //         <ErrorMessage name="password" component="div" style={{ color: "red" }} />
    //       </div>

    //       <div className='my-7 mx-7' style={{ marginBottom: "15px" }}>
    //         <label htmlFor="password">Business Entity Type:</label>
    //         <Field name="password" type="password" className="form-control border border-gray-300 rounded-md" style={{ width: "100%", padding: "10px", margin: "5px 0" }} />
    //         <ErrorMessage name="password" component="div" style={{ color: "red" }} />
    //       </div>

    //       <div className='my-7 mx-7' style={{ marginBottom: "15px" }}>
    //         <label htmlFor="password">Company Address:</label>
    //         <Field name="password" type="password" className="form-control border border-gray-300 rounded-md" style={{ width: "100%", padding: "10px", margin: "5px 0" }} />
    //         <ErrorMessage name="password" component="div" style={{ color: "red" }} />
    //       </div>

    //       <div className='my-7 mx-7' style={{ marginBottom: "15px" }}>
    //         <label htmlFor="password">PIN Code:</label>
    //         <Field name="password" type="password" className="form-control border border-gray-300 rounded-md" style={{ width: "100%", padding: "10px", margin: "5px 0" }} />
    //         <ErrorMessage name="password" component="div" style={{ color: "red" }} />
    //       </div>

    //       <div className="flex justify-center items-center">
    //       <button
    //       className="flex justify-center items-center text-center mb-3"
    //       type="submit"
    //       style={{
    //       padding: "10px 20px",
    //       background: "#007bff",
    //       color: "white",
    //       border: "none",
    //       borderRadius: "5px",
    //       cursor: "pointer",
    //       }}
    //       >
    //       Submit
    //       </button>
    //       </div>
    //     </Form>
    //     )}
    //   </Formik>
     
    // </div>
<div className="container mx-auto p-4">
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

    <div className="col-span-1 lg:col-span-2 bg-red-200 rounded-lg h-full w-2/3">
    <Formik 
      initialValues={initialValues}
      >
        {() => (
          <Form className='bg-white shadow-2xl my-7 mx-7 rounded-md border border-gray-200 relative'>
            <h1 className="flex justify-center items-center text-center bold mt-3 font-bold border-b border-gray-200 pb-2">Company Information</h1>
          <div className='my-7 mx-7' style={{ marginBottom: "15px" }}>
            <label htmlFor="email">Company Name:</label>
            <Field name="email" type="email" className="form-control border border-gray-300 rounded-md" style={{ width: "100%", padding: "10px", margin: "5px 0" }} />
            <ErrorMessage name="email" component="div" style={{ color: "red" }} />
          </div>

          <div className='my-7 mx-7' style={{ marginBottom: "15px" }}>
            <label htmlFor="password">RegistrationNumber :</label>
            <Field name="password" type="password" className="form-control border border-gray-300 rounded-md" style={{ width: "100%", padding: "10px", margin: "5px 0" }} />
            <ErrorMessage name="password" component="div" style={{ color: "red" }} />
          </div>

          <div className='my-7 mx-7' style={{ marginBottom: "15px" }}>
            <label htmlFor="password">Date of Incorporation:</label>
            <Field name="password" type="password" className="form-control border border-gray-300 rounded-md" style={{ width: "100%", padding: "10px", margin: "5px 0" }} />
            <ErrorMessage name="password" component="div" style={{ color: "red" }} />
          </div>

          <div className='my-7 mx-7' style={{ marginBottom: "15px" }}>
            <label htmlFor="password">Business Entity Type:</label>
            <Field name="password" type="password" className="form-control border border-gray-300 rounded-md" style={{ width: "100%", padding: "10px", margin: "5px 0" }} />
            <ErrorMessage name="password" component="div" style={{ color: "red" }} />
          </div>

          <div className='my-7 mx-7' style={{ marginBottom: "15px" }}>
            <label htmlFor="password">Company Address:</label>
            <Field name="password" type="password" className="form-control border border-gray-300 rounded-md" style={{ width: "100%", padding: "10px", margin: "5px 0" }} />
            <ErrorMessage name="password" component="div" style={{ color: "red" }} />
          </div>

          <div className='my-7 mx-7' style={{ marginBottom: "15px" }}>
            <label htmlFor="password">PIN Code:</label>
            <Field name="password" type="password" className="form-control border border-gray-300 rounded-md" style={{ width: "100%", padding: "10px", margin: "5px 0" }} />
            <ErrorMessage name="password" component="div" style={{ color: "red" }} />
          </div>

          <div className="flex justify-center items-center">
          <button
          className="flex justify-center items-center text-center mb-3"
          type="submit"
          style={{
          padding: "10px 20px",
          background: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          }}
          >
          Submit
          </button>
          </div>
        </Form>
        )}
      </Formik>
    </div>


    <div className="flex flex-col gap-2">

      <div className="bg-gray-200 rounded-lg h-96 w-full"></div>


      <div className="bg-gray-200 rounded-lg h-48"></div>
    </div>
  </div>
</div>
  )
}

export default App
