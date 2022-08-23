import React, { useState } from 'react'
import './Diagnosis.css'



function Diagnosis(props) {

  const { values, setValues } = props;

  function handleChange(evt) {
    const value =
      evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
    setValues({
      ...values,
      [evt.target.name]: value
    });
  }
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value,});
  };
  
  console.log(values);
  return (

    <div id='diagnosis'>
      <ul>
        <li className='chk'>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" name="Intra-articular" checked={values.Intra_articular} onChange={handleChange} defaultValue id="defaultCheck1"></input>
            <label className="form-check-label" htmlFor="defaultCheck1">Intra-articular injections</label>
          </div>
        </li>
        <li className='chk'>
          <div className="form-check">
            <input className="form-check-input" type="checkbox"name="Peri-articular" checked={values.Peri_articular} onChange={handleChange}  />
            <label className="form-check-label" htmlFor="defaultCheck1">
              Peri-articular injections
            </label>
          </div>
        </li>
        <li className='chk'>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" name="Intraosseous" checked={values.Intraosseous} onChange={handleChange} defaultValue id="defaultCheck1" />
            <label className="form-check-label" htmlFor="defaultCheck1">
              Intraosseous injections
            </label>
          </div>
        </li>
        <li className='chk'>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" name="Intradetrusor" checked={values.Intradetrusor} onChange={handleChange} defaultValue id="defaultCheck1" />
            <label className="form-check-label" htmlFor="defaultCheck1">
              Intradetrusor injections
            </label>
          </div>
        </li>
        <li className='chk'>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" name="Intraperitoneal" checked={values.Intraperitoneal} onChange={handleChange} defaultValue id="defaultCheck1" />
            <label className="form-check-label" htmlFor="defaultCheck1">
              Intraperitoneal injections
            </label>
          </div>
        </li>
        <li className='chk'>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" name="Intracardiac" checked={values.Intracardiac} onChange={handleChange} defaultValue id="defaultCheck1" />
            <label className="form-check-label" htmlFor="defaultCheck1">
              Intracardiac injections
            </label>
          </div>
      </li>
        <span id='rmrk'>Remarks :</span>
        <li className='chk'>
          <div className="input-group">
            <textarea className="form-control" onChange={handleInputChange} name = 'remarks'  aria-label="With textarea" />
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Diagnosis