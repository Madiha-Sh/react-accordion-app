import React from 'react';
import questions from './components/data';
import Questions from './components/questions';

const App = () => {
  return (
    <main>
      <div className="container">
        <h3>questions and answers about login</h3>
        <section className="info">
          {questions.map(question => {
            return (
              <Questions key={question.id} {...question}/>
            )
          })}
        </section>
      </div>
    </main>
  );
}

export default App;