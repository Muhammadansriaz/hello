import React ,{useState} from 'react'
import Diagnosis from './Diagnosis'
import PastHistory from './PastHistory'
import Medication from './Medication'


const initialValues = {
  reg: "",
  uname: "",
  fname: "",
  dob: "",
  remarks:"",
  Intra_articular: false,
  Peri_articular: false,
  Intraosseous:false,
  Intradetrusor:false,
  Intraperitoneal:false,
  Intracardiac:false

};
const FormExample = () => {

  const [values, setValues] = useState(initialValues);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value,});
  };

  const submit = ()=>{
    alert('form submitted');
  }
  return (
    <div>
      <div id='main'>
        <div id='head'>Medicine Form</div>
        <div id='basic'>
          <form onSubmit={submit} className="row ">
            <div className="col-md-6">
              <label htmlFor="validationDefault01" className="form-label">Registration No.</label>
              <input type="text" onChange={handleInputChange} name = 'reg' className="form-control" placeholder='Registration No' id="validationDefault01" required />
            </div>
            <div className="col-md-6">
              <label htmlFor="validationDefault02" className="form-label">User name</label>
              <input type="text" onChange={handleInputChange} name='uname' className="form-control" placeholder='Username' id="validationDefault02" required />
            </div>
            <div className="col-md-6">
              <label htmlFor="validationDefaultUsername" className="form-label">Father name</label>
              <div className="input-group">
                <input type="text" onChange={handleInputChange} name = 'fname' placeholder='Father name' className="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required />
              </div>
            </div>
            <div className="col-md-6">
              <label htmlFor="validationDefault03"  className="form-label">Date of Birth</label>
              <input type="date" onChange={handleInputChange} name = 'dob' className="form-control" id="validationDefault03" required />
            </div>


            <div className="col-12">

            </div>
            <div id='tab'>
              <div>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
              
                  <li className="nav-item" role="presentation">
                  <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Diagnosis</button>
         
                  </li>
                  <li className="nav-item" role="presentation">
                   <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Past History</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Medication</button>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" ><Diagnosis values = {values} setValues = {setValues}></Diagnosis></div>
                  
                  <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" ><PastHistory></PastHistory></div>
                  <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" ><Medication></Medication></div>
                </div>
              </div>
            </div>
           
           
            <div className="col-12">
              <button className="btn btn-primary" type="submit">Submit form</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default FormExample