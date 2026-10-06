import './index.css'
import MainLayout from './layouts/MainLayout';
import Dashboard from './pages/frontpages/Dashboard';
import ProductDetail from './pages/frontpages/ProductDetail';
import { Route, Routes } from 'react-router-dom';
import AdminLayout from './layouts/AdminLayout';
import AdminDashboard from './pages/adminpages/AdminDashboard';
import AboutPage from './pages/adminpages/AboutPage';
import Cart from './pages/frontpages/Pesanan';
import Aboutme from './pages/frontpages/Aboutme';
import JasaJoki from './pages/frontpages/JasaJoki';
import { CartProvider } from "./context/CartContext";

function App() { 
  return ( 
    <CartProvider>

      <Routes>

        {/* Beranda */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
        </Route>

        {/* Halaman lainnya */}
        <Route path="/aboutme" element={<Aboutme />} />

        {/* Jasa Joki */}
        <Route path="/JasaJoki" element={<JasaJoki />} />

        {/* Detail Produk */}
        <Route path="/product/:id" element={<ProductDetail />} />

        {/* Pesanan */}
        <Route path="/Pesanan" element={<Cart />} />

        {/* Admin */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="about" element={<AboutPage />} />
        </Route>

      </Routes>

    </CartProvider>
  ); 
}

export default App;