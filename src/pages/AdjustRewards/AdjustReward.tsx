import React from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';

const AdjustRewards: React.FC = () => {
  return (
    <>
      <Breadcrumb pageName="Adjust Rewards" />

      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">Add coin</h3>
        </div>
        <form action="#">
          <div className="p-6.5">
            <div className="mb-4.5">
              <label className="mb-2.5 block text-black dark:text-white">
                Product Key
              </label>
              <input
                type="text"
                placeholder="Enter product key"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>

            <div>
              <label className="mb-2.5 block text-black dark:text-white">
                Enter Adjustment in ±%
              </label>
              <input
                type="text"
                placeholder="Enter Amount in Percentage (default 100)"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>

            <div className="mt-5 mb-5.5 flex items-center justify-between">
              <label htmlFor="formCheckbox" className="flex cursor-pointer">
                <p>
                  Note: If you want to increase by 10% enter 110 & if you want
                  to decrease by 10% enter 90
                </p>
              </label>
            </div>

            <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
              Adjust
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AdjustRewards;
