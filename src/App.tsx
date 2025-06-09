import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/Layout";
import SignIn from "./auth/SignIn";
import DashboardDetails from "./pages/Dashboard/DasboardDetails";

import AddSuppliers from "./pages/supplier_chain/AddSuppliers";
import SignUp from "./auth/SignUp";
import ForgetPassowrd from "./auth/ForgetPassword";
import OTP from "./auth/OTP";
import ResetPassword from "./auth/ResetPassword";
import StockOrder from "./pages/order_schedule/StockOrder";
import CustomOrder from "./pages/order_schedule/CustomOrder";
import StockOrderSchedule from "./pages/order_schedule/StockOrderSchedule";
import CustomOrderSchedule from "./pages/order_schedule/CustomOrderSchedule";
import CustomOrderDetails from "./pages/order_schedule/CustomOrderDetails";
import DailySchedule from "./pages/order_schedule/DailySchedule";
import LaborForecast from "./pages/order_schedule/LaborForecast";
import InventoryStatus from "./pages/order_schedule/InventoryStatus";
import CapacityStatus from "./pages/order_schedule/CapacityStatus";
import EditSuppliers from "./pages/supplier_chain/EditSuppliers";
import SupplierOrders from "./pages/supplier_chain/SupplierOrders";
import SupplierInventory from "./pages/supplier_chain/SupplierInventory";
import SupplierPartList from "./pages/supplier_chain/SupplierPartList";
import ClockInOut from "./pages/timeClock/ClockInOut";
import TimeList from "./pages/timeClock/TimeSheet";
import VacationRequest from "./pages/timeClock/VacationRequest";
import LiveProductionGoal from "./pages/productionLive/LiveProductionGoal";
import CurrentStatus from "./pages/productionLive/CurrentStatus";
import CurrentQuality from "./pages/productionLive/CurrentQuality";
import Settings from "./pages/settings/Settings";
import StationLogin from "./pages/production_response/StationLogin";
import ScrapEntry from "./pages/production_response/ScrapEntry";
import RunSchedule from "./pages/production_response/RunSchedule";
import StationLogout from "./pages/production_response/StationLogout";
import RunWithScan from "./pages/production_response/RunWithScan";
import Training from "./pages/production_response/Training";
import Employees from "./pages/Employee_Information/Employees";
import VacationApproval from "./pages/Employee_Information/VacationApproval";
import TimeClockList from "./pages/Employee_Information/TimeClockList";
import VacationList from "./pages/Employee_Information/VacationList";
import TimeClockUpdate from "./pages/Employee_Information/TimeClockUpdate";
import PartForm from "./pages/product&BOM/PartForm";
import EditPartForm from "./pages/product&BOM/EditPartForm";
import ProductTree from "./pages/product&BOM/ProductTree";
import PartTable from "./pages/product&BOM/PartTable";
import { PartProvider } from "./components/Context/PartContext";
import WorkInstruction from "./pages/Work_Instrcution.tsx/WorkInstruction";
import AddWorkInstruction from "./pages/Work_Instrcution.tsx/AddWorkInstruction";
import EditWorkInstrcution from "./pages/Work_Instrcution.tsx/EditWorkInstruction";
import ApplyWorkInstruction from "./pages/Work_Instrcution.tsx/ApplyWorkInstruction";
import OperationPerformance from "./pages/Operation_performance/OperationPerformance";
import CustomerRelation from "./pages/Customer_Relation/CustomerRelation";
import Projection from "./pages/projection/Projection";
import ContinuousImprovement from "./pages/Continuous_Improvement/ContinuousImprovement";
import QualityPerformance from "./pages/qualityPerformance/QualityPerformance";
import BusinessAnalysis from "./pages/business-analysis/BusinessAnalysis";
import BusinessIntelligence from "./pages/business-intelligence/BusinessIntelligence";
import { ToastContainer } from "react-toastify";
import SupplierList from "./pages/supplier_chain/supplierList";
import AllWorkInstruction from "./pages/Work_Instrcution.tsx/AllWorkInstruction";

