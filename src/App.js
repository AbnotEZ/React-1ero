import './App.css';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import Footer from './components/Footer/Footer';

function App() {
  return (
   <>
    <Header 
    title='Galería de Imágenes con React'
    image='https://pngimg.com/uploads/pokeball/pokeball_PNG29.png'
    image1='https://pngimg.com/uploads/pokemon/pokemon_PNG146.png'
    image2='https://th.bing.com/th/id/R.b740b0ee1be6bec176dbdc869460d590?rik=2GTAUZxKzqmlFQ&riu=http%3a%2f%2fpocketownthegame.epizy.com%2fimages%2ffacebook%2fPokedex.png&ehk=9PBL%2fBqJCYqKmfj6YTKZTjgIimM%2f1ePXIyoNm%2bxh4Lc%3d&risl=&pid=ImgRaw&r=0'/>
    <Card class="Gyarados" 
    image='https://52f4e29a8321344e30ae-0f55c9129972ac85d6b1f4e703468e6b.ssl.cf2.rackcdn.com/products/pictures/1067875.jpg'
    title='Gyarados'
    detail='Gyarados es un Pokémon de tipo agua/volador introducido en la primera generación. Es la evolución de Magikarp, la contraparte de Milotic y, a partir de la sexta generación, puede megaevolucionar en Mega-Gyarados.'
    />
    <Card class="Scyther" 
    image='https://52f4e29a8321344e30ae-0f55c9129972ac85d6b1f4e703468e6b.ssl.cf2.rackcdn.com/products/pictures/149441.jpg'
    title='Scyther'
    detail='A este Pokémon se le conoce como el Pokémon mantis guerrera. Armado con unas potentes y afiladas guadañas y unas alas poco desarrolladas este Pokémon es extremadamente veloz, se dice que sus cuchillas se vuelven más afiladas al cortar objetos duros.'
    />
    <Card class="Decidueye" 
    image='https://52f4e29a8321344e30ae-0f55c9129972ac85d6b1f4e703468e6b.ssl.cf2.rackcdn.com/products/pictures/1109964.jpg'
    title='Decidueye'
    detail='Este Pokémon es capaz de desplazarse sin ser detectado. Una vez que un rival lo ha perdido de vista, Decidueye aprovecha la oportunidad para tenderle una emboscada. En una décima de segundo, Decidueye arranca una de las plumas en forma de flecha de sus alas y la dispara hacia el objetivo.'
    />
    <Footer image='https://cdn2.bulbagarden.net/upload/archive/6/62/20100514003048!Pok%C3%A9mon_TCG_logo.png'/>
    </>

    
  );
}

export default App;
