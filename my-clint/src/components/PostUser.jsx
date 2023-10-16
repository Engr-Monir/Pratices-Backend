

const PostUser = () => {

const handelClick =((e)=>{
    e.preventDefault( );

    const name= e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
console.log(name, email, password);



const myData={
    name,email,password
};

fetch( "http://localhost:5001/users",{
    method:"POST",
    headers:{
        "Content-Type" : "application/json",
        
    },
    body: JSON.stringify(myData),
})
.then((res=>res.json()))
.then (data=>{
    console.log(data);
})

})




    return (
        <div>
         <h1 className='text-4xl '> postUser : </h1>   
        
         <div className="hero-content ">
          
           <div className="card  border-2 border-blue-400">
             <form onSubmit={handelClick} className="card-body">
             <div className="form-control">
             <label className="label">
               <span className="label-text">Name</span>
             </label>
             <input type="text" name="name" placeholder="name" className="input input-bordered border-blue-950" required />
           </div>
               <div className="form-control">
                 <label className="label">
                   <span className="label-text">Email</span>
                 </label>
                 <input type="email" name="email" placeholder="email" className="input input-bordered border-blue-950" required />
               </div>
               <div className="form-control">
                 <label className="label">
                   <span className="label-text">Password</span>
                 </label>
                 <input type="password" name="password" placeholder="password" className="input input-bordered  border-blue-950" required />
                
               </div>
               <div className="form-control mt-6">
                 <button type='submit'  className="btn btn-primary">submit</button>
               </div>
             </form>
           </div>
         </div>
       </div>

        
    );
};

export default PostUser;