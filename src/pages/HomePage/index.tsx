import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Modal } from '@material-ui/core';
import './styles.css';
import { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { useHistory } from "react-router-dom";


const StyledButton = withStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);

function HomePage() {

    let history = useHistory();

    const [open, setOpen] = useState(false);
    const [pinCode, setPinCode] = useState('');

    const handleOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
      const pCode = process.env.REACT_APP_API_PIN_CODE;

      if(pinCode === pCode){
        history.push('/dashboard');
      }
    },[pinCode]);

    const handleSetPinCode = (e: React.ChangeEvent<HTMLInputElement>) => {
      setPinCode(e.target.value)
    }

  return (
    <div className="home">
      <StyledButton onClick={handleOpen}>Acessar Painel de controle</StyledButton>
      <Modal
          className="modal-home"
          open={open}
          onClose={handleClose}
          BackdropComponent={Backdrop}
          BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className="box-pin">
            <h3>Digite o PIN para acessar o painel de controle</h3>
            <TextField 
              type="number" 
              onChange={(handleSetPinCode)} 
              value={pinCode} 
              id="outlined-basic" 
              label="Pin" 
              variant="outlined" 
              />
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default HomePage;