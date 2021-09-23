import React, { Suspense, useEffect } from "react";
import "components/FontawsomeIcons";
 

 import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "routes";
  import ReCaptcha from "pages/ReCaptcha";
 
function App() {
    return (
        <Router>
           
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        {routes.map((route) => (
                            <Route
                                path={route.path}
                                component={route.component}
                                key={route.path}
                            />
                        ))}

                        <Route path="/" exact>
                           <ReCaptcha/>
                        </Route>
                        <Route>
                         </Route>
                    </Switch>
                </Suspense>
            
        </Router>
    );
}

export default App;
