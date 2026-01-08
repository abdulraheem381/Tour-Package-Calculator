<<<<<<< HEAD
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./pages/Signin";
import { Toaster } from "react-hot-toast";
import Profile from "./pages/Profile";
import PrivateRoute from "./components/PrivateRoute";
import Footer from "./components/Footer";
import Agent from "./pages/Agent";
import Login from './pages/Login'
import Service from "./pages/Service";
import Hotel from "./pages/Hotel";
import Rate from "./pages/Rate";
import Pakage from "./pages/Pakage";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Toaster />
        <div className="min-h-screen flex flex-col overflow-hidden">
          <Navbar />
          <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/signin" element={<Signin />} />
            <Route path="/login" element={<Login />} />
            <Route path="/pakage" element={<Pakage/> } />

            <Route element={<PrivateRoute />}>
              <Route path="/profile" element={<Profile />} />
              <Route path="/agent" element={<Agent />} />
              <Route path="/service" element={<Service />} />
              <Route path="/hotel" element={<Hotel/>} />
              <Route path="/dashboard" element={<Dashboard/>} />
              <Route path="/rate/:hotelId" element={<Rate/>} />
            </Route>
          </Routes>
          </div>
          <Footer/>
        </div>
      </BrowserRouter>
    </>
  );
};
=======
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ProductDetails from './pages/ProductDetails';
import Dashboard from './pages/Dashboard';
import Cart from './pages/Cart';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';

function App() {
    return (
        <AuthProvider>
            <CartProvider>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="products/:id" element={<ProductDetails />} />
                        <Route path="login" element={<Login />} />
                        <Route path="register" element={<Register />} />
                        <Route path="dashboard" element={<Dashboard />} />
                        <Route path="cart" element={<Cart />} />
                    </Route>
                </Routes>
            </CartProvider>
        </AuthProvider>
    );
}
>>>>>>> f0044c4433d58b6d27cf1b70d793ae3f0f49f5ea

export default App;
