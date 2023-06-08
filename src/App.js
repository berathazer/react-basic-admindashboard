import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import New from "./Pages/New/New";
import List from "./Pages/List/List";
import Single from "./Pages/Single/Single";

import "./index.css";

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/">
						<Route path="login" element={<Login />} />
						<Route index element={<Home />} />

						<Route path="users">
							<Route index element={<List />} />
							<Route
								path=":userId"
								element={<Single />}
							/>
							<Route path="new" element={<New />} />
						</Route>

						<Route path="products">
							<Route index element={<List />} />
							<Route
								path=":productId"
								element={<Single />}
							/>
							<Route path="new" element={<New />} />
						</Route>
					</Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;

/*
function App() {
  const currentUser = useSelector(state => state.userLogin.currentUser)

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };


  return (
    <div className="App">
 
        <Router>
          <Routes>
            <Route path="/">
              <Route path="login" element={<Login />} />
              <Route
                index
                element={
                  <RequireAuth>
                    <Home />
                  </RequireAuth>
                }
              />

              <Route path="users">
                <Route
                  index
                  element={
                    <RequireAuth>
                      <List />
                    </RequireAuth>
                  }
                />
                <Route
                  path=":userId"
                  element={
                    <RequireAuth>
                      <Single />
                    </RequireAuth>
                  }
                />
                <Route
                  path="new"
                  element={
                    <RequireAuth>
                      <New />
                    </RequireAuth>
                  }
                />
              </Route>

              <Route path="products">
                <Route
                  index
                  element={
                    <RequireAuth>
                      <List />
                    </RequireAuth>
                  }
                />
                <Route
                  path=":productId"
                  element={
                    <RequireAuth>
                      <Single />
                    </RequireAuth>
                  }
                />
                <Route
                  path="new"
                  element={
                    <RequireAuth>
                      <New />
                    </RequireAuth>
                  }
                />
              </Route>
            </Route>
          </Routes>
        </Router>
      
    </div>
  );
}

export default App;


*/
