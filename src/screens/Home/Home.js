import "./Home.scss";

import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../../components/Dashboard/Dashboard";
import Store from "../../components/Store/Store";
import Products from "../../components/Products/Products";
import Users from "../../components/Users/Users";
import Cash from "../../components/Cash/Cash";
import Statistics from "../../components/Statistics/Statistics";
import History from "../../components/History/History";
import Settings from "../../components/Settings/Settings";
import Container from "../../components/Container/Container";
import MyStore from "../../components/Store/MyStore/MyStore";
import Edit from "../../components/Store/MyStore/Edit/Edit";
import EditSettings from "../../components/Settings/EditSettings/EditSettings";
import StoreQrCode from "../../components/Store/MyStore/StoreQrCode/StoreQrCode";
import Branches from "../../components/Store/Branches/Branches";
import Branch from "../../components/Store/Branches/Branch/Branch";
import EditBranch from "../../components/Store/Branches/Branch/EditBranch/EditBranch";
import EmptyData from "../../components/Errors/EmptyData/EmptyData";
import ProfileAbout from "../../components/Settings/ProfileAbout/ProfileAbout";

function Home() {
  return (
    <>
      <main className="home">
        <Container>
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route exact path="/products">
              <Route path="/products/all" element={<Products />} />
            </Route>
            <Route exact path="/store" element={<Store />} />
            <Route exact path="/store/my" element={<MyStore />} />
            <Route exact path="/store/my/edit" element={<Edit />} />
            <Route exact path="/store/my/code" element={<StoreQrCode />} />
            <Route exact path="/store/branches" element={<Branches />} />
            <Route exact path="/store/branches/branch/:id" element={<Branch />} />
            <Route exact path="/store/branches/branch/:id/edit" element={<EditBranch />} />
            <Route exact path="/users" element={<Users />} />
            <Route exact path="/cash" element={<Cash />} />
            <Route exact path="/statistics" element={<Statistics />}>
              <Route path="/statistics/all" element={<Products />} />
              <Route path="/statistics/invoices" element={<Products />} />
            </Route>
            <Route exact path="/history" element={<History />} />
            <Route exact path="/settings" element={<Settings />}></Route>
            <Route exact path="/settings/profile/:id" element={<ProfileAbout />} />
            <Route exact path="/settings/profile/:id/edit" element={<EditSettings />} />
          </Routes>
        </Container>
      </main>
    </>
  );
}

export default Home;
