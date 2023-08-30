import React from 'react';
import { useNavigate } from 'react-router-dom';




// Modal Start
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};
// Modal End

const FoodItem = ({ image, title, description, price, type, restaurant, ingredients, rating }) => {
    const history = useNavigate()

    const handleRoute = () => {
        history.push(`/foods/${title}`);
    }



    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div className="#F4ECE1 #FCFBF7 border border-gray-100 transition transform duration-200  hover:-translate-y-2 p-4 rounded-lg relative">
            <span className="bg-red-100  rounded-full text-primary text-sm poppins px-4 py-1 inline-block mb-4 ">{type}</span>
            <div onClick={handleOpen}>

                <img className="w-64 mx-auto transform transition duration-300 hover:scale-105" src={image} alt="" />
            </div>
            <div className="flex flex-col items-center my-3 space-y-2">
                <h1 className="text-gray-900 poppins text-lg">{title}</h1>
                <p className="text-gray-500 poppins text-sm text-center">{description.slice(0, 60)}</p>
                <h2 className="text-gray-900 poppins text-2xl font-bold">${price}</h2>
                <button className="bg-primary text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105" onClick={handleRoute}>Add To Cart</button>
            </div>




            <section>


                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="parent-modal-title"
                    aria-describedby="parent-modal-description"
                >
                    <Box sx={{ ...style, width: 400, border: 'none', borderRadius: '20px', }}>
                        <img className="w-64 mx-auto transform transition duration-300 hover:scale-105" src={image} alt="" />
                        <h2 id="parent-modal-title">Restaurant: {restaurant}</h2>
                        <p id="parent-modal-description">
                            Rating: {rating}
                        </p>

                        <div>
                            <p>Ingredients</p>
                            <li className='text-thin'>{ingredients[1]}</li>
                            <li className='text-thin'>{ingredients[0]}</li>
                        </div>
                    </Box>
                </Modal>
            </section>
        </div>
    )
}

export default FoodItem
