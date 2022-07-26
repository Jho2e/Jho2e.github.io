import styled from "styled-components";

const Gallery3Column = styled.div`
  margin-bottom: 8%;
  > div {
    // grid3__column

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);

    height: 290vh;
    > div:first-child {
      background: url("https://cdn.shopify.com/s/files/1/0092/9605/2282/files/STEVE_cover_f98e3d67-090a-43c1-866b-5eb7e2f240df_1000x.jpg?v=1642157993")
        no-repeat;
      background-size: cover;

      padding-top: 3%;
      padding-left: 5%;

      font-size: 0.8em;
      letter-spacing: 1px;
      color: #200000;
    }
    > div:nth-child(2) {
      background: url("https://editorialist.com/thumbnails/600/2021/2/013/627/953/13627953~light%20blue_1.webp")
        no-repeat;
      background-size: cover;
      padding-top: 3%;
      padding-left: 5%;

      font-size: 0.8em;
      letter-spacing: 1px;
      color: #200000;
    }
    > div:nth-child(3) {
      display: flex;
      flex-direction: column;
      padding-top: 20%;
      padding-left: 20%;
      padding-right: 20%;
      > span,
      p {
        margin-bottom: 5%;
      }
      > span:first-child {
        font-size: 0.7em;
        font-weight: 500;
      }
      > span:nth-child(2) {
        font-weight: bold;
        font-size: 1.2em;
      }
      > p {
        font-size: 0.8em;
        font-weight: 500;
        line-height: 1.3em;
      }
    }

    > div:nth-child(4) {
      background: url("https://cdn.shopify.com/s/files/1/0092/9605/2282/files/WEB_960x960_deadstock_bag_800x.jpg?v=1644250024")
        no-repeat;
      background-size: cover;
    }
    > div:nth-child(5) {
      background: url("https://cdn.shopify.com/s/files/1/0092/9605/2282/files/WEB_responsibility_4_800x.jpg?v=1635449295")
        no-repeat;
      background-size: cover;
    }
    > div:nth-child(6) {
      display: flex;
      flex-direction: column;
      padding-top: 20%;
      padding-left: 20%;
      padding-right: 20%;
      > span:first-child {
        font-size: 0.7em;
        font-weight: 500;
      }
      > span,
      p {
        margin-bottom: 5%;
      }
      > span:first-child {
        font-weight: bold;
        font-size: 1.2em;
      }
      > p {
        font-size: 0.8em;
        font-weight: 500;
        line-height: 1.3em;
      }
      > span:last-child {
        white-space: nowrap;
        width: 25%;
        padding-bottom: 1%;
        border-bottom: 2px solid white;
        transition: all 0.5s ease-in-out;
      }
      > span:last-child:hover {
        cursor: pointer;
        border-color: black;
      }
    }
  }
`;

export default function ThirdColumn() {
  return (
    <Gallery3Column>
      <div className="grid3__column">
        <div>
          <span>SHOP MEN'S JEANS</span>
        </div>
        <div>
          <span>SHOP WOMEN'S JEANS</span>
        </div>
        <div>
          <span>Won Hundred presents:</span>
          <span>THE DEADSTOCK BAGS</span>
          <p>
            Our new denim bags are made of deadstock fabric and offer a new
            lease of life to otherwise discarded fabric. Won Hundred stands by
            the promise of continually striving to produce ethically &
            responsibly. Instead of starting over, we keep going.
          </p>
          <p>
            Every year, tons and tons of fabric are being discarded, and never
            used. We, at Won Hundred, want to diminish the waste by making some
            of our styles using these “Dead stock” fabrics. Right now, we
            already have our Won Hundred - Division collab made on dead stock
            from exclusive Italian deadstock fabric and our Dead stock tote
            bags. We are also looking to expand this production to a whole
            collection in the future.
          </p>
        </div>
        <div></div>
        <div></div>
        <div>
          <span>OUR SUSTAINABILITY AMBITIONS</span>
          <p>
            At Won Hundred, we take a proactive stance in bettering our industry
            and reducing our environmental impact. We believe the key to ethical
            and responsible business practices is not only reducing our carbon
            footprint but also improving the conditions for the people and
            animals involved. It is important for us that our suppliers wish to
            partake in our journey - only this way can we achieve long-term
            success and trust.
          </p>
          <p>
            We are aware that the fashion and textile industry holds many
            challenges in terms of ethics and sustainability. However, as
            sustainability applies to everybody, it is our belief that the size
            of the company should never be an excuse to practice sustainable and
            responsible business. We are convinced that continuously “doing
            something” is better than “doing nothing”.
          </p>
          <span>Read more.</span>
        </div>
      </div>
    </Gallery3Column>
  );
}
