import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import DashboardPage from "./Pages/Dashboard/DashboardPage";
import ApplicationsPage from "./Pages/Dashboard/ApplicationsPage";
import SingleJobPage from "./Pages/Dashboard/SingleJobPage";
import SingleApplicationPage from "./Pages/Dashboard/SingleApplicationPage";
import CreateJobAdPage from "./Pages/Dashboard/CreateJobAdPage";
import InsertCVPage from "./Pages/Dashboard/InsertCVPage";
import ReadCVPage from "./Pages/Dashboard/ReadCVPage";
import UpdateUserPage from "./Pages/Dashboard/UpdateUserPage";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Homepage />} />

                    <Route exact path="/dashboard">
                        <Route index element={<DashboardPage />} />
                        <Route
                            exact
                            path="jobs/:id"
                            element={<SingleJobPage />}
                        />
                        {/* <Route
                            exact
                            path="jobs/create"
                            element={<CreateJobAdPage />}
                        /> */}

                        <Route
                            exact
                            path="me/update"
                            element={<UpdateUserPage />}
                        />
                        <Route exact path="cv" element={<ReadCVPage />} />
                        <Route
                            exact
                            path="insertcv"
                            element={<InsertCVPage />}
                        />
                        <Route
                            exact
                            path="myapplications"
                            element={<ApplicationsPage />}
                        />
                        <Route
                            exact
                            path="myapplications/:id"
                            element={<SingleApplicationPage />}
                        />
                        <Route
                            exact
                            path="applications/create"
                            element={<CreateJobAdPage />}
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
