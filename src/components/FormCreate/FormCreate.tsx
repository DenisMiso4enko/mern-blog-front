import React, {useState} from 'react';
import FormWrapper from "../FormWrapper/FormWrapper";
import Input from "../../Input/Input";
import {httpRequest} from "../../utils/fetch";
import {BASE_URL} from "../../constance";
import axios from "axios";
import {useSelector} from "react-redux";
import {RootState} from "../../store";
import {useNavigate} from "react-router-dom";

const FormCreate = () => {
	const {name, email, loading, userId} = useSelector((state: RootState) => state.user)
	const navigate = useNavigate()

	const [title, setTitle] = useState('')
	const [imageName, setImageName] = useState(null)
	const [image, setImage] = useState(null)
	const [description, setDescription] = useState('')
	const [text, setText] = useState('')

	const onChangeInputFile = async (e: any) => {
		try {
			const formData = new FormData();
			const file = e.target.files[0];
			formData.append("image", file);
			const {data} = await axios.post(`${BASE_URL}/posts/uploadImage`, formData);
			setImage(data.url)
		} catch (e) {
			console.log(e)
			alert("Ошибка при загрузке файла");
		}
	};

	const handelCreatePost = async (event: any) => {
		event.preventDefault()
		try {
			const postData = {
				title,
				image,
				description,
				text,
				userId,
				userName: name
			}

			const response = await httpRequest(`${BASE_URL}/posts/create`, "POST", postData)
			const data = await response.json()
			if (response.ok) {
				navigate(`/post/${data._id}`)
			}

		} catch (e) {
			console.log(e)
		}
	}


	return (
		<FormWrapper variant="create">
			<form onSubmit={handelCreatePost} className="form-create">
				<Input onChange={(event) => setTitle(event.target.value)} value={title} placeholder="Enter title" title="Title"/>
				{/*@ts-ignore*/}
				<Input onChange={onChangeInputFile} value={imageName} placeholder="Upload image" type="file" title="Image"/>
				<Input onChange={(event) => setDescription(event.target.value)} value={description}
							 placeholder="Enter description" title="Description"/>
				<Input onChange={(event) => setText(event.target.value)} value={text} placeholder="Enter description" title="Text"/>

				<div className="form-create__actions">
					<div className="form-create__left">
						<button className="btn btn-secondary-2" type="button" disabled={true}>Delete</button>
					</div>
					<div className="form-create__right">
						<button className="btn" type="button" onClick={() => history.go(-1)}>Cancel</button>
						<button className="btn btn-primary" type="submit">Add post</button>
					</div>
				</div>
			</form>

		</FormWrapper>
	);
};

export default FormCreate;