import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Layout from './Page/Layout.jsx';
import './Design.css';
import ShoppingListPage from './Page/ShoppingListPage.jsx';
import ShoppingList from './Page/ShoppingList/ShoppingList.jsx';
import { getShoppingListItems } from '../services/shopping-list-items.js';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<ShoppingListPage />} />
        </Route>
        <Route to='/shoppinglist' element={<ShoppingList />} /
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
