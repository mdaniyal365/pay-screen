import React from 'react'
// import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { BsArrowLeft } from 'react-icons/bs';
import {IoIosArrowDown} from 'react-icons/io';
import logo from './paytm-icon.png';
import logoBank from'./IBN.png';
import bluetick from'./green.gif';

function Pay() {
  return (
    <div className='payscreen'>
        <div className="header flex justify-between p-4">
            <div className="arrow  text-3xl  ">
            <BsArrowLeft/>
            
            </div>
        <div className="paylogo max-w-[25%] ml-4 ">
        <img src={logo} alt="Logo" />
        </div>
        <div className="help  pt-1 text-[#53c2f0] text-sm font-semibold" >
            Help
        </div>

        </div>
     <div className="payName p-5 -ml-0.5 ">
        <div className='w-80 h-72  bg-[#def6ff] rounded-xl'>
            <div className="p-5">
          <div className="payeNameWithBankLogo flex ml-5">
          <img className='w-10 p-1 ' src={logoBank} alt="Logo" />
          <div className="payName ml-3.5">
            <h1 className='font-semibold text-xl'>
                Mohammad Daniyal
            </h1>
            <div className='flex ml-0.5'>
                <h1 className='text-sm font-semibold'>
                    ICICI Bank
                </h1>
                <img className='w-4 ml-2 ' src={logoBank} alt="Logo" />
            </div>
          </div>
          </div>
          </div>
        <div className="amountSize mt-2 ml-4 justify-center flex">

            <h1 className='text-4xl font-bold'>
            ₹10
            </h1>
            <div>
            <img className='w-5 mt-2 ml-2' src={bluetick} alt="Logo" />
            </div>
        </div>
          <div className='DateTime text-xs  text-[#21b2e0] font-medium flex justify-center mt-7'>
            13  Apr,  04:52 AM 
         <div className='text-lg ml-2 '>
              <IoIosArrowDown/>
              </div>
          </div>
          <div className="buttonOfCheckBalance flex space-x-5 justify-center mt-5">
          <div className='bg-white w-fit p-2 text-xs rounded-full '>
          
          Check Balance
        
          </div>
          <div className='bg-white w-fit p-1.5 text-xs rounded-full '>
          
          Share
        
          </div>
          
          </div>
          <div className="bluecolor mt-10  w-80">
            
            <div className='litBule bg-[#00b5f2]  p-1  ' > </div>
            <div className='litBule bg-[#002c74] w-80 p-1.5 rounded-b-lg' > </div>
          </div>
        </div>
        
     </div>

      
            
    </div>
  )
}

export default Pay
