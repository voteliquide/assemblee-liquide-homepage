const { APP_NAME } = process.env
const { html } = require('../../helpers')

module.exports = ({ randomQuote }) => {
  return html`
    <style>
      .quote-icon {
        color: rgb(115, 115, 115);
        opacity: 0.2;
        font-size: 80px;
        font-weight: 700;
        position: absolute;
        left: -40px;
        top: -41px;
      }

      @media (max-width: 768px) {
        .quote-icon {
          font-size: 71px;
          left: -21px;
          top: -51px;
        }
      }

      .default-cursor:hover {
        cursor: default;
      }
    </style>
    <footer class="footer has-text-centered">
      <div class="columns is-centered">
        <div class="column is-half section is-clearfix" style="padding: 3rem 3rem 0;">
          <img src="/assets/liquid-mark.png" alt="${APP_NAME}" width="20" height="22">
          <p class="is-size-7" style="margin-top: 1rem;"><a href="/" class="has-text-black"><strong>${APP_NAME}</strong></a> makes democracy LOT BETTER and more accountable.</p>
          <br />
          <div style="margin: 6rem 0 3rem; position: relative;">
            <span class="quote-icon default-cursor">“</span>
            <p class="title has-text-grey is-4 has-text-justified default-cursor">${{ html: randomQuote.text.replace(/\n/g, '<br />') }}</p>
            ${randomQuote.author ? html`<p class="title is-5 has-text-grey has-text-right">— <em>${randomQuote.author}</em></p>` : ''}
            ${randomQuote.date ? html`<p class="title is-6 has-text-right has-text-grey is-uppercase">${randomQuote.date}</p>` : ''}
          </div>
        </div>
      </div>
      <style>
        .footer {
          padding: 3rem 0rem 3.5rem;
        }
      </style>
    </footer>
  `
}
