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
<div className="gap-4 m-4 grid sm:grid-cols-12">

<div className="min-h-[100px] rounded shadow sm:col-span-6">
    <Formik 
      initialValues={initialValues}
      >
        {() => (
          <Form className='bg-white shadow-md rounded-md border border-gray-200 relative'>
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


  <div className="min-h-[100px] sm:col-span-6 flex flex-col space-y-2">
  {/* Top Half */}
  <div className="flex space-x-4">
  {/* First Upload Section */}
  <div className="flex-1 rounded-md bg-white border border-gray-200 shadow-md flex flex-col items-center relative">
    <h1 className="font-bold mt-2 border-b text-sm border-gray-200">Registartion Certificate</h1>
    <Formik initialValues={initialValues}>
      {() => (
        <div>
          <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-4 min-h-[4rem] max-h-[6rem]">
            <div className="text-center flex flex-col items-center justify-center">
              <div className="mt-2 flex text-sm text-gray-600">
                <label
                  htmlFor="companyCertificate"
                  className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                >
                  <span>No file chosen</span>
                  <input
                    id="companyCertificate"
                    name="companyCertificate"
                    type="file"
                    className="sr-only"
                  />
                </label>
              </div>
              <p className="text-xs leading-5 text-gray-600 mt-1">
                Upload a file (up to 10MB)
              </p>
            </div>
          </div>
        </div>
      )}
    </Formik>
  </div>

  {/* Second Upload Section */}
  <div className="flex-1 rounded-md bg-white border border-gray-200 shadow-md flex flex-col items-center relative">
    <h1 className="font-bold mt-2 border-b text-sm border-gray-200">Detail Project Review</h1>
    <Formik initialValues={initialValues}>
      {() => (
        <div>
          <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-4 min-h-[4rem] max-h-[6rem]">
            <div className="text-center flex flex-col items-center justify-center">
              <div className="mt-2 flex text-sm text-gray-600">
                <label
                  htmlFor="companyCertificate"
                  className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                >
                  <span>No file chosen</span>
                  <input
                    id="companyCertificate"
                    name="companyCertificate"
                    type="file"
                    className="sr-only"
                  />
                </label>
              </div>
              <p className="text-xs leading-5 text-gray-600 mt-1">
                Upload a file (up to 10MB)
              </p>
            </div>
          </div>
        </div>
      )}
    </Formik>
  </div>

  {/* Third Upload Section */}
  <div className="flex-1 rounded-md bg-white border border-gray-200 shadow-md flex flex-col items-center relative">
    <h1 className="font-bold mt-2 border-b text-sm border-gray-200">Upload Cancel Cheque</h1>
    <Formik initialValues={initialValues}>
      {() => (
        <div>
          <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-4 min-h-[4rem] max-h-[6rem]">
            <div className="text-center flex flex-col items-center justify-center">
              <div className="mt-2 flex text-sm text-gray-600">
                <label
                  htmlFor="companyCertificate"
                  className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                >
                  <span>No file chosen</span>
                  <input
                    id="companyCertificate"
                    name="companyCertificate"
                    type="file"
                    className="sr-only"
                  />
                </label>
              </div>
              <p className="text-xs leading-5 text-gray-600 mt-1">
                Upload a file (up to 10MB)
              </p>
            </div>
          </div>
        </div>
      )}
    </Formik>
  </div>
  </div>


  {/* Bottom Half */}
  <div className="flex-1 rounded-md bg-white border border-gray-200 shadow-md flex justify-center items-center">
  <div className="flex-1 rounded-md border border-gray-200 shadow-md flex justify-center items-center p-4 flex-col w-full">
    {/* Heading with bottom border */}
    <h1 className="font-bold text-center border-b border-gray-300 pb-2 mb-4 w-full">Bank Detail</h1>

    <form className="w-full h-full space-y-4 rounded-md ">
      {/* Bank Name and Branch Name in one row */}
      <div className="flex space-x-4">
        <div className="flex-1 flex flex-col">
          <label htmlFor="bankName" className="text-sm font-medium text-gray-700">
            Bank Name
          </label>
          <input
            type="text"
            id="bankName"
            name="bankName"
            placeholder="Enter Bank Name"
            className="border border-gray-300 rounded-md px-3 py-2 focus:ring-red-500 focus:border-red-500"
          />
        </div>

        <div className="flex-1 flex flex-col">
          <label htmlFor="branchName" className="text-sm font-medium text-gray-700">
            Branch Name
          </label>
          <input
            type="text"
            id="branchName"
            name="branchName"
            placeholder="Enter Branch Name"
            className="border border-gray-300 rounded-md px-3 py-2 focus:ring-red-500 focus:border-red-500"
          />
        </div>
      </div>

      {/* IFSC Code and Branch Address in one row */}
      <div className="flex space-x-4">
        <div className="flex-1 flex flex-col">
          <label htmlFor="ifscCode" className="text-sm font-medium text-gray-700">
            IFSC Code
          </label>
          <input
            type="text"
            id="ifscCode"
            name="ifscCode"
            placeholder="Enter IFSC Code"
            className="border border-gray-300 rounded-md px-3 py-2 focus:ring-red-500 focus:border-red-500"
          />
        </div>

        <div className="flex-1 flex flex-col">
          <label htmlFor="branchAddress" className="text-sm font-medium text-gray-700">
            Branch Address
          </label>
          <input
            type="text"
            id="branchAddress"
            name="branchAddress"
            placeholder="Enter Branch Address"
            className="border border-gray-300 rounded-md px-6 py-3 focus:ring-red-500 focus:border-red-500"
          />
        </div>
      </div>

      {/* PAN Number and GST Number in one row */}
      <div className="flex space-x-4">
        <div className="flex-1 flex flex-col">
          <label htmlFor="panNumber" className="text-sm font-medium text-gray-700">
            PAN Number
          </label>
          <input
            type="text"
            id="panNumber"
            name="panNumber"
            placeholder="Enter PAN Number"
            className="border border-gray-300 rounded-md px-3 py-2 focus:ring-red-500 focus:border-red-500"
          />
        </div>

        <div className="flex-1 flex flex-col">
          <label htmlFor="gstNumber" className="text-sm font-medium text-gray-700">
            GST Number
          </label>
          <input
            type="text"
            id="gstNumber"
            name="gstNumber"
            placeholder="Enter GST Number"
            className="border border-gray-300 rounded-md px-3 py-2 focus:ring-red-500 focus:border-red-500"
          />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-red-500 text-white font-medium py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
      >
        Submit
      </button>
    </form>
  </div>
</div>


  </div>
</div>


  </div>

  )
}

export default App
