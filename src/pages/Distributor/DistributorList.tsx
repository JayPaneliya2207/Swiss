import React from 'react';
import { useState } from 'react';
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
const DistributorList: React.FC = () => {
  const [enabled, setEnabled] = useState<boolean>(false);

  return (
    <>
      <Breadcrumb pageName="Distributor List" />
      <div
        className="card card-body shadow-default dark:border-strokedark dark:bg-boxdark"
        style={{ display: 'flex' }}
      >
        <form className="responsive-form">
          <div className="form-row">
            <div className="form-group col-md-6 col-sm-12">
              <input
                type="text"
                placeholder="Enter Distributor Name"
                name="name"
                className="form-control input-users"
                defaultValue=""
              />
            </div>

            <div className="form-group col-md-6 col-sm-12">
              <input
                type="text"
                placeholder="Enter Distributor username"
                name="Address"
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
          | All Distributor:(0)
        </div>
        <div className="max-w-full overflow-x-autor">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-2 text-left dark:bg-meta-4">
                <th className="min-w-[150px]  py-2 px-2 font-medium text-black dark:text-white uppercase ">
                  Name
                </th>
                <th className="min-w-[130px] py-2 px-2 font-medium text-black dark:text-white uppercase ">
                  Contact No
                </th>
                <th className=" min-w-[150px]  py-2 px-2 font-medium text-black dark:text-white uppercase ">
                  Email ID
                </th>
                <th className="min-w-[200px] py-2 px-2 font-medium text-black dark:text-white uppercase ">
                  Username
                </th>
                <th className="min-w-[210px]  py-2 px-2 font-medium text-black dark:text-white uppercase ">
                  Password
                </th>
                <th className="min-w-[100px] py-2 px-2 font-medium text-black dark:text-white uppercase ">
                  Country Code
                </th>
                <th className="min-w-[180px] py-2 px-2 font-medium text-black dark:text-white uppercase ">
                  Free Machines
                </th>
                <th className="min-w-[210px] py-2 px-2 font-medium text-black dark:text-white uppercase ">
                  Occupied Machine
                </th>
              </tr>
            </thead>
            <tbody>
              {packageData.map((packageItem, key) => (
                <tr key={key}>
                  <td className="border-b border-[#eee] py-5 px-2 dark:border-strokedark">
                    <h5 className="font-medium text-black dark:text-white">
                      Username
                    </h5>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-2 dark:border-strokedark">
                    <h5 className="font-medium text-black dark:text-white">
                      1234567891
                    </h5>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-2 dark:border-strokedark">
                    <h5 className="font-medium text-black dark:text-white">
                      i24btc335
                    </h5>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-2 dark:border-strokedark">
                    <td className="flex items-center">
                      <h5 className="font-medium text-black dark:text-white">
                        i24 Nano Cryptominer
                      </h5>
                    </td>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-2 dark:border-strokedark">
                    <h5 className="font-medium text-black dark:text-white">
                      d8:3a:dd:c0:be:6e
                    </h5>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-2 dark:border-strokedark">
                    <h5 className="font-medium text-black dark:text-white">
                      CM91030001245
                    </h5>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-2 dark:border-strokedark">
                    <h5 className="font-medium text-black dark:text-white">
                      INDIA
                    </h5>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-2 dark:border-strokedark">
                    <h5 className="font-medium text-black dark:text-white">
                      2024-04-06 02:36:09
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

export default DistributorList;
