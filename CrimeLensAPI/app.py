from dotenv import load_dotenv

load_dotenv()  # take environment variables from .env.

import streamlit as st
import os
from PIL import Image
import google.generativeai as genai
import json

os.getenv("GOOGLE_API_KEY")
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

## Function to load OpenAI model and get responses
def get_gemini_response(input, image, prompt):
    model = genai.GenerativeModel('gemini-pro-vision')
    response = model.generate_content([input, image[0], prompt])
    return response.text

def input_image_setup(uploaded_file):
    # Check if a file has been uploaded
    if uploaded_file is not None:
        # Read the file into bytes
        bytes_data = uploaded_file.getvalue()

        image_parts = [
            {
                "mime_type": uploaded_file.type,  # Get the mime type of the uploaded file
                "data": bytes_data
            }
        ]
        return image_parts
    else:
        raise FileNotFoundError("No file uploaded")

##initialize our streamlit app

st.set_page_config(page_title="Gemini Image Demo")

st.header("Criminal Case Filing System OCR")

uploaded_file = st.file_uploader("Choose an image...", type=["pdf", "jpg", "jpeg", "png"])
image = ""
if uploaded_file is not None:
    image = Image.open(uploaded_file)
    st.image(image, caption="Uploaded Image.", use_column_width=True)

submit = st.button("Extract data")

## If ask button is clicked
if submit:
    input_prompt = """
                      Extract the data of FIR No, Date and Time of FIR, Occurrence of offence, Type of information, Place of occurrence, Complaint / Victim's name
                  """
    image_data = input_image_setup(uploaded_file)
    response = get_gemini_response(input_prompt, image_data, input_prompt)
    st.subheader("The Response is")

    # Extracting field data
    field_data = {
        "FIR No": "",
        "Date and Time of FIR": "",
        "Occurrence of offence": "",
        "Type of information": "",
        "Place of occurrence": "",
        "Complaint / Victim's name": ""
    }

    # Parse response to extract field data
    lines = response.split("\n")
    for line in lines:
        for field in field_data.keys():
            if field in line:
                value = line.split(":")[1].strip()
                field_data[field] = value

    # Display field data in a table
    st.table(field_data)

    # Save field data as JSON
    json_filename = "field_data.json"
    with open(json_filename, "w") as json_file:
        json.dump(field_data, json_file)

    # Add a download button for the JSON file
    st.download_button(
        label="Download JSON",
        data=json.dumps(field_data),
        file_name="field_data.json",
        mime="application/json"
    )
