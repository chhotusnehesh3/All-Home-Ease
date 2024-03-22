import {useState,useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios  from 'axios';
import config from '../config';
//config.serverURL+
const UsrList =()=>{

  const [MyUser, setMyUser] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    // load all the services created by user
    userlist()
  }, [])
  
  //get all services
  const userlist=()=>{
    //create axios api to send data to server
    const url = config.serverURL+`/user/showallUsers`;

    axios.get(url).
    then((response)=>{
      const res = response.data
      console.log("result",res)
      setMyUser(res)
    })
    .catch(error => {
      //toast.error("Empty");
       console.log(error);
     });

   
  }

  //delete any services
  // const deleteemployee=(id)=>{
  //   const url = config.serverURL+`/admin/employee/${id}`;

  //   axios.delete(url,id).
  //   then((response)=>{
  //     console.log(response)
  //     userlist();
  //   })
  // }
  // //edit any services
  // const editemployee=()=>{
    
  // }
  return(
    <div className='container'>
      <Link className="nav-link active" aria-current="page" to="/admin">
      Admin Home
    </Link>
    <h1 style = {{textAlign: 'center', color:'navy', marginTop:20}} >User List</h1>
    <table className='table table-striped' style={{marginTop:50}}>
            <thead>
              <tr>
                <th>Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone Number</th>

              </tr>
            </thead>
            <tbody>
              {MyUser.map((users) => {
                return (
                  <tr>
                    <td>{users.id}</td>
                    <td>{users.firstName}</td>
                    <td>{users.lastName}</td>
                    <td>{users.email}</td>
                    <td>{users.phone}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
    </div>
  )
}

const styles = {
  h3: {
    textAlign: 'center',
    margin: 20,
  },
  button: {
    marginRight: 10,
  },
}
export default UsrList

