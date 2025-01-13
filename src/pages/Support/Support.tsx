import React from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import { Package } from '../../types/package';
import { useNavigate } from 'react-router-dom';

const Support: React.FC = () => {
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
    navigate(`/support/support-view/${id}`);
  };

  return (
    <>
      <Breadcrumb pageName="Support" />
      <div
        className="card card-body shadow-default dark:border-strokedark dark:bg-boxdark"
        style={{ display: 'flex' }}
      >
        <form className="responsive-form">
          <div className="form-row">
            <div className="form-group col-md-6 col-sm-12">
              <input
                type="text"
                placeholder="Enter Ticket Id"
                name="name"
                className="form-control input-users"
                defaultValue=""
              />
            </div>
            <div className="form-group col-md-6 col-sm-12">
              <input
                type="text"
                placeholder="Enter Username"
                name="username"
                className="form-control input-users"
                defaultValue=""
              />
            </div>
            <div className="form-group col-md-6 col-sm-12">
              <input
                type="date"
                placeholder="Enter end"
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
        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-2 text-left dark:bg-meta-4">
                <th className="min-w-[200px] py-2 px-2 font-medium text-black dark:text-white uppercase ">
                  Sr.No
                </th>
                <th className="min-w-[150px]  py-2 px-2 font-medium text-black dark:text-white uppercase ">
                  Ticket Id
                </th>
                <th className="min-w-[130px] py-2 px-2 font-medium text-black dark:text-white uppercase ">
                  User Id
                </th>
                <th className=" min-w-[150px]  py-2 px-2 font-medium text-black dark:text-white uppercase ">
                  Description
                </th>
                <th className="min-w-[210px]  py-2 px-2 font-medium text-black dark:text-white uppercase ">
                  Create Date
                </th>
                <th className="min-w-[210px]  py-2 px-2 font-medium text-black dark:text-white uppercase ">
                  Status
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
                        TKQVu693vj
                      </h5>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-2 dark:border-strokedark">
                      <h5 className="font-medium text-black dark:text-white">
                        company
                      </h5>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-2 dark:border-strokedark">
                      <h5 className="font-medium text-black dark:text-white">
                        dsfgsdgsdrgdrger
                      </h5>
                    </td>

                    <td className="border-b border-[#eee] py-5 px-2 dark:border-strokedark">
                      <h5 className="font-medium text-black dark:text-white">
                        20:12:2024 18:20:05
                      </h5>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-2 dark:border-strokedark">
                      <h5 className="font-medium text-black dark:text-white">
                        Pending
                      </h5>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-2 dark:border-strokedark flex gap-2">
                      <h5 className="font-medium text-black dark:text-white flex items-center gap-2">
                        <button
                          className="btn btn-success"
                          onClick={() => handleEditClick(packageItem.id)}
                        >
                          Reply
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
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Support;
