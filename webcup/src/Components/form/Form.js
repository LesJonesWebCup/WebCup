import React from 'react';
import Button from '@mui/material/Button';
import Input from "@mui/material/Input";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import CardActions from '@mui/material/CardActions';
import { FormControl, FormLabel, TextField, RadioGroup } from '@mui/material';
import "./Form.css"

export default function Form() {
    const align =  {
        textAlign: "center",
    }
    return (
	<div id="Try" className='form'>
        <h2 className='header'>Essayez vous même</h2>

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

                                        {/* Firstname Input */}
                    <FormLabel component="legend">Prénom:</FormLabel>
                    <Input className='input' id="firstname" name="firstname" placeholder="First Name" />

                    <FormLabel component="legend">Âge</FormLabel>
                    <Input className='input' id='age' name="age" placeholder="Age"></Input>

                    {/* Description of the dream input */}
                    <FormLabel component="legend">Description du psyché:</FormLabel>
                    <TextField className="input" id="description" name="description" placeholder="Description" variant='outlined'></TextField>

                    {/* Is it a dream or a nightmare */}
                    <FormLabel component="legend" className="radioTitle">Rêve ou cauchemar ?</FormLabel>
                    <RadioGroup aria-labelledby="radio_group" name="radio_group" defautlValue="Dream" className="radio_group" row>
                        <FormLabel component="legend" className="radio-legend">Rêve</FormLabel>
                        <Radio clasName="radio-1" value="Dream" />
                        <FormLabel component="legend" className="radio-legend">Cauchemar</FormLabel>
                        <Radio clasName="radio-2" value="Nightmare" />
                    </RadioGroup>
                </CardContent>

                <CardContent className='card-output' id="card-output">
                    {/* Output of the AI */}
                    <FormLabel component="legend" id="output-p"></FormLabel>
                </CardContent>

                {/* Submit button */}
                <CardActions className='card-actions'>
                    <Button className='card-button' variant="contained" onClick={get_message}>Submit</Button>
                </CardActions>
                    <Button className='card-button'variant="contained" href='#Home'>HOME</Button>
            </FormControl>
        </Card>
	</div>
    )
}

const pending = {
  state: 'pending',
};

function promiseState(p) {
  const t = {};
  return Promise.race([p, t])
    .then(v => (v === t)? "pending" : "fulfilled", () => "rejected");
}

const { Configuration, OpenAIApi } = require('openai');
//require('dotenv').config();
//const api_key = "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";
const api_key = process.env.REACT_APP_API_KEY
async function get_completion(message) {
    const configuration = new Configuration({
    apiKey: api_key,
  });
    const openai = new OpenAIApi(configuration);
    const messages = [{"role": "user", "content": message}];
    try {
      const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: messages,
        max_tokens: 1000,
      });

      return completion.data.choices[0].message.content;


    } catch (error) {
      if (error.response) {
        console.log(error.response.status);
        console.log(error.response.data);
      } else {
        console.log(error.message);
      }
    }
};

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function get_message() {
    var name = document.getElementById("name");
    var age = document.getElementById("age");
    var surname = document.getElementById("firstname");
    var dream = document.getElementById("description");
    var radio_group = document.getElementsByName("radio_group");
    var love_story = " la future rencontre de l'amour de ma vie"
    var work_story = "des problèmes avec mes collègues de travail"
    var school_story = "des problèmes avec mes professeurs"
    var illness_story = "une maladie grave que je vais contracter."
    var transition = " ou "

    var radio_value = radio_group[0] ? radio_group[0] : radio_group[1];
    var message = "Tu es une intelligence artificielle qui a été créée dans le but de prédire le futur des humains qui t'utilisent en te basant sur les rêves qu'ils font. Je fais partie de ces humains. Je m'appelle " + surname.value + " " + name.value + " et j'ai " + age.value + " ans. Je veux que tu prédise mon futur selon mon rêve : \"" + dream.value + "\". Maintenant que tu connais mon nom, mon prenom, mon age et mon reve, je veux que tu prédise mon avenir et que tu donnes des détails sur ce qui s'y passe en choisissant au hasard parmi les thèmes suivants :"

    message += love_story;
    if (parseInt(age) < 18) {
        message += transition + school_story;
    }
    if (parseInt(age) > 18 && parseInt(age) < 64) {
        message += transition + work_story;
    }

    message += transition + illness_story;

    var resultat = get_completion(message);
    console.log(resultat);
    var text = "undefined";

    resultat.then(OnFulfilled => { document.getElementById("output-p").innerHTML = OnFulfilled; });
    return resultat;
};

