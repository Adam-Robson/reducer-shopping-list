import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Layout from './Page/Layout.jsx';
import './Design.css';
import Page from './Page/Page.jsx';
import List from './Page/List/List.jsx';
import { ContextProvider } from '../context/ContextProvider.jsx';

export default function App() {
  return (
    <Router>
      <ContextProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Page />} />
          </Route>
          <Route to="/list" element={<List />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </ContextProvider>
    </Router>
  );
}
