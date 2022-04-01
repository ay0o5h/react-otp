# otp-react-input

one-time password input component for the web built with React.

![see here](https://i.ibb.co/sJZjbmq/Screenshot-2022-03-31-at-20-36-17-React-App.png)

#### To install the latest stable version:

```
npm install --save otp-react-input
```
#### Basic usage:

```jsx
import React from 'react';
import React0tp from 'otp-react-input';

export default const App =()=> {
 const handleSend = (v) => {
        console.log("Entered OTP is ", v)
    }
     return (
          <React0tp
             title="otp"
             borderColor="#ccc"
             borderWidth="2px"
             borderRadius="5px"
             width="50px"
             height="50px"
             hasError={true}
             errorText="please enter all fields"
             fieldsNumber={4}
             handleSend={handleSend}
        />
     );
}
```
## API

<table>
  <tr>
    <th>Name<br/></th>
    <th>Type</th>
    <th>Required</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
    <tr>
    <td>title</td>
    <td>string</td>
    <td>false</td>
    <td>''</td>
    <td>title of card.</td>
  </tr>
   <tr>
    <td>fieldsNumber</td>
    <td>number</td>
    <td>true</td>
    <td>4</td>
    <td>Number of OTP inputs.</td>
  </tr>
   <tr>
    <td>handleSend</td>
    <td>function</td>
    <td>true</td>
    <td>console.log</td>
    <td>Returns OTP code typed in inputs.</td>
  </tr>
   <tr>
    <td>borderColor</td>
    <td>string</td>
    <td>false</td>
    <td>''</td>
    <td>change border color of inputs</td>
  </tr>
   <tr>
    <td>borderWidth</td>
    <td>string /px</td>
    <td>false</td>
    <td>2px</td>
    <td>change width  of inputs border</td>
  </tr>
   <tr>
    <td>borderRadius</td>
    <td>string /px</td>
    <td>false</td>
    <td>5px</td>
    <td>change Radius border of inputs </td>
  </tr>
  <tr>
    <td>width</td>
    <td>string /px</td>
    <td>false</td>
    <td>5px</td>
    <td>change width of inputs </td>
  </tr>
  <tr>
    <td>height</td>
    <td>string /px</td>
    <td>false</td>
    <td>5px</td>
    <td>change height of inputs </td>
  </tr>
  <tr>
    <td>hasError</td>
    <td>boolean</td>
    <td>false</td>
    <td>false</td>
    <td>Indicates there is an error in the inputs.</td>
  </tr>
   <tr>
    <td>errorText</td>
    <td>style</td>
    <td>false</td>
    <td>''</td>
    <td> error message that show when the error occurred.</td>
  </tr>
  </table>