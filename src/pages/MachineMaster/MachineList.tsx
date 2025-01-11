import React from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import { Product } from '../../types/product';
import ProductOne from '../../images/product/product-01.png';
import ProductTwo from '../../images/product/product-02.png';
import ProductThree from '../../images/product/product-03.png';
import '../../css/form.css';

const productData: Product[] = [
  {
    image: ProductOne,
    name: 'Apple Watch Series 7',
    category: 'Electronics',
    price: 296,
    sold: 22,
    profit: 45,
  },
  {
    image: ProductTwo,
    name: 'Macbook Pro M1',
    category: 'Electronics',
    price: 546,
    sold: 12,
    profit: 125,
  },
  {
    image: ProductThree,
    name: 'Dell Inspiron 15',
    category: 'Electronics',
    price: 443,
    sold: 64,
    profit: 247,
  },
];
const MachineList: React.FC = () => {
  return (
    <>
      <Breadcrumb pageName="Machine List" />
      <div className="col-sm-12">
        <div
          className="btn-group float-sm-right add-button"
          style={{ justifyContent: 'end' }}
        >
          <button className="btn btn-success btn-sm">Add Machines</button>
        </div>
      </div>

      <div className="rounded-sm border mt-6 border-stroke bg-white px-4 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="max-w-full overflow-x-auto custom-scrollbar">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-2 text-left dark:bg-meta-4">
                <th className="min-w-[200px]  py-2 px-2 font-medium text-black dark:text-white uppercase ">
                  Machine Code
                </th>
                <th className="min-w-[200px] py-2 px-2 font-medium text-black dark:text-white uppercase ">
                  Machine Name
                </th>
                <th className=" min-w-[150px]  py-2 px-2 font-medium text-black dark:text-white uppercase ">
                  Model
                </th>
                <th className="min-w-[200px] py-2 px-2 font-medium text-black dark:text-white uppercase ">
                  Coin
                </th>
                <th className="min-w-[200px] py-2 px-2 font-medium text-black dark:text-white uppercase ">
                  Hashrate
                </th>
                <th className="min-w-[200px] py-2 px-2 font-medium text-black dark:text-white uppercase ">
                  Version
                </th>
                <th className="min-w-[200px] py-2 px-2 font-medium text-black dark:text-white uppercase ">
                  Specification
                </th>
                <th className="min-w-[150px]  py-2 px-2 font-medium text-black dark:text-white uppercase ">
                  Image 1
                </th>
                <th className="min-w-[150px] py-2 px-2 font-medium text-black dark:text-white uppercase ">
                  Image 2
                </th>
                <th className="min-w-[150px] py-2 px-2 font-medium text-black dark:text-white uppercase ">
                  Image 3
                </th>
                <th className="min-w-[120px] py-2 px-2 font-medium text-black dark:text-white uppercase ">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {productData.map((packageItem, key) => (
                <tr key={key}>
                  <td className="border-b border-[#eee] py-5 px-2 dark:border-strokedark">
                    <h5 className="font-medium text-black dark:text-white">
                      Username
                    </h5>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-2 dark:border-strokedark">
                    <h5 className="font-medium text-black dark:text-white">
                      i24 Nano Cryptominer
                    </h5>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-2 dark:border-strokedark">
                    <h5 className="font-medium text-black dark:text-white">
                      i24 Pro
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
                      INDIA
                    </h5>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-2 dark:border-strokedark">
                    <h5 className="font-medium text-black dark:text-white">
                      INDIA
                    </h5>
                  </td>

                  <td className="border-b border-[#eee] py-5 px-2 dark:border-strokedark">
                    <h5 className="font-medium text-black dark:text-white">
                      INDIA
                    </h5>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-2 dark:border-strokedark">
                    <div className="h-12.5 w-15 rounded-md">
                      <img src={packageItem.image} alt="Product" />
                    </div>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-2 dark:border-strokedark">
                    <div className="h-12.5 w-15 rounded-md">
                      <img src={packageItem.image} alt="Product" />
                    </div>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-2 dark:border-strokedark">
                    <div className="h-12.5 w-15 rounded-md">
                      <img src={packageItem.image} alt="Product" />
                    </div>
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

export default MachineList;
