
let arr=JSON.parse(localStorage.getItem('message'));
if(arr!=null){
 render();
}else{
 arr=[];
}

 function add(){
     let content=document.querySelector('#input').value;
     let date=document.querySelector('#input2').value
     arr.push({
         contents:content,
         dates:date
     });
     render();
               
 }

 function render(){
     let htmlelement='';
      arr.forEach((value,index) => {
         let obj=value;
        htmlelement+=`<p>${obj.contents} </p><span>${obj.dates}</span><div class="a"><button class="delete"
         ">Delete</button></div>`
      });
     
         

     
     document.querySelector('.cont').innerHTML=htmlelement;
     document.querySelectorAll('.delete').forEach((deletebtn,index)=>{
          deletebtn.addEventListener('click',()=>{
            console.log(arr[0]);
            arr.splice(index,1);
            console.log(arr[0]);
            render();
          })
     });
     localStorage.setItem('message',JSON.stringify(arr));
 }
 document.querySelector('.add').addEventListener('click',()=>{
    add();
 });
        
