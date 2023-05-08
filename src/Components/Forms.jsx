import { useState } from 'react';

export default function Forms() {
    const [message, setMessage] = useState('')
    const [submittedMessage, setSubmittedMessage] = useState('');
    function handleChange(e) {
        setMessage(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault()
        setSubmittedMessage(message);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} value={message}/>
                <button type="submit">Submit</button>
            </form>
            {submittedMessage && <p>{submittedMessage}</p>}
        </div>

    )
}

/* In this corrected code, we have changed setMessage = e.target.value 
to setMessage(e.target.value), and we have moved onSubmit from the button element to the form element. 
This ensures that the handleSubmit function is called when the form is submitted, 
regardless of whether the user clicks the button or presses Enter in the input field.

How can put text in paragraph on submit instead of alert?

To display the message state in a paragraph instead of using alert, 
you can add a new state variable to your component to hold the submitted message, 
and update it in the handleSubmit function. 
Then you can render the submitted message in a paragraph element using the value of this state variable.

In this code, we added a new state variable submittedMessage and initialized it to an empty string. 
In the handleSubmit function, we call setSubmittedMessage with the current value of message, 
which updates the state with the submitted message.

In the JSX, we render the submitted message inside a paragraph element using string interpolation with the submittedMessage state variable. 
We also wrap the paragraph element with a condition to only render it if a message has been submitted, using the logical AND operator (&&). */