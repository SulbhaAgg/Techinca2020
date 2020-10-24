import { useEffect, useState } from "react";
import Business from "./Business";

export default function AllBusiness (){
    const [allData, changeData] = useState([])

    useEffect(()=>{changeData([
            {
                name: 'business1',
                fundingGoal: 100,
                fundingGot: 50,
                img: 'https://picsum.photos/200',
                grossRev: [
                    {
                        x: '2015',
                        y: 200000
                    },
                    {
                        x: '2016',
                        y: 300000
                    },
                    {
                        x: '2018',
                        y: 400000
                    }
                ],
                grossExp: [
                    {
                        x: '2015',
                        y: 100000
                    },
                    {
                        x: '2016',
                        y: 200000
                    },
                    {
                        x: '2018',
                        y: 300000
                    }
                ]
            },

            {
                name: 'business2',
                fundingGoal: 100,
                fundingGot: 50,
                img: 'https://picsum.photos/200',
                grossRev: [
                    {
                        x: '2015',
                        y: 200000
                    },
                    {
                        x: '2016',
                        y: 300000
                    },
                    {
                        x: '2018',
                        y: 400000
                    }
                ],
                grossExp: [
                    {
                        x: '2015',
                        y: 100000
                    },
                    {
                        x: '2016',
                        y: 200000
                    },
                    {
                        x: '2018',
                        y: 300000
                    }
                ]
            }
        ])
    }, [])

    if (!allData){
        return(
            <div>Loading...</div>
        )
    }

    console.log(allData)
    return (
        <div>
          {allData.map((item) => (
            <Business img={item.img} name={item.name} fundingGoal={item.fundingGoal} fundingGot={item.fundingGot}></Business>
          ))}
        </div>
    )
}