const App = () => {
  // const { token } = useAuth();
  const token = localStorage.getItem("token");

  console.log("tokentokentoken", token);

  return (
    <PartProvider>
      <ToastContainer />
      <Router basename="/Frontline">
        <Routes>
          {/* Routes without the layout */}
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="forget-password" element={<ForgetPassowrd />} />
          <Route path="otp" element={<OTP />} />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="station-login" element={<StationLogin />} />
          <Route path="station-logout" element={<StationLogout />} />

          <Route path="Scrap-entry" element={<ScrapEntry />} />
          <Route path="run-schedule" element={<RunSchedule />} />
          <Route path="run-with-scan" element={<RunWithScan />} />
          <Route path="training" element={<Training />} />
          {/* <Route path="/" element={token  ? <Layout /> : <SignIn />}> */}
          <Route path="/" element={<Layout />}>
            <Route index element={<DashboardDetails />} />

            <Route path="dashboardDetailes" element={<DashboardDetails />} />
            <Route path="new-supplier" element={<AddSuppliers />} />
            <Route path="stock-order" element={<StockOrder />} />
            <Route path="custom-order" element={<CustomOrder />} />
            <Route
              path="stock-order-schedule"
              element={<StockOrderSchedule />}
            />
            <Route
              path="custom-order-schedule"
              element={<CustomOrderSchedule />}
            />
            <Route path="custom-details" element={<CustomOrderDetails />} />
            <Route path="daily-schedule" element={<DailySchedule />} />
            <Route path="labor-forecast" element={<LaborForecast />} />
            <Route path="inventory-status" element={<InventoryStatus />} />
            <Route path="capacity-status" element={<CapacityStatus />} />
            <Route path="all-supplier" element={<SupplierList />} />
            <Route path="edit-supplier/:id" element={<EditSuppliers />} />
            <Route path="supplier-order" element={<SupplierOrders />} />
            <Route path="supplier-inventory" element={<SupplierInventory />} />
            <Route path="supplier-list" element={<SupplierPartList />} />
            <Route path="clock-in-out" element={<ClockInOut />} />
            <Route path="vaction-request" element={<VacationRequest />} />
            <Route path="time-sheet" element={<TimeList />} />
            <Route path="live-production" element={<LiveProductionGoal />} />
            <Route path="current-status" element={<CurrentStatus />} />
            <Route path="current-quality" element={<CurrentQuality />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="vacation-list" element={<VacationList />} />
            <Route path="vacation-approval" element={<VacationApproval />} />
            <Route path="time-clock" element={<TimeClockList />} />
            <Route path="update" element={<TimeClockUpdate />} />
            <Route path="partform" element={<PartForm />} />
            <Route path="edit-partform" element={<EditPartForm />} />
            <Route path="product-tree" element={<ProductTree />} />
            <Route path="part-table" element={<PartTable />} />
            <Route path="work-instruction" element={<WorkInstruction />} />
            <Route
              path="all-work-instruction"
              element={<AllWorkInstruction />}
            />
            <Route
              path="add-work-instruction"
              element={<AddWorkInstruction />}
            />
            <Route
              path="edit-work-instruction"
              element={<EditWorkInstrcution />}
            />
            <Route
              path="apply-work-instruction"
              element={<ApplyWorkInstruction />}
            />

            <Route
              path="operation-performance"
              element={<OperationPerformance />}
            />
            <Route
              path="quality-performance"
              element={<QualityPerformance />}
            />
            <Route
              path="continuous-improvement"
              element={<ContinuousImprovement />}
            />
            <Route path="customer-relation" element={<CustomerRelation />} />
            <Route
              path="business-intelligence"
              element={<BusinessIntelligence />}
            />
            <Route path="business-analysis" element={<BusinessAnalysis />} />
            <Route path="projecion" element={<Projection />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </Router>
    </PartProvider>
  );
};

export default App;
