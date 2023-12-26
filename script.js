const form = document.getElementById('form');
const list = document.getElementById('data');

form.addEventListener('submit', store);


window.addEventListener('DOMContentLoaded' , () => {

  axios.get('http://localhost:5000/user/add-user')
  .then((res) => {
    const data = res.data;

    data.forEach(ele => {
      showData(ele);
    });
    
  })
  
});

function store(e){
    e.preventDefault();
    const username = e.target.username.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;

    const obj = {
        username,
        email,
        phone
    } 
    
  axios.post('http://localhost:5000/user/add-user', obj)
  .then(res=>{
    console.log(res.data.newUser);
  showData(res.data.newUser);
  })
  .catch(err =>{
    console.error(err);
})
    
}


showData = (res) => {
    var li = document.createElement('li');
    var details = res.username + ', '+res.email+', '+res.phone;
    li.appendChild(document.createTextNode(details));
    list.appendChild(li);

    var editBtn = document.createElement('button');
    editBtn.id = `${res.id}`;
    editBtn.appendChild(document.createTextNode("Edit"));
    li.appendChild(editBtn);

    var deleteBtn = document.createElement('button');
    deleteBtn.id = `${res.id}`;
    deleteBtn.appendChild(document.createTextNode("Delete"));
    li.appendChild(deleteBtn);


    editBtn.addEventListener('click' , (e) => {
      console.log(e.target.id);
      const userId = e.target.id;

      list.removeChild(li);

      axios.get('http://localhost:5000/user/edit-user/'+userId)
      .then((res) => {
        const editUser = res.data.editUser;
  
        document.getElementById('user').value = editUser['username'];
        document.getElementById('email').value = editUser['email'];
        document.getElementById('phone').value = editUser['phone'];


      })
    })


    deleteBtn.addEventListener('click' , (e) => {
      const userId = e.target.id;

      list.removeChild(li);

      axios.get('http://localhost:5000/user/delete-user/'+userId)
      .then(() => {
         console.log("appointment Deleted!!");
      })
      .catch(err => {
        console.log(err);
      })
    })
    
}


