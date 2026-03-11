import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext';

const Appointments = () => {
  const { token } = useContext(AuthContext);
  const [aplist, setAplist] = useState([]);

  const fetchAppointments = async () => {
    try {
      const resApList = await axios.get(
        "http://localhost:8080/api/doctors/doctor/allAppointments",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }

      );
      // console.log(resApList.data);
      setAplist(resApList.data)
      // console.log("Datas : ",aplist)

    } catch (error) {

    }
  }
  useEffect(() => {
    fetchAppointments();
  })


  return (
    <div className=' w-full h-auto p-2 rounded bg-[#ffffff] ' >
      <table className=' w-full  ' >
        <thead className='border rounded ' >
          <tr>
            <th className=' border ' >S.No</th>
            <th className=' border ' >Ap.Id</th>
            <th className='border' >Time</th>
            <th className='border'>Reason</th>
            <th className='border'>Doctor Id</th>
            <th className='border'>Patient Id</th>
            <th className='border'>Appintment Date</th>
            <th className='border '>Status</th>
          </tr>
        </thead>
        <tbody>
          {
            aplist.map((ap,index)=>(
              <tr key={index} > 
                <td>{index+1}</td>
                <td>{ap.id}</td>
                <td>{ap.appointmentTime}</td>
                <td>{ap.reason}</td>
                <td>{ap.doctorId}</td>
                <td>{ap.patientId}</td>
                <td>{ap.appointmentDate}</td>
                <td>{ap.appointmentStatus}</td>
              </tr>
            ))
          }
          {/* <tr className=' border rounded ' >
            <td>1</td>
            <td>12</td>
            <td>Nothing</td>
            <td>22</td>
            <td>58</td>
            <td>25</td>
            <td>Check</td>
          </tr> */}
        </tbody>
      </table>
    </div>
  )
}

export default Appointments
// ---- Appointments Setup Successfull -----