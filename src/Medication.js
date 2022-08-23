import React, { useState } from 'react'
import './Medication.css'
import drugs from './Medicine'

const Medication = () => {
  const[search,set_search] = useState("")
  return (
    <div>
      <div>
        <div><input
        onChange={e=>set_search(e.target.value)}
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        </div>
        <div className="container text-center">
          <div className="row">
        {
          drugs.filter((drugs)=>drugs.includes(search)).map((index,value)=> {
            return(
              <div className="col-4 mt-5">{index}</div>
              )
          })
        }
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default Medication