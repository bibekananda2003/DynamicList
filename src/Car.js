import React,{useState} from 'react'
import './Car.css'

function Car(){
    const [car,setCar]=useState(["Tata","Kia","Mahindra","Toyota","Suzuki"])
    const [bin,setBin]=useState([])
    function AddCar(){
        let flag;
        let val=document.getElementById('addCar_input').value.trim()
        if(val===''){
            alert('Please enter car name')
        }
        else {
            for(let x in car){
                if(car[x].toLowerCase()===val.toLowerCase()){
                    flag= true;
                }
            }
            if(flag){
                alert('Duplicate Entry')
            }
            else{
                setCar([...car,val])
            }
        }
        flag=false;
        document.getElementById('addCar_input').value=''
    }
        function RemoveCar(x) {
            let flag;
            let index;
          
            for (let x1 in car) {
              if ((typeof(car[x1]) === 'string') && car[x1].toLowerCase() === x.toLowerCase()) {
                index = x1;
              }
            }
          
            for (let y in bin) {
              if ((typeof(bin[y]) === 'string') && bin[y].toLowerCase() === x.toLowerCase()) {
                flag = true;
              }
            }
          
            if (flag) {
              car.splice(index, 1);
              setCar([...car]);
            } else {
              setBin([...bin, x]);
              car.splice(index, 1);
              setCar([...car]);
            }
          
            flag = false;
          }
    function restore(x){
        let flag;
        let index;
            for(let y in car)
                {
                if((typeof(car[y])==='string')&&car[y].toLowerCase()===x.toLowerCase())
                    {   
                        flag=true;
                    }
                }
                for (let x1 in bin) {
                    if ((typeof(bin[x1]) === 'string') && bin[x1].toLowerCase() === x.toLowerCase()) {
                      index = x1;
                    }
                  }
            if(flag){
                bin.splice(index,1)
                setBin([...bin])
            }
            else{
                bin.splice(index,1)
                setBin([...bin])
                setCar([...car,x])
            }
            flag=false;     
    }
    function deleteAll(){
            setBin([])

    }
    function restoreAll() {
        let tempArr=[];
        for (let x of bin) {
            let flag=false;
          for (let y of car) {
            if (y.toLowerCase() === x.toLowerCase()) {
                flag=true;
                break;
            }
          }
          if(!flag){
            tempArr.push(x)
          }
        }
        setCar([...car,...tempArr])
        setBin([]);
    }
      
    return(
        <>
        
        <div class='car'>
            <div className='carAdd_input'>
            <input type="text" title='Enter car name' id="addCar_input" placeholder='Add car name' pattern="[a-zA-Z]"/>
            <div><button onClick={AddCar} title='Add Car' id='addCar_button'>➕</button></div>
            
        </div>
        <div className='cars'>
            <div class='carAdd'>
            <div className='heading'><h2>Cars List</h2></div>
            {car.map((x,index)=><li key={index}>{x}<button title='Delete' onClick={()=>RemoveCar(x)}>❌</button></li>)}
            </div>
            
            <div class='bin'>
                <div className='bin_list'>
                <div className='heading'><h2>Bin List</h2></div>
            {bin.map((x,index)=><li key={index}>{x} <button title='Restore' onClick={()=>{restore(x)}}>🔃</button></li>)}
            </div>
            <div className='bin_btn'>
            {<button onClick={restoreAll} title='Restore All' id='restoreAll'>🔃</button>}
             {<button onClick={deleteAll} title='Delete All' id='deleteAll'>❌</button>}
             </div>
             </div>
            </div>
        </div>
        </>
    );
}
export default Car;

// 
// 