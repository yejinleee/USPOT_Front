import React, { useState } from 'react';
import './category.css'

const Category=(props:any)=>{

    const [clicked,setClicked] = useState('');

    return (
        <>
            <br/>
            <label onClick={() => {
                props.setCate("음식점")
                setClicked('res');
                }
            }
            className={clicked ==='res'? 'clicked' : 'button'}>
                <img src='https://user-images.githubusercontent.com/63544044/133544637-611d0ec2-d9bc-4991-b641-60ec3702c984.png'
                    style={{width:'5%'}}/>
                <p style={{display:'inline'}}>음식점</p>
            </label>
            <label onClick={() => {
                props.setCate("카페")
                setClicked('caf');
                }
            }
            className = {clicked==='caf'? 'clicked' : 'button'}>
                <img src='https://user-images.githubusercontent.com/63544044/133544636-941c749f-882c-4660-9d2b-b837faa00e3b.png' 
                    style={{width:'5%'}}/>
                <p style={{display:'inline'}}>카페</p>
            </label>
            <label onClick={() => {
                props.setCate("관광명소")
                setClicked('tor');
                }
            }
            className = {clicked==='tor' ? 'clicked' : 'button'}>
                <img src='https://user-images.githubusercontent.com/63544044/133544629-453ae52c-e970-43d0-839a-5661191cd3b0.png' 
                    style={{width:'5%'}}/>
                <p style={{display:'inline'}}>관광명소</p>
            </label>
        </>
    );

}

export default Category;
