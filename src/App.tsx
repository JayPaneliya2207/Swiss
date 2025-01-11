import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Calendar from './pages/Calendar';
import Chart from './pages/Chart';
import Dashboard from './pages/Dashboard/Dashboard';
import FormElements from './pages/Form/FormElements';
import FormLayout from './pages/Form/FormLayout';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';
import DefaultLayout from './layout/DefaultLayout';
import AllUsers from './pages/Users/AllUsers';
import AllMachineList from './pages/Machine/AllMachineList';
import Transaction from './pages/Transaction/Transaction';
import AddDistributor from './pages/Distributor/AddDistributor';
import DistributorList from './pages/Distributor/DistributorList';
import AddMachineMaster from './pages/MachineMaster/AddMachineMaster';
import Registration from './pages/MachineRegistration/Registration';
import OccupiedMachineList from './pages/MachineRegistration/OccupiedMachineList';
import FreeMachineList from './pages/MachineRegistration/FreeMachineList';
import AddFranchise from './pages/Franchise/AddFranchise';
import FranchiseDetails from './pages/Franchise/FranchiseDetails';
import FranchisePurchase from './pages/Franchise/FranchisePurchase';
import PaidPayout from './pages/Franchise/PaidPayout';
import PendingPayout from './pages/Franchise/PendingPayout';
import PendingStock from './pages/Franchise/PendingStock';
import RepurchaseOrder from './pages/Franchise/RepurchaseOrder';
import SaleProduct from './pages/Franchise/SaleProduct';
import WithdrawalApproved from './pages/Franchise/WithdrawalApproved';
import WithdrawalPending from './pages/Franchise/WithdrawalPending';
import AddCoin from './pages/Coin/AddCoin';
import CoinList from './pages/Coin/CoinList';
import AdjustRewards from './pages/AdjustRewards/AdjustReward';
import ResetEarning from './pages/Earning/ResetEarning';
import Rewards from './pages/Reward/Rewards';
import Approved from './pages/Support/Approved';
import Support from './pages/Support/Support';
import GeneralSetting from './pages/Settings/GeneralSetting';
import DataBaseBackUp from './pages/Settings/DataBaseBackUp';
import MachineList from './pages/MachineMaster/MachineList';
import EditUser from './pages/Users/EditUser';
import EditMachine from './pages/Machine/EditMachine';
import Login from './pages/Login/Login';
import ChangePassword from './pages/Password/ChangePassword';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <Routes>
      <Route
        path="/"
        element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login />}
      />

      <Route element={<DefaultLayout children={undefined} />}>
        <Route
          path="/dashboard"
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />}
        />
        <Route
          path="/users/all-users"
          element={
            <>
              <PageTitle title="Users" />
              <AllUsers />
            </>
          }
        />
        <Route
          path="/users/all-users/edituser/:id"
          element={
            <>
              <PageTitle title="Edit User" />
              <EditUser />
            </>
          }
        />
        <Route
          path="machines-list/edit-machine/:id"
          element={
            <>
              <PageTitle title="edit user" />
              <EditMachine />
            </>
          }
        />
        <Route
          path="/machines-list"
          element={
            <>
              <PageTitle title="Machine" />
              <AllMachineList />
            </>
          }
        />
        <Route
          path="/all-transaction"
          element={
            <>
              <PageTitle title="All Transaction" />
              <Transaction />
            </>
          }
        />
        <Route
          path="/distributor/add-distributor"
          element={
            <>
              <PageTitle title="Add Distributor" />
              <AddDistributor />
            </>
          }
        />
        <Route
          path="/distributor/distributor-list"
          element={
            <>
              <PageTitle title="All Distributor" />
              <DistributorList />
            </>
          }
        />
        <Route
          path="/Machine/machine-list"
          element={
            <>
              <PageTitle title="Machine List" />
              <MachineList />
            </>
          }
        />
        <Route
          path="/Machine/add-machine"
          element={
            <>
              <PageTitle title="Add Machine" />
              <AddMachineMaster />
            </>
          }
        />
        <Route
          path="/Machine/registration"
          element={
            <>
              <PageTitle title="Machine Registration" />
              <Registration />
            </>
          }
        />
        <Route
          path="/Machine/free-machine-list"
          element={
            <>
              <PageTitle title="Free Machine List" />
              <FreeMachineList />
            </>
          }
        />
        <Route
          path="/Machine/occupied-machine-list"
          element={
            <>
              <PageTitle title="Occupied Machine List" />
              <OccupiedMachineList />
            </>
          }
        />
        <Route
          path="/franchise/add-franchise"
          element={
            <>
              <PageTitle title="Add Franchise" />
              <AddFranchise />
            </>
          }
        />
        <Route
          path="/franchise/franchise-details"
          element={
            <>
              <PageTitle title="Franchise Details" />
              <FranchiseDetails />
            </>
          }
        />
        <Route
          path="/franchise/franchise-purchase"
          element={
            <>
              <PageTitle title="Franchise Purchase" />
              <FranchisePurchase />
            </>
          }
        />
        <Route
          path="/franchise/paid-payout"
          element={
            <>
              <PageTitle title="Paid Payout" />
              <PaidPayout />
            </>
          }
        />
        <Route
          path="/franchise/pending-payout"
          element={
            <>
              <PageTitle title="Pending Payout" />
              <PendingPayout />
            </>
          }
        />
        <Route
          path="/franchise/pending-stock"
          element={
            <>
              <PageTitle title="Pending Stock" />
              <PendingStock />
            </>
          }
        />
        <Route
          path="/franchise/repurchase-order"
          element={
            <>
              <PageTitle title="Repurchase Order" />
              <RepurchaseOrder />
            </>
          }
        />
        <Route
          path="/franchise/sale-product"
          element={
            <>
              <PageTitle title="Sale Product" />
              <SaleProduct />
            </>
          }
        />
        <Route
          path="/franchise/withdrawal-approved"
          element={
            <>
              <PageTitle title="Withdrawal Approved" />
              <WithdrawalApproved />
            </>
          }
        />
        <Route
          path="/franchise/withdrawal-pending"
          element={
            <>
              <PageTitle title="Withdrawal Pending" />
              <WithdrawalPending />
            </>
          }
        />
        <Route
          path="/coin/add-coin"
          element={
            <>
              <PageTitle title="Add Coin" />
              <AddCoin />
            </>
          }
        />
        <Route
          path="/coin/coin-list"
          element={
            <>
              <PageTitle title="Coin List" />
              <CoinList />
            </>
          }
        />
        <Route
          path="/rewards/adjust-rewards"
          element={
            <>
              <PageTitle title="Adjust Rewards" />
              <AdjustRewards />
            </>
          }
        />
        <Route
          path="/Earnings/Reset-earnings"
          element={
            <>
              <PageTitle title="Reset Earnings" />
              <ResetEarning />
            </>
          }
        />
        <Route
          path="/reward/rewards"
          element={
            <>
              <PageTitle title="Reward" />
              <Rewards />
            </>
          }
        />
        <Route
          path="/support/approved"
          element={
            <>
              <PageTitle title="Approved" />
              <Approved />
            </>
          }
        />
        <Route
          path="/support"
          element={
            <>
              <PageTitle title="Support" />
              <Support />
            </>
          }
        />
        <Route
          path="/setting/general-setting"
          element={
            <>
              <PageTitle title="General settings" />
              <GeneralSetting />
            </>
          }
        />
        <Route
          path="setting/back-up-setting"
          element={
            <>
              <PageTitle title="Database Backup" />
              <DataBaseBackUp />
            </>
          }
        />
        <Route path="/logout" element={<PageTitle title="Logout" />} />
        <Route
          path="/calendar"
          element={
            <>
              <PageTitle title="Calendar" />
              <Calendar />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <PageTitle title="Profile" />
              <Profile />
            </>
          }
        />
        <Route
          path="/forms/form-elements"
          element={
            <>
              <PageTitle title="Form Elements" />
              <FormElements />
            </>
          }
        />
        <Route
          path="/forms/form-layout"
          element={
            <>
              <PageTitle title="Form Layout" />
              <FormLayout />
            </>
          }
        />
        <Route
          path="/tables"
          element={
            <>
              <PageTitle title="Tables" />
              <Tables />
            </>
          }
        />
        <Route
          path="/settings"
          element={
            <>
              <PageTitle title="Settings" />
              <Settings />
            </>
          }
        />
        <Route
          path="/auth/signin"
          element={
            <>
              <PageTitle title="Signin" />
              <SignIn />
            </>
          }
        />
        <Route
          path="/auth/signup"
          element={
            <>
              <PageTitle title="Signup" />
              <SignUp />
            </>
          }
        />
        <Route
          path="/chart"
          element={
            <>
              <PageTitle title="Basic Chart" />
              <Chart />
            </>
          }
        />
        <Route
          path="/ui/alerts"
          element={
            <>
              <PageTitle title="Alerts" />
              <Alerts />
            </>
          }
        />
        <Route
          path="/ui/buttons"
          element={
            <>
              <PageTitle title="Buttons" />
              <Buttons />
            </>
          }
        />
        <Route
          path=""
          element={
            <>
              <PageTitle title="Buttons" />
              <Buttons />
            </>
          }
        />
        <Route
          path="/password/change-password"
          element={
            <>
              <PageTitle title="change password" />
              <ChangePassword />
            </>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
