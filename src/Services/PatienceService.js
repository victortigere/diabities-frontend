import { BASE_URL } from "../Common/Utility"
export default class PatientService {

    static addPatient(data){
            return fetch(BASE_URL + `/api/patients/add`,{
                'method': 'POST',
                headers : {
                    'Content-Type' : 'application/json',
                },
                body : JSON.stringify(data)
                })
                .then( resp => resp.json())
        }
      
    static getPatients() {
        return  fetch(BASE_URL + `/api/patients/all`,{
            'method': 'GET',
            headers : {
                'Content-Type' : 'application/json'
            }
          })
            .then( resp => resp.json())
    }
 
    static getPatientRecord(id) {
        return  fetch(BASE_URL + `/api/patients/record/${id}`,{
            'method': 'GET',
            headers : {
                'Content-Type' : 'application/json',
            }
          })
            .then( resp => resp.json())
    }
}