import { BASE_URL } from "../Common/Utility"
export default class ReportsService {

    static getReports(){
            return fetch(BASE_URL + `/api/patients/reports/all`,{
                'method': 'GET',
                headers : {
                    'Content-Type' : 'application/json',
                },
                body : JSON.stringify()
                })
                .then( resp => resp.json())
        }
}