module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "airbnb",
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        'react/jsx-filename-extension': 0,
        'jsx-a11y/click-events-have-key-events': 0,
        'react/prop-types': 0,
        'react/react-in-jsx-scope': 0,
        'no-unused-vars': 0,
        'react/no-array-index-key': 0,
        'jsx-a11y/anchor-is-valid': 0,
        'jsx-a11y/label-has-associated-control': 0,
        'jsx-a11y/no-static-element-interactions': 0,
        'react/jsx-no-constructed-context-values': 0,
        'default-param-last': 0,
    }
}
