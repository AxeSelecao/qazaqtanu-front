import logo from "../assets/icons/logo.svg";
import avatar from "../assets/images/header/avatar.jpg";
import coin from "../assets/icons/coin.png";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logOut, unsetAccount } from "../services/redux/slice";
import { useEffect, useState } from "react";
import { useGetUsersQuery } from "../services/redux/API/usersAPI";

export const Header = () => {
  const profileData = useSelector((state) => state.login.account);
  const isLogged = useSelector((state) => state.login.isLogged);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [displayProfileMenu, setDisplayProfileMenu] = useState(false);
  const { data = {}, isLoading } = useGetUsersQuery();

  const categories = [
    "История",
    "Язык",
    "Литература",
    "Традиции",
    "Религия",
    "Музыка",
    "Искусство",
  ];

  const links = [
    "history",
    "language",
    "literature",
    "traditions",
    "religion",
    "music",
    "art",
  ];

  let location = useLocation();

  const clickMaterial = (material) => (event) => {
    const materialsElems = document.querySelectorAll(
      ".header__materials-material"
    );
    for (let i = 0; i < materialsElems.length; i++) {
      materialsElems[i].style.border = "none";
    }
    event.currentTarget.style.border = "2px solid white";
    if (material.type == "task") {
      navigate(
        `/language/study/beginner/unit-${Number(location.pathname[30])}/task/${
          material.position
        }`
      );
    } else if (material.type == "topic") {
      navigate(
        `/language/study/beginner/unit-${Number(location.pathname[30])}/topic/${
          material.position
        }`
      );
    } else if (material.type == "test") {
      navigate(
        `/language/study/beginner/unit-${Number(location.pathname[30])}/test/${
          material.position
        }`
      );
    }
  };

  useEffect(() => {
    setTimeout(() => {
      if (
        location.pathname.includes("topic") &&
        location.pathname[38] != undefined &&
        location.pathname[38] == 1
      ) {
        const materialsElems = document.querySelectorAll(
          ".header__materials-material"
        );
        materialsElems[0].style.border = "2px solid white";
        for (let i = 1; i < materialsElems.length; i++) {
          materialsElems[i].style.border = "none";
        }
      }
    }, 1);
  });

  let backColor = "transparent";
  let borBottom = "none";
  if (location.pathname.includes("unit")) {
    backColor = "#222222";
    borBottom = "1px solid black";
    return (
      <header
        className="header"
        style={{ backgroundColor: backColor, borderBottom: borBottom }}
      >
        <div
          className="header__container"
          style={{ width: "100%", padding: "10px 20px" }}
        >
          <div className="header__wrapper">
            <div className="header__categories">
              <NavLink
                className="navlink"
                to=""
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  className="header__categories-img"
                  style={{ marginRight: 10 }}
                  src={logo}
                />
                <p className="header__categories-logo">Qazaqtanu</p>
              </NavLink>
            </div>
            <div className="header__materials">
              {!isLoading ? (
                data[2].results[0].units[
                  Number(location.pathname[30]) - 1
                ].materials.map((material, i) => {
                  if (material.completed) {
                    return (
                      <div
                        className="header__materials-material pointer"
                        style={{ backgroundColor: "#978660" }}
                        onClick={clickMaterial(material)}
                      >
                        {material.type == "topic" ? "" : ""}
                        {material.type == "task" ? ">" : ""}
                        {material.type == "test" ? "?" : ""}
                      </div>
                    );
                  } else if (!material.completed) {
                    return (
                      <div
                        className="header__materials-material pointer"
                        style={{ backgroundColor: "#ccc" }}
                        onClick={clickMaterial(material)}
                      >
                        {material.type == "topic" ? "" : ""}
                        {material.type == "task" ? ">" : ""}
                        {material.type == "test" ? "?" : ""}
                      </div>
                    );
                  }
                })
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="header__personal">
            <input
              className="header__personal-searcher"
              type="text"
              placeholder="Поиск темы..."
            />
            {isLogged ? (
              <>
                <div className="header__personal-points">
                  <img className="header__personal-storage" src={coin} alt="" />
                  <p className="header__personal-value">
                    {!isLoading
                      ? data.map((user) => {
                          if (user._id == profileData._id) {
                            return user.points;
                          }
                        })
                      : ""}
                  </p>
                </div>
                <div className="header__personal-profile">
                  <img
                    className="header__personal-avatar pointer"
                    onClick={() => setDisplayProfileMenu(!displayProfileMenu)}
                    src={avatar}
                  />
                  <div
                    className="header__personal-settings"
                    style={
                      displayProfileMenu
                        ? { display: "block" }
                        : { display: "none" }
                    }
                  >
                    <NavLink className="navlink" to={"profile"}>
                      <p>Профиль</p>
                    </NavLink>
                    <NavLink className="navlink">
                      <p>Задания</p>
                    </NavLink>
                    <NavLink className="navlink">
                      <p>Маркет</p>
                    </NavLink>
                    <NavLink className="navlink">
                      <p>Настройки</p>
                    </NavLink>
                    <NavLink className="navlink signout">
                      <p
                        onClick={() => {
                          dispatch(logOut());
                          dispatch(unsetAccount({}));
                        }}
                      >
                        Выйти
                      </p>
                    </NavLink>
                  </div>
                </div>
              </>
            ) : (
              <div className="header__personal-authorization">
                <NavLink
                  to={"registration"}
                  className="header__personal-authorization-button navlink"
                >
                  Зарегистрироваться
                </NavLink>
                <NavLink
                  to={"authorization"}
                  className="header__personal-authorization-button navlink"
                >
                  Войти
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </header>
    );
  }

  if (
    location.pathname == "/registration" ||
    location.pathname == "/authorization"
  ) {
    return <></>;
  }

  return (
    <header
      className="header"
      style={{ backgroundColor: backColor, borderBottom: borBottom }}
    >
      <div className="header__container">
        <div className="header__categories">
          <NavLink
            className="navlink"
            to={""}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img className="header__categories-img" src={logo} />
          </NavLink>
          <div className="header__categories-navbar">
            {categories.map((category, index) => {
              return (
                <NavLink className="navlink" to={`/${links[index]}`}>
                  <p className="header__categories-link" key={index}>
                    {category}
                  </p>
                </NavLink>
              );
            })}
          </div>
        </div>
        <div className="header__personal">
          <input
            className="header__personal-searcher"
            type="text"
            placeholder="Поиск темы..."
          />
          {isLogged ? (
            <>
              <div className="header__personal-points">
                <img className="header__personal-storage" src={coin} alt="" />
                <p className="header__personal-value">
                  {!isLoading
                    ? data.map((user) => {
                        if (user._id == profileData._id) {
                          return user.points;
                        }
                      })
                    : ""}
                </p>
              </div>
              <div className="header__personal-profile">
                <img
                  className="header__personal-avatar pointer"
                  onClick={() => setDisplayProfileMenu(!displayProfileMenu)}
                  src={avatar}
                />
                <div
                  className="header__personal-settings"
                  style={
                    displayProfileMenu
                      ? { display: "block" }
                      : { display: "none" }
                  }
                >
                  <NavLink className="navlink" to={"profile"}>
                    <p>Профиль</p>
                  </NavLink>
                  <NavLink className="navlink">
                    <p>Задания</p>
                  </NavLink>
                  <NavLink className="navlink">
                    <p>Маркет</p>
                  </NavLink>
                  <NavLink className="navlink">
                    <p>Настройки</p>
                  </NavLink>
                  <NavLink className="navlink signout">
                    <p
                      onClick={() => {
                        dispatch(logOut());
                        dispatch(unsetAccount({}));
                      }}
                    >
                      Выйти
                    </p>
                  </NavLink>
                </div>
              </div>
            </>
          ) : (
            <div className="header__personal-authorization">
              <NavLink
                to={"registration"}
                className="header__personal-authorization-button navlink"
              >
                Зарегистрироваться
              </NavLink>
              <NavLink
                to={"authorization"}
                className="header__personal-authorization-button navlink"
              >
                Войти
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
