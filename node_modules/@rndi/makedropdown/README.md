# makeDropDown
A personal node package that turns a specific HTML element structure into an animated drop down menu.

## How to use ##
1. Make sure to import the makeDropDown function from the makedropdown package using import().
2. In your Javascript file, query the html document for the drop down menu element.
    1. Your drop down menu element must have this structure:
    ```html
    <div class="dropdown">
        <button class="dropbtn">Drop Button Title</button>
        <div class="dropdown-content">
            <ul>
                <li></li>
                <li></li>
                ...
            </ul>
        </div>
    </div>
    ```
3. Call makeDropDown() passing the queried drop down element in as its parameter. For example, assuming you've stored the drop down element in a variable called "dropDownElement", you would call the function like this:
```javascript
import { makeDropDown } from 'makedropdown';
const dropDownElement = document.querySelector('div.dropdown');
makeDropDown(dropDownElement);
```
