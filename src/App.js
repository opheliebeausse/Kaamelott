import './App.css';
import Header from "./components/Header"
import QuoteList from './components/QuoteList';

const quotes = [
  {
    "citation": "Ah tiens, demain midi y a des côtes de porc.",
    "infos": {
        "auteur": "Alexandre Astier",
        "acteur": "Vanessa Guedj",
        "personnage": "Angharad",
        "saison": "Pilote",
        "episode": "Le Duel"
    }
},
{
    "citation": "Je me sens la fureur de l'ours ! […]\r\nJe me sens le courage de l'oiseau ! […]\r\nJe suis sautillant comme le mulot ! […]\r\nJe frétille comme une p'tite truite ! […]\r\nJ'ai la vigueur d'un insecte !",
    "infos": {
        "auteur": "Alexandre Astier",
        "acteur": "Aurélien Portehaut",
        "personnage": "Gauvain",
        "saison": "Pilote",
        "episode": "Le Duel"
    }
},
{
    "citation": "Dehors le cureton! Dehors le cureton!",
    "infos": {
        "auteur": "Alexandre Astier",
        "acteur": "Émilie Dequenne",
        "personnage": "Edern",
        "saison": "Pilote",
        "episode": "Le Chevalier femme"
    }
}
]



function App() {
  console.log(quotes[2].infos.episode)
  return (
    <div className="App">
      <Header/>
      <QuoteList quotes={quotes}/>
    </div>
  );
}

export default App;
