import React , {useState} from 'react'
import Header from '../../Header';
function Home() {
  const [formData, setFormData] = useState({language :  "Hindi", message : "" })
  const [error, setError] = useState("");
  const [showNotification, setShowNotification] = useState(false)
  const [translation, setTranlation] = useState('text copied')
  const handleInputChange =(e)=>{
    setFormData({ ...formData, [e.target.name] :  e.target.value})
    setError("")
  }
  const translate=()=>{ 

  }
  const handleOnSubmit =(e)=>{
    e.preventDefault();
    if(!formData.message){
      setError("please enter the message")
      return;
    }
    translate();
  }
  const handleCopy=()=>{
    navigator.clipboard.writeText(translation)
    .then(()=>displayNotification()

    )
    .catch((err)=>console.error('failed', error)
    )
  }
  const displayNotification = ()=>{
    setShowNotification(true);
    setTimeout(()=>{
setShowNotification(false);
    }, 3000);
  }
  return (
    <>
    <Header/>
    
    <div className='containers'>
      <h1> Translate </h1>

      <form onSubmit ={handleOnSubmit}>
        <div className='choices'>
          <input type='radio' id='hindi' name='language' 
          value='Hindi'
          defaultChecked={formData.language}
          onChange={handleInputChange}
          />
          <label htmlFor='hindi'> Hindi </label>

          <input type='radio' id='spanish' name='language'
          value='Spanidh'

          onChange={handleInputChange}
          />
          <label htmlFor='spanish'> spanish </label>

          <input type='radio' id='japanese' 
          value='Japanese'
          name='language'
          onChange={handleInputChange}
          />
          <label htmlFor='japanese'> japanese </label>
        </div>
        <textarea
          name='message'
          placeholder='Type your message here'
          onChange={handleInputChange}

        >
        </textarea>
        

        <button type='submit'>
          Translate
        </button>
       { error && <div className='error'>
         {error}
        </div>}
      </form>
      <div className='translation'>
        <div className='copy-btn' onClick={handleCopy}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
          </svg>
        </div>


        Translated Text
      </div>
      <div className={`notification ${showNotification? "active" : ""}`}>
        copie to clipboard !
      </div>















    </div>
    </>
  );
}
export default Home; 