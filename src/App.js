import React from 'react';
import './App.css';
import Card from './components/Cards';
import Sdata from './components/Sdata';
import Netflix from './components/Netflix';
import Amazon from './components/Amazon';


const favSeries='Amazon';
// const FavS=()=>{

//   if (favSeries=='Amazon') {
//     return <Netflix/>;  
// } else {
//   return <Amazon/>;
// }
// }

function App() {
  return(

     <>
    <h1 className="heading_style">List of Top 5 Netflix Series in 2023</h1>
    {/* {Sdata.map(ncard)} */}

      {/* <FavS/> */}

      {/* {(favSeries=='Netflix')?<Netflix/>:<Amazon/>} */}





    {Sdata.map((val,index)=>{
   console.log(index);
      return (
        <Card
          key={val.id}
          imgsrc={val.imgscr}
          title={val.title}
          sname={val.sname}
          link={val.links}
        />
      );
    })};

    {/* <Card imgsrc={Sdata[1].imgscr} title={Sdata[1].title} sname={Sdata[1].sname} link={Sdata[1].links}/>
    <Card imgsrc={Sdata[2].imgscr} title={Sdata[2].title} sname={Sdata[2].sname} link={Sdata[2].links}/>
    <Card imgsrc={Sdata[3].imgscr} title={Sdata[3].title} sname={Sdata[3].sname} link={Sdata[3].links}/>
    <Card imgsrc={Sdata[4].imgscr} title={Sdata[4].title} sname={Sdata[4].sname} link={Sdata[4].links}/>
  <Card imgsrc={Sdata[5].imgscr} title={Sdata[5].title} sname={Sdata[5].sname} link={Sdata[5].links}/> */}
  </>
    );
}

export default App;
