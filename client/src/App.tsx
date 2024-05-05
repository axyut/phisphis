import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/App.css";

import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ProtectedRoute from "./utils/protectedRoute";
import ErrorPage from "./pages/ErrorPage";
import Phishes from "./pages/Phishes";
import Settings from "./pages/Settings";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <ToastContainer
                    transition={Zoom}
                    autoClose={2000}
                    position={"top-right"}
                    hideProgressBar={true}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    draggable={false}
                    pauseOnHover
                    theme="dark"
                ></ToastContainer>
                <Routes>
                    <Route path="/login" element={<Login></Login>}></Route>
                    <Route path="/signUp" element={<SignUp></SignUp>}></Route>

                    <Route
                        path="/home"
                        element={
                            <ProtectedRoute>
                                <Home />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/settings"
                        element={
                            <ProtectedRoute>
                                <Settings />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/phishes"
                        element={
                            <ProtectedRoute>
                                <Phishes />
                            </ProtectedRoute>
                        }
                    />

                    {/* Default page active todos */}
                    <Route
                        path="/"
                        element={
                            <ProtectedRoute>
                                <Home />
                            </ProtectedRoute>
                        }
                    ></Route>
                    <Route path="*" element={<ErrorPage />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
