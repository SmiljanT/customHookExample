import useInput from "../hooks/use-input";

const SimpleInput = (props) => {

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    blurChangeHandler: nameBlurHandler, 
    reset: resetNameInput,
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    blurChangeHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(value => value.trim() !== '' && value.includes('@'));

  

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  


  const formSubmissionHandler = (event) => {
    event.preventDefault();
  

    if (!enteredNameIsValid) {
      return;
    }

    resetNameInput();
   
    resetEmailInput();
  };

  const nameInputClasses = nameInputHasError 
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control'
    

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError  && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className="error-text">Email must not be empty, and must include @</p>
        )}
      </div>
      <div className="form-actions">
      <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
