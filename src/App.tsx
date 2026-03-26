import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/Layout";
import SignIn from "./auth/SignIn";
import DashboardDetails from "./pages/Dashboard/DasboardDetails";
import SignUp from "./auth/SignUp";
import ForgetPassowrd from "./auth/ForgetPassword";
import OTP from "./auth/OTP";
import ResetPassword from "./auth/ResetPassword";
import ClockInOut from "./pages/timeClock/ClockInOut";
import VacationRequest from "./pages/timeClock/VacationRequest";
import Settings from "./pages/settings/Settings";
import StationLogin from "./pages/production_response/StationLogin";
import ScrapEntry from "./pages/production_response/ScrapEntry";
import RunSchedule from "./pages/production_response/RunSchedule";
import RunWithScan from "./pages/production_response/RunWithScan";
import Training from "./pages/production_response/Training";
import { PartProvider } from "./components/Context/PartContext";
import QualityPerformance from "./pages/qualityPerformance/QualityPerformance";
import { ToastContainer } from "react-toastify";
import { useAuth } from "./context/AuthContext";
import AllScrapEntries from "./pages/production_response/AllScrapEntries";
import { BiLoader } from "react-icons/bi";
import TimeSheet from "./pages/timeClock/TimeSheet";
import StockOrderScheduleList from "./pages/order_schedule/StockOrderScheduleList";
import EditPartScrapEntry from "./pages/production_response/EditPartScrapEntry";
import EditProductScrapEntry from "./pages/production_response/EditProductScrapEntry";

