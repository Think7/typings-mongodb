# Typed Mongodb
The type definition for [mongodb](https://github.com/mongodb/node-mongodb-native).

# Installation notes:

1 You must install the node ambient module
```
typings install node --ambient --save
```

# Generics
To install the version supporting generics in the branch `generics` use
```
typings i github:Think7/typings-mongodb#generics
```
This version cannot yet be merged without breaking existing code. 
Waiting for [this issue in the TypeScript repo](https://github.com/Microsoft/TypeScript/issues/2175)

# License
MIT
