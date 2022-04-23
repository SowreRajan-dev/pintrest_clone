import {
  Add,
  Chat,
  FavoriteRounded,
  Notifications,
  Person,
  QuestionMark,
} from "@mui/icons-material";
import { useEffect } from "react";
import "./App.css";
import MenuContainer from "./Components/MenuContainer";
import Pin from "./Components/Pin";
import Data from "./data";

function App() {
  useEffect(() => {
    const allIcon = document.querySelectorAll(".iconContainer");
    function setMenuActice() {
      allIcon.forEach((icon) => icon.classList.remove("active"));
      this.classList.add("active");
    }
    allIcon.forEach((icon) => {
      icon.addEventListener("click", setMenuActice);
    });
  }, []);

  return (
    <div className="App">
      <div className="menuContainer">
        <img src="/Images/pinterestLogo.png" alt="logo" className="logo" />
        <div className="subMenu">
          <div>
            <MenuContainer icon={<Person />} />
            <MenuContainer icon={<Notifications />} />
            <MenuContainer icon={<Chat />} />
          </div>
          <div>
            <MenuContainer icon={<FavoriteRounded />} />
          </div>
          <div>
            <MenuContainer icon={<QuestionMark />} />
            <MenuContainer icon={<Add />} />
          </div>
        </div>
      </div>
      <main>
        <div className="searchBox">
          <input type="text" placeholder="Search..." />
          <div className="search">
            <img src="/Images/searchIcon.png" alt="search-icon" />
          </div>
        </div>
        <div className="mainContainer">
          {Data &&
            Data.map((data) => (
              <Pin
                pinSize={data.size}
                id={data.id}
                imageSrc={data.imgSrc}
                link={data.link}
                name={data.name}
              />
            ))}
        </div>
      </main>
    </div>
  );
}

export default App;
