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
      <main></main>
    </div>
  );
}

export default App;
