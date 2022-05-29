import Logo from "../../assets/KyoLogo.png";
import "./styles.scss";


export function NavBar(){
return(
  <>
  <header className="Navbar">
    <a href="/"><img src={Logo} alt="Kyo Mangás"/></a>
    <div className="alignButtons">
      <a href="/mangas"><button>Mangás</button></a>
      <button>Light Novels</button>
      <button>Manhwa</button>
      <button>Ilustrações</button>
    </div>
    
    <div className='searchBar'>
      <input type="text" placeholder="Buscar..." required></input>
      <div className="searchIcon"></div>
    </div>

    <nav role="navigation">
      <div className='menuToggle'>
        <input type="checkbox" />
        
        <span></span>
        <span></span>
        <span></span>
        
        <ul className="menu">
          <a href="/"><li>Home</li></a>
          <a href="/"><li>About</li></a>
          <a href="/"><li>Info</li></a>
          <a href="/"><li>Contact</li></a>
          <a href="/" target="_blank"><li>Show me more</li></a>
        </ul>
      </div>
    </nav>
  </header>
</>
)
}