import React, { useState } from "react";
import { Formik, Field, Form } from "formik";

const App = () => {
  const [isFormVisible, setFormVisible] = useState(true);

  const handleClose = () => {
    close();
  };

  return (
    isFormVisible && (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white bg-opacity-75 backdrop-filter backdrop-blur-lg border border-white border-opacity-30 rounded-lg shadow-xl w-96 p-6 relative">
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 text-[#3B82F6] hover:text-blue-600"
          >
            ✕
          </button>
          <h2 className="text-2xl font-semibold mb-4 text-center">Update Business Details</h2>
          <Formik
            initialValues={{
              employeecount: "",
              workOrders: "",
              projects: "",
              reveuneLY: "",
            }}
            onSubmit={() => {}}
          >
            {() => (
              <Form>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Employee Count</label>
                  <Field
                    type="number"
                    name="employeecount"
                    placeholder="Enter Employee Count"
                    className="w-full p-2 bg-transparent border border-gray-300 rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Work Orders</label>
                  <Field
                    type="number"
                    name="workOrders"
                    placeholder="Enter Work Orders"
                    className="w-full p-2 bg-transparent border border-gray-300 rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Projects</label>
                  <Field
                    type="number"
                    name="projects"
                    placeholder="Enter Projects"
                    className="w-full p-2 bg-transparent border border-gray-300 rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Revenue Last Year</label>
                  <Field
                    type="number"
                    name="reveuneLY"
                    placeholder="Enter Revenue Last Year"
                    className="w-full p-2 bg-transparent border border-gray-300 rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-[#3B82F6] text-white px-4 py-2 rounded shadow hover:bg-blue-600 transition"
                  >
                    Update Details
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    )
  );
};

export default App
