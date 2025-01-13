import React from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import { Package } from '../../types/package';

const CompanyInfoSetting: React.FC = () => {
  const packageData: Package[] = [
    {
      id: 1,
      name: 'Company Name',
      invoiceDate: `Jan 13,2023`,
      status: 'Paid',
    },
    {
      id: 2,
      name: 'Base URL',
      invoiceDate: `Jan 13,2023`,
      status: 'Paid',
    },
    {
      id: 3,
      name: 'Company Logo',
      invoiceDate: `Jan 13,2023`,
      status: 'Paid',
    },
    {
      id: 4,
      name: 'Logo Height',
      invoiceDate: `Jan 13,2023`,
      status: 'Paid',
    },
    {
      id: 5,
      name: 'Logo Width',
      invoiceDate: `Jan 13,2023`,
      status: 'Paid',
    },
    {
      id: 6,
      name: 'Company Title',
      invoiceDate: `Jan 13,2023`,
      status: 'Paid',
    },
    {
      id: 7,
      name: 'Company Address',
      invoiceDate: `Jan 13,2023`,
      status: 'Paid',
    },
    {
      id: 8,
      name: 'Company Mobile',
      invoiceDate: `Jan 13,2023`,
      status: 'Paid',
    },
    {
      id: 9,
      name: 'Company Currency',
      invoiceDate: `Jan 13,2023`,
      status: 'Paid',
    },
    {
      id: 10,
      name: 'Token Rate',
      invoiceDate: `Jan 13,2023`,
      status: 'Paid',
    },
    {
      id: 11,
      name: 'Company Founder Name',
      invoiceDate: `Jan 13,2023`,
      status: 'Paid',
    },
    {
      id: 12,
      name: 'Company Facebook Link',
      invoiceDate: `Jan 13,2023`,
      status: 'Paid',
    },
    {
      id: 13,
      name: 'Company Twitter Link',
      invoiceDate: `Jan 13,2023`,
      status: 'Paid',
    },
    {
      id: 14,
      name: 'Company Linkdin Link',
      invoiceDate: `Jan 13,2023`,
      status: 'Paid',
    },
    {
      id: 15,
      name: 'Company Telegram Link',
      invoiceDate: `Jan 13,2023`,
      status: 'Paid',
    },
    {
      id: 16,
      name: 'Company Instagram Link',
      invoiceDate: `Jan 13,2023`,
      status: 'Paid',
    },
  ];

  return (
    <>
      <Breadcrumb pageName="Payment Method  Setting" />
      <div className="rounded-sm border mt-6 border-stroke bg-white px-4 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="max-w-full overflow-x-auto custom-scrollbar">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-2 text-left dark:bg-meta-4">
                <th className="min-w-[200px] py-2 px-2 font-medium text-black dark:text-white uppercase">
                  Sr.No
                </th>
                <th className="min-w-[150px] py-2 px-2 font-medium text-black dark:text-white uppercase">
                  Setting Name
                </th>
                <th className="min-w-[130px] py-2 px-2 font-medium text-black dark:text-white uppercase">
                  Value
                </th>
                <th className="min-w-[130px] py-2 px-2 font-medium text-black dark:text-white uppercase">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {packageData.length ? (
                packageData.map((packageItem) => (
                  <tr key={packageItem.id}>
                    <td className="border-b border-[#eee] py-5 px-2 dark:border-strokedark">
                      <div className="flex items-center">
                        <h5 className="font-medium text-black dark:text-white">
                          {packageItem.id}
                        </h5>
                      </div>
                    </td>

                    <td className="border-b border-[#eee] py-5 px-2 dark:border-strokedark">
                      <h5 className="font-medium text-black dark:text-white">
                        {packageItem.name}
                      </h5>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-2 dark:border-strokedark">
                      {packageItem.name === 'Company Logo' ? (
                        <input
                          type="file"
                          className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
                        />
                      ) : (
                        <input
                          type="text"
                          placeholder=""
                          className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        />
                      )}
                    </td>

                    <td className="border-b border-[#eee] py-5 px-2 dark:border-strokedark">
                      <div>
                        <button
                          className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
                          style={{ backgroundColor: '#5e72e4' }}
                        >
                          Submit
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={8}>No data available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default CompanyInfoSetting;
