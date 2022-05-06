import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyles from '../styles/GlobalStyle';
import * as MobilePages from '../mobile/pages';
import * as PcPages from '../pc/pages';
import { isMobile } from 'react-device-detect';

// AWD
export default function App() {
	return (
		<BrowserRouter>
			<GlobalStyles />
			{isMobile ? <Mobile /> : <PC />}
		</BrowserRouter>
	);
}

// Mobile
const Mobile = () => {
	return (
		<Routes>
			<Route path="/" element={<MobilePages.Main />} />
		</Routes>
	);
};

// PC
const PC = () => {
	return (
		<Routes>
			<Route path="/" element={<PcPages.Main />} />
		</Routes>
	);
};
