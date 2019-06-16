 import React from 'react';
import SongList from './Songlist';
import Songdetails from './Songdetails';

 const App = () => {
     return (
         <div className="container">
             <div className="row">
                 <div className="col-md-6 mt-3">
                    <SongList />
                 </div>
                 <div className="col-md-6 mt-3">
                    <Songdetails />
                 </div>
             </div>
         </div>
     )
 }

 export default App;
