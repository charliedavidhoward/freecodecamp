
// import API - using the API provided in FCC project
const API_QUOTES = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'

class App extends React.Component {
  state = {
    quotes: [],
    index: 0
  }
  
  componentDidMount() {
    fetch(API_QUOTES).then(res => res.json()).then(res => {
      this.setState({
        quotes: res.quotes
      }, this.getRandomIndex);
      
      
    })
  }
  
  getRandomIndex = () => {
    const { quotes } = this.state;
    
    if(quotes.length > 0) {
      const index = Math.floor(Math.random() * quotes.length);
      
      this.setState({
        index
      })
    }
  }
  
  render() {
    
    const { quotes, index } = this.state;
    
    const quote = quotes[index];
    
    const tweetURL = 'https://twitter.com/intent/tweet?text=${quote.quote} - ${quote.author}';
    
    return(
      <div className="d-flex justify-content-center vh-100 align-items-center">
        <div className="col-6 box p-5 rounded">
            {
               quote && (
                 <div className="mb-4">
                   <p>{quote.quote}</p>
                   <p className="d-block text-right">-- {quote.author}</p>
                   </div>
                 )
            }
             <div className="d-flex justify-content-between">
              <button className="btn btn-primary" onClick={this.getRandomIndex}>New Quote</button>
              <a href={tweetURL} target="_blank" className="btn btn-primary">Twitter</a>
               <a href="#"className="btn btn-primary">Tumblr</a>
             </div>
         </div>
       </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
