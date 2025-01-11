import React from 'react';
import '../../css/form.css';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
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
    invoiceDate: `Jan 13,2023`,
    status: 'Paid',
  },
];

const AllUsers: React.FC = () => {
  const navigate = useNavigate();

  const handleEditClick = (id: number) => {
    navigate(`/users/all-users/edituser/${id}`);
  };

  return (
    <>
      <Breadcrumb pageName="All Users" />
      <div className="card card-body shadow-default dark:border-strokedark dark:bg-boxdark">
        <form className="responsive-form">
          <div className="form-row">
            <div className="form-group col-md-6">
              <input
                type="text"
                placeholder="Enter Name"
                name="name"
                className="form-control input-users"
                defaultValue=""
              />
            </div>
            <div className="form-group col-md-6">
              <input
                type="text"
                placeholder="Enter Username"
                name="username"
                className="form-control input-users"
                defaultValue=""
              />
            </div>
            <div className="form-group col-md-6">
              <input
                type="text"
                placeholder="Enter Email"
                name="email"
                className="form-control input-users"
                defaultValue=""
              />
            </div>
            <div className="form-group col-md-6">
              <input
                type="text"
                placeholder="Enter Mobile"
                name="mobile"
                className="form-control input-users"
                defaultValue=""
              />
            </div>
            <div className="form-group col-md-6">
              <select
                className="form-control input-users select-input"
                name="active_status"
                id=""
              >
                <option value="">Select Status</option>
                <option value={1}>Active</option>
                <option value={0}>Inactive</option>
              </select>
            </div>
            <div className="form-group col-md-6">
              <select
                className="form-control input-users select-input"
                name="block_status"
                id=""
              >
                <option value="">User Status</option>
                <option value={1}>Block</option>
                <option value={0}>Unblock</option>
              </select>
            </div>
            <div className="form-group col-md-6">
              <select
                name="limit"
                className="form-control input-users select-input"
              >
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
                <option value={200}>200</option>
                <option value={500}>500</option>
                <option value={1000}>1000</option>
              </select>
            </div>
            <div className="form-group col-md-6">
              <input
                type="submit"
                name="submit"
                className="btn btn-block input-users"
                value="Filter"
              />
            </div>
            <div className="form-group col-md-6">
              <a href="admin/users" className="btn btn-primary btn-block">
                Reset
              </a>
            </div>
          </div>
        </form>
      </div>
      <div className="rounded-sm border mt-6 border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div
          className="machine-total"
          style={{ justifyContent: 'end', marginBottom: '5px' }}
        >
          | All Users: ({packageData.length})
        </div>
        <div className="max-w-full overflow-x-auto custom-scrollbar">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-2 text-left dark:bg-meta-4">
                <th className="py-4 px-4 font-medium text-black dark:text-white uppercase ">
                  ID
                </th>
                <th className="py-4 px-4 font-medium text-black dark:text-white uppercase ">
                  Action
                </th>
                <th className="py-4 px-4 font-medium text-black dark:text-white uppercase ">
                  Name
                </th>
                <th className="py-4 px-4 font-medium text-black dark:text-white uppercase ">
                  Country
                </th>
                <th className="py-4 px-4 font-medium text-black dark:text-white uppercase ">
                  Mobile
                </th>
                <th className="py-4 px-4 font-medium text-black dark:text-white uppercase ">
                  Email
                </th>
                <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white uppercase ">
                  Join Date
                </th>
                <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white uppercase ">
                  Total Machines
                </th>
              </tr>
            </thead>
            <tbody>
              {packageData.length ? (
                packageData.map((packageItem) => (
                  <tr key={packageItem.id}>
                    <td>{packageItem.id}</td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <div className="flex items-center space-x-3.5">
                        <button
                          className="hover:text-primary"
                          onClick={() => handleEditClick(packageItem.id)}
                        >
                          <svg
                            className="edit-icon btn btn-info btn-sm"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            fill="currentColor"
                          >
                            <path
                              d="M.75,17.5A.751.751,0,0,1,0,16.75V12.569a.755.755,0,0,1,.22-.53L11.461.8a2.72,2.72,0,0,1,3.848,0L16.7,2.191a2.72,2.72,0,0,1,0,3.848L5.462,17.28a.747.747,0,0,1-.531.22ZM1.5,12.879V16h3.12l7.91-7.91L9.41,4.97ZM13.591,7.03l2.051-2.051a1.223,1.223,0,0,0,0-1.727L14.249,1.858a1.222,1.222,0,0,0-1.727,0L10.47,3.91Z"
                              transform="translate(3.25 3.25)"
                            />
                          </svg>
                        </button>

                        <button className="hover:text-primary">
                          <svg
                            className="fill-current btn btn-info btn-sm"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 18 18"
                            width="18"
                            height="18"
                          >
                            <path d="M16.8754 11.6719C16.5379 11.6719 16.2285 11.9531 16.2285 12.3187V14.8219C16.2285 15.075 16.0316 15.2719 15.7785 15.2719H2.22227C1.96914 15.2719 1.77227 15.075 1.77227 14.8219V12.3187C1.77227 11.9812 1.49102 11.6719 1.12539 11.6719C0.759766 11.6719 0.478516 11.9531 0.478516 12.3187V14.8219C0.478516 15.7781 1.23789 16.5375 2.19414 16.5375H15.7785C16.7348 16.5375 17.4941 15.7781 17.4941 14.8219V12.3187C17.5223 11.9531 17.2129 11.6719 16.8754 11.6719Z" />
                            <path d="M8.55074 12.3469C8.66324 12.4594 8.83199 12.5156 9.00074 12.5156C9.16949 12.5156 9.31012 12.4594 9.45074 12.3469L13.4726 8.43752C13.7257 8.1844 13.7257 7.79065 13.5007 7.53752C13.2476 7.2844 12.8539 7.2844 12.6007 7.5094L9.64762 10.4063V2.1094C9.64762 1.7719 9.36637 1.46252 9.00074 1.46252C8.66324 1.46252 8.35387 1.74377 8.35387 2.1094V10.4063L5.40074 7.53752C5.14762 7.2844 4.75387 7.31252 4.50074 7.53752C4.24762 7.79065 4.27574 8.1844 4.50074 8.43752L8.55074 12.3469Z" />
                          </svg>
                        </button>

                        <button className="hover:text-primary">
                          <a
                            className="btn btn-info btn-sm"
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Machine
                          </a>
                        </button>
                      </div>
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

export default AllUsers;
