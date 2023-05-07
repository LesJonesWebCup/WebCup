#!/usr/bin/env -S python3
import openai
import dotenv
import os
from django.shortcuts import render
from django import forms


dotenv.load_dotenv(dotenv_path=".env")
openai.api_key = os.getenv("OPENAI_API_KEY")

def send_form():
    new = forms.Form()
    new.name = forms.CharField(label="name", max_length=100)
    new.surname = forms.CharField(label="surname", max_length=100)
    new.age = forms.IntegerField(label="age")
    new.dream = forms.CharField(label="dream", max_length=1000)
    new.is_dream = forms.BooleanField(label="is_dream")



def receive_form(request):
    if request.method == "POST":
        # get the data of the form
        name = request.POST.get("name")
        surname = request.POST.get("surname")
        age = request.POST.get("age")
        dream = request.POST.get("dream")
        is_dream = request.POST.get("is_dream")

        dream = "j'ai reve que ma mere me pissait dessus"
        love_story = " la future rencontre de l'amour de ma vie"
        work_story = "des problèmes avec mes collègues de travail"
        school_story = "des problèmes avec mes professeurs"
        illness_story = "une maladie grave que je vais contracter."
        transition = " ou "

        full_message = f"Tu es une intelligence artificielle qui a été créée dans le but de prédire le futur des humains qui t'utilisent en te basant sur les rêves qu'ils font. Je fais partie de ces humains. Je m'appelle {surname} {name.upper()} et j'ai {str(age)} ans. Je veux que tu prédise mon futur selon mon rêve : \"{dream}\". Maintenant que tu connais mon nom, mon prenom, mon age et mon reve, je veux que tu prédise mon avenir et que tu donnes des détails sur ce qui s'y passe en choisissant au hasard parmi les thèmes suivants :"

        if 1:
            full_message += love_story

        if age > 20 and age < 64 and full_message[-1] != ":":
           full_message += transition + work_story
        if age > 20 and age < 64 and full_message[-1] == ":":
           full_message += work_story

        if age <= 20 and full_message[-1] != ":":
            full_message += transition + school_story
        if age <= 20 and full_message[-1] == ":":
            full_message += school_story

        if 1:
            full_message += transition + illness_story

        # send the message to the AI
        completion = openai.Completion.create(
            model="gpt-3.5-turbo",
            messages=[{"role": "user", "content": full_message}],
            max_tokens=1000
        )

        # return the answer to the html form
        return render(request, "index.html", {"answer": completion.choices[0].message["content"]})
    else:
        return render(request, "index.html", {"answer": "no answer"})
