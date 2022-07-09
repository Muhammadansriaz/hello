import React from 'react'
import './Diagnosis.css'
import { Link } from "react-router-dom";

function Diagnosis() {
  return (
    <div id='diagnosis'>
    <ul>
      <li className='chk'>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1" />
          <label className="form-check-label" htmlFor="defaultCheck1">
            Default checkbox
          </label>
        </div>
      </li>
      <li className='chk'>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1" />
          <label className="form-check-label" htmlFor="defaultCheck1">
            Default checkbox
          </label>
        </div>
      </li>
      <li className='chk'>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1" />
          <label className="form-check-label" htmlFor="defaultCheck1">
            Default checkbox
          </label>
        </div>
      </li>
      <li className='chk'>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1" />
          <label className="form-check-label" htmlFor="defaultCheck1">
            Default checkbox
          </label>
        </div>
      </li>
      <li className='chk'>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1" />
          <label className="form-check-label" htmlFor="defaultCheck1">
            Default checkbox
          </label>
        </div>
      </li>
      <li className='chk'>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1" />
          <label className="form-check-label" htmlFor="defaultCheck1">
            Default checkbox
          </label>
        </div>
      </li>
      <li className='chk'>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1" />
          <label className="form-check-label" htmlFor="defaultCheck1">
            Default checkbox
          </label>
        </div>
      </li>
      <span id='rmrk'>Remarks :</span>
      <li className='chk'>
        <div className="input-group">
          <textarea className="form-control" aria-label="With textarea" />
        </div>
      </li>
    </ul>
  </div>
  )
}

export default Diagnosis