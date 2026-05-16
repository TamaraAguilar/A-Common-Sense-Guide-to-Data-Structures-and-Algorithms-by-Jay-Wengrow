class Stack {
    constructor() {
        this.data = [];
    }

    // Add an element to the stack
    push(element) {
        this.data.push(element);
    }

    // Take the top element off the stack
    pop() {
        if (this.data.length === 0) 
            return null;
        return this.data.pop();
    }

    // See what the top element is
    read() {
        return this.data[this.data.length - 1];
    }
}

const reverseString = string => {
    const stack = new Stack();
    const reversed = [];

    for (const char of string) {
        stack.push(char);
    }

    for(const char of string) {
        reversed.push(stack.pop())
    }
    
    return reversed.join('');
}

// --- Tests ---
console.log(reverseString("abcde")); // Returns 'edcba'