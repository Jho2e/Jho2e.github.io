import styled from "styled-components";
import { Link } from "react-router-dom";
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

    > a > h1 {
      margin-right: 3%;
      white-space: nowrap;

      font-size: 1.6em;
      font-weight: bold;

      letter-spacing: -2px;
    }
    > h2 {
      display: none;
      color: black;
      cursor: pointer;

      margin-top: 1%;
    }
  }
  > nav {
    display: flex;

    width: 80%;

    > ul {
      display: flex;

      margin-right: 40%;

      box-sizing: border-box;
      list-style: none;

      > li:not(li:last-child) {
        margin-right: 12%;
      }
      > li > span,
      > li > a > span {
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
    padding-right: 0;
    padding-left: 0;
    // header_div
    > div {
      width: 100%;
      display: flex;
      justify-content: space-around;
      > h2 {
        display: block;
        &.active {
          color: #fa5252;
        }
      }
    }
    > nav {
      margin: 0;
      padding: 0;
      width: 100%;
      padding-top: 5%;
      padding-bottom: 5%;
      display: none;
      background-color: #dee2e6;

      ul {
        flex-direction: column;
        text-align: center;
        > li {
          width: 250%;
          margin-bottom: 2%;
          padding: 2%;
          &:hover {
            background-color: #f8f9fa;
          }
        }
      }
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
          <Link to="/">
            <h1>Won Hundred</h1>
          </Link>
          <h2 className="navbar__toogleBtn" onClick={onClick}>
            <i className="fa-solid fa-bars"></i>
          </h2>
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
              <Link to="/cartView">
                <span>BAG (0)</span>
              </Link>
            </li>
          </ul>
        </nav>
      </NavtopHeader>
    </>
  );
}
