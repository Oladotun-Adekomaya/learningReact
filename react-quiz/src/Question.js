function Question({ question }) {
  console.log(question);

  return (
    <div>
      <h4>{question.question}</h4>
    </div>
  );
}

export default Question;
