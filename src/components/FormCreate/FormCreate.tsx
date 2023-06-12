import React, {useEffect, useState} from 'react';
import {httpRequest} from "../../utils/fetch";
import {BASE_URL} from "../../constance";
import axios from "axios";
import {useSelector} from "react-redux";
import {RootState} from "../../store";
import {useNavigate, useParams} from "react-router-dom";

const FormCreate = () => {
	const { _id: id } = useParams();

	const {name, email, loading, userId} = useSelector((state: RootState) => state.user);
	const navigate = useNavigate();

	const [title, setTitle] = useState('');
	const [imageName, setImageName] = useState(null);
	const [image, setImage] = useState(null);
	const [description, setDescription] = useState('');
	const [text, setText] = useState('');



	const onChangeInputFile = async (e: any) => {
		try {
			const formData = new FormData();
			const file = e.target.files[0];
			formData.append("image", file);
			const {data} = await axios.post(`${BASE_URL}/posts/uploadImage`, formData);
			setImage(data.url);
		} catch (e) {
			console.log(e);
			alert("Ошибка при загрузке файла");
		}
	};
	const handelCreatePost = async (event: any) => {
		event.preventDefault();
		try {
			const postData = {
				title,
				image,
				description,
				text,
				userId,
				userName: name
			};

			const response = await httpRequest(`${BASE_URL}/posts/create`, "POST", postData);
			const data = await response.json();
			if (response.ok) {
				navigate(`/post/${data._id}`);
			}

		} catch (e) {
			console.log(e);
		}
	};
	const handelDeletePost = async (event: any) => {
		event.preventDefault();
		try {
			const response = await httpRequest(`${BASE_URL}/posts/delete/${id}`, "DELETE");
			const data = await response.json();
			if (response.ok) {
				navigate(`/`);
			}
		} catch (e) {
			console.log(e);
		}
	};
	const handelUpdatePost = async (event: any) => {
		event.preventDefault();
		try {
			const postData = {
				title,
				image,
				description,
				text,
				userId,
				userName: name
			};

			const response = await httpRequest(`${BASE_URL}/posts/update/${id}`, "PATCH", postData);
			const data = await response.json();
			if (response.ok) {
				navigate(`/post/${id}`);
			}

		} catch (e) {
			console.log(e);
		}
	};
	const getPostInfo = async () => {
		try {
			const response = await httpRequest(`${BASE_URL}/posts/getOne/${id}`, "GET");
			const {text, title, description, image} = await response.json();
			setText(text);
			setImage(image);
			setTitle(title);
			setDescription(description);
		} catch (err) {
			console.log(err);
		}
	};


	useEffect(() => {
			if (id) {
				getPostInfo();
			}
	}, []);


	return (
		<div>form create</div>
	);
};

export default FormCreate;