module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "standard"
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        "indent": ["off", "always"],//
        "space-before": ["off", "always"],//
        "eqeqeq": "off",
        "brace-style": ["off", "always"],
        "no-unused-vars": "off",
        "no-useless-constructor": "warn",
        "no-undef": "warn",
    }
}

