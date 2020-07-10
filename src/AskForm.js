import React from 'react';

// Form untuk memberi pertanyaan
class AskForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        email: '',
        question: ''
      }
    }
  
    onChange = (e) => {
      const {name, value} = e.target;
      this.setState({[name]: value})
    }
  
    handleSubmit = (e) => {
      e.preventDefault()
      alert("Thank you for asking.")
      this.setState({
        name: '',
        email: '',
        question: ''
      })
    }
  
    render() {
      const {name, email, question} = this.state;
      return (
        <div className="form-app">
          <h1>Ask me a question</h1>
          <form className="ask-form" onSubmit={this.handleSubmit}>
            <label>
              Name:
              <br/>
              <input className="ask-input" type="text" name="name" value={name} onChange={this.onChange}/>
            </label>
            <br/>
            <label>
              Email:
              <br/>
              <input className="ask-input" type="text" name="email" value={email} onChange={this.onChange}/>
            </label>
            <br/>
            <label>
              Question:
              <br/>
              <textarea className="ask-input" name="question" value={question} onChange={this.onChange}/>
            </label>
            <br/>
            <button>Submit</button>
          </form>
        </div>
      );
    }
}

export default AskForm;