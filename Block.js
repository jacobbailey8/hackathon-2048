class Block {
    constructor (num) {
        this.value = num;
    }

    add(block) {
        //use block.value for argument's property;
        //use this.value for property of object that ran the method
        this.value = this.value + block.value;
    }
}

let block1 = new Block(2);
let block2 = new Block(2);
block1.add(block2);