import React from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import '../../css/form.css';
import { Package } from '../../types/package';
import { useNavigate } from 'react-router-dom';

const CoinList: React.FC = () => {
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
    navigate(`/coin/coin-list/edit-coin/${id}`);
  };

  const handleDeleteClick = (id: number) => {
    console.log('hello', id);
  };

  return (
    <>
      <Breadcrumb pageName="Coin List" />
      <div
        className="card card-body shadow-default dark:border-strokedark dark:bg-boxdark"
        style={{ display: 'flex' }}
      >
        <form className="responsive-form">
          <div className="form-row">
            <div className="form-group col-md-6 col-sm-12">
              <input
                type="text"
                placeholder="Enter Coin Name"
                name="name"
                className="form-control input-users"
                defaultValue=""
              />
            </div>
            <div className="form-group col-md-6 col-sm-12">
              <input
                type="text"
                placeholder="Enter Coin Symbol"
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
                  Name
                </th>
                <th className="min-w-[130px] py-2 px-2 font-medium text-black dark:text-white uppercase ">
                  Symbol
                </th>
                <th className=" min-w-[150px]  py-2 px-2 font-medium text-black dark:text-white uppercase ">
                  Icon
                </th>
                <th className="min-w-[200px] py-2 px-2 font-medium text-black dark:text-white uppercase ">
                  HashTime
                </th>
                <th className="min-w-[210px]  py-2 px-2 font-medium text-black dark:text-white uppercase ">
                  Per Second Reward
                </th>
                <th className="min-w-[100px] py-2 px-2 font-medium text-black dark:text-white uppercase ">
                  Transfer Charge
                </th>
                <th className="min-w-[180px] py-2 px-2 font-medium text-black dark:text-white uppercase ">
                  Mining Unit
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
                        BITCOIN
                      </h5>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-2 dark:border-strokedark">
                      <h5 className="font-medium text-black dark:text-white">
                        BTC
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
                          14 Second
                        </h5>
                      </td>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-2 dark:border-strokedark">
                      <h5 className="font-medium text-black dark:text-white">
                        0.00000000005 BTC
                      </h5>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-2 dark:border-strokedark">
                      <h5 className="font-medium text-black dark:text-white">
                        0.000378BTC
                      </h5>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-2 dark:border-strokedark">
                      <h5 className="font-medium text-black dark:text-white">
                        T/H
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

export default CoinList;
