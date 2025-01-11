import React from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import { Package } from '../../types/package';
import '../../css/form.css';

const packageData: Package[] = [
  {
    name: 'Free package',
    invoiceDate: `Jan 13,2023`,
    status: 'Paid',
  },
];

const Transaction: React.FC = () => {
  return (
    <>
      <Breadcrumb pageName="Transaction" />
      <div className="card card-body shadow-default dark:border-strokedark dark:bg-boxdark">
        <form className="responsive-form">
          <div
            className="form-row"
            style={{ display: 'flex', justifyContent: 'start',gap:"10px" }}
          >
            <div className="form-group col-md-6">
              <label className="select-options">Filter Transactions:</label>
              <select
                className="form-control input-users select-input"
                name="block_status"
                id=""
              >
                <option value="">All</option>
                <option value="">IN</option>
                <option value={1}>OUT</option>
                <option value={0}>Null HASH</option>
              </select>
            </div>
            <div className="form-group col-md-6">
              <label className="select-options">Show Records:</label>
              <select
                name="limit"
                className="form-control input-users select-input responsive-select"
              >
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
                <option value={200}>200</option>
                <option value={500}>500</option>
              </select>
            </div>

            <div className="form-group col-md-6">
              <a className="btn btn-primary btn-block">Apply Filter</a>
            </div>
          </div>
        </form>
      </div>
      <div className="rounded-sm border mt-6 border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="max-w-full overflow-x-auto custom-scrollbar">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-2 text-left dark:bg-meta-4">
                <th className="py-4 px-4 font-medium text-black dark:text-white uppercase ">
                  SR.
                </th>
                <th className="py-4 px-4 font-medium text-black dark:text-white uppercase ">
                  Machine
                </th>
                <th className="py-4 px-4 font-medium text-black dark:text-white uppercase ">
                  Username
                </th>
                <th className="py-4 px-4 font-medium text-black dark:text-white uppercase ">
                  Amount (BTC)
                </th>
                <th className="py-4 px-4 font-medium text-black dark:text-white uppercase ">
                  Gas Fee
                </th>
                <th className="py-4 px-4 font-medium text-black dark:text-white uppercase ">
                  Hash
                </th>
                <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white uppercase ">
                  Date
                </th>
                <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white uppercase ">
                  Method
                </th>
              </tr>
            </thead>
            <tbody>
              {packageData.map((packageItem, key) => (
                <tr key={key}>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <h5 className="font-medium text-black dark:text-white">
                      1
                    </h5>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <h5 className="font-medium text-black dark:text-white">
                      {packageItem.name}
                    </h5>
                  </td>

                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <h5 className="font-medium text-black dark:text-white">
                      {packageItem.name}
                    </h5>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <h5 className="font-medium text-black dark:text-white">
                      {packageItem.name}
                    </h5>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <h5 className="font-medium text-black dark:text-white">
                      {packageItem.name}
                    </h5>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <h5 className="font-medium text-black dark:text-white">
                      {packageItem.name}
                    </h5>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {packageItem.invoiceDate}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className="text-black dark:text-white">1</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Transaction;
