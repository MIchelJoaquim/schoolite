import { Link, Route, Routes } from "react-router-dom";

const MyRoutes = () => {
    return (
      <Routes> 
          <Route path="/" element={<div>Home1 <Link to='/storage'>storage</Link></div>} />
         
          <Route
            path="/storage"
            element={
              <div style={{ display: 'flex' }}>
                <div
                  style={{
                    flex: 1,
                    backgroundColor: '#fff',
                    borderRadius: '20px',
                    padding: '10px',
                    paddingLeft: '32px',
                    paddingTop: '40px',
                    marginRight: '24px'
                  }}>
                  lateral menu <br />
                  lateral menu <br />
                  lateral menu <br />
                  lateral menu <br />
                  lateral menu <br />
                  lateral menu <br />
                </div>
                <div
                  style={{
                    flex: 3,
                    backgroundColor: '#fff',
                    borderRadius: '20px',
                    padding: '10px',
                    paddingLeft: '24px',
                    paddingTop: '24px'
                  }}>
                  <h2>Storage</h2>
                  this is a example
                </div>
              </div>
            }
          /> 
      </Routes>
    );
  };
  
  export default MyRoutes;
  