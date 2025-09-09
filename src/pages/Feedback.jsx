import React from 'react'
import '../styles/Feedback.css'


export default function Feedback(){
return (
<div className="feedback-page">
<h2>Feedback (UI Demo)</h2>
<form className="feedback-form" onSubmit={(e)=>{e.preventDefault(); alert('This form is UI-only') }}>
<label>Name<input placeholder="Full name" /></label>
<label>Email<input type="email" placeholder="you@school.edu" /></label>
<label>User Type
<select>
  <option>Student</option>
  <option>Faculty</option>
   <option>Visitor</option>
</select>
</label>
<label>Event Attended<select><option>—</option></select></label>
<label>Rating
<div className="rating">
<label>
    <input type="radio" name="r"/>1
    </label>
<label>
    <input type="radio" name="r"/>2
    </label>
<label>
    <input type="radio" name="r"/>3
    </label>
<label>
    <input type="radio" name="r"/>4
    </label>
<label>
    <input type="radio" name="r"/>5
    </label>
</div>
</label>
<label>Comments<textarea rows="4"></textarea>
</label>
<button className="btn">Submit (UI-only)</button>
</form>
</div>
)
}