window.addEventListener('load', ()=> {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector('#new-task-input');
    const list_el = document.querySelector('#tasks');

    var counter = 0;


    form.addEventListener('submit', (e) => {
        counter++;
        e.preventDefault();
        const task = counter+' . '+input.value;

       
        const task_el = document.createElement('div');
        task_el.classList.add('task');

        if(document.getElementById("new-task-input").value.length == 0)
                {
                      window.alert("EMPTY! KINDLY ADD A TASK")
                      return false;
                }

        const task_content_el = document.createElement('div');
        task_content_el.classList.add('content'); 
        task_el.appendChild(task_content_el);

        const task_input_el = document.createElement('input');
        task_input_el.classList.add('text');
        task_input_el.type='text';
        task_input_el.value=task;
        
        task_input_el.setAttribute("readonly", "readonly");

        task_content_el.appendChild(task_input_el);

        const task_action_el = document.createElement('div');
        task_action_el.classList.add('actions');




        // this.FetchAll = function(){
        //     var data ='';

        //     if(this.tasks.length>0){
        //         for(i=0;i<this.tasks.length;i++){
        //         data+='<tr>';
        //         data+="<td>"+(i+1)+". "+this.task[i]+"</td>";
        //         data+='</tr>'
        //     }
        // }
        // this.Count(this.tasks.length);
        // return this.Element.innerHTML =  data
        // };

        //  this.Count =function(data){


        // };

        // app.FetchAll();






        const task_edit_el = document.createElement('button');
        task_edit_el.classList.add('edit');
        task_edit_el.innerText='Edit';

        const task_del_el = document.createElement('button');
        task_del_el.classList.add('delete');
        task_del_el.innerText = 'Delete';

        task_action_el.appendChild(task_edit_el);
        task_action_el.appendChild(task_del_el);

        task_el.appendChild(task_action_el);

        input.value='';

        list_el.appendChild(task_el);

        task_edit_el.addEventListener('click', (e)=>{
            if(task_edit_el.innerText.toLowerCase()=="edit"){
                task_edit_el.innerText="Save";
                task_input_el.removeAttribute("readonly");
                task_input_el.focus();
            }else{
                task_edit_el.innerText="Edit";
                task_input_el.setAttribute("readonly","readonly");
            } 
        });

        task_del_el.addEventListener('click', (e)=>{
            list_el.removeChild(task_el);
        });

    });
});