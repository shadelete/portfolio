import React from 'react';
import ProfileInfo from "./Components/Profile/info";
import ProfileButtons from "./Components/Profile/buttons";
import TabsButtons from "./Components/Tabs/buttons";
import TabsPortfolio from "./Components/Tabs/portfiolio";
import TabsSkills from "./Components/Tabs/skills";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
		<ProfileInfo/>
		<ProfileButtons/>
		<TabsButtons/>
		<Routes>
			<Route path='/' element={<TabsPortfolio/>}/>
			<Route path='/about' element={<TabsSkills/>}/>
		</Routes>
	</>
  );
}

export default App;
