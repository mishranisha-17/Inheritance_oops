class Person{
    constructor(name, age, collegeName){
        this.name = name;
        this.age  = age;
        this.collegeName = collegeName;
    }
    
    displayName(){
        return `${this.name}`;
    }
    
    displayAge(){
        return `${this.age}`;
    }
    
    displayCollageName(){
        return `${this.collegeName}`;
    }
    
    
}

class student extends Person{
    constructor(name,age,collegeName,id,branch){
        super(name,age,collegeName);
        this.branch=branch;
        this.id=id;
    }
    displaybranch(){
        console.log(`${this.branch}`)
    }
}
let s1=new student("Nisha",38,"du",101,"it")
let p1= new Person("Nisha",38,"du")
console.log(s1.displayName())
console.log(s1.displaybranch())