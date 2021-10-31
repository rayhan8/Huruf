import React,{useState} from 'react';
import horof from '../data';
import {FaChevronLeft,FaChevronRight} from 'react-icons/fa';

function Horof() {
 const [index,setIndex] = useState(0);
 const {image,name} = horof[index];  // show 1st horof & when index changes we see different horof

 const checkNumber=(number)=>{
   if(number>horof.length-1){ // number > last item
     return 0; // then return 1st item
   }
   if(number<0){ // number < 1st item
     return horof.length-1; // then return last item
   }
   return number;
 }


 const prevButton=()=>{
   setIndex((index)=>{  // i want to change the index by using prevButton
     let newIndex = index-1;
     return checkNumber(newIndex);
   })
 }


 const nextButton=()=>{
   setIndex((index)=>{  
     let newIndex = index+1;
     return checkNumber(newIndex);
   }) 
 }


 const randomButton=()=>{
   let randomNumber = Math.floor(Math.random() * horof.length);
   if (randomNumber === index){  // index is previous state value
     randomNumber = index+1; // value might be bigger from the last item value 
   }
   setIndex(checkNumber(randomNumber));
 }

 return (
  <article className="review">
   <div className="img-container">
    <img src={image} alt={name} className="person-img"/>
   </div>
   <h2 className="author">{name}</h2><br />

   <div className="button-container">

    <button className="prev-btn" onClick={prevButton}>
     <FaChevronLeft/>
    </button>

    <button className="next-btn" onClick={nextButton}>
     <FaChevronRight/>
    </button>

   </div>

   <button className="random-btn" onClick={randomButton}>
     random
    </button>

  </article>
 )
}

export default Horof;
