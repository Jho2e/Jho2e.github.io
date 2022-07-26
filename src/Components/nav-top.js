import styled from "styled-components";

const NavtopHeader = styled.header`
  display: flex;
  align-items: center;

  position: fixed;
  width: 100%;
  z-index: 1;
  top: 0;
  left: 0;

  background-color: white;
  padding-top: 0.2%;
  padding-bottom: 0.2%;
  border-bottom: 1px solid #e5e5e5;

  padding-right: 3%;
  padding-left: 3%;

  // header_div
  > div {
    margin-right: 3%;

    h1 {
      margin-right: 3%;
      white-space: nowrap;

      font-size: 1.6em;
      font-weight: bold;

      letter-spacing: -2px;
    }
    > a {
      display: none;
      color: black;
    }
  }
  > nav {
    display: flex;

    width: 80%;

    > ul {
      display: flex;

      margin-right: 60%;

      box-sizing: border-box;
      list-style: none;

      > li:not(li:last-child) {
        margin-right: 12%;
      }
      > li > span {
        white-space: nowrap;

        font-size: 0.8em;
        font-weight: 500;
      }
    }
    > ul:nth-child(2) > li {
      margin-right: 15% !important;
    }
  }

  @media screen and (max-width: 780px) {
    // header
    flex-direction: column;

    // header_div
    > div {
      width: 100%;
      display: flex;
      justify-content: space-around;
      > a {
        display: block;
      }
    }

    > nav > ul {
      flex-direction: column;
    }

    > nav {
      display: none;
    }

    > nav.active {
      display: flex;
    }
  }
`;

export default function NavTop() {
  const onClick = () => {
    const navbar = document.querySelector(".navbar");
    const toggleBtn = document.querySelector(".navbar__toogleBtn");

    toggleBtn.classList.toggle("active");
    navbar.classList.toggle("active");
  };

  return (
    <>
      <NavtopHeader>
        <div className="header_div">
          <h1>Won Hundred</h1>
          <a href="#" className="navbar__toogleBtn" onClick={onClick}>
            <i className="fa-solid fa-bars"></i>
          </a>
        </div>

        <nav className="navbar">
          <ul>
            <li>
              <span>JEANS</span>
            </li>
            <li>
              <span>WOMEN</span>
            </li>
            <li>
              <span>MEN</span>
            </li>
            <li>
              <span>UNIVERSE</span>
            </li>
            <li>
              <span>RESPONSIBILITY</span>
            </li>
            <li>
              <span>SALE</span>
            </li>
          </ul>
          <ul>
            <li>
              <span>SEARCH</span>
            </li>
            <li>
              <span>CURRENCY</span>
            </li>
            <li>
              <span>BAG (0)</span>
            </li>
          </ul>
        </nav>
      </NavtopHeader>
    </>
  );
}
