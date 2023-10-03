import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement("my-element")
export class MyElement extends LitElement {
  /**
   * The number of times the button has been clicked.
   */
  @property({ type: String })
  title = "Awesome";

  @property({ type: Array })
  todos = [
    {
      title: "Make this.",
      check: true,
    },
  ];

  render() {
    return html`
      <input
        .value=${this.title}
        @input=${(e: any) => {
          this.title = e.currentTarget.value;
        }}
      />
      <button
        @click=${() => {
          this.todos.push({
            title: this.title,
            check: false,
          });
          this.requestUpdate();
        }}
      >
        Add
      </button>
      <div>
        ${this.todos.map((todo, index) => {
          console.log(todo);
          return html`
            <div class="todo">
              <h2 style=${todo.check ? "text-decoration: line-through" : ""}>
                ${todo.title}
              </h2>
              <input
                type="checkbox"
                .checked=${todo.check}
                @change=${() => {
                  this.todos[index].check = !this.todos[index].check;
                  this.requestUpdate();
                }}
              />
              <button
                class="del"
                @click=${() => {
                  this.todos = this.todos.filter((_c, i) => i !== index);
                }}
              >
                Del
              </button>
            </div>
          `;
        })}
      </div>
    `;
  }

  static styles = css`
    :host {
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }

    .todo {
      display: flex;
    }

    .todo > input {
      width: 30px;
      margin-left: 10px;
    }

    .del {
      height: 50px;
      margin: auto 0 auto 10px;
    }

    button {
      border-radius: 8px;
      border: 1px solid transparent;
      padding: 0.6em 1.2em;
      font-size: 1em;
      font-weight: 500;
      font-family: inherit;
      background-color: #1a1a1a;
      cursor: pointer;
      transition: border-color 0.25s;
    }
    button:hover {
      border-color: #646cff;
    }
    button:focus,
    button:focus-visible {
      outline: 4px auto -webkit-focus-ring-color;
    }

    @media (prefers-color-scheme: light) {
      a:hover {
        color: #747bff;
      }
      button {
        background-color: #f9f9f9;
      }
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "my-element": MyElement;
  }
}
