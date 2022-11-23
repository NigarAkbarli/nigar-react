import './Cta.scss'

export const Cta = () => {
    return (
        <div className="cta desktop-only">
        <h4>What can us do for you?</h4>
        <p>
          We are ready to work on a project of any complexity,<br />
          whether it’s commercial or residential.
        </p>
        <div className="form">
          <form>
            <div className="name-mail">
              <input type="text" placeholder="Your Name*" />
              <input type="text" placeholder="Email*" />
              <input type="text" placeholder="Reason for Contacting*" />
              <input type="text" placeholder="Phone" />
            </div>
            <textarea placeholder="Message"></textarea>
            <p>* indicates a required field</p>
          </form>
          <button>Submit</button>
        </div>
      </div>
    );
}