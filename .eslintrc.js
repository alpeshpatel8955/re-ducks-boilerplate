module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint-config-airbnb",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": ["error", 4],
        "react/jsx-indent": ["error", 4],
        "react/prefer-stateless-function": "off",
        "import/no-extraneous-dependencies": "off",
        "no-console": "off",
        "import/prefer-default-export": "off"
    },
    "overrides": [
        {
            "files": [ "src/**/*.js" ],
        }
    ]
};
