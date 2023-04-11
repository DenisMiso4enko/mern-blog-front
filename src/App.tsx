import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/HomePage/Home";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import Wrapper from "./components/Wrapper/Wrapper";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {AppDispatch} from "./store";
import {fetchGetMe} from "./store/UserSlice";
import LoginPage from "./pages/LoginPage/LoginPage";
import FormCreate from "./components/FormCreate/FormCreate";
import AddPostPage from "./pages/AddPostPage/AddPostPage";
import FullPostPage from "./pages/FullPostPage/FullPostPage";
import Menu from "./components/Menu/Menu";
import SearchResultsPage from "./pages/SearchResultsPage/SearchResultsPage";

function App() {
	const dispatch = useDispatch<AppDispatch>()

	useEffect(() => {
		dispatch(fetchGetMe())
	}, [])


	const [menu, setMenu] = useState(false)
	const toggleMenu = () => {
		setMenu(!menu)
	}

	return (
		<BrowserRouter>
			<Header toggleMenu={toggleMenu}/>
			{menu && <Menu setMenu={setMenu}/>}
			<Wrapper>
				<>
					<Routes>
						<Route path="/">
							<Route index element={<Home/>}/>
							<Route path='/sign-up' element={<SignUpPage/>}/>
							<Route path='/login' element={<LoginPage/>}/>
							<Route path='/create' element={<AddPostPage/>}/>
							<Route path='/post/:id' element={<FullPostPage/>}/>
							<Route path='/post/search/:query' element={<SearchResultsPage/>}/>
						</Route>
					</Routes>
				</>
			</Wrapper>
			<Footer/>


		</BrowserRouter>
	)
}

export default App
