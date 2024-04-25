class Node{
    constructor(value){
        this.value = value;
        this.nextNode = null;
    }
}


class LinkedList{
    constructor(){
        this.listHead = null;
    };

    prepend(value){
        let temp = null;

        if(this.listHead != null) temp = this.listHead;

        this.listHead = new Node(value);
        this.listHead.nextNode = temp;
    }

    append(value){
        if(this.listHead == null) this.prepend(value);
        else {
            let temp = this.listHead;

            while(temp.nextNode != null) temp = temp.nextNode;

            temp.nextNode = new Node(value);
        }
    }

    size(){
        if(this.listHead == null) return 0;
        else {
            let temp = this.listHead;
            let counter = 0;

            while(temp.nextNode != null){
                counter += 1;
                temp = temp.nextNode;
            }

            return counter += 1;
        }
    }

    head(){
        return this.listHead;
    }

    tail(){
        let temp = this.listHead;

        while (temp.nextNode != null){
            temp = temp.nextNode
        }
         
        return temp;
    }

    at(index){
        if(index == 1) return this.listHead;
        else {
            let temp = this.listHead;
            let counter = 1;

            while(index > counter){
                counter += 1;
                temp = temp.nextNode;
            }

            return temp != null ? temp : 'Error - Not enough nodes in list';
        }
    }

    pop(){
        let temp = this.listHead;
        let tempPrior; 

        while(temp.nextNode != null){
            tempPrior = temp;
            temp = temp.nextNode; 
        }

        tempPrior.nextNode = null;
    }

    contains(value){
        let temp = this.listHead;

        while(temp != null){
            if(temp.value == value){
                return true;
            }

            temp = temp.nextNode;
        }

        return false;
    }

    find(value){
        let temp = this.listHead;
        let counter = 1;

        while(temp != null){
            if(temp.value == value){
                return counter;
            }

            counter += 1;
            temp = temp.nextNode;
        }

        return null;
    }

    toString(){
        if(this.listHead == null) return 'null';
        else {
            let string = '';
            let temp = this.listHead;

            while(temp.nextNode != null){
                string += `( ${temp.value} ) -> `;
                temp = temp.nextNode;
            }

            string += `( ${temp.value} ) -> null`;

            return string;
        }
    }

    insertAt(value, index){
        let formerNode = this.at(index - 1);
        let newNode = new Node(value);
        let latterNode = this.at(index);

        formerNode.nextNode = newNode;
        newNode.nextNode = latterNode;
    }

    removeAt(index){
        let formerNode = this.at(index - 1);
        let latterNode = this.at(index + 1);

        formerNode.nextNode = latterNode;
    }

}


const list = new LinkedList();

list.prepend('test1');
list.append('test2');
list.append('test3');
console.log(list.toString());
console.log(list.size());
console.log(list.head());
console.log(list.tail());
console.log(list.at(3));
list.pop();
console.log(list.toString());
console.log(list.contains('test2'));
console.log(list.find('test2'));
list.insertAt('testNew2', 2);
console.log(list.toString());
list.removeAt(2);
console.log(list.toString());