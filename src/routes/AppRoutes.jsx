import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import BitcoinRatesPage from "../pages/BitcoinRatesPage";
import PostsPage, { Post, PostList } from "../pages/PostsPage";
import PageNotFound from "../pages/PageNotFound";


function AppRoutes(props) {
    return (
        // Exercise 4.
        <Routes>
            <Route index element={<HomePage {...props} />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="bitcoinRates" element={<BitcoinRatesPage />} />
            <Route path="/posts" element={<PostsPage {...props} />} >
              <Route index element={<PostList />} />
              <Route path=":id" element={<Post />} />
            </Route>

            <Route path="*" element={<PageNotFound />} />
        </Routes>
        // Exercise 4 end.
    );
}

export default AppRoutes