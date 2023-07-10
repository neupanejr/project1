import React from "react";
import "../css/Form.css";
const Form = () => {
  return (
    <>
      <form>
        <div className="pad">
        <div className="front">
         <div className="employee"> <h1>Employee Registration Form</h1> </div>
         <h3> Full Name</h3>
          <label for="name"> First Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            minlength="4"
            maxlength="8"
            size="10"
          ></input>
          <label for="name"> Last Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            minlength="4"
            maxlength="8"
            size="10"
          ></input>{" "}
        

        <div>
          <h3> Date of Birth </h3>
          <label for="name"> Date </label>
          <input
            type="date"
            id="name"
            name="name"
            required
            minlength="4"
            maxlength="8"
            size="10"
          ></input>{" "}
        </div> </div>

        <div>
          <h3>Email</h3>
          <label for="email">example: 123@gmail.com:</label>
          <input
            type="email"
            id="email"
            pattern=".+@gmail\.com"
            size="30"
            required
          ></input>

          <h3> Phone Number</h3>
          <label for="name">Enter Valid Number</label>
          <input type="number" name="number" />
        </div>
        <div>
          <h3>Address</h3>
          <div>
            <label for="name"> Street Address</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              minlength="4"
              maxlength="20"
              size="10"
            ></input>{" "}
          </div>

          <label for="name"> Street Address Line 2</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            minlength="4"
            maxlength="20"
            size="10"
          ></input>

          <label for="name"> City </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            minlength="4"
            maxlength="20"
            size="10"
          ></input>

          <label for="name"> State/Province </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            minlength="4"
            maxlength="15"
            size="10"
          ></input>

          <h3> Postal/Zip code </h3>
          <label for="name">Enter Code</label>
          <input type="number" name="number" />
        </div>

        <h3>Applying Position</h3>
        <input
          type="text"
          id="name"
          name="name"
          required
          minlength="4"
          maxlength="20"
          size="15"
        ></input>

        <fieldset>
          <legend>Type of Work</legend>
          <label for="name"> Permanent</label>
          <input type="checkbox" />

          <label for="name"> Temporary</label>
          <input type="checkbox" />

          <label for="name">Both </label>
          <input type="checkbox" />

          <label for="name"> Other </label>
          <input type="checkbox" />
        </fieldset>

        <fieldset>
          {" "}
          <div>
            <label for="avatar">Please Upload resume</label>
            <input type="file" />
          </div>{" "}
        </fieldset>

         <div> <fieldset>
          <legend>Gender</legend>

          <label for="male"> Male </label>
          <input type="radio" id="male" name="gender" value="male" />

          <label for="female"> Female</label>
          <input type="radio" id="female" name="gender" value="female" />
          </fieldset>         
        </div>

         
        <div><fieldset>
        <input  class="Favourite Styled" type="button" value="Submit"></input> 
        
        </fieldset>  </div>
        
        </div>
      </form>
    </>
  );
};
export default Form;
