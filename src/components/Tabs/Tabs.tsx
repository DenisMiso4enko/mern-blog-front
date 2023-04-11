import React from 'react';
import {TABS} from "../../constance";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store";
import {setActiveTab} from "../../store/SettingsSlice";

const Tabs = () => {
	const dispatch = useDispatch<AppDispatch>()
	const {activeTab} = useSelector((state: RootState) => state.settings);
	return (
		<div className="tabs">
			{Object.values(TABS).map(tab => (
				<div key={tab} className={`tabs__item ${activeTab === tab ? "active" : ''}`}
						 onClick={() => dispatch(setActiveTab(tab))}>{tab}</div>
			))}
		</div>
	);
};

export default Tabs;