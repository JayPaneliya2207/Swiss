import React from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import { Package } from '../../types/package';
import { useNavigate } from 'react-router-dom';

const SaleProduct: React.FC = () => {
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
  const navigate = useNavigate();

  const handleEditClick = (id: number) => {
    navigate(`/franchise/repurchase-order/view-franchise-repurchase/${id}`);
  };
  return (
    <>
      <Breadcrumb pageName="SaleProduct" />
      <div className="rounded-sm border mt-6 border-stroke bg-white px-4 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-2 text-left dark:bg-meta-4">
                <th className="min-w-[200px] py-2 px-2 font-medium text-black dark:text-white uppercase ">
                  Product Id
                </th>
                <th className="min-w-[150px]  py-2 px-2 font-medium text-black dark:text-white uppercase ">
                  Product Image
                </th>
                <th className="min-w-[130px] py-2 px-2 font-medium text-black dark:text-white uppercase ">
                  Name
                </th>
                <th className=" min-w-[150px]  py-2 px-2 font-medium text-black dark:text-white uppercase ">
                  MRP
                </th>
                <th className="min-w-[210px]  py-2 px-2 font-medium text-black dark:text-white uppercase ">
                  DP
                </th>
                <th className="min-w-[210px]  py-2 px-2 font-medium text-black dark:text-white uppercase ">
                  Product bv
                </th>
                <th className="min-w-[210px]  py-2 px-2 font-medium text-black dark:text-white uppercase ">
                  QTY
                </th>
                <th className="min-w-[210px]  py-2 px-2 font-medium text-black dark:text-white uppercase ">
                  Action
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
                        Image
                      </h5>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-2 dark:border-strokedark">
                      <h5 className="font-medium text-black dark:text-white">
                        KESHAR KASHTURI
                      </h5>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-2 dark:border-strokedark">
                      <h5 className="font-medium text-black dark:text-white">
                        130
                      </h5>
                    </td>

                    <td className="border-b border-[#eee] py-5 px-2 dark:border-strokedark">
                      <h5 className="font-medium text-black dark:text-white">
                        120
                      </h5>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-2 dark:border-strokedark">
                      <h5 className="font-medium text-black dark:text-white">
                        120
                      </h5>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-2 dark:border-strokedark">
                      <h5 className="font-medium text-black dark:text-white">
                        473
                      </h5>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-2 dark:border-strokedark flex gap-2">
                      <h5 className="font-medium text-black dark:text-white flex items-center gap-2">
                        <button
                          className="btn btn-success"
                          onClick={() => handleEditClick(packageItem.id)}
                        >
                          Add To Cart
                        </button>
                      </h5>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={8}>No data available</td>
                </tr>
              )}
              <div
                className="machine-total"
                style={{ justifyContent: 'start', marginTop: '10px' }}
              >
                <button
                  className="btn btn-success"
                  // onClick={() => handleEditClick(packageItem.id)}
                >
                  Proceed
                </button>
              </div>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default SaleProduct;
