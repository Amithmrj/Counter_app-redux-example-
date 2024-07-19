import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increement, reset } from '../redux/counterSlice'

function Counter() {
    const [range,setRange]= useState("")
    //hook - useDispatch() is used to call fuctions in action file
    const dispattch = useDispatch()
    //useSelector() hook is used to acess state inside store
    const count = useSelector((state)=>state.counter.value)            //counter is the reducer name
    return (
        <div className='d-flex justify-content-center align-items-center w-100' style={{ height: '100vh' }}>

            <div className='border shadow rounded border-primary p-5'>
                <h3 className='text-center text-primary mt-4'>Counter Appilcation</h3>
                <h1 className='text-center mt-4'style={{fontSize:'100px'}}>{count}</h1>
                <div className='mt-5 d-flex'>
                    <button className='btn btn-success' onClick={()=>dispattch(increement(Number(range)))}>Increment</button>   {/*N */}
                    <button className='btn btn-danger ms-2' onClick={()=>dispattch(reset())}>Reset</button>
                    <button className='btn btn-warning ms-2' onClick={()=>dispattch(decrement(Number(range)))}>Decrement</button>
                </div>
                <input type="text" placeholder='range' className='form-control mt-4' onChange={(e)=>setRange(e.target.value)}/>
            </div>
        </div>
    )
}

export default Counter