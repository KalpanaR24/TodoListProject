
class TodoListData{
    //declare private variable using # in javascript
    input:string[]|undefined;
    
    getInput():string[]|undefined{
        return this.input;
    }
    
    setInput(input:string[]){
        this.input= input;
    }

}
export default TodoListData