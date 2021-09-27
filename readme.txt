Inventory management software using electronjs and python sqlite

Install electronjs and nodejs


Install electron
- npm init -y
- npm i --save-dev electron


Inside package.json ==> add ("start": "electron .") to scripts 
  "scripts": {
    "start": "electron ."
  },

connecting js to python
we need to get dependencies
- npm install --save request
- npm install --save request-promise


run python automatically from js
- npm install child_process


Type npm start in terminal to run the program