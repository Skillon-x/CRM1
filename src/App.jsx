import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SalesDashboard from '../src/Pages/Dashboard/SalesDashboard/SalesDasboard';
import SalesRevenue from '../src/Pages/Dashboard/SalesDashboard/SalesRevenue';
import SalesOrders from '../src/Pages/Dashboard/SalesDashboard/SalesOrders';
import SalesCalendar from '../src/Pages/Dashboard/SalesDashboard/SalesCalendar';
import MarketingDasboard from '../src/Pages/Dashboard/MarkatingDashboard/MarketingDashboard';
import Marketingcampaing from '../src/Pages/Dashboard/MarkatingDashboard/Marketingcampaing';
import MarketingProducts from '../src/Pages/Dashboard/MarkatingDashboard/MarketingProducts';
import MarketingCalander from './Pages/Dashboard/MarkatingDashboard/MarketingCalander';
import MarketingSocialmedia from './Pages/Dashboard/MarkatingDashboard/MarketingSocialmedia';
import TechDashboard from './Pages/Dashboard/TechDashboard/TechDashboard';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SalesDashboard/>} />
        <Route path="/revenue" element={<SalesRevenue/>} />
        <Route path="/orders" element={<SalesOrders/>} />
        <Route path="/calendar" element={<SalesCalendar/>} />
        <Route path="/Marketing" element={<MarketingDasboard/>} />
        <Route path="/campaigns" element={<Marketingcampaing/>} />
        <Route path="/products" element={<MarketingProducts/>} />
        <Route path="/calendar1" element={<MarketingCalander/>} />
        <Route path="/social-media" element={<MarketingSocialmedia/>}/>
        <Route path="/tech" element={<TechDashboard/>} />
      </Routes>
    </Router>
    
  );
};

export default App;