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

        <section className="portfolio">
          <div className="portfolio__container">
            <h1 className="portfolio__title">
              <span className="portfolio__title__span">Az</span>
              <span className="portfolio__title__span2">Webs</span>-in gördüyü
              işlər
            </h1>
            <div className="portfolio__cards">
              <div className="portfolio__card">
                <h1 className="portfolio__card__title">1</h1>
                <h1 className="portfolio__card__name">Sayt.az</h1>
                <p className="portfolio__card__subtitle">Korporativ Şirkət</p>
              </div>
              <div className="portfolio__card">
                <h1 className="portfolio__card__title">2</h1>
                <h1 className="portfolio__card__name">Sayt.az</h1>
                <p className="portfolio__card__subtitle">Korporativ Şirkət</p>
              </div>
              <div className="portfolio__card">
                <h1 className="portfolio__card__title">3</h1>
                <h1 className="portfolio__card__name">Sayt.az</h1>
                <p className="portfolio__card__subtitle">Korporativ Şirkət</p>
              </div>
              <div className="portfolio__card">
                <h1 className="portfolio__card__title">4</h1>
                <h1 className="portfolio__card__name">Sayt.az</h1>
                <p className="portfolio__card__subtitle">Korporativ Şirkət</p>
              </div>
              <div className="portfolio__card">
                <h1 className="portfolio__card__title">5</h1>
                <h1 className="portfolio__card__name">Sayt.az</h1>
                <p className="portfolio__card__subtitle">Korporativ Şirkət</p>
              </div>
              <div className="portfolio__card">
                <h1 className="portfolio__card__title">6</h1>
                <h1 className="portfolio__card__name">Sayt.az</h1>
                <p className="portfolio__card__subtitle">Korporativ Şirkət</p>
              </div>
              <div className="portfolio__card">
                <h1 className="portfolio__card__title">7</h1>
                <h1 className="portfolio__card__name">Sayt.az</h1>
                <p className="portfolio__card__subtitle">Korporativ Şirkət</p>
              </div>
              <div className="portfolio__card">
                <h1 className="portfolio__card__title">8</h1>
                <h1 className="portfolio__card__name">Sayt.az</h1>
                <p className="portfolio__card__subtitle">Korporativ Şirkət</p>
              </div>
            </div>
          </div>
        </section>

        <section className="xidmetler">
          <div className="xidmetler__container">
            <h1 className="xidmetler__title">
              Bizim xidmətlərimizlə tanış olun
            </h1>
            <div className="xidmet__card">
              <div className="xidmet__card__left">
                <img
                  className="xidmet__card__img"
                  src="src\assets\Images\webSaytlar.webp"
                ></img>
                <h1 className="xidmet__card__title">Saytların hazırlanması</h1>
              </div>
              <button className="xidmet__card__btn">Daha Ətraflı</button>
            </div>
            <div className="xidmet__card">
              <div className="xidmet__card__left">
                <img
                  className="xidmet__card__img"
                  src="src\assets\Images\erpSistem.webp"
                ></img>
                <h1 className="xidmet__card__title">
                  ERP sistemlərinin hazırlanması
                </h1>
              </div>
              <button className="xidmet__card__btn">Daha Ətraflı</button>
            </div>
            <div className="xidmet__card">
              <div className="xidmet__card__left">
                <img
                  className="xidmet__card__img"
                  src="src\assets\Images\korporativEmail.webp"
                ></img>
                <h1 className="xidmet__card__title">
                  Korporativ Email hazırlanması
                </h1>
              </div>
              <button className="xidmet__card__btn">Daha Ətraflı</button>
            </div>
            <div className="xidmet__card">
              <div className="xidmet__card__left">
                <img
                  className="xidmet__card__img"
                  src="src\assets\Images\texnikiDestek.webp"
                ></img>
                <h1 className="xidmet__card__title">Saytlara texniki dəstək</h1>
              </div>
              <button className="xidmet__card__btn">Daha Ətraflı</button>
            </div>
            <div className="xidmet__card">
              <div className="xidmet__card__left">
                <img
                  className="xidmet__card__img"
                  src="src\assets\Images\webDizayn.webp"
                ></img>
                <h1 className="xidmet__card__title">Veb sayt dizaynı UX/UI</h1>
              </div>
              <button className="xidmet__card__btn">Daha Ətraflı</button>
            </div>
            <div className="xidmet__card">
              <div className="xidmet__card__left">
                <img
                  className="xidmet__card__img"
                  src="src\assets\Images\seoXidmeti.webp"
                ></img>
                <h1 className="xidmet__card__title">
                  SEO Xidməti | Axtarış Motorunun Optimizasiyası
                </h1>
              </div>
              <button className="xidmet__card__btn">Daha Ətraflı</button>
            </div>
            <div className="xidmet__card">
              <div className="xidmet__card__left">
                <img
                  className="xidmet__card__img"
                  src="src\assets\Images\logoMaker.webp"
                ></img>
                <h1 className="xidmet__card__title">Loqo hazırlanması</h1>
              </div>
              <button className="xidmet__card__btn">Daha Ətraflı</button>
            </div>
          </div>
        </section>

        <section className="haqqimizda">
          <div className="haqqimizda__container">
            <h1 className="haqqimizda__title">Sizə biraz özümüzdən danışaq</h1>
            <div className="haqqimizda__cards">
              <div className="haqqimizda__card">
                <i class="fa-solid fa-user"></i>
                <h1 className="haqqimizda__card__name">Nicat Allahverdiyev</h1>
                <p className="haqqimizda__card__info">
                  Azərbaycan Texniki Universitetində 2-ci kurs tələbəsiyəm.
                  Hazırda Junior Full-Stack Developer olaraq fəaliyyət
                  göstərirəm.
                </p>
                <button className="haqqimizda__card__btn">
                  Ətraflı Məlumat
                </button>
              </div>
              <div className="haqqimizda__card">
                <i class="fa-solid fa-user"></i>
                <h1 className="haqqimizda__card__name">Əli Abbasov</h1>
                <p className="haqqimizda__card__info">
                  Azərbaycan Texniki Universitetində 2-ci kurs tələbəsiyəm.
                  Hazırda Junior Backend Developer olaraq fəaliyyət göstərirəm.
                </p>
                <button className="haqqimizda__card__btn">
                  Ətraflı Məlumat
                </button>
              </div>
              <div className="haqqimizda__card">
                <i class="fa-solid fa-user"></i>
                <h1 className="haqqimizda__card__name">Murad Əliyev</h1>
                <p className="haqqimizda__card__info">
                  Bakı Dövlət Universitetində 2-ci kurs tələbəsiyəm. Hazırda
                  Junior Mern-Stack Developer olaraq fəaliyyət göstərirəm.
                </p>
                <button className="haqqimizda__card__btn">
                  Ətraflı Məlumat
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="bloq">
          <div className="bloq__container">
            <h1 className="bloq__title">Biz texnologiya haqqında danışırıq</h1>
            <div className="bloq__cards">
              <div className="bloq__card">
                <h1 className="bloq__card__title">
                  Backend olmadan sayt olar?
                </h1>
                <p className="bloq__card__subtitle">
                  Bir çox biznes üçün backend mütləq deyil. Frontend əsaslı
                  saytlar ilə şirkət haqqında məlumat vermək, xidmətləri təqdim
                  etmək və müştərilərlə əlaqə qurmaq mümkündür. Bu cür saytlar
                  daha sürətli hazırlanır və saxlanması daha asandır.
                </p>
              </div>
              <div className="bloq__card">
                <h1 className="bloq__card__title">
                  Hazır sayt nədir və kimlər üçün uyğundur?
                </h1>
                <p className="bloq__card__subtitle">
                  Hazır saytlar əvvəlcədən dizayn edilmiş və kodlanmış web
                  səhifələrdir. Xüsusilə kiçik bizneslər, startaplar və şəxsi
                  brendlər üçün vaxt və əlavə xərc tələb etmədən onlayn olmaq
                  imkanı yaradır.
                </p>
              </div>
              <div className="bloq__card">
                <h1 className="bloq__card__title">
                  React ilə hazırlanmış saytların üstünlükləri
                </h1>
                <p className="bloq__card__subtitle">
                  React ilə yazılan saytlar müasir texnologiyalara əsaslanır və
                  istifadəçi üçün daha axıcı təcrübə yaradır. Bu saytlar həm
                  mobil, həm də masaüstü cihazlarda stabil işləyir və gələcəkdə
                  asanlıqla inkişaf etdirilə bilər.
                </p>
              </div>
              <div className="bloq__card">
                <h1 className="bloq__card__title">
                  Bir günə sayt açmaq mümkündürmü?
                </h1>
                <p className="bloq__card__subtitle">
                  Düzgün seçilmiş hazır frontend sayt sayəsində bir neçə saat
                  ərzində domenə qoşulmuş və istifadəyə hazır web sayt əldə
                  etmək mümkündür. Bu üsul ənənəvi sifariş prosesindən qat-qat
                  sürətlidir.
                </p>
              </div>
              <div className="bloq__card">
                <h1 className="bloq__card__title">
                  Sayt sifarişi verərkən ən çox edilən səhvlər
                </h1>
                <p className="bloq__card__subtitle">
                  İnsanlar çox vaxt ehtiyacından artıq funksiyalar tələb edir və
                  nəticədə həm vaxt, həm də pul itkisi yaşayır. Düzgün planlama
                  və sadə struktur daha effektiv nəticə verir.
                </p>
              </div>
              <div className="bloq__card">
                <h1 className="bloq__card__title">
                  Hazır saytlar niyə daha sərfəlidir?
                </h1>
                <p className="bloq__card__subtitle">
                  Hazır saytlar dizayn və inkişaf mərhələləri artıq tamamlanmış
                  məhsullar olduğu üçün daha münasib qiymətə təklif olunur. Bu,
                  bizneslərin büdcəyə qənaət edərək sürətli şəkildə onlayn
                  fəaliyyətə başlamasına kömək edir.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="elaqe">
          <div className="elaqe__container">
            <h1 className="elaqe__title">Bizimlə əlaqə saxlayın</h1>
            <div className="elaqe__left__right">
              <div className="elaqe__left">
                <h1 className="elaqe__left__title p-top0">Əlaqə nömrəsi</h1>
                <p>(+994) 70 892 86 45</p>
                <p>(+994) 50 458 80 72</p>
                <p>(+994) 51 864 86 46</p>
                <h1 className="elaqe__left__title">Email</h1>
                <p>azwebss@gmail.com</p>
                <h1 className="elaqe__left__title">Sosial şəbəkələrimiz</h1>
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-linkedin-in"></i>
                <i class="fa-brands fa-tiktok"></i>
                <i class="fa-brands fa-github"></i>
              </div>
              <div className="elaqe__right">
                <div className="form__input">
                  <p className="elaqe__input__title">Adınız</p>
                  <input
                    placeholder="Adınızı daxil edin..."
                    className="elaqe__input"
                  ></input>
                </div>
                <div className="form__input">
                  <p className="elaqe__input__title">Email</p>
                  <input
                    placeholder="Emailinizi daxil edin..."
                    className="elaqe__input"
                  ></input>
                </div>
                <div className="form__input">
                  <p className="elaqe__input__title">Telefon nömrəsi</p>
                  <input
                    placeholder="Telefon mömrənizi daxil edin..."
                    className="elaqe__input"
                  ></input>
                </div>
                <div className="form__input">
                  <p className="elaqe__input__title">Mesajınız</p>
                  <input
                    placeholder="Mesajınızı daxil edin..."
                    className="elaqe__message__input"
                  ></input>
                </div>
                <button className="elaqe__btn">Göndər</button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__brand">
            <h2>
              <span className="nav__logo">Az</span>
              <span className="nav__logo__span">Webs</span>
            </h2>
            <p>
              Bizneslər üçün müasir, sürətli və istifadəyə hazır web saytlar
              təqdim edirik.
            </p>
          </div>
          <div className="footer__links">
            <h3>Sürətli linklər</h3>
            <ul>
              <li>
                <a href="#">Ana səhifə</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Xidmətlər</a>
              </li>
              <li>
                <a href="#">Bloq</a>
              </li>
              <li>
                <a href="#">Haqqımızda</a>
              </li>
            </ul>
          </div>
          <div className="footer__contact">
            <h3>Əlaqə</h3>
            <p>Email: azwebss@gmail.com</p>
            <p>Telefon: (+994) 70 892 86 45</p>
            <div className="footer__socials">
              <a href="#">Instagram</a>
              <a href="#">LinkedIn</a>
              <a href="#">GitHub</a>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <p>© 2025 AzWebs. Bütün hüquqlar qorunur.</p>
        </div>
      </footer>{" "}
    </>
  );
};
