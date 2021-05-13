import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Modal } from '@material-ui/core';
import './styles.css';
import { useState } from 'react';
import TextField from '@material-ui/core/TextField'

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

    const [open, setOpen] = useState(false);
    const [pin, setPin] = useState<number>();

    const handleOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };
  return (
    <div className="home">
      <StyledButton onClick={handleOpen}>Acessar Painel de controle</StyledButton>
      <Modal
          className="modal-home"
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
      >
          <div className="box-pin">
            <h3>Digite o PIN para acessar o painel de controle</h3>
            <TextField 
              type="number" 
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPin(parseInt(e.target.value))} 
              value={pin} 
              id="outlined-basic" 
              label="Pin" 
              variant="outlined" 
            />
          </div>
      </Modal>
    </div>
  );
}

export default HomePage;