import React, { useState, useEffect } from 'react';
import '../../css/form.css';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import { Package } from '../../types/package';
import { useNavigate } from 'react-router-dom';

const AllUsers: React.FC = () => {
  const [users, setUsers] = useState<Package[]>([]);
  const [filters, setFilters] = useState({
    name: '',
    username: '',
    email: '',
    mobile: '',
    active_status: '',
    block_status: '',
    limit: 10,
  });
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate fetching data from an API
    const fetchData = async () => {
      const response = [
        {
          id: 1,
          name: 'Free Package',
          invoiceDate: `Jan 13,2023`,
          status: 'Paid',
        },
        {
          id: 2,
          name: 'Pro Package',
          invoiceDate: `Jan 14,2023`,
          status: 'Paid',
        },
      ];
      setUsers(response);
    };

    fetchData();
  }, []);

  const handleEditClick = (id: number) => {
    navigate(`/users/all-users/edituser/${id}`);
  };

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleFilterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add logic for filtering the data
    console.log('Filters applied:', filters);
  };

  const resetFilters = () => {
    setFilters({
      name: '',
      username: '',
      email: '',
      mobile: '',
      active_status: '',
      block_status: '',
      limit: 10,
    });
  };

  return (
    <>
      <Breadcrumb pageName="All Users" />
      <div className="card card-body shadow-default dark:border-strokedark dark:bg-boxdark">
        <form className="responsive-form" onSubmit={handleFilterSubmit}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <input
                type="text"
                placeholder="Enter Name"
                name="name"
                className="form-control input-users"
                value={filters.name}
                onChange={handleFilterChange}
              />
            </div>
            <div className="form-group col-md-6">
              <input
                type="text"
                placeholder="Enter Username"
                name="username"
                className="form-control input-users"
                value={filters.username}
                onChange={handleFilterChange}
              />
            </div>
            <div className="form-group col-md-6">
              <input
                type="text"
                placeholder="Enter Email"
                name="email"
                className="form-control input-users"
                value={filters.email}
                onChange={handleFilterChange}
              />
            </div>
            <div className="form-group col-md-6">
              <input
                type="text"
                placeholder="Enter Mobile"
                name="mobile"
                className="form-control input-users"
                value={filters.mobile}
                onChange={handleFilterChange}
              />
            </div>
            <div className="form-group col-md-6">
              <select
                className="form-control input-users select-input"
                name="active_status"
                value={filters.active_status}
                onChange={handleFilterChange}
              >
                <option value="">Select Status</option>
                <option value="1">Active</option>
                <option value="0">Inactive</option>
              </select>
            </div>
            <div className="form-group col-md-6">
              <select
                className="form-control input-users select-input"
                name="block_status"
                value={filters.block_status}
                onChange={handleFilterChange}
              >
                <option value="">User Status</option>
                <option value="1">Block</option>
                <option value="0">Unblock</option>
              </select>
            </div>
            <div className="form-group col-md-6">
              <select
                name="limit"
                className="form-control input-users select-input"
                value={filters.limit}
                onChange={handleFilterChange}
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
                className="btn btn-block input-users"
                value="Filter"
              />
            </div>
            <div className="form-group col-md-6">
              <button
                type="button"
                className="btn btn-primary btn-block"
                onClick={resetFilters}
              >
                Reset
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="rounded-sm border mt-6 border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div
          className="machine-total"
          style={{ justifyContent: 'end', marginBottom: '5px' }}
        >
          | All Users: ({users.length})
        </div>
        <div className="max-w-full overflow-x-auto">
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
                  Invoice Date
                </th>
              </tr>
            </thead>
            <tbody>
              {users.length ? (
                users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>
                      <button
                        className="hover:text-primary"
                        onClick={() => handleEditClick(user.id)}
                      >
                        Edit
                      </button>
                    </td>
                    <td>{user.name}</td>
                    <td>{user.invoiceDate}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4}>No data available</td>
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
