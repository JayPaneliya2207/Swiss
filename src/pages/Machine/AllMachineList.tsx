import React from 'react';
import { useState } from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import '../../css/form.css';
import { Package } from '../../types/package';
import { useNavigate } from 'react-router-dom';

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
const AllMachineList: React.FC = () => {
  const [enabled, setEnabled] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleEditClick = (id: number) => {
    navigate(`/machines-list/edit-machine/${id}`);
  };
  const handleDeleteClick = (id: number) => {
    console.log('hello', id);
  };
  return (
    <>
      <Breadcrumb pageName="All Machine List" />
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
              <input
                type="text"
                placeholder="Enter MAC Address"
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
                className="btn  btn-block input-users"
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
          | All Free machines: ({packageData.length})
        </div>
        <div className="max-w-full overflow-x-auto custom-scrollbar">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-2 text-left dark:bg-meta-4">
                <th className="min-w-[150px]  py-2 px-2 font-medium text-black dark:text-white uppercase ">
                  Username
                </th>
                <th className="min-w-[130px] py-2 px-2 font-medium text-black dark:text-white uppercase ">
                  Mo.No.
                </th>
                <th className=" min-w-[150px]  py-2 px-2 font-medium text-black dark:text-white uppercase ">
                  Machine Code
                </th>
                <th className="min-w-[200px] py-2 px-2 font-medium text-black dark:text-white uppercase ">
                  Machine Name
                </th>
                <th className="min-w-[210px]  py-2 px-2 font-medium text-black dark:text-white uppercase ">
                  Machine Address
                </th>
                <th className="min-w-[100px] py-2 px-2 font-medium text-black dark:text-white uppercase ">
                  S/N
                </th>
                <th className="min-w-[180px] py-2 px-2 font-medium text-black dark:text-white uppercase ">
                  Distributor Name
                </th>
                <th className="min-w-[210px] py-2 px-2 font-medium text-black dark:text-white uppercase ">
                  Activated
                </th>

                <th className="min-w-[210px] py-2 px-2 font-medium text-black dark:text-white uppercase ">
                  Expiry
                </th>
                <th className="min-w-[200px] py-2 px-2 font-medium text-black dark:text-white uppercase ">
                  ON/Off
                </th>
                <th className="min-w-[120px] py-2 px-2 font-medium text-black dark:text-white uppercase ">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {packageData.length ? (
                packageData.map((packageItem) => (
                  <tr key={packageItem.id}>
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
                    <td className="border-b border-[#eee] py-5 px-2 dark:border-strokedark">
                      <h5 className="font-medium text-black dark:text-white">
                        2025-04-06 00:00:00
                      </h5>
                    </td>

                    <td className="border-b border-[#eee] py-5 px-2 dark:border-strokedark flex gap-2">
                      <h5 className="font-medium text-black dark:text-white flex items-center gap-2">
                        <button
                          className="btn btn-primary"
                          onClick={() => handleEditClick(packageItem.id)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={() => handleDeleteClick(packageItem.id)}
                        >
                          Delete
                        </button>
                      </h5>
                    </td>

                    <td className="border-b border-[#eee] py-5 px-2 dark:border-strokedark">
                      <h5 className="font-medium text-black dark:text-white">
                        <div>
                          <label
                            htmlFor="toggle1"
                            className="flex cursor-pointer select-none items-center"
                          >
                            <div className="relative">
                              <input
                                type="checkbox"
                                id="toggle1"
                                className="sr-only"
                                onChange={() => {
                                  setEnabled(!enabled);
                                }}
                              />
                              <div className="block h-8 w-14 rounded-full bg-meta-9 dark:bg-[#5A616B]"></div>
                              <div
                                className={`absolute left-1 top-1 h-6 w-6 rounded-full bg-white transition ${
                                  enabled &&
                                  '!right-1 !translate-x-full !bg-primary dark:!bg-white'
                                }`}
                              ></div>
                            </div>
                          </label>
                        </div>
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

export default AllMachineList;
