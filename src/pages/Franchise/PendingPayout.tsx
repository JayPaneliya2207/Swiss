import React from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import { Package } from '../../types/package';
import { useNavigate } from 'react-router-dom';

const PendingPayout: React.FC = () => {
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
    navigate(`/franchise/franchise-details/edit-franchise/${id}`);
  };

  return (
    <>
      <Breadcrumb pageName="Franchise Pending Payout" />
      <div
        className="card card-body shadow-default dark:border-strokedark dark:bg-boxdark"
        style={{ display: 'flex' }}
      >
        <form className="responsive-form">
          <div className="form-row">
            <div className="form-group col-md-6 col-sm-12">
              <input
                type="text"
                placeholder="Enter  Name"
                name="name"
                className="form-control input-users"
                defaultValue=""
              />
            </div>
            <div className="form-group col-md-6 col-sm-12">
              <input
                type="date"
                placeholder="Enter date"
                name="username"
                className="form-control input-users"
                defaultValue=""
              />
            </div>
            <div className="form-group col-md-6 col-sm-12">
              <select name="limit" className="form-control input-users">
                <option value={'all payout'}>All Payout</option>
                <option value={'last payout'}>Last Payout</option>
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
          | Total Payouts: 5
        </div>
        <div className="max-w-full overflow-x-auto ">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-2 text-left dark:bg-meta-4">
                <th className="min-w-[200px] py-2 px-2 font-medium text-black dark:text-white uppercase ">
                  Name
                </th>
                <th className="min-w-[150px]  py-2 px-2 font-medium text-black dark:text-white uppercase ">
                  Total Payouts
                </th>
                <th className="min-w-[130px] py-2 px-2 font-medium text-black dark:text-white uppercase ">
                  Charges
                </th>
                <th className=" min-w-[150px]  py-2 px-2 font-medium text-black dark:text-white uppercase ">
                  Net Profit
                </th>

                <th className="min-w-[210px]  py-2 px-2 font-medium text-black dark:text-white uppercase ">
                  Date
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
                      <td className="flex items-center">
                        <h5 className="font-medium text-black dark:text-white">
                          Jay
                        </h5>
                      </td>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-2 dark:border-strokedark">
                      <h5 className="font-medium text-black dark:text-white">
                        500
                      </h5>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-2 dark:border-strokedark">
                      <h5 className="font-medium text-black dark:text-white">
                        10
                      </h5>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-2 dark:border-strokedark">
                      <h5 className="font-medium text-black dark:text-white">
                        3000
                      </h5>
                    </td>

                    <td className="border-b border-[#eee] py-5 px-2 dark:border-strokedark">
                      <h5 className="font-medium text-black dark:text-white">
                        20:12:2024 18:20:05
                      </h5>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-2 dark:border-strokedark flex gap-2">
                      <h5 className="font-medium text-black dark:text-white flex items-center gap-2">
                        <button
                          className="btn btn-success"
                          onClick={() => handleEditClick(packageItem.id)}
                        >
                          View
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

export default PendingPayout;
