# LAB - Class 03

## Notesy
Lab: Class 03 
- [x] Write to db 
- [x] Add category to note
- [x] list notes
    - [x] all notes
    - [x] notes by category
- [x] delete a single note 

### Author: Kevin Dreyer

### Links and Resources

- [submission PR](https://github.com/kevindreyer-CF401JSd/notes/pull/3)

### Setup

#### How to initialize/run your application (where applicable)

- e.g. `node index.js`

#### Tests

- How do you run tests?
    `jest input.test.js`
    `jest notes.test.js`

#### Schema/Rules set

Command Object created by Input Class
{ 
    command: { type:string, required:true}
}
Notes created Notes Class
{ 
    action: { type:'string', required:true},
    payload: { type:'string', required:true}
}

