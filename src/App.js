import { useState, useLayoutEffect, useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import HomePage from "pages/home";
import EventsPage from "pages/events";
import TeamPage from "pages/team";
import LoginPage from "pages/login";
import ProfilePage from "pages/profile";
import Authenticate from "components/Auth";

import { AppContext } from "contexts/app";

import { parseSessionData } from "helpers/auth";

import { onMessageListener } from "apis/firebase";

import "./App.css";

const defaultState = { loading: false, liveData: {} };
function App() {
  const [session, setSession] = useState({ ...defaultState, loading: true });

  useLayoutEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      let data = { ...defaultState };
      if (user) {
        data = { ...defaultState, ...parseSessionData(user), loading: false };
      }
      setSession(data);
    });
  }, []);

  useEffect(() => {
    onMessageListener().then(payload => {
      const { notification: { title, body }} = payload;
      alert(`${title}\n${body}`);
    }).catch(err => console.err(err));
  })

  return (
    <div className="App">
      <AppContext.Provider value={{ session, setSession }}>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/events"
              render={(routeProps) => (
                <Authenticate>
                  <EventsPage {...routeProps} />
                </Authenticate>
              )}
            />
            <Route exact path="/login" render={(routeProps) => <LoginPage {...routeProps} />} />
            <Route
              exact
              path="/team"
              render={(routeProps) => (
                <Authenticate>
                  <TeamPage {...routeProps} />
                </Authenticate>
              )}
            />
            <Route
            	exact 
            	path="/profile" 
            	render={(routeProps) => (
            		<Authenticate>
            			<ProfilePage {...routeProps} />
            		</Authenticate>
            	)} 
            />
            <Route
              exact
              path="/"
              render={(routeProps) => 
                  <HomePage {...routeProps} /> }
            />
            <Redirect from="*" to="/" />
          </Switch>
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;
