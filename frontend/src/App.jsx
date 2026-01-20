import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Dashboard from './pages/Dashboard';
import Customers from './pages/Customers';
import Alerts from './pages/Alerts';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="customers" element={<Customers />} />
          <Route path="alerts" element={<Alerts />} />
          <Route path="risk-policies" element={<PlaceholderPage title="Risk Policies" />} />
          <Route path="settings" element={<PlaceholderPage title="Settings" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// Placeholder component for future pages
function PlaceholderPage({ title }) {
  return (
    <div style={{ textAlign: 'center', padding: '60px' }}>
      <h1 style={{ color: '#1e3a8a', marginBottom: '16px' }}>{title}</h1>
      <p style={{ color: '#64748b', fontSize: '16px' }}>
        This page will be implemented in future sprints.
      </p>
    </div>
  );
}

export default App;
