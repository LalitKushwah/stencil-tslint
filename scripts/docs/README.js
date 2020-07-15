exports.README = `
# stencil-tslint
Adds stylistic [tslint](https://github.com/palantir/tslint) rules for [Stencil](https://github.com/ionic-team/stencil) projects

## Getting started
Add the following line to your \`tslint.json\` file to enable the default ruleset (which follows the [Stencil Style Guide](https://stenciljs.com/docs/style-guide))

\`\`\`json
{
    "extends": ["stencil-tslint/default"],
}
\`\`\`

Alternatively, you can extend the bare package and enable each [rule](#rules) on a individual basis
\`\`\`json
{
    "extends": ["stencil-tslint"],
    "rules": {
        "host-data-precedes-render": true
    }
}
\`\`\`

## Rules
%docs%

## Contributing
Rules in the \`src/\` directory must be **camelCased** and end in **Rule**.
More information on developing custom tslint rules can be found on the [tslint site](https://palantir.github.io/tslint/develop/custom-rules/)

Before adding your custom rule, be sure to write a test for it. Then, you should be able to verify that it works by running:
\`\`\`
npm run verify
\`\`\`
`;
