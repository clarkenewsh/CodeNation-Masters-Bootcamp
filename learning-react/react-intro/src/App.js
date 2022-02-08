import './App.css';
import fate from './images/fate.jpg';
import outsideTheWire from './images/outsideTheWire.jpeg';
import starTrek from './images/starTrek.jpeg';
import queensGambit from './images/queensGambit.jpg';
import witcher from './images/witcher.png';
import hotel1 from './images/hotel-1.png';
import hotel2 from './images/hotel-2.png';
import hotel3 from './images/hotel-3.png';
import dog from './images/dog.png';
import article1 from './images/article-1.png';
import article2 from './images/article-2.png';
import article3 from './images/article-3.png';
import article4 from './images/article-4.png';



// const App = () => {

//   return (
//     <div className='main'>
//       <h1>I am a functional component/h1>
//         <Movies title="Matrix" release<d="1999" genre="Sci-fi/Action" />
//         <Movies title="LOTR" released="2001" />
//         <Movies title="Remember the Titans" />
//     </div>
//   ) 
// };


// const Movies = (props) => {

//   return (
//     <div>
//       <h3>{props.title}</h3>
//       <h4>this was released in {props.released}</h4>
//       <Genre genre={props.genre} />
//     </div>
//   )
// };

// const Genre = (props) => {
//   return (
//     <p>Genre: {props.genre}</p>
//   )
// }


const App = () => {

  const articles = [
    {
      id:1,
      title: 'Dont think the pandemic is over',
      body: 'Unlocking too quickly would lead to a substantial surge in infection, UK chief medical adviser says.',
      img: article1,
      timeStamp: '2hr',
      category: 'Health'
    },
    {
      id:2,
      title: 'Pay rise was set to be 2.1% - NHS chief.',
      body: 'NHS England boss backs ministers over pay dispute but does not rule out a one-ff bonus for workers',
      img: article2,
      timeStamp: '1hr',
      category: 'UK Politics'
    },
    {
      id:3,
      title: 'Charity criticises Morgans comments about Meghan',
      body: 'Mental health charity Mind says it is "disappointed" by comments Piers Morgan made on Monday.',
      img: article3,
      timeStamp: '2hr',
      category: 'Entertainment & Arts'
    },
    {
      id:4,
      title: 'Unilever drops word "normal" from beauty products',
      body: 'The owner of Dove and Vaseline will remove the word from about 200 products in a push for inclusively.',
      img: article4,
      timeStamp: '10m',
      category: 'Business'
    }
]


  return (
    <div className='main'>
      <div className='movies'>
        <Movie img={ fate } />
        <Movie img={ outsideTheWire } />
        <Movie img={ starTrek } />
        <Movie img={ queensGambit } />
        <Movie img={ witcher } />
      </div>
      <div className='hotels'>
        <Hotel text='Entire homes' img={ hotel1 } />
        <Hotel text='Unique stays' img={ hotel2 }/>
        <Hotel text='Cabins and cottages' img={ hotel3 }/>
        <Hotel text='Pets allowed' img={ dog }/>
      </div>
      <div className='articles'>
        <NewsArticleList articles={articles} />
      </div>
    </div>
   
  )
};

const Movie = (props) => {
  return (
    <div className='movie'>
      <img src={props.img} alt=''></img>
    </div>
  )
}

const Hotel = (props) => {
  return (
    <div className='hotel'>
      <img src={props.img} alt=''></img>
      <p>{props.text}</p>
    </div>
  )
};


const NewsArticleList = (props) => {

  return (
    <div className='articles'>
      {props.articles.map((article) => (
          <Article articles={props.articles} key={article.id} article={article} />
      ))}
    </div>
  )
};

const Article = (props) => {
  return (
    <div className='article'>
      <img src={props.article.img} alt=''></img>
      <h2>{props.article.title}</h2>
      <p>{props.article.body}</p>
      <span>{props.article.timeStamp}</span>
      <span>{props.article.category}</span>

    </div>
  )
};


export default App;