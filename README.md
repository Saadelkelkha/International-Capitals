# International-Capitals

### Project Description:
The International Capitals project is a simple and interactive web page that allows users to input the names of countries and their capitals, which are then added to a table. This project demonstrates the use of HTML, CSS, and JavaScript to dynamically manipulate the DOM and display user inputs in a structured format.

#### File: `index.html`

### Description:
This HTML file includes a form with input fields for the country and its capital, and a table to display the entered values. The JavaScript function `f1()` is used to capture user inputs, format them appropriately, and append them as new rows in the table.

#### Key Features:
- **Country and Capital Input**: Allows users to input the name of a country and its capital.
- **Table Display**: Dynamically adds the user-inputted country and capital to a table.
- **Data Formatting**: 
  - Country names are displayed in uppercase.
  - Capital names are formatted with the first letter capitalized and the rest in lowercase.

#### JavaScript Function:
- `f1()`: 
  - Retrieves the values from the input fields.
  - Creates a new table row (`<tr>`).
  - Formats the country and capital names.
  - Adds the formatted values to the new row.
  - Appends the new row to the existing table.

#### HTML Structure:
- **Title**: The title of the page is set to "Ceci est le titre de la page".
- **Heading**: A heading that reads "Capitales internationales".
- **Table**:
  - Contains headers for "Pays" and "Capitale".
- **Input Fields**:
  - Two input fields for entering the name of the country and its capital.
- **Button**:
  - A button to trigger the `f1()` function and add the inputs to the table.

### Usage:
1. **Enter Country Name**: Type the name of the country in the first input field.
2. **Enter Capital Name**: Type the name of the capital in the second input field.
3. **Click "Ajouter" Button**: Click the button to add the country and capital to the table.
   - The country name will be displayed in uppercase.
   - The capital name will be formatted with the first letter capitalized and the rest in lowercase.

### Example:
1. **Enter "France" in the Country Field**: 
   - Output: "FRANCE"
2. **Enter "paris" in the Capital Field**: 
   - Output: "Paris"
3. **Click "Ajouter"**:
   - The table will update to include a new row with "FRANCE" and "Paris".

This project is an excellent demonstration of basic form handling, DOM manipulation, and data formatting using HTML, CSS, and JavaScript.
