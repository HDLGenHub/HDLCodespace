import { useEffect, useState } from 'react';
import './coding.css';
import { Editor } from '@monaco-editor/react';

const Coding=()=>{
    const [code, setCode] = useState('');


    useEffect(()=>{
        console.log(code);
    },[code]);

    const handleExecute=()=>{
        
    }

    return(
        <div>
            <div className='coding-container'>
                <Editor 
                    height="80vh" 
                    width="100%" 
                    defaultLanguage="verilog" 
                    defaultValue="// some comment"
                    theme='vs-dark'
                    value={code}
                    onChange={(e)=>setCode(e)}
                    />
            </div>
            <div className='running-container'>
                <div>
                    <button onClick={handleExecute}>Run</button>
                </div>
            </div>
        </div>
    );
}

export default Coding;