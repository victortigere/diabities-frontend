import React, {useEffect, useState} from 'react'
import {useParams } from 'react-router-dom'
import { useForm } from "react-hook-form"
import PatientService from '../../Services/PatienceService';
import './PatientRecord.css'
import { SUCCESS_CODE } from '../../Common/Utility';

import {NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

import Template from '../Template/Template';

export default function PatientRecord() {
  const patientId = useParams();
  const [record , setRecord] = useState([]);
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [showRecord, setShowRecord ] = useState(false);

  useEffect(() => {
    getRecord(patientId.id)
},[]);

const getRecord = (id) => {
  PatientService.getPatientRecord(id)
  .then( response => {
    if(SUCCESS_CODE === response.code){
      console.log(response.code)
      setRecord(response)
      setShowRecord(true)
      console.log(record)
    }
    
  })
  .catch((err) => {
  })
}


const editPatient = (data) => {
    // PatientService.addPatient(data)
    //   .then((response) => {
    //       reset()
    //       SUCCESS_CODE === response.code ? NotificationManager.success(response.description, 'Success', 3000):
    //       NotificationManager.success(response.description, 'Info', 3000);
    //   }).catch((err) => {
    //       reset()
    //       NotificationManager.error(err.description, 'Error', 3000);
    //     })
  }

  return (
      <Template>
      <div className="row">
          <div className="col-md-5 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Edit Patient</h4>
                <form className="forms-sample" onSubmit={handleSubmit(editPatient)}>
                  <div className="form-group">
                    <label name="name">First Name</label>
                    <input 
                        {...register("firstName", { required: true, maxLength: 20 })}
                        type="text"
                        className="form-control" 
                        id="name" 
                        placeholder="First Name" 
                    />
                    {errors.name?.type === 'required' && "First Name is required"}
                  </div>
                  <div className="form-group">
                    <label name="Surname">Last Name</label>
                    <input 
                        {...register("lastName", { required: true, maxLength: 20 })}
                        type="text" 
                        className="form-control" 
                        id="surname" 
                        placeholder="Surname" 
                    />
                    {errors.surname?.type === 'required' && "Surname is required"}
                  </div>
                  <div className="form-group">
                    <label name="nationalID">national ID</label>
                    <input 
                        {...register(
                          "nationalID", {
                              required: true, maxLength: 20, 
                              pattern : {
                                value : /^[0-9]{2}-[0-9]{6,7}[A-Z]{1}[0-9]{2}/ ,
                                message : "Invalid nationalID"
                              }
                        })}
                        type="text" 
                        className="form-control" 
                        id="nationalID" 
                        placeholder="ID nationalID" 
                    />
                    {errors.nationalID?.type === 'required' && "National ID is required"}
                    {errors.nationalID && errors.nationalID.message}
                  </div>
                  <div className="form-group">
                    <label name="address">Address</label>
                    <input 
                        {...register("address", { required: true, maxLength: 20 })}
                        type="text" 
                        className="form-control" 
                        id="address" 
                        placeholder="Address" 
                    />
                    {errors.address?.type === 'required' && "Address is required"}
                  </div>
                  <div className="form-group">
                    <label name="contact">Date Of Birth</label>
                    <input 
                        {...register(
                          "age", {
                          required: true, maxLength: 20, 
                        })
                        }
                        type="number" 
                        className="form-control" 
                        id="dob" 
                        placeholder="DOB" 
                    />
                    {errors.age?.type === 'required' && "DOB is required"}
                    {errors.age && errors.age.message}
                  </div>

                  <button type="submit" className="btn btn-primary mr-2">Submit</button>
                </form>
              </div>
            </div>
          </div>

           { showRecord ?
           <div className="col-md-7">
            <div className="card">
                <div className="card-body">
                    <div className="d-flex justify-content-between mb-4">
                      <div>Height</div>
                      <div className="text-muted">{record.data.height}</div>
                    </div>
                    <div className="d-flex justify-content-between mb-4">
                      <div>Weight</div>
                      <div className="text-muted">{record.data.weight}</div>
                    </div>
                    <div className="d-flex justify-content-between mb-4">
                      <div>systolic</div>
                      <div className="text-muted">{record.data.systolic}</div>
                    </div>
                    <div className="d-flex justify-content-between mb-4">
                      <div>diastolic</div>
                      <div className="text-muted">{record.data.diastolic}</div>
                    </div>
                    <div className="d-flex justify-content-between mb-4">
                      <div>sugarLevel</div>
                      <div className="text-muted">{record.data.sugarLevel}</div>
                    </div>
                    <div className="progress progress-md mt-4">
                  </div>
                </div>
            </div>
            
              <br/>
            </div> :
                <div className="col-6">
                <div className="card">
               <div className="card-body">
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="d-flex justify-content-between mb-4">
                        <div>No Record Saved</div>
                      </div>
                    </div>
                </div>
                    
                </div>
                </div>
          </div>
        }
        </div>


      </Template>
  );
}
