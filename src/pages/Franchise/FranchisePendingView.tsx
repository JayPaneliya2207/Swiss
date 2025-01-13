import React from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import { Package } from '../../types/package';

const PendingStock: React.FC = () => {
  const packageData: Package[] = [
    {
      id: 1,
      name: 'Free package',
      invoiceDate: `Jan 13,2023`,
      status: 'Paid',
    },
    {
      id: 2,
      name: 'Free package',
      invoiceDate: `Jan 14,2023`,
      status: 'Paid',
    },
  ];
  return (
    <>
      <Breadcrumb pageName="Franchise Pending Stock View" />
      <div className="rounded-sm border mt-6 border-stroke bg-white px-4 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div
          className="machine-total"
          style={{ justifyContent: 'start', marginBottom: '50px' }}
        >
          Customer Info
          <br />
          Name:- PAPPU KUMAR | Franchise Name: KAJAL ENTERPRISES
        </div>
        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-2 text-left dark:bg-meta-4">
                <th className="min-w-[200px] py-2 px-2 font-medium text-black dark:text-white uppercase ">
                  Sr.No.
                </th>
                <th className="min-w-[150px]  py-2 px-2 font-medium text-black dark:text-white uppercase ">
                  Product Name
                </th>
                <th className="min-w-[130px] py-2 px-2 font-medium text-black dark:text-white uppercase ">
                  Total Qty
                </th>
                <th className=" min-w-[150px]  py-2 px-2 font-medium text-black dark:text-white uppercase ">
                  Total Mrp
                </th>

                <th className="min-w-[210px]  py-2 px-2 font-medium text-black dark:text-white uppercase ">
                  Total dp
                </th>
                <th className="min-w-[120px] py-2 px-2 font-medium text-black dark:text-white uppercase ">
                  Total Bv
                </th>
              </tr>
            </thead>
            <tbody>
              {packageData.length ? (
                packageData.map((packageItem) => (
                  <tr key={packageItem.id}>
                    <td className="border-b border-[#eee] py-5 px-2 dark:border-strokedark">
                      <td className="flex items-center">
                        <h5 className="font-medium text-black dark:text-white">
                          1
                        </h5>
                      </td>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-2 dark:border-strokedark">
                      <h5 className="font-medium text-black dark:text-white">
                        KESHAR KASHTURI
                      </h5>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-2 dark:border-strokedark">
                      <h5 className="font-medium text-black dark:text-white">
                        0
                      </h5>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-2 dark:border-strokedark">
                      <h5 className="font-medium text-black dark:text-white">
                        3655
                      </h5>
                    </td>

                    <td className="border-b border-[#eee] py-5 px-2 dark:border-strokedark">
                      <h5 className="font-medium text-black dark:text-white">
                        0
                      </h5>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-2 dark:border-strokedark">
                      <h5 className="font-medium text-black dark:text-white">
                        2940
                      </h5>
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

export default PendingStock;
