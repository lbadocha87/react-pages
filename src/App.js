import logo from './logo.svg';
import './App.css';
import ChangeColor from './ChangeColor';
import { useEffect } from 'react';

function App() {


  useEffect(()=>{
        // utworzenie obiektu
        let httpReq = new XMLHttpRequest();
 
        // otwarcie połączenia - https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/open
        httpReq.open('GET', 'https://jsonplaceholder.typicode.com/users/1');
     
     
        // jeśli status połączenia został zmieniony -> httpReq.readyState
        // 0: połączenie nie nawiązane,
        // 1: połączenie nawiązane,
        // 2: żądanie odebrane,
        // 3: przetwarzanie,
        // 4: dane zwrócone i gotowe do użycia.
        // https://www.w3schools.com/xml/ajax_xmlhttprequest_response.asp
        httpReq.onreadystatechange = () => {
     
            // console.log(httpReq.readyState);
     
            // jeśli 4: dane zwrócone i gotowe do użycia
            if (httpReq.readyState === 4) {
     
                // Kody statusu połączenia HTTP - https://pl.wikipedia.org/wiki/Kod_odpowiedzi_HTTP
                if (httpReq.status === 200) {
     
                    let data = httpReq.responseText;
                    let dataJSON = JSON.parse(data);
                    // console.log(data);
                    // console.log(dataJSON);
                    console.log(dataJSON.name);
                    console.log(dataJSON.email);
     
                    // zwolnij obiekt, aby nie utrzymywać nie potrzebnego już połączenia z serwerem
                    httpReq = null;
                }
            }
     
        }
     
        httpReq.send();
  })
  return (
    <div className="App">
      <ChangeColor text='Nagłówek 1' />
      <ChangeColor text='Nagłówek 2'/>
      <ChangeColor text='aa'/>
    </div>
  );
}

export default App;
