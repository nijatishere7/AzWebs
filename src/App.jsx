import "./App.css";

export const App = () => {
  return (
    <>
      <header>
        <nav className="navbar">
          <div className="navbar__container">
            <div className="nav__left">
              <a className="nav__logo" href="#">
                Az<span className="nav__logo__span">Webs</span>
              </a>
            </div>
            <div className="nav__right">
              <a className="nav__link" href="#">
                ANA SƏHİFƏ
              </a>
              <a className="nav__link" href="#">
                PORTFOLİO
              </a>
              <a className="nav__link" href="#">
                XİDMƏTLƏR
              </a>
              <a className="nav__link" href="#">
                HAQQIMIZDA
              </a>
              <a className="nav__link" href="#">
                BLOQ
              </a>
              <a className="nav__link__contact" href="#">
                ƏLAQƏ
              </a>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero__container">
            <div className="hero__left">
              <h1 className="hero__title">
                Biznesiniz üçün{" "}
                <span className="hero__title__span">müasir</span>{" "}
                <span className="hero__title__span2">Web saytların</span>{" "}
                hazırlanması
              </h1>
              <p className="hero__subtitle">
                İnnovativ və funksional web saytlar, istər kiçik bizneslər,{" "}
                <br />
                istərsə də böyük şirkətlər üçün müasir texnologiyalar <br /> və
                istifadəçi dostu interfeyslər yaradırıq.
              </p>
              <div className="hero__btns">
                <button className="hero__btn1">Müraciət et</button>
                <button className="hero__btn2">Daha çox</button>
              </div>
            </div>
            <div className="hero__right">
              <img className="hero__img" src="src\assets\Images\hero.jpg"></img>
            </div>
          </div>
        </section>
      </main>

      <footer></footer>
    </>
  );
};
