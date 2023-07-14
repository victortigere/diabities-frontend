import React, {useEffect, useState} from 'react'
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom'

import './Patients.css'
import Template from '../Template/Template'

import {NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import PatientService from '../../Services/PatienceService';

import { SUCCESS_CODE } from '../../Common/Utility';

export default function Patients() {

  const { register, formState: { errors }, handleSubmit, reset } = useForm();
  const [patients, setPatients] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getPatients()
  },[]);

  const getPatients = () => {
    PatientService.getPatients()
      .then((response) => {
      setPatients(response.data)
      })
        .catch((err) => {
    })
  }

  const savePatient = (data) => {
    PatientService.addPatient(data)
      .then((response) => {
          reset()
          SUCCESS_CODE === response.code ? NotificationManager.success(response.description, 'Success', 3000):
          NotificationManager.success(response.description, 'Info', 3000);
        getPatients()
      }).catch((err) => {
          reset()
          NotificationManager.error(err.description, 'Error', 3000);
        })
    
  }

  return (
    <Template>
        <div className="row">
          <div className="col-md-5 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Add Patient</h4>
                <form className="forms-sample" onSubmit={handleSubmit(savePatient)}>
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
          <div className="col-md-6 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Patients</h4>
                
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>FirstName</th>
                          <th>LastName</th>
                          <th>ID Number</th>
                          <th>Address</th>
                          <th>Age</th>
                        </tr>
                      </thead>
                      <tbody>
                        {patients !== [] ? patients.map(patient => 
                            <tr key={patient.id}>
                            <td>{patient.firstName}</td>
                            <td>{patient.lastName}</td>
                            <td>{patient.nationalID}</td>
                            <td>{patient.address}</td>
                            <td>{patient.age}</td>
                            <td>
                              <label className="badge badge-info"  onClick={() => navigate(`/patient/record/${patient.id}`)}> <i className="typcn typcn-eye menu-icon"></i> <span>View Record</span></label> 
                            </td>
                          </tr>
                          ): <h4>Failed to fetch members</h4>}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
          </div>
        </div>

    </Template>
  )
}
