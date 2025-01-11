import React from 'react';

import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import '../../css/form.css';
import { Package } from '../../types/package';

const packageData: Package[] = [
  {
    id: 1,
    name: 'Free package',
    invoiceDate: `Jan 13,2023`,
    status: 'Paid',
  },
];
const FreeMachineList: React.FC = () => {
  return (
    <>
      <Breadcrumb pageName="FreeMachine List" />
      <div className="col-sm-12">
        <div
          className="btn-group float-sm-right add-button"
          style={{ justifyContent: 'end' }}
        >
          <button className="btn btn-success btn-sm">Add Machines</button>
        </div>
      </div>

      <div
        className="card card-body shadow-default dark:border-strokedark dark:bg-boxdark"
        style={{ display: 'flex' }}
      >
        <form className="responsive-form">
          <div className="form-row">
            <div className="form-group col-md-6 col-sm-12">
              <input
                type="text"
                placeholder="Enter Machine Name"
                name="name"
                className="form-control input-users"
                defaultValue=""
              />
            </div>
            <div className="form-group col-md-6 col-sm-12">
              <input
                type="text"
                placeholder="Enter Product key"
                name="username"
                className="form-control input-users"
                defaultValue=""
              />
            </div>

            <div className="form-group col-md-6 col-sm-12">
              <select name="limit" className="form-control input-users">
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
                <option value={200}>200</option>
                <option value={500}>500</option>
                <option value={1000}>1000</option>
              </select>
            </div>
            <div className="form-group col-md-6 col-sm-12">
              <input
                type="submit"
                name="submit"
                className="btn btn-block input-users"
                value="Filter"
              />
            </div>
            <div className="form-group col-md-6 col-sm-12">
              <a href="admin/users" className="btn btn-primary btn-block">
                Reset
              </a>
            </div>
          </div>
        </form>
      </div>
      <div className="rounded-sm border mt-6 border-stroke bg-white px-4 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div
          className="machine-total"
          style={{ justifyContent: 'end', marginBottom: '5px' }}
        >
          | All Free machines:(0)
        </div>
        <div className="max-w-full overflow-x-auto custom-scrollbar">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-2 text-left dark:bg-meta-4">
                <th className="min-w-[150px]  py-2 px-2 font-medium text-black dark:text-white uppercase ">
                  Machine Name
                </th>
                <th className="min-w-[130px] py-2 px-2 font-medium text-black dark:text-white uppercase ">
                  Machine Code
                </th>
                <th className=" min-w-[150px]  py-2 px-2 font-medium text-black dark:text-white uppercase ">
                  Distributor Name
                </th>
                <th className="min-w-[200px] py-2 px-2 font-medium text-black dark:text-white uppercase ">
                  Coin
                </th>
                <th className="min-w-[210px]  py-2 px-2 font-medium text-black dark:text-white uppercase ">
                  Average Hashrate
                </th>
                <th className="min-w-[100px] py-2 px-2 font-medium text-black dark:text-white uppercase ">
                  Product Key
                </th>

                <th className="min-w-[120px] py-2 px-2 font-medium text-black dark:text-white uppercase ">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {packageData.map((packageItem, key) => (
                <tr key={key}>
                  <td className="border-b border-[#eee] py-5 px-2 dark:border-strokedark">
                    <h5 className="font-medium text-black dark:text-white">
                      i24 Nano Cryptominer
                    </h5>
                  </td>
                  <td className="bo`rder-b border-[#eee] py-5 px-2 dark:border-strokedark">
                    <h5 className="font-medium text-black dark:text-white">
                      1234567891
                    </h5>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-2 dark:border-strokedark">
                    <h5 className="font-medium text-black dark:text-white">
                      INDIA
                    </h5>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-2 dark:border-strokedark">
                    <td className="flex items-center">
                      <h5 className="font-medium text-black dark:text-white">
                        BITCOIN BTC
                      </h5>
                    </td>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-2 dark:border-strokedark">
                    <h5 className="font-medium text-black dark:text-white">
                      318
                    </h5>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-2 dark:border-strokedark">
                    <h5 className="font-medium text-black dark:text-white">
                      CM91030001425
                    </h5>
                  </td>

                  <td className="border-b border-[#eee] py-5 px-2 dark:border-strokedark flex gap-2">
                    <h5 className="font-medium text-black dark:text-white flex items-center gap-2">
                      <button className="btn btn-primary">Edit</button>
                      <button className="btn btn-danger">Delete</button>
                    </h5>
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

export default FreeMachineList;
