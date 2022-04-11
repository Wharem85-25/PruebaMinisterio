import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import FormPost from '../components/FormPost'
import axios from 'axios';
import '../assets/styles/ButtonPost.css'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const button = {
	color: 'white',
	fontWeight: 'bold',
	fontSize: '16px',
}

const API = process.env.APIDEP;

const ButtonPost = () => {
	const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
	const [dep, setDep] = useState([]);

	useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios({
          url: API,
        });
        setDep(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [setDep]);

	return (
		<div className="container">
			<div className="container-button">
				<Button sx={button} className="button" onClick={handleOpen}>Crear</Button>
				<Modal
					open={open}
					onClose={handleClose}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
				>
					<Box sx={style}>
						<FormPost dep={dep} />
					</Box>
				</Modal>
			</div>
		</div>
	);
};

export default ButtonPost;
