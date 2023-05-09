
# Values-searcher

The program is designed to find a pair of numbers in a sorted array that add up to a specified value. If there are no such numbers, the program returns an empty array. The array and the target value can be configured through the config.json file.


## 🔗 Links
[![Telegram](https://img.shields.io/badge/Telegram-%40olvitmor-blue.svg)](https://t.me/olvitmor)

[![Email](https://img.shields.io/badge/olvitmor%40gmail.com-red.svg)](mailto:olvitmor@gmail.com)



## Run Locally

Clone the project

```bash
  git clone https://github.com/olvitmor/values-searcher.git
```

Go to the project directory

```bash
  cd values-searcher
```

Install dependencies

```bash
  npm install
```

Build project

```bash
  tsc
```

Run project

```bash
  node .\dist\app.js
```


## Usage/Example
Cmd
```bash
    node .\dist\app.js
```
Output
```bash
    Reading...
    Array:  [ -3, -1, 0, 2, 6 ]
    Value:  -1
    Exec: 0.223ms
    Result values: [ -3, 2 ]
```

