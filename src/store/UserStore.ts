import { types } from "mobx-state-tree" // alternatively, `import { t } from "mobx-state-tree"`

export  const User = types.model("User",{
    name: types.string,
    age: types.number
}).actions(self => ({
    setName(name: string){
         self.name = name;
    }
})).views(self => ({
    get fullName(){
        return `${self.name} Pulmi`
    }
}))

