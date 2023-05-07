import React from 'react';
import Button from '@mui/material/Button';
import Input from "@mui/material/Input";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import CardActions from '@mui/material/CardActions';
import { FormControl, FormLabel, RadioGroup, TextField } from '@mui/material';
import "./Form.css"

function print_msg()
{
    console.log("ui")
}

export default function Form() {
    const align =  {
        textAlign: "center",
    }
    return (
	<div id="Try" className='form'>
        <h2 className='header'>Try it yourself !</h2>

        <Card
            sx={{
                minWidth: 275,
                maxWidth: 500,
                margin: "auto",
                marginTop: "50px",
                marginBottom: "50px",
                backgroundColor: "#f5f5f5",
                borderRadius: "10px",
            }}
        >

            <FormControl className="card-content" component="fieldset">
                <CardContent className="card-input">
                    {/* Name Input */}
                    <FormLabel component="legend">Nom:</FormLabel>
                    <Input style={{align}} className='input' id="name" name="name" placeholder="Name" />

                    <FormLabel component="legend">Âge</FormLabel>
                    <Input className='input' id='age' name="age" placeholder="Age"></Input>

                    {/* Firstname Input */}
                    <FormLabel component="legend">Prénom:</FormLabel>
                    <Input className='input' id="firstname" name="firstname" placeholder="First Name" />
                    
                    <RadioGroup style={{paddingLeft: Audio}} className='input'>
                        <FormControlLabel className='input' value="rêve" control={<Radio />} label="rêve" />
                        <FormControlLabel className='input' value="cauchemar" control={<Radio />} label="cauchemar" />
                            <FormLabel value="disabled"
                            disabled
                            control={<Radio />}
                            >
                            </FormLabel>
                    </RadioGroup>

                    {/* Description of the dream input */}
                    <FormLabel component="legend">Description du psyché:</FormLabel>
                    <TextField className="input" id="description" name="description" placeholder="Description" variant='outlined'></TextField>
                </CardContent>

                <CardContent className='card-output'>
                    {/* Output of the AI */}
                </CardContent>

                {/* Submit button */}
                <CardActions className='card-actions'>
                    <Button className='card-button' variant="contained" onClick={print_msg}>Submit</Button>
                </CardActions>
                    <Button className='card-button'variant="contained" href='#Home'>HOME</Button>
            </FormControl>
        </Card>
	</div>
    )
}
