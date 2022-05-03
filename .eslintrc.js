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
        "brace-style": [2, "stroustrup", { "allowSingleLine": true }],
        "no-unused-vars":['warn'],
        "no-useless-constructor":['warn'],
        "no-undef":['off'],
    }
}

