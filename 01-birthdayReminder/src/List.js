// import React from 'react';

// const List = ({peopl}) => {
//   return (
//   <>
//   {peopl.map((props)=>{
//     const {id, name, age, image}= props;
//     return <article key={id} className="person">
//     <img src={image} alt={name}/>
//     <div>
//       <h4>
//         {name}
//       </h4>
   
//       <p>{age} years</p>
//     </div>
//     </article>
//   })}
  
//   </>
  
//   );
// };

// export default List;

import React from 'react'
const List = ({people})=>{
 return(
  people.map((props)=>{
    const {id, name , age, image}=props;
    return(
      <article key={id}  className="person">
        <img src={image} alt={name} />
        <div>
        <h4>{name}</h4>
        <p>{age} Years</p>
        </div>
        

      </article>
    )
  })
 )
}
export default List