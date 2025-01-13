import React from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';

const SupportView: React.FC = () => {
  return (
    <>
      <Breadcrumb pageName="Message Detail" />
      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
        <div className="flex flex-col gap-9">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <form action="#">
              <div className="p-6.5">
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Reply
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Reply"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>

                <button
                  className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
                  style={{ backgroundColor: '#5e72e4' }}
                >
                  Reply
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SupportView;
