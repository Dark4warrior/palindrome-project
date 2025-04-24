import React from 'react';
import { isPalindrome } from './utils/isPalindrome';

function App() {
  const [text, setText] = React.useState('');
  const [result, setResult] = React.useState(null);

  const checkPalindrome = () => {
    setResult(isPalindrome(text));
  };

  return (
    <div className="App" style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Vérificateur de Palindrome</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Entrez un mot ou une phrase"
        style={{ padding: '8px', margin: '10px' }}
      />
      <button 
        onClick={checkPalindrome}
        style={{ padding: '8px 16px', margin: '10px' }}
      >
        Vérifier
      </button>
      {result !== null && (
        <div style={{ marginTop: '20px' }}>
          <h2>
            {result ? 'C\'est un palindrome !' : 'Ce n\'est pas un palindrome.'}
          </h2>
        </div>
      )}
    </div>
  );
}

export default App;