import React from 'react';
import {Field, reduxForm} from 'redux-form';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import Field from 'redux-form';
// import reduxForm from 'redux-form';


const required = value => value ? undefined : 'Required'

const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined

const maxLength15 = maxLength(15)

const maxLength10 = maxLength(10)


const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined

const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined

const minValue18 = minValue(18)

const minValue10 = minValue(10)

const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined

const tooOld = value =>
  value && value > 65 ? 'You might be too old for this' : undefined

const aol = value =>
  value && /.+@aol\.com/.test(value) ?
  'Really? You still use AOL for your email?' : undefined


  const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} className="form-control" placeholder={label} type={type}/>
        {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
      </div>
    </div>
  )



const SimpleForm = props => {
    const {handleSubmit, pristine, submitting, reset} = props;
    return(
        <div className="jumbotron container">
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>First Name</label>
                <div>
                         <Field 
                        className="form-control"
                        type="text"
                           name="firstname"
                           component={renderField}
                           placeholder="First Name"
                           validate={[required,maxLength15]} />
                </div>
            </div>

            <div className="form-group">
                <label>Last Name</label>
                <div>
                    <Field type="text"
                           name="lastname"
                           component={renderField}
                           placeholder="Last Name"
                           className="form-control"
                           validate={[required,maxLength]} />
                </div>
            </div>

            <div className="form-group">
                <label>Email</label>
                <div>
                    <Field type="email"
                           name="email"
                           component={renderField}
                           placeholder="Email Address e.g. abc@email.com"
                           className="form-control" 
                           validate={[required,email]} />
                </div>
            </div>

            <div className="form-group">
                <label>Phone</label>
                <div>
                    <Field type="text"
                           name="phone"
                           component={renderField}
                           placeholder="+91 9837******"
                           className="form-control"
                           validate={[required,maxLength10,number]} />
                </div>
            </div>

            <div className="form-group">
                <label>Technology</label>
                <div>
                    <Field className="form-control" name="Select" validate={[required]} component="select">
                     <option />
                        <option disabled>Select </option>
                        <option value="Microsoft">Microsoft</option>
                        <option value="MEAN">MEAN</option>
                        <option value="React">React</option>
                    </Field>
                </div>
            </div>

            <div className="form-group">
                <label style={{marginLeft:'4px'}} htmlFor="Trainee">Trainee</label>
                <div>
                    <Field className="form-control" name="Trainee"
                            id="Trainee"
                            component="input"
                            type="checkbox"
                            style={{marginLeft:'-500px',marginTop:'-30px'}} />
                </div>
            </div>

            <div className="form-group">
                <button className="btn btn-success" type="submit" disabled={submitting}>Submit</button>
                <button className="btn btn-reset" type="button" disabled={pristine || submitting} onClick={reset}>Reset</button>
            </div>


        </form>
        </div>
    )
}

export default reduxForm({
    form: 'simple', // a unique identifier for this form
  })(SimpleForm);
  