const App = () => {
  const { isLoading, token } = useAuth();

  if (isLoading) {
    // Show loader until token check is done
    return (
      <div className="flex justify-center items-center h-screen">
        <BiLoader className="text-brand" />
      </div>
    );
  }
  return (
    // <PartProvider>
    //   <ToastContainer />
    //   <Router basename="/Shopfloor">
    //     <Routes>
    //       <Route path="sign-in" element={<SignIn />} />
    //       <Route path="sign-up" element={<SignUp />} />
    //       <Route path="forget-password" element={<ForgetPassowrd />} />
    //       <Route path="otp" element={<OTP />} />
    //       <Route path="reset-password" element={<ResetPassword />} />
    //       <Route path="station-login" element={<StationLogin />} />
    //       <Route path="station-logout" element={<StationLogout />} />
    //       <Route path="Scrap-entry" element={<ScrapEntry />} />
    //       <Route path="run-schedule" element={<RunSchedule />} />
    //       <Route path="run-with-scan" element={<RunWithScan />} />
    //       <Route path="training" element={<Training />} />
    //       {/* <Route path="/" element={token  ? <Layout /> : <SignIn />}> */}
    //       <Route path="/" element={<Layout />}>
    //         <Route index element={<ClockInOut />} />

    //         <Route path="dashboardDetailes" element={<DashboardDetails />} />
    //         <Route path="new-supplier" element={<AddSuppliers />} />
    //         <Route path="stock-order" element={<StockOrder />} />
    //         <Route path="custom-order" element={<CustomOrder />} />
    //         <Route
    //           path="stock-order-schedule"
    //           element={<StockOrderSchedule />}
    //         />
    //         <Route
    //           path="custom-order-schedule"
    //           element={<CustomOrderSchedule />}
    //         />
    //         <Route path="custom-details" element={<CustomOrderDetails />} />
    //         <Route path="daily-schedule" element={<DailySchedule />} />
    //         <Route path="labor-forecast" element={<LaborForecast />} />
    //         <Route path="inventory-status" element={<InventoryStatus />} />
    //         <Route path="capacity-status" element={<CapacityStatus />} />
    //         <Route path="all-supplier" element={<SupplierList />} />
    //         <Route path="edit-supplier/:id" element={<EditSuppliers />} />
    //         <Route path="supplier-order" element={<SupplierOrders />} />
    //         <Route path="supplier-inventory" element={<SupplierInventory />} />
    //         <Route path="supplier-list" element={<SupplierPartList />} />
    //         <Route path="clock-in-out" element={<ClockInOut />} />
    //         <Route path="vaction-request" element={<VacationRequest />} />
    //         <Route path="time-sheet" element={<TimeList />} />
    //         <Route path="live-production" element={<LiveProductionGoal />} />
    //         <Route path="current-status" element={<CurrentStatus />} />
    //         <Route path="current-quality" element={<CurrentQuality />} />
    //         <Route path="/employees" element={<Employees />} />
    //         <Route path="vacation-list" element={<VacationList />} />
    //         <Route path="vacation-approval" element={<VacationApproval />} />
    //         <Route path="time-clock" element={<TimeClockList />} />
    //         <Route path="update" element={<TimeClockUpdate />} />
    //         <Route path="partform" element={<PartForm />} />
    //         <Route path="edit-partform" element={<EditPartForm />} />
    //         <Route path="product-tree" element={<ProductTree />} />
    //         <Route path="part-table" element={<PartTable />} />
    //         <Route path="work-instruction" element={<WorkInstruction />} />
    //         <Route
    //           path="all-work-instruction"
    //           element={<AllWorkInstruction />}
    //         />
    //         <Route
    //           path="add-work-instruction"
    //           element={<AddWorkInstruction />}
    //         />
    //         <Route
    //           path="edit-work-instruction"
    //           element={<EditWorkInstrcution />}
    //         />
    //         <Route
    //           path="apply-work-instruction"
    //           element={<ApplyWorkInstruction />}
    //         />

    //         <Route
    //           path="operation-performance"
    //           element={<OperationPerformance />}
    //         />
    //         <Route
    //           path="quality-performance"
    //           element={<QualityPerformance />}
    //         />
    //         <Route
    //           path="continuous-improvement"
    //           element={<ContinuousImprovement />}
    //         />
    //         <Route path="customer-relation" element={<CustomerRelation />} />
    //         <Route
    //           path="business-intelligence"
    //           element={<BusinessIntelligence />}
    //         />
    //         <Route path="business-analysis" element={<BusinessAnalysis />} />
    //         <Route path="projecion" element={<Projection />} />
    //         <Route path="settings" element={<Settings />} />
    //       </Route>
    //     </Routes>
    //   </Router>
    // </PartProvider>

    <PartProvider>
      <ToastContainer />
      <Router basename="/Shopfloor">
        <Routes>
          {/* Public Routes */}
          <Route path="sign-in" element={<SignIn />} />
          {/* <Route path="sign-up" element={<SignUp />} /> */}
          <Route path="forget-password" element={<ForgetPassowrd />} />
          <Route path="otp-verify" element={<OTP />} />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route
            path="station-login"
            element={token ? <StationLogin /> : <SignIn />}
          />
          <Route
            path="station-logout"
            element={token ? <StationLogin /> : <SignIn />}
          />

          <Route
            path="run-schedule/:id"
            element={token ? <RunSchedule /> : <SignIn />}
          />
          <Route
            path="run-with-scan/:id"
            element={token ? <RunWithScan /> : <SignIn />}
          />
          <Route
            path="training/:id"
            element={token ? <Training /> : <Training />}
          />
          <Route
            path="scrap-entry"
            element={token ? <ScrapEntry /> : <Training />}
          />
          <Route
            path="edit-part-scrap-entry/:id"
            element={token ? <EditPartScrapEntry /> : <Training />}
          />
          <Route
            path="edit-product-scrap-entry/:id"
            element={token ? <EditProductScrapEntry /> : <Training />}
          />
          {/* Protected Routes */}
          {/* <Route
            path="/"
            element={
              token ? <Layout /> : <Navigate to="/sign-in" replace />
            }
          > */}
          <Route path="/" element={token ? <Layout /> : <SignIn />}>
            <Route index element={<ClockInOut />} />
            <Route path="dashboardDetailes" element={<DashboardDetails />} />
            <Route path="settings" element={<Settings />} />
            <Route path="clock-in-out" element={<ClockInOut />} />
            <Route path="vaction-request" element={<VacationRequest />} />
            <Route path="time-sheet" element={<TimeSheet />} />
           
          
            <Route path="scrap-entries" element={<AllScrapEntries />} />
          </Route>
        </Routes>
      </Router>
    </PartProvider>
  );
};

export default App;
