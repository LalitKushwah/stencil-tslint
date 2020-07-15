import * as Lint from "tslint";

export const codeExamples: Lint.ICodeExample[] = [
  {
    description:
      "Order lifecycle methods by their natural call order (`call-order` or `default`)",
    config: Lint.Utils.dedent`
            "rules": { "lifecycle-sort": [true, "call-order"] }
        `,
    pass: Lint.Utils.dedent`
            componentWillLoad() { }
            componentDidLoad() { }
            componentWillUpdate() { }
            componentDidUpdate() { }
        `
  },
  {
    description: "Order lifecycle methods alphabetically (`alphabetical`)",
    config: Lint.Utils.dedent`
            "rules": { "lifecycle-sort": [true, "alphabetical"] }
        `,
    pass: Lint.Utils.dedent`
            componentDidLoad() { }
            componentDidUpdate() { }
            componentWillLoad() { }
            componentWillUpdate() { }
        `
  }
];
